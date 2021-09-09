import styled from 'styled-components';

export const ModalMain = styled.div`
  position: fixed;
  background: #dad4c5;
  width: 90%;
  min-width: 300px;
  max-width: 40em;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    width: 70%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledLabel = styled.label`
  font-size: 0.7em;
  margin-bottom: 0.5em;
  width: 70%;
  display: flex;
  align-items: flex-start;
`;

export const Inputs = styled.input`
  border: 1px solid black;
  margin-bottom: 0.5em;
  padding: 0.7em;
  width: 70%;
  border-radius: 3px;

  &:focus {
    outline: none;
  }

  &:invalid {
    border: 2px solid #911733;
    background-color: #f4b2bf;
  }
`;
export const Information = styled.textarea`
  resize: vertical;
  overflow: auto;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.5em;
  width: 70%;
  max-width: 40em;
`;

export const UpdateButton = styled.button`
  width: 50%;
  margin: 1em 0 0.5em 0;
  padding: 1em;
  background-color: #006edc;
  border: #006edc;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  :disabled {
    opacity: 0.2;
    cursor: not-allowed;
    &:hover {
      opacity: 0.2;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AbortButton = styled.button`
  width: 40%;
  padding: .5em;
  margin-top: 0.3em;
  border: none;
  background-color: #000;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const RemoveButton = styled.button`
  width: 40%;
  padding: .5em;
  margin-top: 0.3em;
  border: none;
  background-color: #911733;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
