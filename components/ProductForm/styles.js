"use client"

import { ReactSortable } from "react-sortablejs"

const { styled } = require("styled-components")

const StyledImgsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
width: 100%;
overflow-x: scroll;

`

const StyledImgsPreview= styled.img`
    height: 150px;
	width: 150px;
    object-fit: contain;
`

const StyledReactSortable = styled(ReactSortable)`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
overflow-x: scroll;
`

export{StyledImgsContainer,StyledImgsPreview,StyledReactSortable}