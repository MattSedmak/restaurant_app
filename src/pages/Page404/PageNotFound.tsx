import { Link } from 'react-router-dom';
import { Container, Logo, StyledLink } from './PageNotFoundStyles';

const PageNotFound = () => {
  return (
    <Container>
      <Logo>The 3 Dudes</Logo>
      <div>
        <p>Oops, Inget att se här!</p>
        <StyledLink to='/'>&larr; Tillbaka till restaurangen</StyledLink>
      </div>
    </Container>
  );
};
export default PageNotFound;
