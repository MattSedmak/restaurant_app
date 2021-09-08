import { useHistory } from 'react-router';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import { Confirm, Container, Pinfo, StyledButton } from './ConfirmationStyles';

const Confirmation = (props: any) => {
  const customer: ICustomerInfo = props.location.state;

  const history = useHistory();
  const goHome = () => history.push('/');

  return (
    <Container>
      <h2>Varmt välkommen till The 3 Dudes!</h2>
      <Confirm>
        Vi har skickat din bokningsbekräftelse till
        <strong> {customer.email}</strong>
      </Confirm>
      <Pinfo>
        <strong>
          {customer.firstName} {customer.lastName}
        </strong>
      </Pinfo>
      <Pinfo>{customer.guests} personer</Pinfo>
      <Pinfo>Tid: {customer.seating}:00</Pinfo>
      <Pinfo>Datum: {customer.date}</Pinfo>
      <Pinfo>Meddelande: {customer.information}</Pinfo>

      <StyledButton onClick={goHome}>tillbaka till start</StyledButton>
    </Container>
  );
};
export default Confirmation;
