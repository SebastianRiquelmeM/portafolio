import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
	const experiences = [
		{
			title: "Desarrollador Full Stack — Líder Técnico de Proyecto",
			company: "Influence Latam",
			location: "Santiago de Chile - Vitacura",
			period: "Marzo 2023 – Actualidad",
			description: [
				"Diseñé y desarrollé un sistema integral de gestión de campañas (proyecto de título) que proyecta duplicar el margen operativo (10% a 20%) al proporcionar visibilidad completa sobre el flujo de caja, controlando el 100% de los movimientos financieros de la empresa.",
				"Implementé cuatro módulos críticos (Cotizaciones, Cobranza, Lista de Influenciadores, Producción) que integran el ciclo financiero completo, con algoritmos para calcular métricas clave como costo por alcance (CPA) y costo por engagement (CPE).",
				"Migré procesos críticos desde Google Sheets a una aplicación web modular con autenticación corporativa, permitiendo gestionar y estandarizar el trabajo con 8,000+ influenciadores en 7 países.",
				"Implementé una arquitectura en Google Cloud (App Engine + Cloud SQL) que incrementó la eficiencia de gestión de campañas en un 200%, proporcionando a los Account Managers visibilidad en tiempo real del presupuesto y alertas ante desviaciones.",
				"Creé benchmarks dinámicos basados en datos actuales que reemplazan indicadores estáticos de hace 3 años, mejorando significativamente la precisión de proyecciones financieras.",
				"Establecí el dominio appinfluence.cl con certificado SSL, configurando escalamiento automático y monitoreo de rendimiento en producción.",
			],
			skills: [
				"React.js",
				"Node.js",
				"Express.js",
				"MySQL",
				"GCP",
				"OAuth 2.0",
				"REST APIs",
				"Arquitectura Cloud",
			],
		},
		{
			title: "Profesor Sustituto de Desarrollo Web",
			company: "Universidad Diego Portales",
			location: "Santiago de Chile",
			period: "2023",
			description: [
				"Lideré la planificación e impartición de clases teórico-prácticas presenciales a 34 estudiantes de ingeniería durante un mes, desarrollando habilidades de expresión oral y gestión de aula que resultaron en 90% de éxito estudiantil.",
				"Planifiqué y ejecuté estrategias pedagógicas innovadoras, diseñando ejercicios prácticos enfocados en arquitecturas web modernas y desarrollo full stack aplicable a entornos reales.",
				"Desarrollé capacidades de liderazgo académico, gestionando dinámicas de grupo y adaptando metodologías de enseñanza según las necesidades individuales de aprendizaje.",
				"Fortalecí habilidades de comunicación técnica, transmitiendo conceptos complejos de manera clara y accesible a audiencias con diferentes niveles de conocimiento.",
			],
			skills: [
				"Liderazgo Académico",
				"Planificación Pedagógica",
				"Expresión Oral",
				"Gestión de Grupos",
				"Comunicación Técnica",
				"Metodologías de Enseñanza",
			],
		},
		{
			title: "Ayudante de Desarrollo Web",
			company: "Universidad Diego Portales",
			location: "Santiago de Chile",
			period: "Julio 2022 – Diciembre 2023",
			description: [
				"Lideré clases prácticas para 258 estudiantes durante varios semestres, implementando metodologías hands-on que aumentaron la tasa de aprobación al 85%.",
				"Desarrollé y evalué proyectos full stack integrando APIs reales y bases de datos, preparando estudiantes para desafíos profesionales actuales.",
				"Mentoré individualmente a estudiantes con dificultades, implementando estrategias de apoyo personalizado que mejoraron significativamente su rendimiento académico.",
				"Colaboré estrechamente con profesores y coordinadores académicos para optimizar contenidos curriculares y metodologías de evaluación.",
			],
			skills: [
				"Enseñanza",
				"APIs",
				"Bases de Datos",
				"Full Stack",
				"Evaluación",
				"Mentoría",
			],
		},
		{
			title: "Practicante de Desarrollo Web",
			company: "AzurTech",
			location: "Puerto Varas - Puerto Montt",
			period: "Octubre 2022 - Enero 2023",
			description: [
				"Colaboré en el rediseño y optimización de un sitio web para una empresa minera, implementando mejoras técnicas para garantizar un diseño responsivo y navegación óptima en dispositivos móviles.",
				"Implementé soluciones para la migración de bases de datos y módulos personalizados en el software AzurSoft (basado en Odoo 12), documentando procesos críticos para actualizaciones futuras.",
				"Elaboré informes técnicos detallados sobre herramientas de desarrollo óptimas para Odoo y procesos de migración de módulos entre diferentes versiones del software.",
				"Trabajé en un entorno multidisciplinario con profesionales de distintas áreas, mejorando mis habilidades de comunicación técnica y trabajo en equipo remoto.",
			],
			skills: [
				"Odoo",
				"Desarrollo Web",
				"Bases de Datos",
				"Migración",
				"Trabajo Remoto",
				"Documentación Técnica",
			],
		},
		{
			title: "Desarrollador Web",
			company: "Laboratorio Universidad Diego Portales",
			location: "Santiago de Chile",
			period: "Marzo 2022 - Diciembre 2022",
			description: [
				"Desarrollé funcionalidades clave para la aplicación web labeit.udp.cl, mejorando módulos CRUD y sistemas de administración de inventario para optimizar la gestión del laboratorio.",
				"Implementé un sistema automatizado de notificaciones por correo que mejoró significativamente el proceso de préstamos de equipos para los estudiantes de la universidad.",
				"Colaboré con personal administrativo y técnico del laboratorio para identificar necesidades operativas y traducirlas en soluciones tecnológicas efectivas.",
				"Optimicé flujos de trabajo existentes, reduciendo tiempo de procesamiento de solicitudes y mejorando la experiencia del usuario estudiantil.",
			],
			skills: [
				"CRUD",
				"Desarrollo Web",
				"Notificaciones",
				"Automatización",
				"Gestión de Inventario",
			],
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
						Experiencia Laboral
					</h2>
					<div className="mt-4 max-w-3xl mx-auto">
						<p className="text-xl text-gray-500 dark:text-gray-300">
							Mi trayectoria profesional y proyectos destacados
						</p>
					</div>
				</motion.div>

				<div className="relative border-l border-gray-300 dark:border-gray-700 ml-3 md:ml-6">
					{experiences.map((experience, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="mb-10 ml-6"
						>
							<div className="absolute w-4 h-4 bg-indigo-600 rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900" />
							<div className="mb-1 flex items-center">
								<time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
									{experience.period}
								</time>
								<span className="ml-2 px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded">
									{experience.location}
								</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								{experience.title}
							</h3>
							<p className="mb-3 text-base font-medium text-indigo-600 dark:text-indigo-400">
								{experience.company}
							</p>
							<ul className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
								{experience.description.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
							<div className="flex flex-wrap gap-2 mt-2">
								{experience.skills.map((skill, idx) => (
									<span
										key={idx}
										className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded"
									>
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
