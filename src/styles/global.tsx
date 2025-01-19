import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p  {
    margin: 0;
    font-family: "Lato", sans-serif;
  }

  h1{
    font: bold ${theme.sizes.large} "Lato", sans-serif;
  }

  h3{
    font: 500 ${theme.sizes.meddium} "Lato", sans-serif;
  }

  p{
    font: 400 ${theme.sizes.meddium} "Lato", sans-serif;
  } 

  a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  * {
      box-sizing: border-box;
  }

     &::-webkit-scrollbar {
      background-color: ${theme.colors.white};
      width: 10px;
      height: 10px;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.green}; 
      border-radius: 5px;
    }

   
`;
