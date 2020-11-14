import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

export default function SingleRecipe(props) {
	return (
		<Link to={`/recipe/${props.pass.id}`}>
			<Single>
				<Hero style={{ backgroundImage: `url(${props.pass.acf.image})` }}>
					{props.pass.acf.vege == "Yes" ? (
						<Vege>
							<p>Vege</p>{" "}
						</Vege>
					) : null}

					<Timer>
						<AiOutlineClockCircle />
						<p> {props.pass.acf.preparation_time} </p>
					</Timer>
				</Hero>
				<Inner>
					<h2> {props.pass.title.rendered} </h2>
					<p
						dangerouslySetInnerHTML={{
							__html: props.pass.acf.short_description,
						}}
					/>
				</Inner>
			</Single>
		</Link>
	);
}

const Single = styled.div`
	width: 350px;
	margin: 25px;
	border-radius: 5px;s
	-webkit-box-shadow: 3px 2px 14px 1px rgba(0, 0, 0, 0.18);
	box-shadow: 3px 2px 14px 1px rgba(0, 0, 0, 0.18);
	overflow: hidden;
`;
const Inner = styled.div`
	padding: 10px 25px;
	h2 {
		margin: 10px 0;
	}
`;

const Hero = styled.div`
	height: 200px;
	display: flex;
	background-size: cover;
	background-repeat: no-repeat;
	overflow: hidden;
`;

const Timer = styled.div`
	display: flex;
	align-self: flex-end;
	align-items: center;
	width: fit-content;
	background-color: #000;
	color: #fff;
	padding: 5px;
	margin: 5px;
	border-radius: 5px;
	p {
		margin-left: 5px;
	}
`;

const Vege = styled.div`
	display: flex;
	position: absolute;
	align-self: flex-start;
	padding: 5px;
	margin: 5px;
	width: fit-content;
	border-radius: 5px;
	background-color: #4b976e;
	color: #fff;
`;
