import axios from 'axios';

import { useParams } from 'react-router-dom';
import { CancelButton, CancelContainer } from './CancelStyles';

const Cancel = () => {
  const { id }: { id: string } = useParams();

  // **** START AXIOS ****
  const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
  // const baseUrl: string = 'http://localhost:4000';

  const cancelBooking = async () => {
    try {
      const res = await axios.delete(baseUrl + `/delete-booking/${id}`);
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CancelContainer>
      <h1>The 3 Dude's</h1>
      <p>See you next time!</p>
      <a href='http://localhost:3000/'>
        <CancelButton onClick={cancelBooking}>Bekräfta avbokning</CancelButton>
      </a>
    </CancelContainer>
  );
};

export default Cancel;
