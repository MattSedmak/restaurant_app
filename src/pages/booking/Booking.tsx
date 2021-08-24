import { useState } from 'react';
import Guests from '../../components/guests/Guests';
import Seating from '../../components/seating/Seating';
const Booking = () => {
  const [seating, setSeating] = useState(0);

  const seatingHandler = (seatTime: number) => {
    setSeating(seatTime);
  };
  console.log(seating);
  return (
    <div>
      <h2>Make a booking</h2>
      <Seating onSeatTime={seatingHandler} />
      <Guests />
    </div>
  );
};

export default Booking;
