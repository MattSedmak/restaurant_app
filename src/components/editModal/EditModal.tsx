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
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none';

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUpDatedCustomer((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
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
              value={upDatedCustomer.seating}
              onChange={changeHandler}
            />
            <label id='seating'>21</label>
            <input
              type='radio'
              id='seating'
              checked={upDatedCustomer.seating == 21}
              value={upDatedCustomer.seating}
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
            value={upDatedCustomer.date}
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
            id='info'
            value={upDatedCustomer.information}
            onChange={changeHandler}
            placeholder='Info'
          />
          <button type='submit'>Update</button>
        </form>

        <button onClick={props.hideModal}>cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
