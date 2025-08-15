import { useState, useEffect } from "react";

export default function useDarkSide() {
	// Inicializar el tema desde localStorage o usar preferencia del sistema
	const [theme, setTheme] = useState(() => {
		// Comprobar si hay un tema guardado en localStorage
		const savedTheme = localStorage.getItem("theme");
		
		if (savedTheme) {
			return savedTheme;
		}
		
		// Si no hay tema guardado, usar preferencia del sistema
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}
		
		return "light";
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
