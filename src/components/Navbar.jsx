import React, { useState } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { Link } from "react-scroll";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
			<div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
				{/* Botón del menú (hamburguesa) para pantallas pequeñas */}
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="text-gray-700 focus:outline-none"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
					</button>
				</div>

				{/* Avatar y datos del usuario */}
				<Avatar.Root className="flex items-center space-x-3">
					<Avatar.Image
						src="/img/Perfil.jpg"
						className="w-12 h-12 rounded-full object-cover"
						alt="Sebastián Riquelme"
					/>
					<Avatar.Fallback
						delayMs={600}
						className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center"
					>
						SR
					</Avatar.Fallback>
					<div className="flex flex-col">
						<span className="text-gray-700 text-sm font-medium cursor-pointer">
							Sebastián Riquelme
						</span>
						<span className="text-gray-500 text-xs cursor-pointer">
							riquelmemunozsebastian@gmail.com
						</span>
					</div>
				</Avatar.Root>

				{/* Enlaces a las secciones de la aplicación para pantallas medianas y grandes */}
				<div className="hidden md:flex gap-4">
					<Link
						to="hero"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold"
					>
						Inicio
					</Link>
					<Link
						to="aboutme"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold"
					>
						Sobre mí
					</Link>
					<Link
						to="technologies"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold"
					>
						Tecnologías
					</Link>
					<Link
						to="projects"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold"
					>
						Proyectos
					</Link>
				</div>
			</div>

			{/* Menú lateral para pantallas pequeñas */}
			<div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link
						to="hero"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold block"
					>
						Inicio
					</Link>
					<Link
						to="aboutme"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold block"
					>
						Sobre mí
					</Link>
					<Link
						to="technologies"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold block"
					>
						Tecnologías
					</Link>
					<Link
						to="projects"
						smooth={true}
						duration={500}
						offset={-80}
						className="cursor-pointer text-gray-700 hover:text-indigo-600 hover:font-bold block"
					>
						Proyectos
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
