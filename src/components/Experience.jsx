import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack — Líder Técnico de Proyecto",
      company: "Influence Latam",
      location: "Santiago de Chile",
      period: "Marzo 2023 – Actualidad",
      description: [
        "Diseñé y desarrollé un sistema integral de gestión de campañas (proyecto de título) que proyecta duplicar el margen operativo (10% a 20%) al proporcionar visibilidad completa sobre el flujo de caja.",
        "Implementé cuatro módulos críticos (Cotizaciones, Cobranza, Lista de Influenciadores, Producción) que integran el ciclo financiero completo, con algoritmos para calcular métricas clave.",
        "Migré procesos críticos desde Google Sheets a una aplicación web modular con autenticación corporativa, gestionando 8,000+ influenciadores en 7 países.",
        "Diseñé una arquitectura en Google Cloud (App Engine + Cloud SQL) que permite gestionar eficientemente campañas con visibilidad en tiempo real del presupuesto.",
        "Creé benchmarks dinámicos basados en datos actuales que reemplazan indicadores estáticos de hace 3 años."
      ],
      skills: ["React.js", "Node.js", "GCP", "MySQL", "Autenticación", "Automatización"]
    },
    {
      title: "Profesor Sustituto de Desarrollo Web",
      company: "Universidad Diego Portales",
      location: "Santiago de Chile",
      period: "2023",
      description: [
        "Impartí clases teórico-prácticas presenciales a 34 estudiantes de ingeniería durante un mes, con un 90% de finalización exitosa de proyectos.",
        "Diseñé ejercicios prácticos enfocados en arquitecturas web modernas y desarrollo full stack aplicable a entornos reales."
      ],
      skills: ["Enseñanza", "Desarrollo Web", "Arquitectura", "Full Stack"]
    },
    {
      title: "Desarrollador Web",
      company: "Laboratorio Universidad Diego Portales",
      location: "Santiago de Chile",
      period: "Marzo 2022 - Diciembre 2022",
      description: [
        "Desarrollé funcionalidades clave para la aplicación web labeit.udp.cl, mejorando módulos CRUD y sistemas de administración de inventario.",
        "Implementé un sistema automatizado de notificaciones por correo que mejoró significativamente el proceso de préstamos de equipos."
      ],
      skills: ["CRUD", "Desarrollo Web", "Notificaciones", "Automatización"]
    },
    {
      title: "Ayudante de Desarrollo Web",
      company: "Universidad Diego Portales",
      location: "Santiago de Chile",
      period: "2022 – 2023",
      description: [
        "Dicté clases prácticas a 258 estudiantes durante varios semestres, con un enfoque hands-on que logró que el 85% aprobara el curso.",
        "Diseñé y evalué proyectos full stack que integraban APIs reales y bases de datos, preparando a los estudiantes para desafíos profesionales."
      ],
      skills: ["Enseñanza", "APIs", "Bases de Datos", "Full Stack"]
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experiencia Laboral
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-500 dark:text-gray-300">
              Mi trayectoria profesional y proyectos destacados
            </p>
          </div>
        </motion.div>

        <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3 md:ml-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full mt-1.5 -left-2 border border-white dark:border-gray-900" />
              <div className="mb-1 flex items-center">
                <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {experience.period}
                </time>
                <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded">
                  {experience.location}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="mb-3 text-base font-medium text-indigo-600 dark:text-indigo-400">
                {experience.company}
              </p>
              <ul className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
