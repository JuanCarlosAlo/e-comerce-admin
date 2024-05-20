"use client"
import { COLORS } from "@/lib/colors";
import { styled } from "styled-components";

const StyledPropertyContainer = styled.div`
padding: 1rem 0;
border-bottom: 1px solid ${COLORS.MAIN};
`

const StyledCheboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const StyledPropertiesContainer = styled.div`
display: flex;
align-items: center;
gap: 2rem;
`

export {StyledCheboxContainer,StyledPropertiesContainer,StyledPropertyContainer}