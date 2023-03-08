import { User } from "../typings";
import { faker } from "@faker-js/faker";

export function createRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    username: faker.name.middleName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    website: faker.internet.domainName(),
    dob: faker.date.birthdate(),
    company: {
      name: faker.company.name(),
      companySuffix: faker.company.companySuffix(),
    },
    address: {
      country: faker.address.country(),
      city: faker.address.city(),
      street: faker.address.street(),
      longitude: faker.address.longitude(),
      latitude: faker.address.latitude(),
    },
  };
}
