import { useState } from 'react';
import { Container, SeatingButton } from './SeatingStyles';

interface IOnSeatTimeProps {
  onSeatTime: (seating: number) => void;
}

const Seating = (props: IOnSeatTimeProps) => {
  const [firstSeating, setFirstSeating] = useState(false);
  const [secSeating, setSecSeating] = useState(false);

  const onFirstSeating = () => {
    setFirstSeating(!firstSeating);
    setSecSeating(false);
  };

  const onSecSeating = () => {
    setSecSeating(!secSeating);
    setFirstSeating(false);
  };

  return (
    <Container>
      <h4>Vilken tid vill ni äta?</h4>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(18);
          onFirstSeating();
        }}
        selected={firstSeating}
      >
        18:00 - 20:30
      </SeatingButton>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(21);
          onSecSeating();
        }}
        selected={secSeating}
      >
        21:00 - 23:30
      </SeatingButton>
    </Container>
  );
};
export default Seating;
