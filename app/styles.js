"use client"

import { COLORS } from "@/lib/colors";

const { styled } = require("styled-components");

const StyledHeaderTop = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const StyledNamePlate = styled.div`
display: flex;
align-items: center;
gap: 1rem;
border-radius: 1rem;
background-color: ${COLORS.MAIN};
overflow: hidden;
padding-right: 1rem ;
color: ${COLORS.WHITE};


`
const StyledUserImg = styled.img`
width: 32px;
height: 32px;

`

export{StyledHeaderTop,StyledNamePlate,StyledUserImg}