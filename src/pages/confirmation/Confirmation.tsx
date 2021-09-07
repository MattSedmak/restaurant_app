import { RouteProps } from 'react-router';

const Confirmation = (props: any) => {
  const customer = props.location.state;

  return (
    <div>
      <p>{customer.firstName}</p>
      <p>{customer.lastName}</p>
      <p>{customer.seating}</p>
      <p>{customer.date}</p>
    </div>
  );
};
export default Confirmation;
