import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8 xl:col-span-1">
						<div>
							<h2 className="text-2xl font-bold">
								Sebastián Riquelme
							</h2>
							<p className="mt-1 text-indigo-600 dark:text-indigo-400">
								Ingeniero Civil en Informática | Desarrollador
								Full Stack
							</p>
						</div>
						<p className="text-gray-600 dark:text-gray-400 text-base">
							Ingeniero especializado en transformar procesos
							manuales en sistemas digitales escalables que
							optimizan operaciones y aumentan rentabilidad
							empresarial.
						</p>
						<div className="flex space-x-6">
							<a
								href="https://linkedin.com/in/sebastiánriquelme"
								target="_blank"
								rel="noreferrer"
								className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
							>
								<span className="sr-only">LinkedIn</span>
								<ion-icon
									name="logo-linkedin"
									className="text-2xl"
								></ion-icon>
							</a>
						</div>
					</div>

					<div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300 tracking-wider uppercase">
									Navegación
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<Link
											to="hero"
											smooth={true}
											duration={500}
											offset={-80}
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 cursor-pointer"
										>
											Inicio
										</Link>
									</li>
									<li>
										<Link
											to="aboutme"
											smooth={true}
											duration={500}
											offset={-80}
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 cursor-pointer"
										>
											Acerca de mí
										</Link>
									</li>
									<li>
										<Link
											to="experience"
											smooth={true}
											duration={500}
											offset={-80}
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 cursor-pointer"
										>
											Experiencia
										</Link>
									</li>
									<li>
										<Link
											to="technologies"
											smooth={true}
											duration={500}
											offset={-80}
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 cursor-pointer"
										>
											Tecnologías
										</Link>
									</li>
								</ul>
							</div>

							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300 tracking-wider uppercase">
									Enlaces
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<Link
											to="projects"
											smooth={true}
											duration={500}
											offset={-80}
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 cursor-pointer"
										>
											Proyectos
										</Link>
									</li>
									<li>
										<Link
											to="contact"
											smooth={true}
											duration={500}
											offset={-80}
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 cursor-pointer"
										>
											Contacto
										</Link>
									</li>
									<li>
										<a
											href="https://sebastianriquelme.cl"
											target="_blank"
											rel="noreferrer"
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
										>
											Sitio web
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300 tracking-wider uppercase">
									Especialidades
								</h3>
								<ul className="mt-4 space-y-4">
									<li className="text-base text-gray-600 dark:text-gray-400">
										Desarrollo Full Stack
									</li>
									<li className="text-base text-gray-600 dark:text-gray-400">
										Arquitectura en la Nube
									</li>
									<li className="text-base text-gray-600 dark:text-gray-400">
										Optimización de Procesos
									</li>
									<li className="text-base text-gray-600 dark:text-gray-400">
										Diseño de Sistemas
									</li>
								</ul>
							</div>

							<div className="mt-12 md:mt-0">
								<h3 className="text-sm font-semibold text-gray-900 dark:text-gray-300 tracking-wider uppercase">
									Contacto
								</h3>
								<ul className="mt-4 space-y-4">
									<li>
										<a
											href="mailto:riquelmemunozsebastian@gmail.com"
											className="text-base text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
										>
											riquelmemunozsebastian@gmail.com
										</a>
									</li>
									<li className="text-base text-gray-600 dark:text-gray-400">
										Santiago, Chile
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
					<p className="text-base text-gray-500 dark:text-gray-400 text-center">
						&copy; {currentYear} Sebastián Riquelme Muñoz.
					</p>
				</div>
			</div>
		</footer>
	);
};
