import styled from "styled-components";

export const ModalMain = styled.div`
    position: fixed;
    background: white;
    width: 50%;
    min-width: 300px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ModalForm = styled.form` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Inputs = styled.input`
    padding: 0.3rem;
    margin-bottom: 0.5rem;
`
export const ButtonDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const ActionButton = styled.button`
    padding: 0.5rem;
    border: none;
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`