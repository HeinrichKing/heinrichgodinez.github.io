function setLanguage(lang) {
    const text = {
        es: {
            role: "Científico de Datos",
            heroTitle: "Transformo datos en decisiones de negocio",
            heroText: "Portafolio profesional de proyectos de análisis de datos y machine learning enfocados en resolver problemas reales.",
            aboutTitle: "Sobre mí",
            aboutText: "Científico de datos con experiencia en análisis, modelos predictivos y visualización. He trabajado en proyectos de banca, transporte, seguros y energía.",
            projectsTitle: "Proyectos destacados",
            skillsTitle: "Habilidades"
        },
        en: {
            role: "Data Scientist",
            heroTitle: "Turning data into business decisions",
            heroText: "Professional portfolio of data analysis and machine learning projects focused on solving real-world problems.",
            aboutTitle: "About me",
            aboutText: "Data scientist with experience in analysis, predictive models and visualization across banking, transportation, insurance and energy industries.",
            projectsTitle: "Featured projects",
            skillsTitle: "Skills"
        }
    };

    document.getElementById("role").innerText = text[lang].role;
    document.getElementById("hero-title").innerText = text[lang].heroTitle;
    document.getElementById("hero-text").innerText = text[lang].heroText;
    document.getElementById("about-title").innerText = text[lang].aboutTitle;
    document.getElementById("about-text").innerText = text[lang].aboutText;
    document.getElementById("projects-title").innerText = text[lang].projectsTitle;
    document.getElementById("skills-title").innerText = text[lang].skillsTitle;
}