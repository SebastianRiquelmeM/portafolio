import React from "react";
import { motion } from "framer-motion";
import aboutMe from "/img/undraw_code_review_re_woeb.svg";

export const AboutMe = () => {
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
						Acerca de mí
					</h2>
					<div className="mt-4 max-w-3xl mx-auto">
						<p className="text-xl text-gray-500 dark:text-gray-300">
							Desarrollador full stack especializado en la
							transformación digital de empresas
						</p>
					</div>
				</motion.div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="md:w-1/2"
					>
						<img
							className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
							src={aboutMe}
							alt="Desarrollador trabajando"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						className="md:w-1/2 space-y-6"
					>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Ingeniero Civil en Informática especializado en
							transformar procesos manuales en sistemas digitales
							escalables. Lideré el desarrollo de un sistema que
							duplicó el margen operativo de 10% a 20%,
							gestionando el 100% de los movimientos financieros y
							optimizando operaciones con 8,000+ influenciadores
							en 7 países. Guié exitosamente a más de 290
							estudiantes universitarios en proyectos full stack,
							logrando 90% de aprobación en mis cursos.
						</p>

						<div className="flex flex-wrap gap-3 pt-2">
							<span className="px-4 py-2 rounded-full text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max">
								Desarrollo Full Stack
							</span>
							<span className="px-4 py-2 rounded-full text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max">
								Arquitectura en la Nube
							</span>
							<span className="px-4 py-2 rounded-full text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max">
								Optimización de Procesos
							</span>
							<span className="px-4 py-2 rounded-full text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-white font-semibold text-sm flex align-center w-max">
								Diseño de Sistemas
							</span>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
