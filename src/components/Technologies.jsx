import React from "react";
import serverIMG from "/img/servidores.png";
import frontIMG from "/img/desarrollo-web.png";
import servicesIMG from "/img/carga-en-la-nube.png";
import toolsIMG from "/img/optimizacion-web.png";
     
export const Technologies = () => {
	return (
		<div className="mt-48 pb-48 md:mt-36">
			{/* About me, with image in left and text in right */}
			<h1 className="dark:text-white text-6xl mb-20 text-gray-800 font-bold text-center">
				Tecnologías
			</h1>

			<div className="flex flex-wrap justify-center mb-20">
				<div className="md:w-1/4 md:mr-20 w-full text-center mb-24 md:mb-0">
					<img className="mx-auto h-48 mb-10" src={frontIMG}></img>
					<h2 className="dark:text-white text-4xl mb-5 font-bold">Frontend</h2>
                         <div>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">HTML</span>
					     <span className="bg-indigo-500 p-1 rounded text-white mr-1">Javascript</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">React</span>
                         </div>
                         <br></br>
                         <div style={{marginTop: "-15px"}}>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Tailwind</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Bootstrap</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Vite</span>
                         </div>
				</div>    
				<div className="md:w-1/4 w-full text-center mb-24 md:mb-0">
					<img className="mx-auto h-48 mb-10" src={serverIMG}></img>
					<h2 className="dark:text-white text-4xl mb-5 font-bold">Backend</h2>
                         <div>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">NodeJS</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Express</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Python</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Flask</span>
                         </div>
                         <br></br>
                         <div style={{marginTop: "-15px"}}>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">SQL</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">MySQL</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">PostgreSQL</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">MongoDB</span>  
                         </div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				<div className="md:w-1/4 md:mr-20 w-full text-center mb-24 md:mb-0">
					<img className="mx-auto h-48 mb-10" src={servicesIMG}></img>
					<h2 className="dark:text-white text-4xl mb-5 font-bold">Servicios</h2>
                         <div>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Docker</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Docker compose</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Kubernetes</span>
                         </div>
                         <br></br>
                         <div style={{marginTop: "-15px"}}> 
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">AWS</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Azure</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Oracle Cloud</span>  
                         </div>
				</div>
				<div className="md:w-1/4 w-full text-center mb-24 md:mb-0">
					<img className="mx-auto h-48 mb-10" src={toolsIMG}></img>
					<h2 className="dark:text-white text-4xl mb-5 font-bold">Herramientas</h2>
                         <div>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Git</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Github</span>
                              <span className="bg-indigo-500 p-1 rounded text-white mr-1">Postman</span>
                         </div>
				</div>
			</div>
		</div>
	);
};
