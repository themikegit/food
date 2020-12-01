import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MoreRec from "./MoreRec";
import { useSpring, animated } from "react-spring";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";

const RecipePage = (props) => {
	const [recept, setrecept] = useState({ rec: "", isLoaded: false });

	const {
		match: { params },
	} = props;

	console.log("me renders!");

	const fade = useSpring({
		from: {
			opacity: 0,
			marginTop: 500,
		},
		to: {
			opacity: 1,
			marginTop: 0,
		},
	});

	useEffect(() => {
		axios
			.get(
				`http://progress.rostovniki.com/wp-json/wp/v2/recipe/${props.match.params.id}`
			)
			.then((res) => setrecept({ rec: res.data, isLoaded: true }))
			.catch((err) => console.log("err", err));
	}, [params]);

	if (recept.isLoaded) {
		return (
			<animated.div style={fade}>
				<Wraper>
					<Hero
						style={{
							backgroundImage: `url( ${recept.rec.acf.image} )`,
						}}
					>
						<Timer>
							<AiOutlineClockCircle /> <p>{recept.rec.acf.preparation_time}</p>{" "}
						</Timer>
					</Hero>
					<Nav>
						<Link to={"/"}>
							<div style={{ display: "flex", alignItems: "center" }}>
								<IoMdArrowRoundBack /> <p>Nazad</p>{" "}
							</div>
						</Link>
						<h1 style={{ textAlign: "center" }}>
							{" "}
							{recept.rec.title.rendered}{" "}
						</h1>
						<div></div>
					</Nav>

					<Main>
						<Ingredients>
							<p>{recept.rec.acf.ingredients}</p>
						</Ingredients>
						<Recipe>
							<p
								dangerouslySetInnerHTML={{
									__html: recept.rec.content.rendered,
								}}
							/>
						</Recipe>
					</Main>
					<MoreRec
						currentData={{ id: recept.rec.id, kat: recept.rec.acf.kategorija }}
					/>
				</Wraper>
			</animated.div>
		);
	}
	return null;
};

export default RecipePage;

const Wraper = styled.div`
	max-width: 800px;
	padding: 0 5%;
	margin: 0 auto;
`;

const Hero = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 30vh;
	margin-bottom: 25px;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Timer = styled.div`
	display: flex;
	align-self: flex-end;
	align-items: center;
	width: fit-content;
	background-color: #000;
	color: #fff;
	padding: 5px;
	margin-bottom: -15px;
	border-radius: 5px;
	font-size: 1.3rem;
	p {
		margin-left: 5px;
		font-size: 1.2rem;
	}
`;

const Main = styled.div`
	display: flex;
	margin-top: 2rem;
	font-size: 1rem;
`;

const Ingredients = styled.div`
	max-width: 150px;
	background-color: #f2f2f2;
	margin: 0px 15px;
	padding: 5px 15px;
	line-height: 1.5;
	font-style: italic;
`;

const Recipe = styled.div`
	max-width: 600px;

	p {
		font-size: 1.1rem;
		line-height: 1.9rem;
	}
`;
