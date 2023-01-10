import React from "react";
import serverIMG from "../../public/img/servidores.png";
export const Technologies = () => {
	return (
		<div className="mt-48 pb-96 md:mt-96">
			{/* About me, with image in left and text in right */}
			<h1 className="text-6xl text-gray-800 font-bold text-center">
				Tecnologías
			</h1>

			<div className="flex flex-row items-center justify-center">
				<div className="md:w-1/4 w-full text-center">
					<img className="mx-auto h-48 mb-10" src={serverIMG}></img>
					<h2 className="text-4xl">Backend</h2>
				</div>
				<div className="md:w-1/4 w-full text-center">
					<span className="text-9xl">
						<ion-icon name="code"></ion-icon>{" "}
					</span>
					<h2 className="text-4xl">Frontend</h2>
				</div>
			</div>
			<div className="flex flex-row items-center justify-center">
				<div className="md:w-1/4 w-full text-center">columna</div>
				<div className="md:w-1/4 w-full text-center">columna</div>
			</div>
		</div>
	);
};
