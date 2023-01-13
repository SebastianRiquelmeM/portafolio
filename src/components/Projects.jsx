import ventasThiamagIMG from "../../public/img/ventasthiamag.png";
import labeitIMG from "../../public/img/labeit.png";
import ayudantiaIMG from "../../public/img/ayudantia.png";
import iconoLabeitIMG from "../../public/img/iconolabeit.png";

export const Projects = () => {
	return (
		<>
			{/* Proyecto 1 */}
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<h1 className="text-6xl mb-36 text-gray-800 font-bold text-center">
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
							Laboratorio EIT
							<br className="hidden md:block" />
							Universidad{" "}
							<span className="inline-block text-deep-purple-accent-400">
								Diego Portales
							</span>
						</h5>
						<p className="mb-6 text-gray-900">
							Esta es una aplicación web que permite a los
							estudiantes de la carrera Ingeniería civil en
							Informática y Telecomunicaciones de la Universidad
							Diego Portales, ver los productos que se encuentran
							en el laboratorio, y obtener prestamos de los
							mismos.
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
				<div className="grid gap-10 lg:grid-cols-2">
					<div>
						<img
							className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
							src={ayudantiaIMG}
							alt=""
						/>
					</div>
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
							Ayudantía Desarrollo web
							<br className="hidden md:block" />
							Universidad{" "}
							<span className="inline-block text-deep-purple-accent-400">
								Diego Portales
							</span>
						</h5>
						<p className="mb-6 text-gray-900">
							Se realizan cátedras como ayudante de profesor en la
							asignatura de desarrollo web, enseñando las bases
							del desarrollo web mediante la creación de un
							proyecto full stack aplicando diferentes
							tecnologías, Diseño e interfaz, API y Base de datos.
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
									src={iconoLabeitIMG}
									/* className="object-cover w-full h-64" */
									alt=""
								/>
							</div>
						</a>
						<h5 className="mb-4 text-4xl font-extrabold leading-none">
							Tienda Ventas Thiamag
						</h5>
						<p className="mb-6 text-gray-900">
							Crear una aplicación web para exhibir los productos
							del emprendimiento ventasthiamag y luego recibir
							contacto de los productos de interés.
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
		</>
	);
};
