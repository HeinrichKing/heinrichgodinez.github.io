const texts = {
  es: {
    heroTitle: "Científico de Datos",
    heroSubtitle: "Transformo datos en decisiones de negocio",
    aboutTitle: "Sobre mí",
    aboutText: "Científico de datos con experiencia en análisis, machine learning y estadística, enfocado en resolver problemas reales de negocio.",
    projectsTitle: "Proyectos Destacados",
    churn: "Modelo de machine learning para identificar clientes con alto riesgo de abandono.",
    revenue: "Análisis de datos para estimar ingresos y apoyar decisiones estratégicas.",
    games: "Identificación de patrones que determinan el éxito comercial de videojuegos.",
    mega: "Análisis estadístico para recomendar el plan telefónico más rentable."
  },
  en: {
    heroTitle: "Data Scientist",
    heroSubtitle: "Turning data into business decisions",
    aboutTitle: "About me",
    aboutText: "Data scientist with experience in analysis, machine learning and statistics focused on solving real business problems.",
    projectsTitle: "Featured Projects",
    churn: "Machine learning model to identify customers with high churn risk.",
    revenue: "Data analysis to estimate revenue and support strategic decisions.",
    games: "Identifying key factors behind video game commercial success.",
    mega: "Statistical analysis to recommend the most profitable telecom plan."
  }
};

function switchLang(lang) {
  document.getElementById("hero-title").innerText = texts[lang].heroTitle;
  document.getElementById("hero-subtitle").innerText = texts[lang].heroSubtitle;
  document.getElementById("about-title").innerText = texts[lang].aboutTitle;
  document.getElementById("about-text").innerText = texts[lang].aboutText;
  document.getElementById("projects-title").innerText = texts[lang].projectsTitle;
  document.getElementById("churn-text").innerText = texts[lang].churn;
  document.getElementById("rev-text").innerText = texts[lang].revenue;
  document.getElementById("games-text").innerText = texts[lang].games;
  document.getElementById("mega-text").innerText = texts[lang].mega;
}

