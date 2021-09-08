import styled from 'styled-components';

export const Container = styled.div`
  // border: 1px solid black;
  width: 70%;
  max-width: 40em;
  margin: 2em auto;
  text-align: center;
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
