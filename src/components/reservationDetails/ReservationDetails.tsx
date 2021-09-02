import { useState } from 'react';
import EditModal from '../editModal/EditModal';

interface ICustomerSearchProps {
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
      <div>{props.firstName}</div>
      <div>{props.lastName}</div>
      <div>{props.email}</div>
      <div>{props.mobile}</div>
      <div>{props.information}</div>
      <div>{props.guests}</div>
      <div>{props.seating}</div>
      <div>{props.date.substring(0, 10)}</div>
      <button type='button' onClick={showModalHandler}>
        Edit
      </button>
      <br />
      <EditModal
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
      />
    </div>
  );
};
export default ReservationDetails;
