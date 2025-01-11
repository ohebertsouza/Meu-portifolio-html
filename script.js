const skills = [
    { name: "Node.JS", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML", level: 100 },
    { name: "CSS", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Git", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Azure", level: 70 }
];

const projects = [
    {
        id: "spiderman",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://ohebertsouza.github.io/Dio-Multiverso-SpiderMan/",
        githubUrl: "https://github.com/ohebertsouza/Dio-Multiverso-SpiderMan"
    },
    {
        id: "piano",
        technologies: ["HTML", "Javascript", "CSS"],
        liveUrl: "https://ohebertsouza.github.io/Projeto-Simulador-Piano-Dio/",
        githubUrl: "https://github.com/ohebertsouza/Projeto-Simulador-Piano-Dio"
    },
    {
        id: "memory",
        technologies: ["Javascript", "CSS", "HTML"],
        liveUrl: "https://ohebertsouza.github.io/Projeto-Jogo-da-Memoria/",
        githubUrl: "https://github.com/ohebertsouza/Projeto-Jogo-da-Memoria"
    },
    {
        id: "stranger",
        technologies: ["Javascript", "CSS", "HTML"],
        liveUrl: "https://ohebertsouza.github.io/Mundo-Invertido-Projeto-Dio/",
        githubUrl: "https://github.com/ohebertsouza/Mundo-Invertido-Projeto-Dio"
    }
];

const translations = {
    en: {
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "intro.role": "Full-stack Developer",
        "intro.description": "Passionate about creating efficient, scalable, and user-friendly web applications. Specializing in HTML, Javascript, React, AI and cloud technologies.",
        "skills.title": "Skills",
        "projects.title": "Projects",
        "projects.liveDemo": "Live Demo",
        "projects.github": "GitHub",
        "contact.title": "Contact",
        "contact.description": "Feel free to reach out to me for any inquiries or collaboration opportunities.",
        "contact.form.name": "Your Name",
        "contact.form.email": "Your Email",
        "contact.form.message": "Your Message",
        "contact.form.submit": "Send Message",
        "projects.spiderman.title": "Spider-Man Multiverse Site",
        "projects.spiderman.description": "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
        "projects.piano.title": "Piano Simulator",
        "projects.piano.description": "A Real piano Simulator made to practice Piano Online",
        "projects.memory.title": "Memory Game",
        "projects.memory.description": "A Memory game that you can play with friends or alone",
        "projects.stranger.title": "Stranger Things Website",
        "projects.stranger.description": "This is a Stranger Things website"
    },
    "pt-BR": {
        "nav.home": "Início",
        "nav.projects": "Projetos",
        "nav.contact": "Contato",
        "intro.role": "Desenvolvedor Full-stack",
        "intro.description": "Apaixonado por criar aplicações web eficientes, escaláveis e amigáveis. Especializado em HTML, Javascript, React, IA e tecnologias em nuvem.",
        "skills.title": "Habilidades",
        "projects.title": "Projetos",
        "projects.liveDemo": "Demo ao Vivo",
        "projects.github": "GitHub",
        "contact.title": "Contato",
        "contact.description": "Sinta-se à vontade para entrar em contato comigo para qualquer consulta ou oportunidade de colaboração.",
        "contact.form.name": "Seu Nome",
        "contact.form.email": "Seu Email",
        "contact.form.message": "Sua Mensagem",
        "contact.form.submit": "Enviar Mensagem",
        "projects.spiderman.title": "Site Multiverso Homem-Aranha",
        "projects.spiderman.description": "Uma solução de e-commerce full-stack com React, Node.js e MongoDB.",
        "projects.piano.title": "Simulador de Piano",
        "projects.piano.description": "Um simulador de piano real feito para praticar piano online",
        "projects.memory.title": "Jogo da Memória",
        "projects.memory.description": "Um jogo da memória que você pode jogar com amigos ou sozinho",
        "projects.stranger.title": "Site de Stranger Things",
        "projects.stranger.description": "Este é um site de Stranger Things"
    }
};

let currentLang = 'en';

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pt-BR' : 'en';
    translatePage();
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'PT-BR' : 'EN';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function renderSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.textContent = skill.name;
        skillElement.addEventListener('click', () => showSkillDetails(skill));
        skillsContainer.appendChild(skillElement);
    });
}

function showSkillDetails(skill) {
    const skillDetails = document.getElementById('skill-details');
    const selectedSkill = document.getElementById('selected-skill');
    const progressBar = skillDetails.querySelector('.progress');

    selectedSkill.textContent = skill.name;
    progressBar.style.width = `${skill.level}%`;
    skillDetails.classList.remove('hidden');
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3 data-translate="projects.${project.id}.title">${translations[currentLang][`projects.${project.id}.title`]}</h3>
            <p data-translate="projects.${project.id}.description">${translations[currentLang][`projects.${project.id}.description`]}</p>
            <div class="project-links">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" data-translate="projects.liveDemo">Live Demo</a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" data-translate="projects.github">GitHub</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    translatePage();

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
    });
});