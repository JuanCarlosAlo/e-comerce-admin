"use client"

import { COLORS } from "@/lib/colors"
import { ReactSortable } from "react-sortablejs"

const { styled } = require("styled-components")

const StyledImgsContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 1rem;
width: 100%;


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

const StyledCategoriesContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 1rem;
padding: 2rem 0;
`

const StyledCategoryBullet = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${COLORS.MAIN};
padding: 0.2rem 1rem;
border-radius: 8px;
color: ${COLORS.WHITE};
`

export{StyledImgsContainer,StyledImgsPreview,StyledReactSortable,StyledCategoriesContainer,StyledCategoryBullet}