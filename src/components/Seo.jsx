import { useEffect } from "react";

const Seo = ({
	title = "Sebastián Riquelme | Desarrollador Full Stack",
	description = "Ingeniero Civil en Informática especializado en transformar procesos manuales en sistemas digitales escalables.",
	image = "/img/og-image.jpg",
	url = "https://sebastianriquelme.cl/",
}) => {
	useEffect(() => {
		// Actualizar título dinámicamente
		document.title = title;

		// Actualizar meta description
		const metaDescription = document.querySelector(
			'meta[name="description"]'
		);
		if (metaDescription) {
			metaDescription.setAttribute("content", description);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content = description;
			document.head.appendChild(meta);
		}

		// Actualizar Open Graph
		const ogTitle = document.querySelector('meta[property="og:title"]');
		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		const ogUrl = document.querySelector('meta[property="og:url"]');
		const ogImage = document.querySelector('meta[property="og:image"]');

		if (ogTitle) ogTitle.setAttribute("content", title);
		if (ogDescription) ogDescription.setAttribute("content", description);
		if (ogUrl) ogUrl.setAttribute("content", url);
		if (ogImage) ogImage.setAttribute("content", image);
	}, [title, description, image, url]);

	return null;
};

export default Seo;
