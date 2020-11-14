import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function RecipePage(props) {
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
			<Wraper>
				<div
					style={{
						height: "30vh",
						marginBottom: "25px",
						backgroundImage: `url( ${recipe.rec.acf.image} )`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				></div>
				<h1 style={{ textAlign: "center" }}> {recipe.rec.title.rendered} </h1>
				<Main>
					<Ingredients>
						<p>{recipe.rec.acf.ingredients}</p>
					</Ingredients>
					<Recipe>
						<p
							dangerouslySetInnerHTML={{ __html: recipe.rec.content.rendered }}
						/>
					</Recipe>
				</Main>
			</Wraper>
		);
	}
	return <h3>loading....</h3>;
}

const Wraper = styled.div`
	max-width: 800px;
	padding: 0 5%;
	margin: 0 auto;
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
