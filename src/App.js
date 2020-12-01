import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllRecipes from "./components/AllRecipes";
import RecipePage from "./components/RecipePage";
import Layout from "./layout/Layout";
import { ContextFun } from "./components/Context";

function App() {
	return (
		<Router>
			<ContextFun>
				<Layout>
					<Switch>
						<Route exact path="/" component={AllRecipes} />
						<Route path="/recipe/:id" component={RecipePage} />
					</Switch>
				</Layout>
			</ContextFun>
		</Router>
	);
}

export default App;
