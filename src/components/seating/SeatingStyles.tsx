import styled, { keyframes } from 'styled-components';

const fade = keyframes`
from{
  opacity: 0;
}

to{
  opacity:1;
}
`;

export const Container = styled.div`
  // border: 1px solid black;
  width: 70%;
  max-width: 40em;
  margin: 2em auto;
  text-align: center;
  animation: ${fade} 0.6s linear;
`;

interface IcolorProps {
  selected: boolean;
}

export const SeatingButton = styled.div`
  border: 1px solid ${(props: IcolorProps) => (props.selected ? '#006edc' : '#000')};
  margin: 1em auto;
  padding: 1em;
  text-align: center;
  background-color: ${(props: IcolorProps) => (props.selected ? '#006edc' : 'fff')};
  color: ${(props: IcolorProps) => (props.selected ? '#fff' : '#000')};
  cursor: pointer;
`;
