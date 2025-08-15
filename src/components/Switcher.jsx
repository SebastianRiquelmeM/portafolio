import { useState, useEffect } from "react";
import useDarkSide from "./useDarkSide";
import { motion } from "framer-motion";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const isDark = colorTheme !== "dark"; // Si colorTheme es "light", estamos en modo oscuro
	
	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};

	return (
		<motion.button
			onClick={toggleDarkMode}
			className={`relative inline-flex h-10 w-20 items-center justify-center rounded-full ${
				isDark ? 'bg-indigo-600' : 'bg-gray-200'
			} p-1 transition-colors duration-300 focus:outline-none`}
			whileTap={{ scale: 0.95 }}
			whileHover={{ scale: 1.05 }}
			aria-label="Toggle Dark Mode"
		>
			<span className="sr-only">Toggle dark mode</span>
			
			<motion.span
				className={`absolute left-1 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition-transform duration-300`}
				animate={{ x: isDark ? 36 : 0 }}
				transition={{ type: "spring", stiffness: 300, damping: 25 }}
			>
				{isDark ? (
					<motion.svg 
						xmlns="http://www.w3.org/2000/svg" 
						className="h-5 w-5 text-indigo-600" 
						fill="none" 
						viewBox="0 0 24 24" 
						stroke="currentColor"
						initial={{ opacity: 0, rotate: -45 }}
						animate={{ opacity: 1, rotate: 0 }}
						transition={{ duration: 0.3 }}
					>
						<path 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							strokeWidth={2} 
							d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
						/>
					</motion.svg>
				) : (
					<motion.svg 
						xmlns="http://www.w3.org/2000/svg" 
						className="h-5 w-5 text-yellow-500" 
						fill="none" 
						viewBox="0 0 24 24" 
						stroke="currentColor"
						initial={{ opacity: 0, rotate: 45 }}
						animate={{ opacity: 1, rotate: 0 }}
						transition={{ duration: 0.3 }}
					>
						<path 
							strokeLinecap="round" 
							strokeLinejoin="round" 
							strokeWidth={2} 
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
						/>
					</motion.svg>
				)}
			</motion.span>
			
			{/* Icons visible in background of switch */}
			<span className={`absolute right-2 transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
				</svg>
			</span>
			
			<span className={`absolute left-2 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
				</svg>
			</span>
		</motion.button>
	);
}
