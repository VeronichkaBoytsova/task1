import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
	// императивный
	const currentYear = new Date().getFullYear();
	// декларативный
	return React.createElement(
		"div",
		{ className: "App" },
		React.createElement(
			"header",
			{ className: "App-header" },
			React.createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			React.createElement(
				"p",
				null,
				"Edit",
				React.createElement("code", null, "src/App.js"),
				"add save to reload.",
			),
			React.createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React",
			),
			React.createElement("div", null, currentYear),
		),
	);
}

export default App;
