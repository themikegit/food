import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<FooterSection>
			<h4>copyright @Brandmik </h4>
		</FooterSection>
	);
}

const FooterSection = styled.div`
	backgroundcolor: red;
	padding: 25px;
	text-align: center;
`;
