import { setPriority } from 'os';
import { useState } from 'react';
import { Container, SeatingButton } from './SeatingStyles';

interface IOnSeatTimeProps {
  onSeatTime: (seating: number) => void;
}

const Seating = (props: IOnSeatTimeProps) => {
  const [primary, setPrimary] = useState(false);

  return (
    <Container>
      <h4>Vilken tid vill ni äta?</h4>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(18);
          setPrimary(true);
        }}
        primary={primary}
      >
        18:00 - 20:30
      </SeatingButton>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(21);
        }}
        primary={primary}
      >
        21:00 - 23:30
      </SeatingButton>
    </Container>
  );
};
export default Seating;
