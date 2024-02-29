import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutMe />
			<Technologies />
			<Projects />
		</div>
	);
}

export default App;
