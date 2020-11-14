import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

export default function RecipePage(props) {
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

	const [img, setimg] = useState();
	const [recipe, setrecipe] = useState({ rec: "", isLoaded: false });
	useEffect(() => {
		axios
			.get(
				`http://progress.rostovniki.com/wp-json/wp/v2/recipe/${props.match.params.id}`
			)
			.then((res) => setrecipe({ rec: res.data, isLoaded: true }))
			.catch((err) => console.log("err", err));
	}, []);
	console.log("recipe from page", recipe);
	if (recipe.isLoaded) {
		return (
			<animated.div style={fade}>
				<Wraper>
					<Hero
						style={{
							backgroundImage: `url( ${recipe.rec.acf.image} )`,
						}}
					>
						<Timer>
							<AiOutlineClockCircle /> <p>{recipe.rec.acf.preparation_time}</p>{" "}
						</Timer>
					</Hero>
					<h1 style={{ textAlign: "center" }}> {recipe.rec.title.rendered} </h1>
					<Main>
						<Ingredients>
							<p>{recipe.rec.acf.ingredients}</p>
						</Ingredients>
						<Recipe>
							<p
								dangerouslySetInnerHTML={{
									__html: recipe.rec.content.rendered,
								}}
							/>
						</Recipe>
					</Main>
				</Wraper>
			</animated.div>
		);
	}
	return null;
}

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
	font-size: 2rem;
	p {
		margin-left: 5px;
		font-size: 1.5rem;
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
