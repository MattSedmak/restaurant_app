import styled from "styled-components";

export const PopupMain = styled.div`
    position: fixed;
    background: #fff;
    width: 300px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 3%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    padding: 1rem;

    h5 {
        text-align: center;
        padding-top: 1rem;
        margin: 0;
    }

    p {
        font-size: 0.8rem;
        margin: 0;
        padding: 0.5rem 1rem 0 1rem;
    }
`

export const PopupButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 1rem;

    button {
        border: none;
        background: #000;
        color: #fff;
        border-radius: 5px;
        width: 90%;
        font-size: 0.9rem;
        font-family: 'Times New Roman', serif;
        padding: 11px 0 11px 0;
        margin-bottom: 1rem;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    a {
        text-decoration: none;
        border: 1px solid #000;
        border-radius: 5px;
        width: 90%;
        font-size: 0.9rem;
        text-align: center;
        padding: 10px 0 10px 0;
        margin-bottom: 1rem;
        color: #000;
    }
`