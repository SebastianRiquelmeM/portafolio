import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Switcher from "./Switcher";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	const navLinks = [
		{ name: "Inicio", to: "hero" },
		{ name: "Sobre mí", to: "aboutme" },
		{ name: "Experiencia", to: "experience" },
		{ name: "Tecnologías", to: "technologies" },
		{ name: "Proyectos", to: "projects" },
		{ name: "Contacto", to: "contact" },
	];

	// const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
	// 	scrolled
	// 		? "bg-white dark:bg-gray-900 shadow-md py-2"
	// 		: "bg-transparent py-4"
	// }`;

const navbarClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
        ? "bg-white dark:bg-gray-700 shadow-md py-2"
        : "bg-gray-700 dark:bg-gray-700 py-4"
}`;

	return (
		<nav className={navbarClasses}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					{/* Logo & Brand with Profile Pic */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center"
					>
						<Link
							to="hero"
							smooth={true}
							duration={500}
							className="flex items-center cursor-pointer"
						>
							<div className="w-10 h-10 rounded-full overflow-hidden mr-3">
								<img
									src="/img/Perfil.jpg"
									alt="Sebastián Riquelme"
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<span className="font-bold text-gray-900 dark:text-white text-lg">
									Sebastián{" "}
									<span className="text-indigo-600 dark:text-indigo-400">
										Riquelme
									</span>
								</span>
								<p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
									Ingeniero Civil en Informática
								</p>
							</div>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="hidden md:flex items-center space-x-8"
					>
						{navLinks.map((link, index) => (
							<Link
								key={index}
								to={link.to}
								smooth={true}
								duration={500}
								offset={-70}
								className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors duration-300 cursor-pointer relative group"
							>
								{link.name}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						))}
						<div className="ml-4">
							<Switcher />
						</div>
					</motion.div>

					{/* Mobile Navigation Toggle */}
					<div className="md:hidden flex items-center">
						<div className="mr-4">
							<Switcher />
						</div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 dark:text-white focus:outline-none"
							aria-label="Toggle menu"
						>
							{!isOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
					>
						<div className="px-2 pt-2 pb-4 space-y-1">
							{navLinks.map((link, index) => (
								<Link
									key={index}
									to={link.to}
									smooth={true}
									duration={500}
									offset={-70}
									onClick={() => setIsOpen(false)}
									className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md transition-colors duration-300 cursor-pointer"
								>
									{link.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
