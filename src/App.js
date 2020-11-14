import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllRecipes from "./components/AllRecipes";
import RecipePage from "./components/RecipePage";
import Layout from "./layout/Layout";

function App() {
	return (
		<Router>
			<div>
				<Layout>
					<Route exact path="/" component={AllRecipes} />
					<Route exact path="/recipe/:id" component={RecipePage} />
				</Layout>
			</div>
		</Router>
	);
}

export default App;
