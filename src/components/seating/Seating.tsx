interface IOnSeatTimeProps {
  onSeatTime: (seating: number) => void;
}

const Seating = (props: IOnSeatTimeProps) => {
  return (
    <div>
      <div
        onClick={() => {
          props.onSeatTime(18);
        }}
      >
        18-20:30
      </div>
      <div
        onClick={() => {
          props.onSeatTime(21);
        }}
      >
        21-23:30
      </div>
    </div>
  );
};
export default Seating;
