import { SeatingButton } from './SeatingStyles';

interface IOnSeatTimeProps {
  onSeatTime: (seating: number) => void;
}

const Seating = (props: IOnSeatTimeProps) => {
  return (
    <div>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(18);
        }}
      >
        18-20:30
      </SeatingButton>
      <SeatingButton
        onClick={() => {
          props.onSeatTime(21);
        }}
      >
        21-23:30
      </SeatingButton>
    </div>
  );
};
export default Seating;
