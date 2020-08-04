import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersModule } from './customers.module';
import { Customer } from './customers.entity';
import * as supertest from 'supertest';
import { mockCustomer } from '../../../test/mocks/customer.faker';

let app: INestApplication;
let customerRepo: Repository<Customer>;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      CustomersModule,
      // Use the e2e_test database to run the tests
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'e2euser',
        password: 'e2epassword',
        database: 'e2e_test',
        entities: ['./**/*.entity.ts'],
        synchronize: true,
      }),
    ],
  }).compile();
  app = module.createNestApplication();
  await app.init();
  customerRepo = module.get(getRepositoryToken(Customer));
});

afterEach(async () => {
  await customerRepo.query('DELETE FROM customers;');
})

afterAll(async () => {
  await app.close();
});

describe('GET /customers', () => {
  it('should return an array of customers', async () => {
    // Create Mocking Data
    const customer1 = customerRepo.create(mockCustomer());
    const customer2 = customerRepo.create(mockCustomer());

    const customers = await customerRepo.save([customer1, customer2]);

    // Run e2e tests
    const { body } = await supertest(app.getHttpServer())
      .get('/customers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(body).toEqual(customers);
  });
});
