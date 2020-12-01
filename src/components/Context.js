import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MyContext = createContext();

export const ContextFun = (props) => {
	const [wpRec, setwpRec] = useState({ allRec: "", isLoaded: false });
	const [category, setcategory] = useState("");

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

	const Filtering = (name) => {
		if (name === category) {
			setcategory("");
		} else {
			setcategory(name);
		}
	};

	return (
		<MyContext.Provider value={{ wpRec, category, Filtering }}>
			{props.children}
		</MyContext.Provider>
	);
};
