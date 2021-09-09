import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DAD4C5;
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
export const SearchTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
`

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem 0;
    width: 100%;
`

export const SearchLabel = styled.label`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

export const SearchInput = styled.input`
    border: 1px solid black;
    margin-bottom: 0.5em;
    padding: 0.7em;
    width: 40%;
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
    width: 40%;
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