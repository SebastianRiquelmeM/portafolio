import React from "react";
import aboutMe from "/img/undraw_code_review_re_woeb.svg";

export const AboutMe = () => {
	return (
		<div>
			{/* About me, with image in left and text in right */}
			<div className="flex flex-wrap items-center justify-center mt-48 md:mt-96">
				<div className="w-full lg:w-1/2 lg:px-32 px-5">
					<h1 className="text-center dark:text-white text-3xl md:text-5xl font-bold text-gray-800 mb-14">
						Acerca de mi
					</h1>
					<p className="text-gray-600 dark:text-white mb-4 text-center">
						Soy desarrollador web experimentado en tecnologías
						backend y frontend, actualmente estudiando Ingeniería
						Civil en Informática y Telecomunicaciones. Como
						desarrollador full stack, he aplicado mis habilidades en
						diversos proyectos impactando positivamente. Además,
						como ayudante de profesor en la Universidad Diego
						Portales, comparto mis conocimientos de desarrollo web,
						contribuyendo al crecimiento de otros en la área.
					</p>
				</div>
				<div className="w-full lg:w-1/2 justify-center lg:mt-0 mt-20">
					{/* <ImageSVG /> */}
					<img
						className="w-2/3 mx-auto lg:mx-0"
						src={aboutMe}
						alt="about me"
					/>
				</div>
			</div>
		</div>
	);
};
