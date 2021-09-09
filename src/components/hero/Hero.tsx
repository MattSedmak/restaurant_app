import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroTitle,
  HeroText,
  NavigationLink,
} from './HeroStyle';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggleSideBar} />
      <Sidebar sideBar={isOpen} toggle={toggleSideBar} />
      <HeroContent>
        <HeroItems>
          <HeroTitle>
            Eat
            <br /> Drink
            <br /> Dream
          </HeroTitle>
          <HeroText>En oförglömlig upplevelse</HeroText>
          <NavigationLink to='/booking'>Boka bord</NavigationLink>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
