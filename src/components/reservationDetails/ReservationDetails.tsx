import { useState } from 'react';
import EditModal from '../editModal/EditModal';
import { EditButton, ReservationContainer, CustomerName } from './ReservationDetailsStyle';

interface ICustomerSearchProps {
  updatePage: () => void;
  id: number;
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
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };
  
  return (
    <div>
      <ReservationContainer>
        <CustomerName>Förnamn: <strong>{props.firstName}</strong></CustomerName>
        <CustomerName>Efternamn: <strong>{props.lastName}</strong></CustomerName>
        <div>Email: <strong>{props.email}</strong></div>
        <div>Telefon: <strong>{props.mobile}</strong></div>
        <div>Meddelande: <strong>{props.information}</strong></div>
        <div>Antal gäster: <strong>{props.guests}</strong></div>
        <div>Tid för sittning: <strong>{props.seating}</strong></div>
        <div>Bokat datum: <strong>{props.date.substring(0, 10)}</strong></div>
        <EditButton type='button' onClick={showModalHandler}>Edit</EditButton>
      </ReservationContainer>
      {showModal && <EditModal
        updatePage={props.updatePage}
        show={showModal}
        hideModal={hideModalHandler}
        id={props.id}
        firstName={props.firstName}
        lastName={props.lastName}
        email={props.email}
        mobile={props.mobile}
        information={props.information}
        guests={props.guests}
        seating={props.seating}
        date={props.date} 
      />}
    </div>
      
  );
};
export default ReservationDetails;
