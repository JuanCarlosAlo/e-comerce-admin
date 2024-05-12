"use client"

import { COLORS } from "@/lib/colors";

const { styled } = require("styled-components");

const StyledButton = styled.button`
background-color: ${COLORS.MAIN};
color: ${COLORS.WHITE};
padding: 12px;
border-radius: 8px;
margin: 1rem 0;
border: none;
cursor: pointer;
&:hover{
    background-color: ${COLORS.black};
}
`

export { StyledButton }