import React from "react";
import { motion } from "framer-motion";
import ventasThiamagIMG from "/img/ventasthiamag.png";
import labeitIMG from "/img/labeit.png";
import ayudantiaIMG from "/img/ayudantia.png";
import iconoLabeitIMG from "/img/iconolabeit.png";
import iconoayudantiaIMG from "/img/iconoayudantia.png";
import iconoVentasThiamagIMG from "/img/iconoventasthiamag.png";
import iconoInfluenceIMG from "/img/programador.png";
import influenceIMG from "/img/influence.png";

export const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Sistema de Gestión de Campañas - Influence Latam",
			description:
				"Proyecto de título implementado en producción que duplica el margen operativo (10% a 20%) proporcionando visibilidad completa sobre el flujo de caja y controlando el 100% de los movimientos financieros.",
			detailedDescription:
				"Como Líder Técnico de Proyecto, diseñé y desarrollé un sistema integral de gestión de campañas que transformó los procesos manuales de la empresa. El sistema incluye cuatro módulos críticos que integran el ciclo financiero completo, migró procesos desde Google Sheets a una aplicación web modular, y gestiona 8,000+ influenciadores en 7 países mediante arquitectura escalable en Google Cloud.",
			image: influenceIMG,
			icon: iconoInfluenceIMG,
			link: "https://influence.cl/",
			linkText: "Visitar página de la empresa",
			categories: ["professional", "fullstack", "react", "node"],
		},
		{
			id: 2,
			title: "Laboratorio Universidad Diego Portales",
			description:
				"Desarrollé funcionalidades para la aplicación web labeit.udp.cl, mejorando módulos CRUD, sistemas de administración de inventario y configurando notificaciones automatizadas.",
			detailedDescription:
				"Desarrollé y agregué funcionalidades para la aplicación web labeit.udp.cl, incluyendo mejoras en varios módulos de CRUD, mejoras de un sistema de administración de inventario y configuración de notificaciones automatizadas de préstamos por correo electrónico.",
			image: labeitIMG,
			icon: iconoLabeitIMG,
			link: "https://labeit.udp.cl/",
			linkText: "Ver proyecto",
			categories: ["professional", "fullstack", "crud"],
		},
		{
			id: 3,
			title: "Ayudantía Desarrollo Web - UDP",
			description:
				"Dicté clases prácticas a estudiantes de ingeniería con un enfoque hands-on, guiándolos en el desarrollo de proyectos full stack con APIs reales y bases de datos.",
			detailedDescription:
				"Me desempeño como ayudante de profesor en la asignatura de desarrollo web, impartiendo cátedras y guiando a los estudiantes en el proceso de aprendizaje. Enseño las bases del desarrollo web a través de la creación de un proyecto full stack, en el cual se aplican diferentes tecnologías, tales como diseño e interfaz, API y base de datos. Mi objetivo es brindar a los estudiantes una experiencia práctica y completa en el desarrollo web, preparándolos para enfrentar los desafíos del mundo laboral.",
			image: ayudantiaIMG,
			icon: iconoayudantiaIMG,
			link: "https://github.com/SebastianRiquelmeM/desarrollo-web-ayudantia",
			linkText: "Ver proyecto",
			categories: ["education", "fullstack", "teaching"],
		},
		{
			id: 4,
			title: "Tienda Ventas Thiamag",
			description:
				"Desarrollé una aplicación web para promocionar y exhibir los productos del emprendimiento, permitiendo a los clientes explorar productos y contactar al vendedor.",
			detailedDescription:
				"Desarrollé una aplicación web para promocionar y exhibir los productos del emprendimiento ventasthiamag. La aplicación permite a los clientes potenciales explorar y obtener información detallada sobre los productos, y les da la opción de contactar al vendedor para obtener más información o realizar una compra. Con esta herramienta, logramos aumentar la visibilidad y la eficacia en la promoción de nuestros productos, generando un aumento en las ventas.",
			image: ventasThiamagIMG,
			icon: iconoVentasThiamagIMG,
			link: "https://ventasthiamag.cl/",
			linkText: "Ver proyecto",
			categories: ["personal", "frontend", "ecommerce"],
		},
	];

	return (
		<div className="py-20 bg-white dark:bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Proyectos Destacados
					</h2>
					<div className="mt-4 max-w-3xl mx-auto">
						<p className="text-xl text-gray-500 dark:text-gray-300">
							Una selección de los proyectos en los que he
							trabajado
						</p>
					</div>
				</motion.div>

				<div className="grid gap-10 lg:gap-16 md:grid-cols-1 lg:grid-cols-2">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							viewport={{ once: true }}
							whileHover={{ y: -10 }}
							className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
						>
							<div className="relative">
								<div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1 max-w-[90%]">
									{project.categories.map((category, idx) => {
										const categoryColors = {
											professional: "bg-green-500",
											personal: "bg-blue-500",
											fullstack: "bg-purple-500",
											frontend: "bg-yellow-500",
											education: "bg-red-500",
											ecommerce: "bg-pink-500",
											crud: "bg-indigo-500",
											react: "bg-blue-400",
											node: "bg-green-400",
											teaching: "bg-red-400",
										};

										return (
											<span
												key={idx}
												className={`${
													categoryColors[category] ||
													"bg-gray-500"
												} text-white text-xs font-bold px-2 py-1 rounded`}
											>
												{category
													.charAt(0)
													.toUpperCase() +
													category.slice(1)}
											</span>
										);
									})}
								</div>
								<div className="h-60 overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="object-cover w-full h-full transform transition duration-500 hover:scale-110"
									/>
								</div>
							</div>

							<div className="p-6 flex-grow">
								<div className="flex items-center mb-4">
									<div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900">
										<img
											src={project.icon}
											alt={`Icono de ${project.title}`}
											className="w-6 h-6"
										/>
									</div>
									<h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
										{project.title}
									</h3>
								</div>

								<p className="text-gray-600 dark:text-gray-300 mb-6">
									{project.description}
								</p>
							</div>

							<div className="px-6 pb-6">
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-sm transition-all duration-300"
								>
									{project.linkText}
									<span className="ml-2">
										<ion-icon name="open-outline"></ion-icon>
									</span>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
