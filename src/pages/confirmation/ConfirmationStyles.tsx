import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid black; */
  width: 70%;
  max-width: 40em;
  margin: 10em auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

export const Pinfo = styled.p`
  font-size: 1em;
  margin: 0.5em;

  strong {
    text-transform: capitalize;
  }
`;
export const Confirm = styled.p`
  font-size: 0.8em;
  margin: 0.5em;
`;

export const StyledButton = styled.button`
  width: 30%;
  margin: 1em;
  padding: 1em;
  background-color: #006edc;
  border: #006edc;
  border-radius: 3px;
  color: #fff;

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const UlElement = styled.ul`
  list-style-type: none;
`;

export const H1Element = styled.h1`
  font-size: 3rem;
  margin: 0.5em;
  color: #383838;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
  & {
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
