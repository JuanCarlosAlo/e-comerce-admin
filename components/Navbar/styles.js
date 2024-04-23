import { COLORS } from "@/lib/colors";
import Link from "next/link";
import styled from "styled-components";

const StyledAside = styled.aside`
  padding: 2rem;
  padding-right: 0;
`;

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
    padding: 0.5REM;
  background-color: ${({ selected }) =>
    selected ? COLORS.WHITE : "transparent"};
    color: ${({ selected }) =>
    selected ? COLORS.MAIN : COLORS.WHITE}; 

    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
 
`;

export { StyledAside, StyledNavbar, StyledLink };
