const texts = {
  es: {
    heroTitle: "Científico de Datos",
    heroSubtitle: "Transformo datos en decisiones de negocio",

    aboutTitle: "¡Bienvenido a mi Portafolio!",
    aboutText1: "Hola, mi nombre es Heinrich, soy Científico de Datos y Analista de Datos. Con formación sólida en Python, SQL, estadística y visualización de datos, y experiencia desarrollando proyectos basados en casos reales de negocio. A lo largo de mi formación y experiencia práctica he trabajado en procesos de limpieza, exploración, análisis y modelado de datos, así como en la creación de modelos predictivos y dashboards interactivos, enfocados en generar insights claros que apoyen la toma de decisiones.",

    aboutText2: "En este portafolio presento una selección de proyectos donde aplico técnicas de análisis exploratorio, machine learning y comunicación de resultados, utilizando herramientas como pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Plotly y Streamlit. Mi enfoque combina pensamiento analítico, atención al detalle y comprensión del negocio, con el objetivo de transformar datos en soluciones prácticas y medibles. Busco oportunidades donde pueda seguir creciendo profesionalmente y aportar valor a equipos que utilicen los datos como motor estratégico.",

    projectsTitle: "Proyectos Destacados",

    churn: "Modelo predictivo para identificar clientes con alto riesgo de abandono mediante machine learning.",
    revenue: "Predicción de ingresos de restaurantes usando modelos de regresión y una app interactiva.",
    games: "Análisis de ventas de videojuegos para identificar patrones de éxito comercial.",
    mega: "Análisis estadístico para determinar el plan telefónico más rentable.",

    // 👉 NUEVOS
    musicTitle: "🎧 Musical Habits Analysis",
    musicText: "Proyecto de análisis de datos enfocado en comparar los hábitos de escucha musical entre distintas ciudades, utilizando datos reales de una plataforma de streaming. Se realizó limpieza de datos, análisis exploratorio y validación de hipótesis estadísticas para identificar diferencias en preferencias musicales.",

    instaTitle: "🛒 Instacart Customer Behavior Analysis",
    instaText: "Análisis del comportamiento de compra de clientes de Instacart, enfocado en identificar patrones de consumo, frecuencia de pedidos y productos más demandados. Incluye limpieza, preparación y exploración de datos para generar insights accionables."
  },

  en: {
    heroTitle: "Data Scientist",
    heroSubtitle: "Turning data into business decisions",

    aboutTitle: "Welcome to my Portfolio!",
    aboutText1: "Hi, my name is Heinrich. I am a Data Scientist and Data Analyst with a strong background in Python, SQL, statistics, and data visualization, and experience working on real-world business projects. I have worked on data cleaning, exploratory analysis, modeling, and the development of predictive models and interactive dashboards to support data-driven decision making.",

    aboutText2: "This portfolio showcases a selection of projects where I apply exploratory data analysis, machine learning, and effective communication of results using tools such as pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Plotly, and Streamlit. My approach combines analytical thinking and business understanding to transform data into practical and measurable solutions.",

    projectsTitle: "Featured Projects",

    churn: "Predictive model to identify customers with high churn risk using machine learning.",
    revenue: "Restaurant revenue prediction using regression models and an interactive app.",
    games: "Video game sales analysis to identify key success factors.",
    mega: "Statistical analysis to determine the most profitable mobile plan.",

    // 👉 NUEVOS
    musicTitle: "🎧 Musical Habits Analysis",
    musicText: "Data analysis project focused on comparing music listening habits across different cities using real streaming platform data. It includes data cleaning, exploratory analysis, and hypothesis testing to identify differences in musical preferences.",

    instaTitle: "🛒 Instacart Customer Behavior Analysis",
    instaText: "Customer behavior analysis project focused on identifying purchasing patterns, order frequency, and most demanded products on Instacart. Includes full data cleaning and exploratory analysis to generate actionable insights."
  }
};

function switchLang(lang) {
  document.getElementById("hero-title").innerText = texts[lang].heroTitle;
  document.getElementById("hero-subtitle").innerText = texts[lang].heroSubtitle;

  document.getElementById("about-title").innerText = texts[lang].aboutTitle;
  document.getElementById("about-text-1").innerText = texts[lang].aboutText1;
  document.getElementById("about-text-2").innerText = texts[lang].aboutText2;

  document.getElementById("projects-title").innerText = texts[lang].projectsTitle;

  document.getElementById("churn-text").innerText = texts[lang].churn;
  document.getElementById("rev-text").innerText = texts[lang].revenue;
  document.getElementById("games-text").innerText = texts[lang].games;
  document.getElementById("mega-text").innerText = texts[lang].mega;

  // 👉 NUEVOS
  document.getElementById("music-title").innerText = texts[lang].musicTitle;
  document.getElementById("music-text").innerText = texts[lang].musicText;

  document.getElementById("insta-title").innerText = texts[lang].instaTitle;
  document.getElementById("insta-text").innerText = texts[lang].instaText;
}
