import styled from 'styled-components';

export const CancelContainer = styled.div`
  width: 80%;
  max-width: 50em;
  margin: 5em auto;
  text-align: center;
  box-shadow: 0 2px 8px rgba(168, 168, 168, 0.5);
  background-color: rgba(168, 168, 168, 0.2);

  & h1 {
    padding-top: 20px;
    margin-bottom: 20px;
  }

  & a {
    text-decoration: none;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  color: red;
  width: 200px;
  margin: 2em auto;
  cursor: pointer;
  margin-bottom: 30px;
  padding: 12px 28px;
  font-size: 15px;
  border: 1px solid red;
  border-radius: 8px;
  transition: transform 300ms ease;
  &:hover {
    background-color: red;
    color: white;
  }
`;
