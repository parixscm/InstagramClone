import { faker } from "@faker-js/faker";

// Stories.tsx
type UserAddress = {
  country: string;
  city: string;
  street: string;
  longitude: string;
  latitude: string;
};

type UserCompany = {
  name: string;
  companySuffix: string;
};

type User = {
  id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  avatar: string;
  website: string;
  dob: Date;
  company: UserCompany;
  address: UserAddress;
};

// Story.tsx
type StoryProps = {
  img: string;
  username: string;
};
