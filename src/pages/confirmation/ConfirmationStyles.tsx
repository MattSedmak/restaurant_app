import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 70%;
  max-width: 40em;
  margin: 10em auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

export const Pinfo = styled.p`
  font-size: 1.1em;
  margin: 0.5em;
`;

export const StyledButton = styled.button`
  width: 30%;
  margin: 1em;
  padding: 1em;
  background-color: #006edc;
  border: #006edc;
  border-radius: 3px;
  color: #fff;

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
