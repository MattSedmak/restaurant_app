import { Container, SeatingButton } from './SeatingStyles';

interface IOnSeatTimeProps {
  onSeatTime: (seating: number) => void;
}

const Seating = (props: IOnSeatTimeProps) => {
  return (
    <Container>
      <h4>Choose your preferred seating time</h4>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(18);
        }}
      >
        18:00 - 20:30
      </SeatingButton>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(21);
        }}
      >
        21:00 - 23:30
      </SeatingButton>
    </Container>
  );
};
export default Seating;
