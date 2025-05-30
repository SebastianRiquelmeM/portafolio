import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
	const skillCategories = [
		{
			title: "Habilidades de Liderazgo",
			skills: [
				"Liderazgo de equipos técnicos",
				"Gestión de proyectos complejos",
				"Mentoría y desarrollo de talento",
				"Toma de decisiones estratégicas",
			],
		},
		{
			title: "Comunicación y Colaboración",
			skills: [
				"Comunicación técnica efectiva",
				"Trabajo multidisciplinario",
				"Escucha activa",
				"Presentaciones ejecutivas",
			],
		},
		{
			title: "Gestión y Proceso",
			skills: [
				"Análisis de procesos de negocio",
				"Optimización operacional",
				"Metodologías ágiles",
				"Documentación técnica",
			],
		},
	];

	return (
		<div className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						Competencias Profesionales
					</h2>
					<div className="mt-4 max-w-3xl mx-auto">
						<p className="text-xl text-gray-500 dark:text-gray-300">
							Habilidades blandas y competencias de gestión
							desarrolladas a través de la experiencia
						</p>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{skillCategories.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
						>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
								{category.title}
							</h3>
							<ul className="space-y-3">
								{category.skills.map((skill, idx) => (
									<li key={idx} className="flex items-center">
										<span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
										<span className="text-gray-600 dark:text-gray-300">
											{skill}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
