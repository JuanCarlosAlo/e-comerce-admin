"use client"

import { COLORS } from "@/lib/colors"
import Link from "next/link"

const { styled } = require("styled-components")

const StyledProductContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
border:2px solid ${COLORS.MAIN};
border-radius: 16px;
padding: 8px;
`
const StyledLegendContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

border-radius: 16px;
padding: 8px;
`

const StyledProductList = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
height: calc(100% - 5rem);
gap: 1rem;
overflow-y: scroll;
`

const StyledButton = styled(Link)`
background-color: ${COLORS.MAIN};
color: ${COLORS.WHITE};
padding: 12px;
border-radius: 8px;
margin-left: 1rem;

`
export{StyledProductContainer,StyledLegendContainer,StyledProductList,StyledButton}