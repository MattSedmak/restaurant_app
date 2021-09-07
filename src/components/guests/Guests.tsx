import { useState } from 'react';
import { Container, GuestNumber, GuestNumberWrapper } from './GuestStyles';
interface IGuestNumberProps {
  onGuestSelect: (guest: number) => void;
}

const initialValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Guests = (props: IGuestNumberProps) => {
  const [guestSelect, setGuestSelect] = useState(initialValue);
  const [selected, setSelected] = useState({
    activeIndex: 0,
  });

  const onGuestSelect = (index: number) => {
    setSelected({ activeIndex: index });
  };

  let totalGuests = guestSelect.map((g, index) => {
    return (
      <GuestNumber
        key={index}
        onClick={() => {
          props.onGuestSelect(g);
          onGuestSelect(index);
        }}
        selected={selected.activeIndex === index}
      >
        {g}
      </GuestNumber>
    );
  });
  return (
    <Container>
      <h4>Hur många stolar behöver ni?</h4>
      <p>Vänligen kontakta restaurangen om nill vill boka fler än 12 personer.</p>
      <GuestNumberWrapper>{totalGuests}</GuestNumberWrapper>
    </Container>
  );
};
export default Guests;
