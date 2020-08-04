import * as faker from 'faker/locale/de';
import { DeepPartial } from 'typeorm';
import { Customer } from 'src/tickets/customers/customers.entity';

export function mockCustomer(): DeepPartial<Customer> {
  return {
    address: faker.address.streetAddress(true),
    city: faker.address.city(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    zip: faker.random.number(99999),
  };
}
