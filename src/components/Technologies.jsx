import React from "react";
import { motion } from "framer-motion";
import serverIMG from "/img/servidores.png";
import frontIMG from "/img/desarrollo-web.png";
import servicesIMG from "/img/carga-en-la-nube.png";
import toolsIMG from "/img/optimizacion-web.png";
// Importar estilos de Devicon - asegúrate de que index.html tiene el enlace al CDN también
// La importación se agregará en index.html para mejor compatibilidad

export const Technologies = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	const techCategories = [
		{
			title: "Frontend",
			icon: frontIMG,
			skills: [
				{ name: "React.js", icon: "devicon-react-original colored" },
				{ name: "JavaScript (ES6+)", icon: "devicon-javascript-plain colored" },
				{ name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
				{ name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
				{ name: "HTML5/CSS3", icon: "devicon-html5-plain-wordmark colored" },
				{ name: "Vite", icon: "devicon-vitejs-plain colored" }
			]
		},
		{
			title: "Backend",
			icon: serverIMG,
			skills: [
				{ name: "Node.js", icon: "devicon-nodejs-plain colored" },
				{ name: "Express.js", icon: "devicon-express-original colored" },
				{ name: "Python", icon: "devicon-python-plain colored" },
				{ name: "Flask", icon: "devicon-flask-original colored" },
				{ name: "RESTful APIs", icon: "devicon-nodejs-plain colored" }, // No hay ícono específico para RESTful APIs
				{ name: "OAuth 2.0", icon: "devicon-nodejs-plain colored" } // No hay ícono específico para OAuth
			]
		},
		{
			title: "Bases de Datos",
			icon: toolsIMG,
			skills: [
				{ name: "MySQL", icon: "devicon-mysql-plain colored" },
				{ name: "MongoDB", icon: "devicon-mongodb-plain colored" },
				{ name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
				{ name: "Prisma ORM", icon: "devicon-prisma-plain colored" },
				{ name: "SQL", icon: "devicon-sqlite-plain colored" }, // Usando SQLite como representación de SQL
				{ name: "NoSQL", icon: "devicon-mongodb-plain colored" } // Usando MongoDB como representación de NoSQL
			]
		},
		{
			title: "Cloud & DevOps",
			icon: servicesIMG,
			skills: [
				{ name: "Google Cloud (App Engine)", icon: "devicon-googlecloud-plain colored" },
				{ name: "Docker", icon: "devicon-docker-plain colored" },
				{ name: "Git/GitHub", icon: "devicon-github-original colored" },
				{ name: "CI/CD", icon: "devicon-jenkins-plain colored" }, // Usando Jenkins como representación de CI/CD
				{ name: "AWS", icon: "devicon-amazonwebservices-original colored" },
				{ name: "Azure", icon: "devicon-azure-plain colored" }
			]
		}
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
						Tecnologías y Habilidades
					</h2>
					<div className="mt-4 max-w-3xl mx-auto">
						<p className="text-xl text-gray-500 dark:text-gray-300">
							Herramientas y tecnologías con las que desarrollo soluciones
						</p>
					</div>
				</motion.div>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
				>
					{techCategories.map((category, index) => (
						<motion.div
							key={index}
							variants={item}
							className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
						>
							<div className="p-6">
								<div className="flex justify-center mb-4">
									<img 
										src={category.icon} 
										alt={category.title} 
										className="h-20 w-20 object-contain" 
									/>
								</div>
								<h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">
									{category.title}
								</h3>
								<div className="space-y-3">
									{category.skills.map((skill, idx) => (
										<div 
											key={idx} 
											className="py-2 px-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex items-center"
										>
											<i className={`${skill.icon} text-2xl mr-3`}></i>
											<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
												{skill.name}
											</span>
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
				
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 flex flex-wrap justify-center gap-3"
				>
					{[
						"React.js", "Node.js", "Express.js", "JavaScript", "Python", "Git", 
						"MongoDB", "MySQL", "Docker", "Google Cloud", "Tailwind CSS", "Bootstrap",
						"RESTful APIs", "OAuth 2.0", "JWT", "Prisma ORM"
					].map((tech, index) => (
						<span 
							key={index}
							className="px-4 py-2 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm font-medium"
						>
							{tech}
						</span>
					))}
				</motion.div>
			</div>
		</div>
	);
};
