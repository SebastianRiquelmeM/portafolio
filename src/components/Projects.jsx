import ventasThiamagIMG from "/img/ventasthiamag.png";
import labeitIMG from "/img/labeit.png";
import ayudantiaIMG from "/img/ayudantia.png";
import iconoLabeitIMG from "/img/iconolabeit.png";
import iconoayudantiaIMG from "/img/iconoayudantia.png";
import iconoVentasThiamagIMG from "/img/iconoventasthiamag.png";

export const Projects = () => {
	return (
		<div className="dark:text-white">
			{/* Proyecto 1 */}
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<h1 className="dark:text-white text-6xl mb-20 text-gray-800 font-bold text-center">
					Proyectos
				</h1>
				<div className="grid gap-10 lg:grid-cols-2">
					<div className="lg:pr-10">
						<a
							href="/"
							aria-label="Go Home"
							title="Logo"
							className="inline-block mb-5"
						>
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
								<img
									src={iconoLabeitIMG}
									/* className="object-cover w-full h-64" */
									alt=""
								/>
							</div>
						</a>
						<h5 className="mb-4 text-4xl font-extrabold leading-none">
							Laboratorio {""}
							<br className="hidden md:block" />
							Universidad{" "}
							<span className="inline-block text-deep-purple-accent-400">
								Diego Portales
							</span>
						</h5>
						<p className="mb-6 dark:text-white text-gray-900">
							Desarrollé y agregué funcionalidades para la
							aplicación web labeit.udp.cl, incluyendo mejoras en
							varios módulos de CRUD, mejoras de un sistema de
							administración de inventario y configuración de
							notificaciones automatizadas de préstamos por correo
							electrónico.
						</p>
						<hr className="mb-5 border-gray-300" />
						<div className="flex items-center space-x-4">
							<a
								href="javascript:void(0)"
								className="font-bold px-10 py-3 w-full mx-auto bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
							>
								Ver proyecto{" "}
								<span className="font-bold ml-1 text-lg align-[-3px]">
									<ion-icon name="open"></ion-icon>
								</span>
							</a>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src={labeitIMG}
							alt=""
						/>
					</div>
				</div>
			</div>

			{/* Proyecto 2 */}
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-10 lg:grid-cols-2 flex">
					<div className="lg:order-1 order-2">
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src={ayudantiaIMG}
							alt=""
						/>
					</div>
					<div className="lg:pr-10 lg:order-2 order-1">
						<a
							href="/"
							aria-label="Go Home"
							title="Logo"
							className="inline-block mb-5"
						>
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
								<img
									src={iconoayudantiaIMG}
									/* className="object-cover w-full h-64" */
									alt=""
								/>
							</div>
						</a>
						<h5 className="mb-4 text-4xl font-extrabold leading-none">
							Ayudantía Desarrollo web
							<br className="hidden md:block" />
							Universidad{" "}
							<span className="inline-block text-deep-purple-accent-400">
								Diego Portales
							</span>
						</h5>
						<p className="mb-6 dark:text-white  text-gray-900">
							Me desempeño como ayudante de profesor en la
							asignatura de desarrollo web, impartiendo cátedras y
							guiando a los estudiantes en el proceso de
							aprendizaje. Enseño las bases del desarrollo web a
							través de la creación de un proyecto full stack, en
							el cual se aplican diferentes tecnologías, tales
							como diseño e interfaz, API y base de datos. Mi
							objetivo es brindar a los estudiantes una
							experiencia práctica y completa en el desarrollo
							web, preparándolos para enfrentar los desafíos del
							mundo laboral.
						</p>
						<hr className="mb-5 border-gray-300" />
						<div className="flex items-center space-x-4">
							<a
								href="javascript:void(0)"
								className="font-bold px-10 py-3 w-full mx-auto bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
							>
								Ver proyecto{" "}
								<span className="font-bold ml-1 text-lg align-[-3px]">
									<ion-icon name="open"></ion-icon>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Proyecto 3 */}
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-10 lg:grid-cols-2">
					<div className="lg:pr-10">
						<a
							href="/"
							aria-label="Go Home"
							title="Logo"
							className="inline-block mb-5"
						>
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
								<img
									src={iconoVentasThiamagIMG}
									/* className="object-cover w-full h-64" */
									alt=""
								/>
							</div>
						</a>
						<h5 className="mb-4 text-4xl font-extrabold leading-none">
							Tienda Ventas Thiamag
						</h5>
						<p className="dark:text-white mb-6 text-gray-900">
							Desarrollé una aplicación web para promocionar y
							exhibir los productos del emprendimiento
							ventasthiamag. La aplicación permite a los clientes
							potenciales explorar y obtener información detallada
							sobre los productos, y les da la opción de contactar
							al vendedor para obtener más información o realizar
							una compra. Con esta herramienta, logramos aumentar
							la visibilidad y la eficacia en la promoción de
							nuestros productos, generando un aumento en las
							ventas.
						</p>
						<hr className="mb-5 border-gray-300" />
						<div className="flex items-center space-x-4">
							<a
								href="javascript:void(0)"
								className="font-bold px-10 py-3 w-full mx-auto bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
							>
								Ver proyecto{" "}
								<span className="font-bold ml-1 text-lg align-[-3px]">
									<ion-icon name="open"></ion-icon>
								</span>
							</a>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src={ventasThiamagIMG}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
