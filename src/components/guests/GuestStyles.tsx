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
  margin-top: 4em;
  text-align: center;
  animation: ${fade} 0.6s linear;

  p {
    font-size: 0.7em;
    line-height: 1.6;
  }
`;
export const GuestNumberWrapper = styled.div`
  width: 70%;
  max-width: 40em;
  margin: 1em auto;
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

interface IcolorProps {
  selected: boolean;
}
export const GuestNumber = styled.div`
  width: 40px;
  height: 40px;
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid ${(props: IcolorProps) => (props.selected ? '#006edc' : '#000')};
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IcolorProps) => (props.selected ? '#006edc' : 'fff')};
  color: ${(props: IcolorProps) => (props.selected ? '#fff' : '#000')};
`;
