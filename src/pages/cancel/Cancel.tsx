import axios from 'axios';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { CancelButton, CancelContainer } from './CancelStyles';

const Cancel = () => {
  const { id }: { id: string } = useParams();

  const baseUrl: string = 'https://thedudes-restaurant.herokuapp.com';
  // const baseUrl: string = 'http://localhost:4000';

  const history = useHistory();

  const cancelBooking = async () => {
    try {
      await axios.delete(baseUrl + `/delete-booking/${id}`);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CancelContainer>
      <h1>The 3 Dudes</h1>
      <p>See you next time!</p>
        <CancelButton onClick={cancelBooking}>Bekräfta avbokning</CancelButton>
    </CancelContainer>
  );
};

export default Cancel;
