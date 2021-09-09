import { useHistory } from 'react-router';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import {
  Confirm,
  Container,
  H1Element,
  Pinfo,
  StyledButton,
  UlElement,
} from './ConfirmationStyles';

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
      <H1Element>
        {customer.firstName} {customer.lastName}
      </H1Element>
      <UlElement>
        <li>
          <Pinfo>
            <strong>Gäster:</strong> {customer.guests} personer
          </Pinfo>
        </li>
        <li>
          <Pinfo>
            <strong>Tid: </strong>
            {customer.seating}:00
          </Pinfo>
        </li>
        <li>
          <Pinfo>
            <strong>Datum:</strong> {customer.date}
          </Pinfo>
        </li>
        <li>
          <Pinfo>
            <strong>Meddelande: </strong>
            {customer.information}
          </Pinfo>
        </li>
      </UlElement>

      <StyledButton onClick={goHome}>tillbaka till start</StyledButton>
    </Container>
  );
};
export default Confirmation;
