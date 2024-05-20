"use client";
import { COLORS } from "@/lib/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  img {
    display: block;
    max-width: 100%;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
    color: #fff;
    background-color: ${COLORS.MAIN};
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  /* Estilos para input de texto */
  input[type="text"] {
    width: 100%;
    border: 2px solid ${COLORS.GRAY};
    border-radius: 8px;
    padding: 8px;
    &:focus {
      border: 2px solid ${COLORS.MAIN};
    }
  }

  /* Estilos para textarea */
  textarea {
    width: 100%;
    min-height: 150px;
    border: 2px solid ${COLORS.GRAY};
    border-radius: 8px;
    padding: 8px;
    &:focus {
      border: 2px solid ${COLORS.MAIN};
    }
  }

  input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: transparent;
  /* Not removed via appearance */
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
}
input[type="checkbox"]:checked {
 
  background-color: ${COLORS.MAIN};
  /* Not removed via appearance */
 
}


input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em ${COLORS.WHITE};
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
  
}


  label {
    color: ${COLORS.MAIN};
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
  }
  

  /* Estilos para scrollbars */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: transparent;
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: transparent;
  }

  *::-webkit-scrollbar-track:active {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: #da831d;
  }
`;

export { GlobalStyles };
