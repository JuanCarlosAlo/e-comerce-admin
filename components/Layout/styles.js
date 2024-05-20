"use client"
const { COLORS } = require("@/lib/colors");
const { styled } = require("styled-components");

const StyledPage = styled.div`
display: flex;
height:100vh;
width:100vw;
background-color: ${COLORS.MAIN};
`

const StyledLoginPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:100vh;
width:100vw;
background-color: ${COLORS.MAIN};
`

const StyledButton = styled.button`
padding: 1rem;
background-color: ${COLORS.black};
border: 2px solid ${COLORS.WHITE};
border-radius: 1rem;
color:${COLORS.WHITE};
;
`

const StyledContent = styled.div`
background-color: ${COLORS.WHITE};
color: ${COLORS.MAIN};
width: 100%;
margin: 1rem 1rem 1rem 0;
border-radius: 0.5rem;
padding: 1rem;
overflow-y:scroll;

`
export {StyledPage,StyledButton,StyledContent,StyledLoginPage}