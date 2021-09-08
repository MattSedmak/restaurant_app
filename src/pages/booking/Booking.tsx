import { useState, useEffect, useRef } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
import axios from 'axios';
import { IAvailable } from '../../models/IAvailable';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CustomerForm from '../../components/customerForm/CustomerForm';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import { BookingContainer, CalendarContainer } from './BookingStyles';
import { Redirect } from 'react-router-dom';

import Confirmation from '../confirmation/Confirmation';

const Booking = () => {
  const [completeBooking, setCompleteBooking] = useState<ICustomerInfo>({
    _id: 0,
    firstName: '',
    lastName: '',
    email: '',
    mobile: 0,
    information: '',
    guests: 0,
    seating: 0,
    date: '',
  });

  const [allBookings, setAllBookings] = useState<IAvailable[]>([]);
  const [isNotAvailable, setIsNotAvailable] = useState<IAvailable[]>([]);
  let disabledDates: any = [];

  const [showGuests, setShowGuests] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
  // const baseUrl: string = 'http://localhost:4000';

  const getAvailability = async () => {
    try {
      const res = await axios.get(baseUrl + '/availability', {
        params: {
          guests: completeBooking.guests,
          seating: completeBooking.seating,
        },
      });

      setAllBookings(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(allBookings);

  useEffect(() => {
    filterDates();
  }, [allBookings]);

  const filterDates = () => {
    let falseDates = allBookings.filter((booking) => booking.isAvailable === false);
    setIsNotAvailable(falseDates);
  };
  console.log(isNotAvailable);

  for (let i = 0; i < isNotAvailable.length; i++) {
    let fullDate = isNotAvailable[i].date;
    disabledDates.push(fullDate);
  }
  console.log('disabledDates: ' + disabledDates);

  const postBooking = async () => {
    try {
      const res = await axios.post(baseUrl + '/add-booking', completeBooking);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    postBooking();
  }, [completeBooking.mobile]);

  useEffect(() => {
    getAvailability();
    filterDates();
  }, [completeBooking.guests, completeBooking.seating]);

  const tileDisabled = (props: CalendarTileProperties): boolean => {
    let someDate: boolean = false;

    if (props.view === 'month') {
      for (let i = 0; i < disabledDates.length; i++) {
        if (
          disabledDates[i].toString().substring(0, 10) ===
          props.date.toLocaleString('sv-SE').substring(0, 10)
        ) {
          someDate = true;
        }
      }
    }
    return someDate;
  };

  const customerInfoHandler = (customerInfo: ICustomerInfo) => {
    setCompleteBooking((prev) => ({
      ...prev,
      firstName: customerInfo.firstName.toLowerCase(),
      lastName: customerInfo.lastName.toLowerCase(),
      email: customerInfo.email,
      mobile: customerInfo.mobile,
      information: customerInfo.information,
    }));
    setRedirect(true);
  };

  const seatingHandler = (seatTime: number) => {
    setCompleteBooking((prev) => ({ ...prev, seating: seatTime }));
    setShowGuests(true);
  };

  const guestHandler = (guestNumber: number) => {
    setCompleteBooking((prev) => ({ ...prev, guests: guestNumber }));
    setShowCalendar(true);
  };

  const dateHandler = (value: Date) => {
    setCompleteBooking((prev) => ({
      ...prev,
      date: value.toLocaleString('sv-SE').substring(0, 10),
    }));
    setShowForm(true);
  };

  return (
    <BookingContainer>
      {redirect && (
        <Redirect to={{ pathname: '/confirmation', state: completeBooking }} />
      )}
      <h1>The 3 Dudes</h1>
      <Seating onSeatTime={seatingHandler} />
      {showGuests && <Guests onGuestSelect={guestHandler} />}

      {showCalendar && (
        <CalendarContainer>
          <h4>Vilken dag vill ni komma?</h4>
          <Calendar
            onChange={dateHandler}
            minDate={new Date()}
            tileDisabled={tileDisabled}
            locale='sv-SE'
          />
        </CalendarContainer>
      )}

      {showForm && <CustomerForm onCustomerHandler={customerInfoHandler} />}
    </BookingContainer>
  );
};

export default Booking;
