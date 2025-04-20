import { useState, useEffect } from "react";
import "./App.css";
import "./animations.css";
import { AboutMe } from "./components/AboutMe";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Particles from "./components/Particles";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function App() {
	// El tema se maneja a través de las clases CSS en el elemento HTML
	// y el localStorage, no es necesario un estado aquí
	// Las clases dark/light las gestiona useDarkSide.jsx
	
	// Para actualizar las partículas según el tema actual
	const [currentTheme, setCurrentTheme] = useState(() => {
		return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	});
	
	// Observar cambios en las clases del elemento HTML para actualizar las partículas
	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.attributeName === 'class') {
					const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
					setCurrentTheme(newTheme);
				}
			});
		});
		
		observer.observe(document.documentElement, { attributes: true });
		
		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="bg-white dark:bg-gray-900 transition-colors duration-500">
			{/* Partículas de fondo animadas */}
			<Particles 
				count={30} 
				color={currentTheme === 'dark' ? '#818CF8' : '#4F46E5'} 
				minSize={1} 
				maxSize={3} 
				speed={0.3} 
			/>
			
			<div className="relative z-10">
				<motion.div 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Navbar />
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Element name="hero">
						<Hero />
					</Element>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<Element name="aboutme">
							<AboutMe />
						</Element>
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
						className="section-gradient"
					>
						<Element name="experience">
							<Experience />
						</Element>
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<Element name="technologies">
							<Technologies />
						</Element>
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
						className="section-gradient"
					>
						<Element name="projects">
							<Projects />
						</Element>
					</motion.div>
					
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<Element name="contact">
							<Contact />
						</Element>
					</motion.div>
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<Footer />
				</motion.div>
				
				{/* Botón de scroll hacia arriba que aparece cuando el usuario ha hecho scroll */}
				<ScrollToTopButton />
			</div>
		</div>
	);
}

// Componente para botón de volver arriba
const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none"
					aria-label="Volver arriba"
				>
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						className="h-6 w-6" 
						fill="none" 
						viewBox="0 0 24 24" 
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
					</svg>
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default App;
