import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu3Fill } from 'react-icons/ri'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: flex-start;
`
export const NavLink = styled(Link)`
    font-family: 'Kalam', cursive;
    color: #DAD4C5;
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    align-items: Center;
    text-decoration: none;
    cursor: pointer;
    padding: 2rem;
`
export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #DAD4C5;
`
export const Bars = styled(RiMenu3Fill)`
    font-size: 2rem;
    transform: translate(-70%, 75%)
`