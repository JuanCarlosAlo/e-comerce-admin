"use client"

import { COLORS } from "@/lib/colors";

const { styled } = require("styled-components")

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
	gap: 1rem;
	width: 100%;
	max-width: 350px;

`;

const StyledInput = styled.input`
width: 100%;
border: 2px solid ${COLORS.GRAY};
border-radius: 8px;
padding: 8px;
&:focus{
    border: 2px solid ${COLORS.MAIN};

}
`
const StyledTextArea = styled.textarea`
width: 100%;
min-height: 150px;
border: 2px solid ${COLORS.GRAY};
border-radius: 8px;
padding: 8px;
&:focus{
    border: 2px solid ${COLORS.MAIN};

}

`

const StyledLabel = styled.label`
color: ${COLORS.MAIN};

`
export { StyledInputContainer,  StyledInput, StyledLabel ,StyledTextArea};