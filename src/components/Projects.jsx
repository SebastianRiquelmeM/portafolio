import React from "react";
import ventasThiamagIMG from "../../public/img/ventasthiamag.png";
import labeitIMG from "../../public/img/labeit.png";
import ayudantiaIMG from "../../public/img/ayudantia.png";

/* export const Projects = () => {
	return (
		<div className="pb-96">
			<h1 className="text-6xl mb-20 text-gray-800 font-bold text-center">
				Proyectos
			</h1>
		</div>
	);
}; */
export const Projects = () => {
	return (
		<>
			<h1 className="text-6xl mb-14 text-gray-800 font-bold text-center">
				Proyectos
			</h1>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md">
						<img
							src={ventasThiamagIMG}
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
								<a
									href="/"
									className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
									aria-label="Category"
									title="traveling"
								>
									Exhibición de productos
								</a>
								<span className="text-gray-600">
									— 2020
								</span>
							</p>
							<a
								href="/"
								aria-label="Category"
								title="Visit the East"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
							>
								Ventas Thiamag
							</a>
							<p className="mb-2 text-gray-700">
								Sed ut perspiciatis unde omnis iste natus error
								sit sed quia consequuntur magni voluptatem
								doloremque.
							</p>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								ventasthiamag.cl
							</a>
						</div>
					</div>
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md">
						<img
							src={labeitIMG}
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
								<a
									href="/"
									className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
									aria-label="Category"
									title="traveling"
								>
									Inventario y prestamos
								</a>
								<span className="text-gray-600">
									— 2022
								</span>
							</p>
							<a
								href="/"
								aria-label="Category"
								title="Simple is better"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
							>
								Laboratorio EIT UDP
							</a>
							<p className="mb-2 text-gray-700">
								Sed ut perspiciatis unde omnis iste natus error
								sit sed quia consequuntur magni voluptatem
								doloremque.
							</p>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a>
						</div>
					</div>
					<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md">
						<img
							src={ayudantiaIMG}
							className="object-cover w-full h-64"
							alt=""
						/>
						<div className="p-5 border border-t-0">
							<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
								<a
									href="/"
									className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
									aria-label="Category"
									title="traveling"
								>
									Realizar cátedra de desarrollo web
								</a>
								<span className="text-gray-600">
									— 2022
								</span>
							</p>
							<a
								href="/"
								aria-label="Category"
								title="Film It!"
								className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
							>
								Ayudantía Desarrollo Web  
							</a>
							<p className="mb-2 text-gray-700">
								Sed ut perspiciatis unde omnis iste natus error
								sit sed quia consequuntur magni voluptatem
								doloremque.
							</p>
							<a
								href="/"
								aria-label=""
								className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
