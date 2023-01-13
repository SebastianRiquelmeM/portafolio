import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";

function App() {
	return (
		<div>
			<Hero />
			<AboutMe />
			<Technologies />
			<Projects2 />
			<Projects />
		</div>
	);
}

export default App;
