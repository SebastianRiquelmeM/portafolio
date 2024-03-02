import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import Navbar from "./components/Navbar";
import { Element } from "react-scroll";

function App() {
	return (
		<div>
			<Navbar />
			<Element name="hero">
				<Hero />
			</Element>
			<Element name="aboutme">
				<AboutMe />
			</Element>
			<Element name="technologies">
				<Technologies />
			</Element>
			<Element name="projects">
				<Projects />
			</Element>
		</div>
	);
}

export default App;
