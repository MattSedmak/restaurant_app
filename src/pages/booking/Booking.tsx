import { useState, useEffect, ChangeEvent } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
import axios from 'axios';
import { IAvailable } from '../../models/IAvailable';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CustomerForm from '../../components/customerForm/CustomerForm';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import { IBooking } from '../../models/IBooking';

const Booking = () => {
  const [completeBooking, setCompleteBooking] = useState<IBooking>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: 0,
    guests: 0,
    seating: 0,
    date: new Date(),
  });

  const [allBookings, setAllBookings] = useState<IAvailable[]>([]);
  const [isNotAvailable, setIsNotAvailable] = useState<IAvailable[]>([]);

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

  useEffect(() => {
    getAvailability();
    filterDates();
  }, [completeBooking.guests, completeBooking.seating]);

  const filterDates = () => {
    const falseDates = allBookings.filter(
      (booking) => booking.isAvailable === false
    );
    setIsNotAvailable(falseDates);
  };
  const disabledDates: any = [];
  for (let i = 0; i < isNotAvailable.length; i++) {
    disabledDates.push(isNotAvailable[i].date);
  }

  const testFunction = (props: CalendarTileProperties): boolean => {
    let someDate: boolean = false;

    if (props.view === 'month') {
      for (let i = 0; i < disabledDates.length; i++) {
        if (disabledDates[i].toString() === props.date.toISOString()) {
          someDate = true;
        }
      }
    }
    return someDate;
  };

  const customerInfoHandler = (customerInfo: ICustomerInfo) => {
    setCompleteBooking((prev) => ({
      ...prev,
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      email: customerInfo.email,
      mobile: customerInfo.mobile,
    }));
  };

  const seatingHandler = (seatTime: number) => {
    setCompleteBooking((prev) => ({ ...prev, seating: seatTime }));
  };

  const guestHandler = (guestNumber: number) => {
    setCompleteBooking((prev) => ({ ...prev, guests: guestNumber }));
  };

  const dateHandler = (value: Date) => {
    setCompleteBooking((prev) => ({ ...prev, date: value }));
  };

  console.log(completeBooking);
  return (
    <div>
      <h2>Make a booking</h2>
      <Seating onSeatTime={seatingHandler} />
      <Guests onGuestSelect={guestHandler} />
      <div className='calendar-container'>
        <Calendar
          onChange={dateHandler}
          value={completeBooking.date}
          minDate={new Date()}
          // tileDisabled={({ date }) => date.getDay() === 0}
          tileDisabled={testFunction}
        />
        <CustomerForm onCustomerHandler={customerInfoHandler} />
      </div>
    </div>
  );
};

export default Booking;
