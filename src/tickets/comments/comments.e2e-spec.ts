import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './dto/comment.entity';
import { User } from '../users/dto/user.entity';
import { CommentsModule } from './comments.module';
import * as supertest from 'supertest';

let app: INestApplication;
let commentRepo: Repository<Comment>;
let userRepo: Repository<User>;

beforeAll(async () => {
  const module = await Test.createTestingModule({
    imports: [
      CommentsModule,
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
  commentRepo = module.get(getRepositoryToken(Comment));
  userRepo = module.get(getRepositoryToken(User));
});

afterAll(async () => {
  await app.close();
});

describe('GET /comments', () => {
  it('should return an array of comments', async () => {
    // Create Mocking Data
    const testAuthor = userRepo.create({
      userId: 1,
      firstName: 'test',
      lastName: 'user',
    });
    commentRepo.save([
      { author: testAuthor, comment: 'Test Comment 1' },
      { author: testAuthor, comment: 'Test Comment 2' },
    ]);

    // Run e2e tests
    const { body } = await supertest(app.getHttpServer())
      .get('/comments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(body).toEqual([
      {
        id: expect.any(Number),
        comment: 'Test Comment 1',
        author: expect.any(Object),
      },
      {
        id: expect.any(Number),
        comment: 'Test Comment 2',
        author: expect.any(Object),
      },
    ]);
  });
});
