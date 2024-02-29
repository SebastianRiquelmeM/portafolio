import React from "react"; // Importa React, necesario para usar JSX
import * as Avatar from "@radix-ui/react-avatar"; // Importa todo de @radix-ui/react-avatar para el componente de Avatar

// Componente Navbar que se fijará en la parte superior de la página
const Navbar = () => {
	return (
		<div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
			<div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
				{/* Avatar y datos del usuario a la izquierda */}
				<Avatar.Root className="flex items-center space-x-3">
					{/* Imagen del Avatar del usuario */}
					<Avatar.Image
						src="/img/Perfil.jpg" // Ruta a la imagen de perfil
						className="w-12 h-12 rounded-full object-cover"
						alt="Sebastián Riquelme"
					/>
					{/* Fallback del Avatar */}
					<Avatar.Fallback
						delayMs={600}
						className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center"
					>
						SR
					</Avatar.Fallback>
					{/* Información del usuario */}
					<div className="flex flex-col">
						<span className="text-gray-700 text-sm font-medium cursor-pointer">
							Sebastián Riquelme
						</span>
						<span className="text-gray-500 text-xs cursor-pointer">
							riquelmemunozsebastian@gmail.com
						</span>
					</div>
				</Avatar.Root>

				{/* Enlaces a las secciones de la aplicación alineados a la derecha */}
				<div className="flex gap-4">
					<a
						href="#hero"
						className="text-gray-700 hover:text-indigo-600 hover:font-bold transition duration-500"
					>
						Inicio
					</a>
					<a
						href="#aboutme"
						className="text-gray-700 hover:text-indigo-600 hover:font-bold transition duration-500"
					>
						Sobre mí
					</a>
					<a
						href="#technologies"
						className="text-gray-700 hover:text-indigo-600 hover:font-bold transition duration-500"
					>
						Tecnologías
					</a>
					<a
						href="#projects"
						className="text-gray-700 hover:text-indigo-600 hover:font-bold transition duration-500"
					>
						Proyectos
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar; // Exporta el componente Navbar
