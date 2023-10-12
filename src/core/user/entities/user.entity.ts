export class UserDBEntity {
  id: number | null;
  name: string;
  email: string;
  password: string;
  roleId: number;
  constructor(payload: Partial<UserDBEntity>) {
    this.id = payload.id;
    this.name = payload.name;
    this.email = payload.email;
    this.password = payload.password;
    this.roleId = payload.roleId;
  }
}

export class UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: UserCompany;
  address: UserAddress;
  constructor(payload: Partial<UserEntity>) {
    this.id = payload.id;
    this.name = payload.name;
    this.username = payload.username;
    this.email = payload.email;
    this.phone = payload.phone;
    this.website = payload.website;
    this.company = payload.company;
    this.address = payload.address;
  }
}
export class UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export class UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoAddress;
  constructor(payload: Partial<UserAddress>) {
    this.street = payload.street;
    this.suite = payload.suite;
    this.city = payload.city;
    this.zipcode = payload.zipcode;
    this.geo = payload.geo;
  }
}
export class GeoAddress {
  lat: string;
  lng: string;
}
