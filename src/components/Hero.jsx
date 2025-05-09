import { useEffect, useState } from "react";
// import Switcher from "./Switcher";
import cv from "/pdf/Sebastián Riquelme Muñoz.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default () => {
	// Variantes de animación para efectos de entrada
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.7, ease: "easeOut" },
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				duration: 0.8,
			},
		},
	};

	const iconVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				duration: 0.5,
			},
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
		hover: {
			scale: 1.05,
			boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
			transition: { duration: 0.3 },
		},
	};

	return (
		<>
			{/* <header>
				<nav className="flex justify-end">
					<ul>
						<li className="mt-5 mr-5 md:mr-20">
							<Switcher />
						</li>
					</ul>
				</nav>
			</header> */}
			{/* <motion.section
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8"
			> */}
			<motion.section
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="mx-auto max-w-screen-xl pb-4 px-4 sm:px-8 pt-28"
			>
				<div className="text-center space-y-4">
					<motion.div className="relative inline-block">
						<motion.h5
							variants={itemVariants}
							className="font-bold text-2xl dark:text-white"
						>
							Hola{" "}
							<span className="inline-block animate-bounce">
								👋
							</span>
							, soy
						</motion.h5>
					</motion.div>

					<motion.h1
						variants={titleVariants}
						className="text-gray-800 dark:text-white font-bold text-5xl md:text-7xl"
					>
						Sebastián
						<motion.span
							className="text-indigo-600 dark:text-indigo-400"
							animate={{
								color: ["#4F46E5", "#818CF8", "#4F46E5"],
								textShadow: [
									"0 0 5px rgba(79, 70, 229, 0)",
									"0 0 15px rgba(79, 70, 229, 0.5)",
									"0 0 5px rgba(79, 70, 229, 0)",
								],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						>
							{" "}
							Riquelme
						</motion.span>
					</motion.h1>

					<motion.div
						variants={itemVariants}
						className="font-bold dark:text-white text-xl md:text-3xl h-16"
					>
						<TypeAnimation
							sequence={[
								"Desarrollador Full Stack",
								2000,
								"Ingeniero Civil en Informática y Telecomunicaciones",
								2000,
								"Especialista en React & Node.js",
								2000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className="text-indigo-600 dark:text-indigo-400"
						/>
					</motion.div>

					<motion.p
						variants={itemVariants}
						className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg mt-6"
					>
						Transformo procesos manuales en sistemas digitales
						escalables que optimizan operaciones y aumentan
						rentabilidad.
					</motion.p>
				</div>

				<motion.div
					variants={itemVariants}
					className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex"
				>
					<motion.a
						href={cv}
						target="_blank"
						rel="noopener noreferrer"
						variants={buttonVariants}
						whileHover="hover"
						whileTap={{ scale: 0.95 }}
						className="font-bold px-10 py-3.5 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-md shadow-md block sm:w-auto transition-all duration-300"
					>
						Descargar CV
						<motion.span
							variants={iconVariants}
							className="font-bold ml-2 text-lg align-[-3px] inline-block"
						>
							<ion-icon name="cloud-download-outline"></ion-icon>
						</motion.span>
					</motion.a>

					<motion.a
						href="mailto:riquelmemunozsebastian@gmail.com"
						variants={buttonVariants}
						whileHover="hover"
						whileTap={{ scale: 0.95 }}
						className="font-bold dark:text-white px-10 py-3.5 w-full text-gray-700 text-center border border-indigo-600 rounded-md duration-300 hover:text-white hover:bg-indigo-600 hover:shadow block sm:w-auto transition-all"
					>
						Contáctame{" "}
						<motion.span
							variants={iconVariants}
							className="font-bold ml-2 text-lg align-[-3px] inline-block"
						>
							<ion-icon name="mail-outline"></ion-icon>
						</motion.span>
					</motion.a>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="mt-12 dark:text-white text-5xl justify-center items-center flex gap-8"
				>
					<motion.a
						href="https://www.linkedin.com/in/sebasti%C3%A1n-riquelme-566a16261/"
						target="_blank"
						whileHover={{ scale: 1.2, color: "#4F46E5" }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="cursor-pointer transition-all duration-300"
					>
						<ion-icon name="logo-linkedin"></ion-icon>
					</motion.a>
					<motion.a
						href="https://github.com/SebastianRiquelmeM"
						target="_blank"
						whileHover={{ scale: 1.2, color: "#4F46E5" }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 300 }}
						className="cursor-pointer transition-all duration-300"
					>
						<ion-icon name="logo-github"></ion-icon>
					</motion.a>
				</motion.div>

				{/* Elementos decorativos animados */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 opacity-30"
							initial={{
								x: Math.random() * window.innerWidth,
								y: -20,
								opacity: 0.2,
								scale: Math.random() * 0.5 + 0.5,
							}}
							animate={{
								y: window.innerHeight + 20,
								opacity: [0.2, 0.5, 0.2],
								rotate: Math.random() * 360,
							}}
							transition={{
								duration: Math.random() * 15 + 20,
								ease: "linear",
								repeat: Infinity,
								delay: Math.random() * 5,
							}}
						/>
					))}
				</div>
			</motion.section>
		</>
	);
};
