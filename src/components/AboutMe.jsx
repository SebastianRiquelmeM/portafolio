import React from "react";
import aboutMe from "/img/undraw_code_review_re_woeb.svg";

export const AboutMe = () => {
	return (
		<div>
			{/* About me, with image in left and text in right */}
			<div className="flex flex-wrap items-center justify-center mt-48 md:mt-96">
				<div className="w-full lg:w-1/2 lg:px-32 px-5">
					<h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-14">
						Acerca de mi
					</h1>	
					<p className="text-gray-600 mb-4 text-center">
						Soy un desarrollador web con experiencia en desarrollo
						de aplicaciones web, con conocimientos y habilidades en
						tecnologías de backend y frontend. Como estudiante de
						ingeniería civil en informática y telecomunicaciones,
						busco oportunidades de empleo para aplicar mi
						experiencia y habilidades en el área de desarrollo web.
						Además, tengo experiencia enseñando como ayudante de
						profesor en la universidad Diego Portales en el curso de
						Desarrollo web, lo que me permite compartir mi
						conocimiento y ayudar a otros a desarrollar sus
						habilidades en el área.
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
