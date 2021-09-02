
interface ICustomerSearchProps {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  information: string;
  guests: number;
  seating: number;
  date: string;
}

const ReservationDetails = (props: ICustomerSearchProps) => {

  return (<div>
    <div>{props.firstName}</div>
    <div>{props.lastName}</div>
    <div>{props.email}</div>
    <div>{props.mobile}</div>
    <div>{props.information}</div>
    <div>{props.guests}</div>
    <div>{props.seating}</div>
    <div>{props.date.substring(0, 10)}</div>
    <button type="button">Edit</button>
    <br />
  </div>);
};
export default ReservationDetails;
