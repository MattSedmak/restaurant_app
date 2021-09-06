import styled from 'styled-components';

export const Container = styled.div`
  // border: 1px solid black;
  width: 70%;
  max-width: 40em;
  margin: 2em auto;
  text-align: center;
`;

interface IcolorProps {
  primary: boolean;
}

export const SeatingButton = styled.div`
  border: 1px solid black;
  margin: 1em auto;
  padding: 1em;
  text-align: center;
  background-color: ${(props: IcolorProps) => (props.primary ? '#000' : 'fff')};
  color: ${(props: IcolorProps) => (props.primary ? '#fff' : '000')};
  cursor: pointer;
`;
