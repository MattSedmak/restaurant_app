import { useState, useEffect } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
import axios from 'axios';
import { IAvailable } from '../../models/IAvailable';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { differenceInCalendarDays, isSameDay, parseISO } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import CustomerForm from '../../components/customerForm/CustomerForm';
import { ICustomerInfo } from '../../models/ICustomerInfo';
import { IBooking } from '../../models/IBooking';

const InitialValue: ICustomerInfo = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: 0,
};

const InitialBookingValue: IBooking = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: 0,
  guests: 0,
  seating: 0,
  date: new Date(),
}

const Booking = () => {
  const [completeBooking, setCompleteBooking] = useState<IBooking>(InitialBookingValue)
  const [seating, setSeating] = useState(0);
  const [guests, setGuests] = useState(0);
  const [date, setDate] = useState(new Date());
  const [customerInfo, setCustomerInfo] = useState<ICustomerInfo>(InitialValue);
  const [allBookings, setAllBookings] = useState<IAvailable[]>([]);
  const [isNotAvailable, setIsNotAvailable] = useState<IAvailable[]>([]);

  const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
  // const baseUrl: string = 'http://localhost:4000';

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
  const disabledDates: any = [];
  for (let i = 0; i < isNotAvailable.length; i++) {
    disabledDates.push(isNotAvailable[i].date);
  }
  
  console.log(customerInfo)

  const testFunction = (props: CalendarTileProperties): boolean => {
    let someDate: boolean = false;

    if (props.view === 'month') {
      for (let i = 0; i < disabledDates.length; i++) {
        if (disabledDates[i].toString() === props.date.toISOString()) {
          someDate = true;
          console.log(props.view);
        }
      }
    }
    return someDate;
  };

  const customerInfoHandler = (customerInfo: ICustomerInfo) => {
    setCustomerInfo(customerInfo)
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
