import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Header() {
	return (
		<HeaderSection>
			<Link to={"/"}>
				{" "}
				<img src={Logo} alt="" />{" "}
			</Link>
		</HeaderSection>
	);
}

const HeaderSection = styled.div`
	padding: 25px;
	display: flex;
	justify-content: center;
	img {
		width: 130px;
	}
`;
