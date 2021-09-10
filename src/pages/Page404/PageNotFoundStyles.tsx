import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  width: 80%;
  max-width: 40em;
  margin: 5em auto;
  padding: 2em;
  text-align: center;

  p {
    font-size: 3em;
    margin-bottom: 2em;
  }
`;

export const Logo = styled.h1`
  font-family: 'Kalam', cursive;
  font-size: 3em;
`;

export const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;
