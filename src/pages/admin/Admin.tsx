import axios from 'axios';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import ReservationDetails from '../../components/reservationDetails/ReservationDetails';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import '../admin/AdminStyle';
import {
  BookingLink,
  CustomerDetailsContainer,
  InnerContainer,
  LogoLink,
  NewBookingText,
  SearchButton,
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchLabel,
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
      <LogoLink to="/"><span data-content="The 3 Dudes"></span>The 3 Dudes</LogoLink>
      <InnerContainer>
        <NewBookingText>För ny bokning, klicka <BookingLink to="/booking">här</BookingLink></NewBookingText>
        <SearchForm onSubmit={handleSubmit}>
          <SearchLabel id='efternamn'>För att ändra befintlig bokning, sök på efternamn: </SearchLabel>
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
