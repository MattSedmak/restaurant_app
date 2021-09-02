import axios from 'axios';
import { useState, ChangeEvent, FormEvent } from 'react';
import '../editModal/editModal.css';

interface IShowModalProps {
  show: boolean;
  hideModal: () => void;
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

const EditModal = (props: IShowModalProps) => {
  const [upDatedCustomer, setUpDatedCustomer] = useState({
    _id: props.id,
    firstName: props.firstName,
    lastName: props.lastName,
    email: props.email,
    mobile: props.mobile,
    information: props.information,
    guests: props.guests,
    seating: props.seating,
    date: props.date,
  });

  // **** START AXIOS ****
  const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';

  const updateBooking = async () => {
    try {
      const res = await axios.put(
        baseUrl + `/edit-booking/${props.id}`,
        upDatedCustomer
      );
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooking = async () => {
    try {
      const res = await axios.delete(baseUrl + `/delete-booking/${props.id}`);
      console.log(res.data.message);
      props.hideModal();
    } catch (error) {
      console.log(error);
    }
  };

  // **** END AXIOS ****

  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none';

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUpDatedCustomer((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateBooking();
    console.log(upDatedCustomer);
  };

  return (
    <div className={showHideClassName}>
      <div className='modal-main'>
        <form onSubmit={handelSubmit}>
          <div>
            <label id='seating'>18</label>
            <input
              type='radio'
              id='seating'
              checked={upDatedCustomer.seating == 18}
              value='18'
              onChange={changeHandler}
            />
            <label id='seating'>21</label>
            <input
              type='radio'
              id='seating'
              checked={upDatedCustomer.seating == 21}
              value='21'
              onChange={changeHandler}
            />
          </div>
          <input
            type='number'
            id='guests'
            value={upDatedCustomer.guests}
            onChange={changeHandler}
          />
          <input
            type='string'
            id='date'
            value={upDatedCustomer.date.substring(0, 10)}
            onChange={changeHandler}
          />
          <input
            type='text'
            id='firstName'
            value={upDatedCustomer.firstName}
            onChange={changeHandler}
            placeholder=''
          />
          <input
            type='text'
            id='lastName'
            value={upDatedCustomer.lastName}
            onChange={changeHandler}
            placeholder='Last name'
          />
          <input
            type='email'
            id='email'
            value={upDatedCustomer.email}
            onChange={changeHandler}
            placeholder='Email'
          />
          <input
            type='tel'
            id='mobile'
            value={upDatedCustomer.mobile}
            onChange={changeHandler}
            placeholder='Mobile'
          />
          <input
            type='text'
            id='information'
            value={upDatedCustomer.information}
            onChange={changeHandler}
            placeholder='Info'
          />
          <button type='submit'>Update</button>
        </form>
        <button onClick={props.hideModal}>Cancel</button>
        <button onClick={deleteBooking}>Delete</button>
      </div>
    </div>
  );
};

export default EditModal;
