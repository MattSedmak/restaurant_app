import { useState, useEffect } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
import axios, { AxiosResponse } from 'axios';
import { IAvailable } from '../../models/IAvailable';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { differenceInCalendarDays, isSameDay } from 'date-fns';
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
      setAllBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAvailability();
    filterDates();
  }, [guests, seating]);

  const filterDates = () => {
    const falseDates = allBookings.filter(
      (booking) => booking.isAvailable === false
    );
    setIsNotAvailable(falseDates);
  };

  // if (isNotAvailable.length > 0) {
  //   console.log(isNotAvailable);
  // }

  // const tileDisabled = (props: CalendarTileProperties): boolean => {
  //   if (isNotAvailable.length > 0) {
  //     return true;
  //   }
  // };

  // ***

  // ***

  const tileDisabled = (props: CalendarTileProperties): boolean => {
    const disabledDates = [];
    let unAvailableDate: boolean = false;

    if (isNotAvailable.length > 0) {
      for (let i = 0; i < isNotAvailable.length; i++) {
        disabledDates.push(isNotAvailable[i].date);
      }
    }

    if (props.view === 'month') {
      for (let i = 0; i < disabledDates.length; i++) {
        disabledDates[i].toString() === props.date.toISOString()
          ? (unAvailableDate = true)
          : (unAvailableDate = false);
      }
    }
    return unAvailableDate;
  };

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
          minDate={new Date()}
          // tileDisabled={({ date }) => date.getDay() === 0}
          // tileDisabled={tileDisabled}
        />
      </div>
    </div>
  );
};

export default Booking;
