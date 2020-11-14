import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div
			style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
		>
			<Header />
			<div style={{ flexGrow: "1" }}>{children}</div>

			<Footer />
		</div>
	);
}
