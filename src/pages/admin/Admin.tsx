import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';

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
      setFoundBookings(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    </div>
  );
};

export default Admin;
