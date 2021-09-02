import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';

import ReservationDetails from '../../components/reservationDetails/ReservationDetails';
import { ICustomerInfo } from '../../models/ICustomerInfo';

const Admin = () => {
  const [customer, setCustomer] = useState('');
  const [foundBooking, setFoundBookings] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomer(e.target.value.toLowerCase());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getCustomer();
  };

  const getCustomer = async () => {
    const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
    try {
      const res = await axios.get(baseUrl + '/find-booking', {
        params: {
          lastName: customer,
        },
      });
      setFoundBookings(res.data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  let foundCustomer = foundBooking.map((booking: ICustomerInfo, index) => {
    return (
      <ReservationDetails
        key={index}
        id={booking._id}
        firstName={booking.firstName}
        lastName={booking.lastName}
        email={booking.email}
        mobile={booking.mobile}
        information={booking.information}
        guests={booking.guests}
        seating={booking.seating}
        date={booking.date}
      />
    );
  });

  return (
    <div>
      <h1>Admin sök</h1>
      <form onSubmit={handleSubmit}>
        <label id='efternamn'>Sök efter bokning: </label>
        <input
          type='text'
          placeholder='Efternamn'
          name='efternamn'
          onChange={handleChange}
          value={customer}
        />
        <button type='submit'>Sök</button>
      </form>
      {foundCustomer}
    </div>
  );
};

export default Admin;
