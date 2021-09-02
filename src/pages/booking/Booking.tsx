import { useState, useEffect, useRef } from 'react';
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

  const postBooking = async () => {
    try {
      const res = await axios.post(baseUrl + '/add-booking', completeBooking);
      console.log(res.data.message);
      console.log(res.data);
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

  //Calendar
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

  // Handlers
  const customerInfoHandler = (customerInfo: ICustomerInfo) => {
    setCompleteBooking((prev) => ({
      ...prev,
      firstName: customerInfo.firstName.toLowerCase(),
      lastName: customerInfo.lastName.toLowerCase(),
      email: customerInfo.email,
      mobile: customerInfo.mobile,
      information: customerInfo.information,
    }));
  };

  const seatingHandler = (seatTime: number) => {
    setCompleteBooking((prev) => ({ ...prev, seating: seatTime }));
  };

  const guestHandler = (guestNumber: number) => {
    setCompleteBooking((prev) => ({ ...prev, guests: guestNumber }));
  };

  const dateHandler = (value: Date) => {
    setCompleteBooking((prev) => ({
      ...prev,
      date: value.toLocaleString('sv-SE').substring(0, 10),
    }));
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
          // value={completeBooking.date}
          minDate={new Date()}
          tileDisabled={tileDisabled}
          locale='sv-SE'
        />
        <CustomerForm onCustomerHandler={customerInfoHandler} />
      </div>
    </div>
  );
};

export default Booking;
