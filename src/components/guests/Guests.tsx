import { Container, GuestNumber, GuestNumberWrapper } from './GuestStyles';
interface IGuestNumberProps {
  onGuestSelect: (guest: number) => void;
}

const Guests = (props: IGuestNumberProps) => {
  return (
    <Container>
      <h4>How many seats will you need?</h4>
      <p>Please contact the restaurant for bookings over 12 persons.</p>
      <GuestNumberWrapper>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(1);
          }}
        >
          1
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(2);
          }}
        >
          2
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(3);
          }}
        >
          3
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(4);
          }}
        >
          4
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(5);
          }}
        >
          5
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(6);
          }}
        >
          6
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(7);
          }}
        >
          7
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(8);
          }}
        >
          8
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(9);
          }}
        >
          9
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(10);
          }}
        >
          10
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(11);
          }}
        >
          11
        </GuestNumber>
        <GuestNumber
          onClick={() => {
            props.onGuestSelect(12);
          }}
        >
          12
        </GuestNumber>
      </GuestNumberWrapper>
    </Container>
  );
};
export default Guests;
