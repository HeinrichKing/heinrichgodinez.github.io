const texts = {
  es: {
    heroTitle: "Científico de Datos",
    heroSubtitle: "Transformo datos en decisiones de negocio",

    aboutTitle: "¡Bienvenido a mi Portafolio!",
    aboutText1: "Hola, mi nombre es Heinrich, soy Científico de Datos y Analista de Datos. Con formación sólida en Python, SQL, estadística y visualización de datos, y experiencia desarrollando proyectos basados en casos reales de negocio. A lo largo de mi formación y experiencia práctica he trabajado en procesos de limpieza, exploración, análisis y modelado de datos, así como en la creación de modelos predictivos y dashboards interactivos, enfocados en generar insights claros que apoyen la toma de decisiones.",

    aboutText2: "En este portafolio presento una selección de proyectos donde aplico técnicas de análisis exploratorio, machine learning y comunicación de resultados, utilizando herramientas como pandas, NumPy, scikit-learn, Matplotlib, Seaborn, Plotly y Streamlit. Mi enfoque combina pensamiento analítico, atención al detalle y comprensión del negocio, con el objetivo de transformar datos en soluciones prácticas y medibles. Busco oportunidades donde pueda seguir creciendo profesionalmente y aportar valor a equipos que utilicen los datos como motor estratégico.",

    projectsTitle: "Proyectos Destacados",

    churnText: "En este proyecto se desarrolló un modelo predictivo para identificar clientes con alto riesgo de abandono, utilizando técnicas de clasificación supervisada y manejo de desbalance de clases. Se aplicó análisis exploratorio, ingeniería de características, pipelines de modelado y evaluación con métricas como F1-score y AUC-ROC. El objetivo fue anticipar la pérdida de clientes y generar insights accionables que ayuden a la empresa a diseñar estrategias de retención más efectivas.",
    revenueText: "Proyecto enfocado en predecir los ingresos de restaurantes mediante técnicas de machine learning, a partir de variables operativas y de comportamiento del negocio. Se realizó limpieza y análisis exploratorio de datos, entrenamiento y comparación de modelos de regresión, y selección del mejor modelo según métricas de desempeño. Como resultado final, se desarrolló una aplicación interactiva con Streamlit, que permite a usuarios ingresar datos y obtener predicciones en tiempo real, facilitando la toma de decisiones estratégicas sobre ventas y planeación financiera.",
    gamesText: "Análisis de datos históricos de ventas de videojuegos con el objetivo de identificar patrones de éxito comercial a lo largo del tiempo. Se exploraron tendencias por región, plataforma, género y año de lanzamiento, aplicando análisis estadístico y visualizaciones claras para detectar factores que influyen en el rendimiento de ventas. Este proyecto demuestra la capacidad de transformar datos en insights estratégicos útiles para decisiones de marketing, lanzamiento de productos y planeación comercial en la industria del entretenimiento.",
    megaText: "Proyecto de análisis enfocado en determinar el plan telefónico más rentable para una compañía de telecomunicaciones, combinando análisis exploratorio de datos con pruebas estadísticas de hipótesis. Se evaluó el comportamiento de los usuarios en llamadas, mensajes y consumo de datos, comparando ingresos y costos entre planes. Los resultados permiten respaldar decisiones comerciales basadas en datos y optimizar la oferta de planes para maximizar la rentabilidad de la empresa.",

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

    churnText: "In this project, a predictive model was developed to identify customers at high risk of churn, using supervised classification techniques and class imbalance handling methods. Exploratory data analysis, feature engineering, modeling pipelines, and evaluation with metrics such as F1-score and AUC-ROC were applied. The objective was to anticipate customer loss and generate actionable insights to help the company design more effective retention strategies.",
    revenueText: "Project focused on predicting restaurant revenue using machine learning techniques based on operational and business behavior variables. Data cleaning and exploratory analysis were performed, along with training and comparison of regression models and selection of the best model based on performance metrics. As a final result, an interactive application was developed with Streamlit, allowing users to input data and obtain real-time predictions, supporting strategic decision-making in sales and financial planning.",
    gamesText: "Analysis of historical video game sales data with the goal of identifying patterns of commercial success over time. Trends were explored by region, platform, genre, and release year, applying statistical analysis and clear visualizations to detect factors that influence sales performance. This project demonstrates the ability to transform data into strategic insights useful for marketing decisions, product launches, and commercial planning in the entertainment industry.",
    megaText: "Analytical project focused on determining the most profitable mobile plan for a telecommunications company by combining exploratory data analysis with statistical hypothesis testing. User behavior in calls, messages, and data consumption was evaluated, comparing revenues and costs across plans. The results support data-driven business decisions and help optimize plan offerings to maximize the company’s profitability.",

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

  document.getElementById("churn-text").innerText = texts[lang].churnText;
  document.getElementById("rev-text").innerText = texts[lang].revenueText;
  document.getElementById("games-text").innerText = texts[lang].gamesText;
  document.getElementById("mega-text").innerText = texts[lang].megaText;

  // 👉 NUEVOS
  document.getElementById("music-title").innerText = texts[lang].musicTitle;
  document.getElementById("music-text").innerText = texts[lang].musicText;

  document.getElementById("insta-title").innerText = texts[lang].instaTitle;
  document.getElementById("insta-text").innerText = texts[lang].instaText;
}


