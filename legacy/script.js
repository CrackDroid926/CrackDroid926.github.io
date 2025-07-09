/**
 * BitForge - Aplicación de proyectos y descargas
 * Versión optimizada con mejoras de rendimiento, manejo de errores y nuevas características
 */

// Constantes de configuración
const CONFIG = {
    DEFAULT_LANGUAGE: 'es',
    THEME_KEY: 'bitforge-theme',
    LANGUAGE_KEY: 'bitforge-language',
    PROJECTS_PER_PAGE: 6,
    DEBOUNCE_DELAY: 300
};

// Estado global de la aplicación
const state = {
    language: CONFIG.DEFAULT_LANGUAGE,
    darkMode: false,
    activeTag: null,
    searchQuery: '',
    currentPage: 1,
    isLoading: false
};

// Cache de elementos DOM
const DOM = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.querySelector('#theme-toggle i'),
    languageSelector: document.getElementById('language-selector'),
    projectsContainer: document.getElementById('projects-container'),
    headerTitle: document.querySelector('header h1'),
    headerSubtitle: document.querySelector('header p'),
    projectsTitle: document.querySelector('#projects h2'),
    socialTitle: document.querySelector('#social h2'),
    navLinks: document.querySelectorAll('nav a'),
    searchInput: document.getElementById('search-input'),
    tagContainer: document.getElementById('tag-container'),
    downloadModal: document.getElementById('download-modal'),
    movieModal: document.getElementById('movie-modal'),
    loadingScreen: document.getElementById('loading-screen'),
    toastContainer: document.getElementById('toast-container'),
    movieBtn: document.getElementById('minecraft-movie-btn')
};

// Datos de proyectos (simplificado para el ejemplo)
const projects = [
    {
        id: 1,
        title: {
            en: "Minecraft Java Edition 1.12.2 (PC)",
            es: "Minecraft Java Edition 1.12.2 (para PC)"
        },
        description: {
            en: "Optimize Minecraft Java Edition by improving performance, reducing lag, and increasing FPS.",
            es: "Optimiza Minecraft Java Edition mejorando el rendimiento y reduciendo el lag."
        },
        image: "https://raw.githubusercontent.com/BitForge2/BitForge2.github.io/main/imagen/minecraft_zerolag.avif",
        downloadLink: "https://github.com/Edward-e2o5h/ZeroLag-MC",
        tags: ["minecraft", "pc", "java"]
    },
	{
        id: 2,
        title: {
			en: "Minecraft Bedrock 1.21.72 (Mobile)",
            es: "Minecraft Bedrock 1.21.72 (para Móvil)"
        },
		description: {
			en: "The smoothest and most cross-platform version of Minecraft. Runs like butter on console, mobile, PC and more. Build, survive, and explore on public servers or with friends, no matter the device.",
			es: "La versión más fluida y multiplataforma de Minecraft. Corre como mantequilla en consola, móvil, PC y más. Construye, sobrevive y explora en servidores públicos o con amigos sin importar el dispositivo."
		},
        image: "https://raw.githubusercontent.com/BitForge2/BitForge2.github.io/refs/heads/main/imagen/minecraft_bedrock.avif",
        downloadLink: "https://www.mediafire.com/file/xwny13gm0ic7ygw/Minecraft_1.21.72.apk/file"
    },
	{
        id: 3,
		title: {
            en: "OptiSupermium 132 (PC)",
            es: "OptiSupermium 132 (para PC)"
        },
        description: {
            en: "Supermium is a Chromium-based browser, lightweight and fast, ideal for older computers. It works on Windows 7, XP, and newer versions. It offers great compatibility, optimization, and is fully portable.",
            es: "Supermium es un navegador basado en Chromium, ligero y rápido, ideal para computadoras antiguas. Funciona en Windows 7, XP y versiones más nuevas. Ofrece buena compatibilidad, optimización y es totalmente portable."
		},
        image: "https://github.com/BitForge2/BitForge2.github.io/raw/refs/heads/main/imagen/optisupermium.avif",
        downloadLink: "https://www.mediafire.com/file/twxzfjriqgcqx40/OptiSupermium.rar/file"
    },
	{
		id: 4,
        title: {
			en: "Minecraft Beta 1.21.80.25 (Mobile)",
            es: "Minecraft Beta 1.21.80.25 (para Móvil)"
        },
        description: {
            en: "Minecraft Beta/Preview 1.21.80.25 brings new improvements for the upcoming 1.21 update. Bugs have been fixed, performance enhanced, and new features are being fine-tuned. Perfect for players who want to test new content ahead of time.",
			es: "Minecraft Beta/Preview 1.21.80.25 trae nuevas mejoras para la actualización 1.21. Se han corregido errores, mejorado el rendimiento y se siguen afinando detalles de las pruebas del nuevo contenido. Ideal para jugadores que quieren probar lo nuevo antes de tiempo."   
		},
        image: "https://github.com/BitForge2/BitForge2.github.io/raw/refs/heads/main/imagen/MinecraftBeta.avif",
		downloadLink: "https://www.mediafire.com/file/nj6keqgdfdxj6uw/MCPreview.apk/file"
    },
	{
        id: 5,
        title: {
            en: "WorldBox Premium (Mobile)",
			es: "WorldBox Premium (para Móvil)"
		},
        description: {
			en: "Create worlds, build civilizations, or destroy everything with meteors, zombies, and nukes. You rule. You decide. Be a god on your phone!",
            es: "Crea mundos, construye civilizaciones o destrúyelo todo con meteoritos, zombis y bombas nucleares. Tú mandas. Tú decides. ¡Juega a ser Dios desde tu móvil!"
        },
        image: "https://github.com/BitForge2/BitForge2.github.io/raw/refs/heads/main/imagen/worldbox.avif",
        downloadLink: "https://www.mediafire.com/file/m1qz3zzdsdpyt4i/WorldBox.apk/file"
    },
	{
        id: 6,
        title: {
            en: "SpaceFlight Simulator (Mobile)",
            es: "SpaceFlight Simulator (para Móvil)"
        },
        description: {
            en: "Build your own rockets, launch into space, and explore the solar system with real physics! Design. Launch. Discover. The universe is in your pocket!",
            es: "Construye tus propios cohetes, lánzalos al espacio y explora el sistema solar con física realista. Diseña. Lanza. Descubre. ¡El universo está en tu bolsillo!"
        },
        image: "https://github.com/BitForge2/BitForge2.github.io/raw/refs/heads/main/imagen/spaceflight.avif",
        downloadLink: "https://www.mediafire.com/file/gg4nxfbxpp24y56/Spaceflight_Simulator.apk/file"
    },
	{
        id: 7,
		title: {
            en: "Stellarium Plus (Mobile)",
            es: "Stellarium Plus (para Móvil)"
        },
        description: {
            en: "Stellarium Plus is a premium mobile planetarium app that lets you explore stars, planets, and constellations in real time with amazing detail and accuracy.",
            es: "Stellarium Plus es una app planetario premium para móviles que te permite explorar estrellas, planetas y constelaciones en tiempo real con gran detalle y precisión."
        },
        image: "https://stellarium.org/img/slideshow/slide-3.jpg",
        downloadLink: "https://www.mediafire.com/file/iw2wi7l5wm06ioa/Stellarium_%252B.apk/file"
    },
	{
        id: 8,
		title: {
            en: "Unturned 3.9.9.5 (PC)",
            es: "Unturned 3.9.9.5 (para PC)"
        },
        description: {
            en: "Unturned is a survival game in a post-apocalyptic world where you face zombies, manage resources, and build shelters. In version 3.9.9.5, it offers a sandbox experience where you can explore, gather, and improve your survival skills. Despite its simple graphics, the game has deep, strategic gameplay. It includes improvements in optimization and balance for a better experience.",
            es: "Unturned es un juego de supervivencia en un mundo post-apocalíptico en el que debes enfrentar zombis, gestionar recursos y construir refugios. En la versión 3.9.9.5, ofrece una experiencia sandbox donde puedes explorar, recolectar y mejorar tus habilidades para sobrevivir. A pesar de sus gráficos simples, el juego tiene una jugabilidad profunda y estratégica. Incluye mejoras en optimización y balance para ofrecer una mejor experiencia."
        },
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/304930/capsule_616x353.jpg?t=1734630748",
        downloadLink: "https://www.mediafire.com/file/tzzooncdh82djgw/Unturned_3.9.9.5.7z/file"
    },
	{
        id: 9,
		title: {
            en: "Papers Please 1.1.65 (PC)",
            es: "Papers Please 1.1.65 (para PC)"
        },
        description: {
            en: "Papers, Please is a simulation game where you work as an immigration officer in the fictional country of Arstotzka. Your job is to inspect documents, catch inconsistencies, and decide who can enter and who must be turned away. Every choice affects your pay, your family… and the fate of many lives.",
            es: "Papers, Please es un juego de simulación en el que trabajas como inspector de inmigración en un país ficticio llamado Arstotzka. Tu tarea es revisar documentos, detectar inconsistencias y decidir quién puede entrar y quién debe ser rechazado. Cada decisión impacta tu salario, tu familia... y el destino de muchas vidas."
        },
        image: "https://games-b26f.kxcdn.com/wp-content/uploads/2018/02/PapersPlease.jpg",
        downloadLink: "https://www.mediafire.com/file/jyymgpoic1dfebt/PapersPlease.rar/file"
    },
	{
        id: 10,
		title: {
            en: "Universe Sandbox (PC)",
            es: "Universe Sandbox (para PC)"
        },
        description: {
            en: "Universe Sandbox 2 is a space and gravity simulator that lets you create and destroy anything in the universe. Experiment with physics, collisions, and climate in an intuitive and powerful way. It's great for learning about space or just having fun with cosmic destruction.",
            es: "Universe Sandbox 2 es un simulador de espacio y gravedad que te permite crear y destruir cualquier cosa en el universo. Experimenta con la física, las colisiones y el clima de forma intuitiva y potente. Es ideal para aprender sobre el espacio o simplemente divertirte con la destrucción cósmica."
        },
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/230290/capsule_616x353.jpg?t=1742238758",
        downloadLink: "https://www.mediafire.com/file/1azps9jvyaxo56u/Universe.Sandbox.2.rar/file"
    }
];

// Servidores de descarga
const downloadServers = {
    "WorldBox Premium (Mobile)": [
        {
            name: "GoFile",
            url: "https://gofile.io/d/Ult1Et",
            icon: "fab fa-gofile",
            description: "Descarga Alternativa"
        },
        {
            name: "MediaFire",
            url: "https://www.mediafire.com/file/m1qz3zzdsdpyt4i/WorldBox.apk/file",
            icon: "fas fa-cloud-download-alt",
            description: "Descarga directa"
        }
    ],
    // ... (otros servidores para diferentes proyectos)
};

// Textos traducibles
const translations = {
    en: {
        "title": "BitForge",
        "subtitle": "Access my projects and the latest releases",
        "projects": "My Projects",
        "social": "Social Media",
        "download": "Download",
        "search_placeholder": "Search projects...",
        "select_server": "Select download server",
        "direct_download": "Direct Download",
        "watch_movie": "Watch A Minecraft Movie",
        "dark_mode": "Dark mode",
        "light_mode": "Light mode",
        "loading": "Loading...",
        "error": "An error occurred",
        "no_results": "No projects found",
        "all_tags": "All"
    },
    es: {
        "title": "BitForge",
        "subtitle": "Accede a mis proyectos y los lanzamientos más recientes",
        "projects": "Mis Proyectos",
        "social": "Redes Sociales",
        "download": "Descargar",
        "search_placeholder": "Buscar proyectos...",
        "select_server": "Selecciona servidor de descarga",
        "direct_download": "Descarga directa",
        "watch_movie": "Ver Una Película Minecraft",
        "dark_mode": "Modo oscuro",
        "light_mode": "Modo claro",
        "loading": "Cargando...",
        "error": "Ocurrió un error",
        "no_results": "No se encontraron proyectos",
        "all_tags": "Todos"
    },
    // ... (otros idiomas)
};

// Worker para búsquedas (simulado para este ejemplo)
class SearchWorker {
    constructor() {
        this.cache = {};
    }

    search({ projects, query, activeTag, language }) {
        const cacheKey = `${query}-${activeTag}-${language}`;
        
        if (this.cache[cacheKey]) {
            return this.cache[cacheKey];
        }

        const results = projects.filter(project => {
            const title = project.title[language].toLowerCase();
            const description = project.description[language].toLowerCase();
            const matchesQuery = !query || 
                              title.includes(query) || 
                              description.includes(query);
            const matchesTag = !activeTag || 
                             project.tags.includes(activeTag.toLowerCase());
            
            return matchesQuery && matchesTag;
        });

        this.cache[cacheKey] = results;
        return results;
    }
}

const searchWorker = new SearchWorker();

// Función principal de inicialización
async function init() {
    try {
        showLoading();
        
        // Cargar configuración
        loadSettings();
        
        // Configurar eventos
        setupEventListeners();
        
        // Precargar imágenes
        await preloadImages();
        
        // Renderizar contenido inicial
        render();
        
        // Ocultar carga después de un mínimo de 500ms para mejor UX
        setTimeout(hideLoading, 500);
        
    } catch (error) {
        console.error("Initialization error:", error);
        showToast(translations[state.language].error, 'error');
        hideLoading();
    }
}

// Carga de configuración desde localStorage
function loadSettings() {
    // Tema
    const savedTheme = localStorage.getItem(CONFIG.THEME_KEY);
    state.darkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
    
    // Idioma
    const savedLanguage = localStorage.getItem(CONFIG.LANGUAGE_KEY);
    const browserLanguage = navigator.language.substring(0, 2);
    
    if (savedLanguage && translations[savedLanguage]) {
        state.language = savedLanguage;
    } else if (translations[browserLanguage]) {
        state.language = browserLanguage;
    }
    
    DOM.languageSelector.value = state.language;
}

// Configuración de event listeners
function setupEventListeners() {
    // Tema
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // Idioma
    DOM.languageSelector.addEventListener('change', (e) => {
        state.language = e.target.value;
        localStorage.setItem(CONFIG.LANGUAGE_KEY, state.language);
        render();
    });
    
    // Búsqueda con debounce
    DOM.searchInput.addEventListener('input', debounce(() => {
        state.searchQuery = DOM.searchInput.value.toLowerCase();
        renderProjects();
    }, CONFIG.DEBOUNCE_DELAY));
    
    // Cerrar modales
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.downloadModal.style.display = 'none';
            DOM.movieModal.style.display = 'none';
        });
    });
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === DOM.downloadModal) {
            DOM.downloadModal.style.display = 'none';
        }
        if (e.target === DOM.movieModal) {
            DOM.movieModal.style.display = 'none';
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            DOM.downloadModal.style.display = 'none';
            DOM.movieModal.style.display = 'none';
        }
    });
    
    // Botón de película
    DOM.movieBtn.addEventListener('click', () => {
        DOM.movieModal.style.display = 'block';
    });
}

// Función debounce para optimizar búsquedas
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
}

// Cambiar tema
function toggleTheme() {
    state.darkMode = !state.darkMode;
    localStorage.setItem(CONFIG.THEME_KEY, state.darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
}

// Actualizar icono del tema
function updateThemeIcon() {
    DOM.themeIcon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
    DOM.themeToggle.setAttribute('title', 
        state.darkMode ? translations[state.language].light_mode : 
                         translations[state.language].dark_mode);
}

// Precargar imágenes
function preloadImages() {
    const promises = projects.map(project => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = project.image;
            img.onload = resolve;
            img.onerror = reject;
        });
    });
    
    return Promise.all(promises);
}

// Renderizar toda la aplicación
function render() {
    updateTexts();
    renderProjects();
    renderTags();
}

// Actualizar textos traducidos
function updateTexts() {
    const t = translations[state.language];
    
    DOM.headerTitle.textContent = t.title;
    DOM.headerSubtitle.textContent = t.subtitle;
    DOM.projectsTitle.textContent = t.projects;
    DOM.socialTitle.textContent = t.social;
    DOM.searchInput.placeholder = t.search_placeholder;
    DOM.movieBtn.innerHTML = `<i class="fas fa-film"></i> ${t.watch_movie}`;
    
    // Actualizar textos de navegación
    DOM.navLinks[0].textContent = t.projects;
    DOM.navLinks[1].textContent = t.social;
}

// Renderizar proyectos
function renderProjects() {
    try {
        const filteredProjects = searchWorker.search({
            projects,
            query: state.searchQuery,
            activeTag: state.activeTag,
            language: state.language
        });
        
        if (filteredProjects.length === 0) {
            showNoResults();
            return;
        }
        
        const fragment = document.createDocumentFragment();
        
        filteredProjects.forEach(project => {
            const card = createProjectCard(project);
            fragment.appendChild(card);
        });
        
        DOM.projectsContainer.innerHTML = '';
        DOM.projectsContainer.appendChild(fragment);
        setupDownloadButtons();
        
    } catch (error) {
        console.error("Error rendering projects:", error);
        showToast(translations[state.language].error, 'error');
    }
}

// Mostrar mensaje cuando no hay resultados
function showNoResults() {
    DOM.projectsContainer.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <p>${translations[state.language].no_results}</p>
        </div>
    `;
}

// Crear tarjeta de proyecto
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('role', 'listitem');
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" 
                 alt="${project.title[state.language]}" 
                 loading="lazy"
                 onerror="this.src='fallback-image.jpg'">
        </div>
        <div class="project-info">
            <h3>${project.title[state.language]}</h3>
            <p>${project.description[state.language]}</p>
            <button class="download-btn" 
                    data-project="${project.title.en}" 
                    aria-label="${translations[state.language].download} ${project.title[state.language]}">
                ${translations[state.language].download}
            </button>
        </div>
    `;
    
    return card;
}

// Configurar botones de descarga
function setupDownloadButtons() {
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectTitle = this.getAttribute('data-project');
            showDownloadModal(projectTitle);
        });
    });
}

// Mostrar modal de descarga
function showDownloadModal(projectTitle) {
    try {
        const modalTitle = document.getElementById('modal-title');
        const optionsContainer = document.getElementById('download-options');
        
        modalTitle.textContent = `
            ${translations[state.language].select_server}: 
            ${projects.find(p => p.title.en === projectTitle)?.title[state.language] || projectTitle}
        `;
        
        optionsContainer.innerHTML = '';
        
        const options = downloadServers[projectTitle] || [];
        
        if (options.length === 0) {
            const project = projects.find(p => p.title.en === projectTitle);
            if (project) {
                addDownloadOption(optionsContainer, {
                    name: translations[state.language].direct_download,
                    url: project.downloadLink,
                    icon: "fas fa-download",
                    description: project.title[state.language]
                });
            }
        } else {
            options.forEach(option => {
                addDownloadOption(optionsContainer, option);
            });
        }
        
        DOM.downloadModal.style.display = 'block';
        
    } catch (error) {
        console.error("Error showing download modal:", error);
        showToast(translations[state.language].error, 'error');
    }
}

// Añadir opción de descarga al modal
function addDownloadOption(container, option) {
    const optionElement = document.createElement('a');
    optionElement.href = option.url;
    optionElement.target = '_blank';
    optionElement.rel = 'noopener noreferrer';
    optionElement.className = 'download-option';
    optionElement.setAttribute('role', 'listitem');
    
    optionElement.innerHTML = `
        <i class="${option.icon}" aria-hidden="true"></i>
        <div class="option-info">
            <h4>${option.name}</h4>
            <p>${option.description}</p>
        </div>
        <i class="fas fa-external-link-alt" aria-hidden="true"></i>
    `;
    
    container.appendChild(optionElement);
}

// Renderizar tags
function renderTags() {
    try {
        const tags = getAllTags();
        const t = translations[state.language];
        
        DOM.tagContainer.innerHTML = '';
        
        // Añadir opción "Todos"
        const allTag = document.createElement('span');
        allTag.className = 'tag' + (!state.activeTag ? ' active' : '');
        allTag.textContent = t.all_tags;
        allTag.addEventListener('click', () => {
            state.activeTag = null;
            renderProjects();
            document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
            allTag.classList.add('active');
        });
        DOM.tagContainer.appendChild(allTag);
        
        // Añadir tags específicos
        tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag' + (state.activeTag === tag ? ' active' : '');
            tagElement.textContent = tag;
            tagElement.addEventListener('click', () => {
                if (state.activeTag === tag) {
                    state.activeTag = null;
                    tagElement.classList.remove('active');
                    allTag.classList.add('active');
                } else {
                    state.activeTag = tag;
                    document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
                    tagElement.classList.add('active');
                }
                renderProjects();
            });
            DOM.tagContainer.appendChild(tagElement);
        });
        
    } catch (error) {
        console.error("Error rendering tags:", error);
    }
}

// Obtener todos los tags únicos
function getAllTags() {
    const tags = new Set();
    
    projects.forEach(project => {
        project.tags?.forEach(tag => {
            tags.add(tag);
        });
    });
    
    return Array.from(tags).sort();
}

// Mostrar notificación toast
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    
    const icon = type === 'error' ? 'exclamation-circle' : 
                type === 'success' ? 'check-circle' : 'info-circle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}" aria-hidden="true"></i>
        <span>${message}</span>
    `;
    
    DOM.toastContainer.appendChild(toast);
    
    // Auto-eliminar después de 5 segundos
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Mostrar pantalla de carga
function showLoading() {
    DOM.loadingScreen.style.opacity = '1';
    DOM.loadingScreen.style.visibility = 'visible';
}

// Ocultar pantalla de carga
function hideLoading() {
    DOM.loadingScreen.style.opacity = '0';
    DOM.loadingScreen.style.visibility = 'hidden';
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// Manejar errores no capturados
window.addEventListener('error', (event) => {
    console.error("Uncaught error:", event.error);
    showToast(translations[state.language].error, 'error');
});