import styled from "styled-components";

export const ReservationContainer = styled.div`
    height: 350px;
    width: 250px;
    display: flex;
    overflow-wrap: break-word;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
    background-color: #fff;
`
export const EditButton = styled.button`
    padding: 0.5rem;
    border: none;
    background-color: #000;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`
export const CustomerName = styled.div`
    text-transform: capitalize;
`