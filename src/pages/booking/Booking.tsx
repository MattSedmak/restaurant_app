import { useState, useEffect } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
import axios, { AxiosResponse } from 'axios';
import { IAvailable } from '../../models/IAvailable';
const Booking = () => {
  const [seating, setSeating] = useState(0);
  const [guests, setGuests] = useState(0);

  const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
  // const baseUrl: string = 'http://localhost:4000';

  const getAvailability = async () => {
    try {
      const res = await axios.get<IAvailable>(baseUrl + '/availability', {
        params: {
          guests: guests,
          seating: seating,
        },
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAvailability();
  }, [guests, seating]);

  const seatingHandler = (seatTime: number) => {
    setSeating(seatTime);
  };

  const guestHandler = (guestNumber: number) => {
    setGuests(guestNumber);
  };

  return (
    <div>
      <h2>Make a booking</h2>
      <Seating onSeatTime={seatingHandler} />
      <Guests onGuestSelect={guestHandler} />
    </div>
  );
};

export default Booking;
