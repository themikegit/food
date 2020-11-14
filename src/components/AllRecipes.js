import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Filter from "./Filter";
import SingleRecipe from "./SingleRecipe";

export default function AllRecipes() {
	const [wpRec, setwpRec] = useState({ allRec: "", isLoaded: false });
	const [category, setcategory] = useState("");
	const Filtering = (name) => {
		setcategory(name);
	};

	useEffect(() => {
		axios
			.get("http://progress.rostovniki.com/wp-json/wp/v2/recipe")
			.then((res) =>
				setwpRec({
					allRec: res.data,
					isLoaded: true,
				})
			)
			.catch((err) => console.log("Error from axios", err));
	}, []);

	console.log("main source", wpRec);
	const { isLoaded, allRec } = wpRec;

	if (isLoaded) {
		const catGen = wpRec.allRec.filter(
			(recipe) => recipe.acf.kategorija == category
		);
		console.log("catGen", catGen);
		return (
			<>
				<Filter fun={Filtering} />
				<Section>
					{(category ? catGen : allRec).map((recipe) => (
						<SingleRecipe pass={recipe} />
					))}
				</Section>
			</>
		);
	}
	return <h4>Loading....</h4>;
}

const Section = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
