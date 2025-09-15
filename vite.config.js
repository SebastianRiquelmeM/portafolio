import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					"framer-motion": ["framer-motion"],
					"react-vendor": ["react", "react-dom"],
				},
			},
		},
		// Optimización para SEO
		assetsDir: "assets",
		sourcemap: false,
	},
	// Preload critical assets
	optimizeDeps: {
		include: ["react", "react-dom", "framer-motion"],
	},
});
