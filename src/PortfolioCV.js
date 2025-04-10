
import React from "react";

export default function PortfolioCV() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-700">Cristian Antonio Martínez Salgado</h1>
          <p className="text-xl mt-2">Desarrollador Front-End</p>
        </header>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Perfil Profesional</h2>
          <p>
            Desarrollador FrontEnd motivado por el aprendizaje constante y los desafíos del mundo tecnológico.
            Me caracterizo por mi creatividad, pensamiento analítico y habilidades colaborativas.
            Cuento con una fuerte orientación a objetivos, liderazgo natural y alta adaptabilidad.
            Mi enfoque es aportar valor con soluciones eficientes, funcionales y centradas en el usuario final.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Formación Académica</h2>
          <ul className="list-disc list-inside">
            <li><strong>Universidad Diego Portales</strong> – Técnico de Nivel Superior en Programación (2019 – 2021)</li>
            <li>Actualmente cursando último semestre de Ingeniería en Informática y Gestión</li>
            <li><strong>Escuela de Talentos Digitales Desafío LATAM</strong> – Desarrollador Front-End con React (2024 – 2025)</li>
            <li>Cursando últimos módulos para ser Desarrollador FullStack Pro</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Experiencia Profesional</h2>
          <ul className="space-y-2">
            <li><strong>DIDI & Freelance Advisor – Maipú (2025):</strong> Conductor de app y asesor en ventas para Comercial La Familia.</li>
            <li><strong>Comercial SEFA Mayorista SPA – Maipú (2022 – 2024):</strong> Administración general, gestión de personal y marketing digital.</li>
            <li><strong>Comercial LUFA SPA – Maipú (2019 – 2022):</strong> Desarrollo de procesos internos, asesoría tecnológica y digitalización.</li>
            <li><strong>BIM Computación – Las Condes (2017 – 2019):</strong> Soporte técnico y configuración de red.</li>
            <li><strong>GYG Soluciones Computacionales – Maipú (2010 – 2017):</strong> Servicio técnico propio en hardware y software.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Proyectos Personales</h2>
          <p>Especialización en análisis de datos con Power BI orientado a la toma de decisiones. Desarrollo de dashboards, reportes y soluciones para negocios pequeños y familiares.</p>
        </section>
        <section className="mb-6 grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Conocimientos Técnicos</h2>
            <ul className="list-disc list-inside">
              <li>HTML, CSS Avanzado, Bootstrap</li>
              <li>JavaScript, React, Node.js</li>
              <li>Git & GitHub</li>
              <li>SQL, PostgreSQL</li>
              <li>Gestión de APIs, Power BI</li>
              <li>Redes Computacionales</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Habilidades Profesionales</h2>
            <ul className="list-disc list-inside">
              <li>Capacidad de Análisis</li>
              <li>Gestión de Proyectos</li>
              <li>Metodologías Ágiles</li>
              <li>ITIL</li>
              <li>Comunicación efectiva</li>
              <li>Adaptabilidad y trabajo en equipo</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Idiomas</h2>
          <p>Español: Nativo | Inglés: Básico (en proceso de mejora)</p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b border-red-700 pb-1 mb-2">Contacto</h2>
          <p>Email: cms.desarrolladorfrontend@gmail.com</p>
          <p>LinkedIn: Cristian Martinez Salgado</p>
          <p>GitHub: <a className="text-blue-600 underline" href="https://github.com/cms21funk" target="_blank" rel="noreferrer">cms21funk</a></p>
        </section>
      </div>
    </div>
  );
}
