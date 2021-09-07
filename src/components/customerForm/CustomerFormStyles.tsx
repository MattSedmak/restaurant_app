import styled from 'styled-components';

export const FormContainer = styled.div`
  // border: 1px solid black;
  width: 70%;
  max-width: 40em;
  margin: 2em auto;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f7f7f7;
`;

export const Input = styled.input`
  border: 1px solid black;
  margin-bottom: 2.5em;
  padding: 0.7em;
  width: 70%;
  border-radius: 3px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLabel = styled.label`
  font-size: 1em;
  margin-bottom: 0.5em;

  width: 70%;
  display: flex;
  align-items: flex-start;
`;

export const Information = styled.textarea`
  resize: vertical;
  overflow: auto;
  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 1em;
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
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
