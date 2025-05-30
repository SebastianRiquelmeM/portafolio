import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [submitError, setSubmitError] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitError(false);
		setSubmitSuccess(false);

		// Crear FormData con los datos del formulario

		const formDataToSend = new FormData();

		// Web3Forms API key - Seguro exponerlo, solo envía a mi email registrado

		formDataToSend.append(
			"access_key",
			"651c5462-eb71-45d1-9357-2547ec24696f"
		);
		formDataToSend.append("name", formData.name);
		formDataToSend.append("email", formData.email);
		formDataToSend.append("subject", formData.subject);
		formDataToSend.append("message", formData.message);

		// Configuraciones adicionales opcionales
		formDataToSend.append("from_name", "Portafolio Sebastián Riquelme");
		formDataToSend.append("redirect", "false");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formDataToSend,
			});

			const data = await response.json();

			if (data.success) {
				setSubmitSuccess(true);
				setFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});

				// Reset success message after 5 seconds
				setTimeout(() => {
					setSubmitSuccess(false);
				}, 5000);
			} else {
				console.log("Error", data);
				setSubmitError(true);
			}
		} catch (error) {
			console.error("Error:", error);
			setSubmitError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

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
						Contáctame
					</h2>
					<div className="mt-4 max-w-3xl mx-auto">
						<p className="text-xl text-gray-500 dark:text-gray-300">
							¿Tienes un proyecto en mente? ¡Hablemos!
						</p>
					</div>
				</motion.div>

				<div className="flex flex-col md:flex-row gap-12">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className="md:w-1/3 space-y-8"
					>
						<div>
							<h3 className="text-lg font-bold text-gray-900 dark:text-white">
								Información de contacto
							</h3>
							<p className="mt-2 text-base text-gray-600 dark:text-gray-300">
								Ingeniero Civil en Informática disponible para
								liderar proyectos de transformación digital.
								Especializado en soluciones full stack que
								optimizan operaciones y aumentan rentabilidad
								empresarial.
							</p>
						</div>

						<div>
							<h4 className="text-base font-semibold text-gray-900 dark:text-white">
								Email
							</h4>
							<p className="mt-1 text-indigo-600 dark:text-indigo-400">
								<a
									href="mailto:riquelmemunozsebastian@gmail.com"
									className="hover:underline"
								>
									riquelmemunozsebastian@gmail.com
								</a>
							</p>
						</div>

						<div>
							<h4 className="text-base font-semibold text-gray-900 dark:text-white">
								Teléfono
							</h4>
							<p className="mt-1 text-indigo-600 dark:text-indigo-400">
								<a
									href="tel:+56950438455"
									className="hover:underline"
								>
									+56 9 5043 8455
								</a>
							</p>
						</div>

						<div>
							<h4 className="text-base font-semibold text-gray-900 dark:text-white">
								Redes Sociales
							</h4>
							<div className="mt-3 flex space-x-6">
								<a
									href="https://www.linkedin.com/in/sebastián-riquelme-566a16261/"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
								>
									<span className="sr-only">LinkedIn</span>
									<ion-icon
										name="logo-linkedin"
										class="text-2xl"
									></ion-icon>
								</a>
								<a
									href="https://github.com/SebastianRiquelmeM"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
								>
									<span className="sr-only">GitHub</span>
									<ion-icon
										name="logo-github"
										class="text-2xl"
									></ion-icon>
								</a>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
						className="md:w-2/3"
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Nombre
									</label>
									<div className="mt-1">
										<input
											type="text"
											name="name"
											id="name"
											required
											value={formData.name}
											onChange={handleChange}
											className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Email
									</label>
									<div className="mt-1">
										<input
											type="email"
											name="email"
											id="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
										/>
									</div>
								</div>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Asunto
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="subject"
										id="subject"
										required
										value={formData.subject}
										onChange={handleChange}
										className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700 dark:text-gray-300"
								>
									Mensaje
								</label>
								<div className="mt-1">
									<textarea
										id="message"
										name="message"
										rows={4}
										required
										value={formData.message}
										onChange={handleChange}
										className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									disabled={isSubmitting}
									className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 ${
										isSubmitting
											? "opacity-75 cursor-not-allowed"
											: ""
									}`}
								>
									{isSubmitting ? (
										<>
											<svg
												className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Enviando...
										</>
									) : (
										"Enviar mensaje"
									)}
								</button>
							</div>

							{submitSuccess && (
								<div className="rounded-md bg-green-50 dark:bg-green-900 p-4">
									<div className="flex">
										<div className="flex-shrink-0">
											<svg
												className="h-5 w-5 text-green-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div className="ml-3">
											<p className="text-sm font-medium text-green-800 dark:text-green-200">
												¡Mensaje enviado con éxito! Me
												pondré en contacto contigo
												pronto.
											</p>
										</div>
									</div>
								</div>
							)}

							{submitError && (
								<div className="rounded-md bg-red-50 dark:bg-red-900 p-4">
									<div className="flex">
										<div className="flex-shrink-0">
											<svg
												className="h-5 w-5 text-red-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div className="ml-3">
											<p className="text-sm font-medium text-red-800 dark:text-red-200">
												Hubo un error al enviar tu
												mensaje. Por favor, inténtalo de
												nuevo más tarde.
											</p>
										</div>
									</div>
								</div>
							)}
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
