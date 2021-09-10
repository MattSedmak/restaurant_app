import styled from "styled-components";
import contactImg from '../../images/contactimage.jpg';
import { GiSmartphone } from 'react-icons/gi';
import { GoMail} from 'react-icons/go';

export const ContactContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)), 
    url(${contactImg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`
export const ContactContent = styled.div`
    height: calc(100vh - 80px);
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) /2);
`
export const ContactItems = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 100%;
    color: #DAD4C5;
    line-height: 1;
    font-weight: bold;

    @media screen and (min-width: 650px) {
        width: 650px;
    }
    @media screen and (max-height: 440px) {
        padding: 0 0 0 2rem;

    }
`
export const ContactText = styled.p`
    font-size: clamp(0.8rem, 5vw, 1.3rem);
    line-height: 1.6;
    letter-spacing: 3px;
    margin-top: 15rem;
    margin-bottom: 0.5rem;
`
export const ContactDiv = styled.div`
    display: flex;
    margin-bottom: 0.4rem;
`
export const ContactIconP = styled(GiSmartphone)`
    font-size: clamp(0.8rem, 5vw, 1.3rem);
    color: #006edc;
`
export const ContactUs = styled.p`
    font-size: clamp(0.8rem, 5vw, 1.3rem);
    letter-spacing: 3px;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
`
export const ContactIconM = styled(GoMail)`
    font-size: clamp(0.8rem, 5vw, 1.3rem);
    color: #006edc;
`