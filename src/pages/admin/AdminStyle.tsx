import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
`
export const InnerContainer = styled.div`
    width: 80%;
    max-width: 45em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const LogoLink = styled(Link)`
    font-family: 'Kalam', cursive;
    padding-top: 1em;
    padding-bottom: 0.5em;
    font-size: 3em;
    color: #DAD4C5;
    position: relative;
    display: inline-block;
    font-weight: 800;
    text-decoration: none;
    overflow: hidden;

    span {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        padding-top: 1em;
        transform: translateX(-100%);
        transition: transform 350ms ease;
            &::before {
            display: inline-block;
            content: attr(data-content);
            color: #006edc;
            transform: translateX(100%);
            transition: transform 350ms ease;
            text-decoration: none;
            }
    }
    &:hover {
        span {
            transform: translateX(0);
        &::before {
            transform: translateX(0)
        }
    }
}
`
export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    width: 100%;
`
export const NewBookingText = styled.p`
    font-size: 1rem;
    margin-bottom: 0.5rem;
`
export const BookingLink = styled(Link)`
    font-size: 1rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    background-color: #000;
    color: #fff;
    border-radius: 3px;
    transition-delay: 100ms;
    &:hover {
        background-color: #006edc;
    }


`

export const SearchLabel = styled.label`
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const SearchInput = styled.input`
    border: 1px solid black;
    margin-bottom: 0.5em;
    padding: 0.7em;
    width: 60%;
    border-radius: 3px;

    &:focus {
        outline: none;
    }
`
export const SearchButton = styled.button`
    border: none;
    background-color: #006edc;
    color: #fff;
    font-size: 1rem;
    width: 60%;
    padding: 1rem;
    cursor: pointer;
    border-radius: 3px;

    &:hover {
        opacity: 0.8;
    }
`
export const CustomerDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr; 
    }
    @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    grid-gap: 30px;
    padding: 0 20px 0 20px;
`