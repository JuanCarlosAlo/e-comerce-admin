"use client"
import { COLORS } from '@/lib/colors';
import styled from 'styled-components';

const StyledAddFile = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 250px;
	width: 250px;
	background-size: contain;
	background-image: url('/images/add_file.png');
	opacity: 0;
	pointer-events: none;
`;
const StyledImg = styled.div`
	position: relative;
	height: 150px;
	width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
	/* background-image: url(${({ src }) => src}); */
	border-radius: 1rem;
	object-fit: contain;
	overflow: hidden;
	background-color: ${COLORS.MAIN};
	color: ${COLORS.WHITE};

`;

const StyledInput = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	height: 150px;
	width: 150px;
	cursor: pointer;
	opacity: 0;
`;

export { StyledImg, StyledInput, StyledAddFile };
