import React from "react";
import aboutMe from "../../public/img/undraw_code_review_re_woeb.svg"

export const AboutMe = () => {
	return (
		<div>
			{/* About me, with image in left and text in right */}
			<div className="flex flex-col-reverse md:flex-row items-center justify-center mt-48 md:mt-96">
				<div className="w-full md:w-1/2">
					{/* <ImageSVG /> */}
                         <img className="w-2/3 mx-auto md:ml-60" src={aboutMe} alt="about me" />
				</div>
				<div className=" w-full md:w-1/2 px-4 md:pr-64 py-8 md:py-16">
					<h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-14">
						Acerca de mi
					</h1>
					<p className="text-gray-600 mb-4 md:text-left text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed euismod, nisl nec tincidunt lacinia, nunc est
						aliquam nunc, eget aliquam massa nisl eget dolor. Sed
						euismod, nisl nec tincidunt lacinia, nunc est aliquam
						nunc, eget aliquam massa nisl eget dolor.
					</p>

					<p className="text-gray-600 mb-4 md:text-left text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed euismod, nisl nec tincidunt lacinia, nunc est
						aliquam nunc, eget aliquam massa nisl eget dolor. Sed
						euismod, nisl nec tincidunt lacinia, nunc est aliquam
						nunc, eget aliquam massa nisl eget dolor.
					</p>
				</div>
			</div>
		</div>
	);
};
