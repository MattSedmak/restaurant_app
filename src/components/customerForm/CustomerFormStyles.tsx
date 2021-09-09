import styled, { keyframes } from 'styled-components';

const fade = keyframes`
from{
  opacity: 0;
}

to{
  opacity:1;
}
`;

export const FormContainer = styled.div`
  // border: 1px solid black;
  width: 100%;
  max-width: 40em;
  margin: 2em auto;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: ${fade} 0.6s linear;
  @media (min-width: 700px) {
    width: 70%;
  }

  h3 {
    margin-bottom: 2em;
  }
`;

export const SummaryContainer = styled.div`
  margin: 2em auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #333;

  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const BookingDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  text-align: center;

  label {
    margin-bottom: 0.5em;
    font-size: 1.2em;
  }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid black;
  margin-bottom: 2.5em;
  padding: 0.7em;
  width: 100%;
  border-radius: 3px;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;
  width: 100%;
  display: flex;
  align-items: flex-start;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

export const Information = styled.textarea`
  resize: vertical;
  overflow: auto;
  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 1em;
  padding: 0.5em;
  width: 100%;
  max-width: 40em;
  @media (min-width: 700px) {
    width: 70%;
  }
`;

export const Button = styled.button`
  width: 40%;
  margin: 1em;
  padding: 1em;
  background-color: #006edc;
  border: #006edc;
  border-radius: 3px;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CancelBtn = styled.button`
  width: 60px;
  height: 20px;
  font-size: 0.7em;
  cursor: pointer;
  background-color: inherit;
  border: 1px solid black;
  transition: all 0.3s ease;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
