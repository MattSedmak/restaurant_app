import axios from 'axios';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import ReservationDetails from '../../components/reservationDetails/ReservationDetails';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import '../admin/AdminStyle';
import {
  CustomerDetailsContainer,
  InnerContainer,
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchLabel,
  SearchTitle,
} from '../admin/AdminStyle';

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
    // const baseUrl: string = 'http://localhost:4000';

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

  const updatePage = () => {
    getCustomer();
  };

  let foundCustomer = foundBooking.map((booking: ICustomerInfo, index) => {
    return (
      <ReservationDetails
        updatePage={updatePage}
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
    <SearchContainer>
      <InnerContainer>
        <SearchTitle>Admin sök</SearchTitle>
        <SearchForm onSubmit={handleSubmit}>
          <SearchLabel id='efternamn'>Kundens efternamn: </SearchLabel>
          <SearchInput
            type='text'
            placeholder='Efternamn'
            name='efternamn'
            onChange={handleChange}
            value={customer}
          />
          <SearchButton type='submit'>Sök</SearchButton>
        </SearchForm>
        <CustomerDetailsContainer>{foundCustomer}</CustomerDetailsContainer>
      </InnerContainer>
    </SearchContainer>
  );
};

export default Admin;
