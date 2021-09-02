import { IBooking } from './IBooking';

export interface ICustomerInfo extends IBooking {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  information: string;
}
