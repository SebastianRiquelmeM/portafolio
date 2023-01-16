import { useState } from "react";
import Switcher from "./Switcher";

export default () => {
	const [state, setState] = useState(false);

	// Replace javascript:void(0) path with your path
	const navigation = [
		{ title: "Customers", path: "javascript:void(0)" },
		{ title: "Careers", path: "javascript:void(0)" },
		{ title: "Guides", path: "javascript:void(0)" },
		{ title: "Partners", path: "javascript:void(0)" },
	];

	return (
		<>
			<header>
				<nav className="flex justify-end">
					<ul>
						<li className="mt-5 mr-5 md:mr-20">
							<Switcher />
						</li>
					</ul>
				</nav>
			</header>
			<section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
				<div className="text-center space-y-4">
					<h5 className="font-bold text-2xl dark:text-white">
						Hola 👋, soy
					</h5>
					<h1 className="text-gray-800 dark:text-white font-bold text-6xl md:text-7xl">
						Sebastián
						<span className="text-indigo-600 dark:text-white">
							{" "}
							Riquelme
						</span>
					</h1>
					<h5 className="font-bold dark:text-white text-2xl">
						Desarrollador Full Stack, apasionado por el desarrollo
						Frontend
					</h5>
				</div>
				<div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
					<a
						href="https://sebastianriquelmem.github.io/portafolio/assets/Sebastián%20Riquelme%20Muñoz.pdf"
						target="_blank"
						className="font-bold px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
					>
						Descargar CV{" "}
						<span className="font-bold ml-1 text-lg align-[-3px]">
							<ion-icon name="cloud-download-outline"></ion-icon>
						</span>
					</a>
					<a
						href="mailto:riquelmemunozsebastian@gmail.com"
						className="font-bold dark:text-white px-10 py-3.5 w-full text-gray-700 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
					>
						Contactame{" "}
						<span className="font-bold ml-1 text-lg align-[-3px]"></span>
					</a>
				</div>
				<div className="mt-12 dark:text-white text-5xl justify-center items-center flex sm:space-x-6 sm:space-y-0">
					<a
						href="https://www.linkedin.com/in/sebasti%C3%A1n-riquelme-566a16261/"
						target="_blank"
						className="mx-3 cursor-pointer hover:scale-150 hover:transition-all hover:duration-300"
					>
						<ion-icon name="logo-linkedin"></ion-icon>
					</a>
					<a
						href="https://github.com/SebastianRiquelmeM"
						target="_blank"
						className="mx-3 cursor-pointer hover:scale-150 hover:transition-all hover:duration-300"
					>
						<ion-icon name="logo-github"></ion-icon>
					</a>
				</div>
			</section>
		</>
	);
};
