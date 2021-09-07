import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3em;
  text-align: center;

  p {
    font-size: 0.7em;
  }
`;
export const GuestNumberWrapper = styled.div`
  // border: 1px solid black;
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
  width: 30px;
  height: 30px;
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IcolorProps) => (props.selected ? '#333' : 'fff')};
  color: ${(props: IcolorProps) => (props.selected ? '#fff' : '000')};
`;
