import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import heroImg from '../../images/heroimage.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)), 
    url(${heroImg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    /* max-height: 100%; */
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`
export const HeroItems = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`
export const HeroTitle = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    text-transform: uppercase;
    margin-bottom: 1rem;
    box-shadow: 1px 2px #42275a;
    letter-spacing: 3px;
`
export const HeroText = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`
export const NavLink = styled(Link)`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #000;
    color: #fff;
    text-decoration: none;
    transition: 0.2s ease-out;

    &:hover {
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`