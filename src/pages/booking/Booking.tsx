import { useState, useEffect } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
import axios, { AxiosResponse } from 'axios';
import { IAvailable } from '../../models/IAvailable';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns'
import 'react-calendar/dist/Calendar.css';

const Booking = () => {
  const [seating, setSeating] = useState(0);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(new Date());
  const [allBookings, setAllBookings] = useState<IAvailable[]>([]);
  const [isNotAvailable, setIsNotAvailable] = useState<IAvailable[]>([]);


  // const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
  const baseUrl: string = 'http://localhost:4000';

  const getAvailability = async () => {
    try {
      const res = await axios.get(baseUrl + '/availability', {
        params: {
          guests: guests,
          seating: seating,
        },
      }); 
      setAllBookings(res.data) 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvailability();
    filterDates();
  }, [guests, seating]);

  const filterDates = () => {
    const someDates = allBookings.filter
    ((booking) => booking.isAvailable === false)
    
  }

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
      <div className='calendar-container'>
        <Calendar 
          onChange={setDate} 
          value={date} 
          minDate={new Date()} />
      </div>
    </div>
  );
};

export default Booking;
