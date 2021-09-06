import styled from 'styled-components';

export const FormContainer = styled.div`
  //border: 1px solid black;
  width: 70%;
  max-width: 40em;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.label`
  font-size: 1.2em;
`;

export const Input = styled.input`
  border: 1px solid black;
  margin: 1em;
  padding: 0.7em;
  width: 70%;
`;

export const Information = styled.textarea`
  resize: vertical;
  overflow: auto;
  border: 1px solid black;
  margin: 1em;
  padding: 0.5em;
  width: 70%;
  max-width: 40em;
`;

export const Button = styled.button`
  width: 40%;
  margin: 1em;
  padding: 1em;
  background-color: #006edc;
  border: #006edc;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
