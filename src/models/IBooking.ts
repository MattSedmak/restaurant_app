import { ICustomerInfo } from './ICustomerInfo';

export interface IBooking extends ICustomerInfo {
  guests: number;
  seating: number;
  date: string;
}
