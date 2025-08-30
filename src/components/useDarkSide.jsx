import { useState, useEffect } from "react";

export default function useDarkSide() {
	// Inicializar el tema: por defecto 'dark' si no hay preferencia guardada
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) return savedTheme;
		// Nuevo comportamiento: por defecto 'dark'
		return "dark";
	});

	// El tema contrario al actual
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		// Aplicar el tema al elemento HTML
		const root = window.document.documentElement;

		// Eliminar las clases anteriores
		root.classList.remove("dark", "light");

		// Agregar la clase del tema actual
		root.classList.add(theme);

		// Guardar en localStorage
		localStorage.setItem("theme", theme);
	}, [theme]);

	return [colorTheme, setTheme];
}
