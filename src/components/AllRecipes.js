import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "./Context";
import Filter from "./Filter";
import SingleRecipe from "./SingleRecipe";

export default function AllRecipes() {
	const { wpRec, category } = useContext(MyContext);
	const { isLoaded, allRec } = wpRec;
	if (isLoaded) {
		const filterList = allRec.filter(
			(recipe) => recipe.acf.kategorija === category
		);

		return (
			<>
				<Filter />
				<Section>
					{(category ? filterList : allRec).map((recipe) => (
						<SingleRecipe key={recipe.id} pass={recipe} />
					))}
				</Section>
			</>
		);
	}
	return null;
}

const Section = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
