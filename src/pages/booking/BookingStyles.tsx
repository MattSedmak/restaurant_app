import styled, { keyframes } from 'styled-components';

const fade = keyframes`
from{
  opacity: 0;
}

to{
  opacity:1;
}
`;

export const BookingContainer = styled.div`
  border: 1px solid #999;
  width: 80%;
  max-width: 50em;
  margin: 4em auto;
  text-align: center;
  background-color: #fff;
  animation: ${fade} 0.6s ease;
`;

export const CalendarContainer = styled.div`
  width: 70%;
  max-width: 40em;
  margin: 2em auto;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fade} 0.6s linear;

  h4 {
    margin-bottom: 1.5em;
  }
`;
