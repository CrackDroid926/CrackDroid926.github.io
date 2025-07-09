/**
 * BitForge - Aplicación de descargas
 * Versión optimizada y corregida
 */

// Configuración
const CONFIG = {
    DEFAULT_LANGUAGE: 'es',
    THEME_KEY: 'bitforge-theme',
    LANGUAGE_KEY: 'bitforge-language',
    SCROLL_OFFSET: 80
};

// Estado de la aplicación
const state = {
    language: CONFIG.DEFAULT_LANGUAGE,
    darkMode: false,
    activeTag: null,
    searchQuery: '',
    isMenuOpen: false
};

// Elementos del DOM
const DOM = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.querySelector('#theme-toggle i'),
    languageSelector: document.getElementById('language-selector'),
    projectsContainer: document.getElementById('projects-container'),
    headerTitle: document.querySelector('.header-text h1'),
    headerSubtitle: document.querySelector('.header-text .subtitle'),
    projectsTitle: document.querySelector('#projects .section-header h2'),
    socialTitle: document.querySelector('#social .section-header h2'),
    searchInput: document.getElementById('search-input'),
    tagContainer: document.getElementById('tag-container'),
    downloadModal: document.getElementById('download-modal'),
    modalTitle: document.getElementById('modal-title'),
    downloadOptions: document.getElementById('download-options'),
    loadingScreen: document.getElementById('loading-screen'),
    menuToggle: document.querySelector('.menu-toggle'),
    mobileNav: document.querySelector('nav ul'),
    closeModal: document.querySelector('.close-modal')
};

// Datos de proyectos
const projects = [
    {
        id: 1,
        title: {
            en: "Minecraft Bedrock 1.21.93.1",
            es: "Minecraft Bedrock 1.21.93.1"
        },
        description: {
            en: "Minecraft Bedrock 1.21.93.1 is a minor update focused on bug fixes and stability improvements.",
            es: "Minecraft Bedrock 1.21.93.1 es una actualización menor enfocada en correcciones y estabilidad."
        },
        image: "https://feedback.minecraft.net/hc/article_attachments/37393479626253",
        downloadLink: "https://www.mediafire.com/file/r53coajqssxrldl/Minecraft_v1.21.93.1.apk/file",
        tags: ["minecraft", "mobile"],
        badge: "Updated"
    },
	{
        id: 2,
        title: {
            en: "SurvivalCraft 2",
            es: "SurvivalCraft 2"
        },
        description: {
            es: "SurvivalCraft 2 es un juego de supervivencia en mundo abierto con gráficos voxel. Debes explorar, recolectar recursos, construir refugios y defenderte de criaturas peligrosas mientras gestionas tu salud y hambre.",
            en: "SurvivalCraft 2 is an open-world survival game with voxel graphics. You must explore, gather resources, build shelters, and defend yourself from dangerous creatures while managing your health and hunger."
        },
        image: "https://play-lh.googleusercontent.com/C91zGYVJYv0Z3zF0hvntqvqM5683H2BjllsorL8oaZxlzR1TN5YlQsJSiSX5SQUzrA=w526-h296-rw",
        downloadLink: "https://drive.google.com/file/d/1wGND7gK_8tdGBjKusRyE50XcjojMQTOs/view",
        tags: ["mobile"],
        badge: "Mobile"
    },
	{
        id: 3,
        title: {
            en: "KineMaster Pro",
            es: "KineMaster Pro"
        },
        description: {
            en: "KineMaster Pro is an enhanced version of the popular video editing app, offering advanced tools like layers, professional effects, watermark removal, and high-quality exporting, ideal for content creators.",
            es: "KineMaster Pro es una versión mejorada de la popular app de edición de video, ofreciendo herramientas avanzadas como capas, efectos profesionales, eliminación de marcas de agua y exportación en alta calidad, ideal para creadores de contenido."
        },
        image: "https://livepositively.com/images/gallery/user/cover/76148_kinemasterproapk765x5001.jpg",
        downloadLink: "",
        tags: ["editor", "mobile"],
        badge: "Mobile"
    },
	{
        id: 4,
        title: {
            en: "CapCut Pro",
            es: "CapCut Pro"
        },
        description: {
            en: "CapCut Pro is the advanced version of the video editing app, featuring watermark removal, premium effects, precision tools, and professional templates, perfect for creating high-quality social media content.",
            es: "CapCut Pro es la versión avanzada de la app de edición de video, con funciones como eliminación de marcas de agua, efectos premium, herramientas de precisión y plantillas profesionales, ideal para crear contenido de alta calidad en redes sociales."
        },
        image: "https://www.elpais.com.co/resizer/v2/X66BWPWC35DW7IEYCM47VIN3FY.jfif?auth=61ff02ebb7d764016afe66edf0eb45612eb477b14cdb1ea8264adcae026b1a03&smart=true&quality=75&width=1280&height=720",
        downloadLink: "https://www.mediafire.com/file/dg7u3gni0h8cbo2/CapCut.apk/file",
        tags: ["editor", "mobile"],
        badge: "CNXA"
    }
];

// Servidores de descarga
const downloadServers = {
    "WorldBox Premium": [
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
    "KineMaster Pro": [
        {
            name: "MediaFire",
            url: "https://www.mediafire.com/file/z8xm54hwk0qqcqo/KineMaster-pro%252Bthe-thunder_16.apk.apk/file",
            icon: "fas fa-cloud-download-alt",
            description: "Direct download"
        },
		{
            name: "Hugging Face",
            url: "https://littletest-sorryplease.hf.space/KineMaster-pro%2Bthe-thunder_16.apk.apk?download=true",
            icon: "fab fa-hugging",
            description: "Descarga Alternativa"
        },
    ]
};

// Traducciones
const translations = {
    en: {
        "title": "CrackDroid",
        "subtitle": "Download the projects or games",
        "projects": "Games & Programs",
        "social": "Social Media",
        "download": "Download",
        "search_placeholder": "Search...",
        "select_server": "Select download server",
        "direct_download": "Direct Download",
        "popular": "Popular",
        "new": "New",
		"pc": "PC",
		"updated": "Updated",
		"mobile": "Mobile",
        "menu": "Menu",
        "close_menu": "Close menu",
        "no_results": "No projects found",
		"cnxa": "ERROR: Connection failed",
		"follow_social": "Follow me on social media",
		"download_des": "Download the latest versions"
    },
    es: {
        "title": "CrackDroid",
        "subtitle": "Descarga los proyectos o juegos",
        "projects": "Juegos y Programas",
        "social": "Redes Sociales",
        "download": "Descargar",
        "search_placeholder": "Buscar...",
        "select_server": "Selecciona servidor de descarga",
        "direct_download": "Descarga directa",
        "popular": "Popular",
        "new": "Nuevo",
		"pc": "PC",
		"updated": "Actualizado",
		"mobile": "Movil",
        "menu": "Menú",
        "close_menu": "Cerrar menú",
        "no_results": "No se encontraron proyectos",
		"cnxa": "ERROR: Conexión fallida",
		"follow_social": "Sígueme en mis redes",
		"download_des": "Descarga las últimas versiones"
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', init);

async function init() {
    try {
        showLoading();
        loadSettings();
        setupEventListeners();
        await preloadImages();
        render();
        setTimeout(hideLoading, 500);
    } catch (error) {
        console.error("Initialization error:", error);
        hideLoading();
    }
}

// Cargar configuración
function loadSettings() {
    const savedTheme = localStorage.getItem(CONFIG.THEME_KEY);
    state.darkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
    
    const savedLanguage = localStorage.getItem(CONFIG.LANGUAGE_KEY);
    const browserLanguage = navigator.language.substring(0, 2);
    
    if (savedLanguage && translations[savedLanguage]) {
        state.language = savedLanguage;
    } else if (translations[browserLanguage]) {
        state.language = browserLanguage;
    }
    
    DOM.languageSelector.value = state.language;
}

// Configurar eventos
function setupEventListeners() {
    // Tema
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // Idioma
    DOM.languageSelector.addEventListener('change', (e) => {
        state.language = e.target.value;
        localStorage.setItem(CONFIG.LANGUAGE_KEY, state.language);
        render();
    });
    
    // Búsqueda
    DOM.searchInput.addEventListener('input', debounce(() => {
        state.searchQuery = DOM.searchInput.value.toLowerCase();
        renderProjects();
    }, 300));
    
    // Menú móvil
    DOM.menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Cerrar modal
    DOM.closeModal.addEventListener('click', () => {
        DOM.downloadModal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === DOM.downloadModal) {
            DOM.downloadModal.style.display = 'none';
        }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            DOM.downloadModal.style.display = 'none';
        }
    });
    
    // Navegación suave
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (state.isMenuOpen) {
                toggleMobileMenu();
            }
            
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - CONFIG.SCROLL_OFFSET,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Actualizar navegación al hacer scroll
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

// Alternar menú móvil
function toggleMobileMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    DOM.mobileNav.classList.toggle('active');
    DOM.menuToggle.classList.toggle('active');
    DOM.menuToggle.setAttribute('aria-label', 
        state.isMenuOpen ? translations[state.language].close_menu : 
                          translations[state.language].menu);
    
    document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
}

// Alternar tema
function toggleTheme() {
    state.darkMode = !state.darkMode;
    localStorage.setItem(CONFIG.THEME_KEY, state.darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
}

// Actualizar icono del tema
function updateThemeIcon() {
    DOM.themeIcon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
}

// Precargar imágenes
function preloadImages() {
    return Promise.all(projects.map(project => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = project.image;
            img.onload = resolve;
            img.onerror = resolve;
        });
    }));
}

// Renderizar toda la aplicación
function render() {
    updateTexts();
    renderProjects();
    renderTags();
    updateActiveNavLink();
}

// Traducir todos los elementos con data-key
function translatePage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Actualizar textos
function updateTexts() {
    const t = translations[state.language];
    
    DOM.headerTitle.textContent = t.title;
    DOM.headerSubtitle.textContent = t.subtitle;
    DOM.projectsTitle.textContent = t.projects;
    DOM.socialTitle.textContent = t.social;
    DOM.searchInput.placeholder = t.search_placeholder;
	
	// Traducir todos los elementos con data-key
    translatePage(state.language);
}

// Renderizar proyectos
function renderProjects() {
    const filteredProjects = filterProjects();
    
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
    
    // Configurar eventos de los botones de descarga
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectTitle = this.getAttribute('data-project');
            showDownloadModal(projectTitle);
        });
    });
}

// Filtrar proyectos
function filterProjects() {
    return projects.filter(project => {
        const title = project.title[state.language].toLowerCase();
        const description = project.description[state.language].toLowerCase();
        const tags = project.tags?.join(' ') || '';
        
        const matchesQuery = !state.searchQuery || 
                          title.includes(state.searchQuery) || 
                          description.includes(state.searchQuery) ||
                          tags.includes(state.searchQuery);
        
        const matchesTag = !state.activeTag || 
                         (project.tags && project.tags.includes(state.activeTag.toLowerCase()));
        
        return matchesQuery && matchesTag;
    });
}

// Mostrar mensaje cuando no hay resultados
function showNoResults() {
    DOM.projectsContainer.innerHTML = `
        <div class="no-results">
            <i class="fas fa-search"></i>
            <h3>${translations[state.language].no_results}</h3>
        </div>
    `;
}

// Crear tarjeta de proyecto
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const badgeHTML = project.badge ? 
        `<span class="project-badge">${translations[state.language][project.badge.toLowerCase()]}</span>` : 
        '';
    
    card.innerHTML = `
        <div class="project-image">
            ${badgeHTML}
            <img src="${project.image}" alt="${project.title[state.language]}" loading="lazy">
        </div>
        <div class="project-info">
            <h3>${project.title[state.language]}</h3>
            <p>${project.description[state.language]}</p>
            <button class="download-btn" data-project="${project.title.en}">
                <i class="fas fa-download"></i>
                ${translations[state.language].download}
            </button>
        </div>
    `;
    
    return card;
}

// Mostrar modal de descarga
function showDownloadModal(projectTitle) {
    const project = projects.find(p => p.title.en === projectTitle);
    if (!project) return;
    
    DOM.modalTitle.textContent = `
        ${translations[state.language].select_server}: ${project.title[state.language]}
    `;
    
    DOM.downloadOptions.innerHTML = '';
    
    const servers = downloadServers[projectTitle] || [];
    
    if (servers.length === 0) {
        addDownloadOption({
            name: translations[state.language].direct_download,
            url: project.downloadLink,
            icon: "fas fa-download",
            description: project.title[state.language]
        });
    } else {
        servers.forEach(server => {
            addDownloadOption(server);
        });
    }
    
    DOM.downloadModal.style.display = 'block';
}

// Añadir opción de descarga
function addDownloadOption(option) {
    const optionElement = document.createElement('a');
    optionElement.href = option.url;
    optionElement.target = '_blank';
    optionElement.rel = 'noopener noreferrer';
    optionElement.className = 'download-option';
    
    optionElement.innerHTML = `
        <i class="${option.icon}"></i>
        <div class="option-info">
            <h4>${option.name}</h4>
            <p>${option.description}</p>
        </div>
        <i class="fas fa-external-link-alt"></i>
    `;
    
    DOM.downloadOptions.appendChild(optionElement);
}

// Renderizar etiquetas
function renderTags() {
    const tags = getAllTags();
    const t = translations[state.language];
    
    DOM.tagContainer.innerHTML = '';
    
    // Añadir opción "Todos"
    const allTag = document.createElement('span');
    allTag.className = `tag ${!state.activeTag ? 'active' : ''}`;
    allTag.textContent = t.all_tags || 'All';
    allTag.addEventListener('click', () => {
        state.activeTag = null;
        renderProjects();
        updateActiveTags();
    });
    DOM.tagContainer.appendChild(allTag);
    
    // Añadir tags específicos
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = `tag ${state.activeTag === tag ? 'active' : ''}`;
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            state.activeTag = state.activeTag === tag ? null : tag;
            renderProjects();
            updateActiveTags();
        });
        DOM.tagContainer.appendChild(tagElement);
    });
}

// Actualizar tags activos
function updateActiveTags() {
    document.querySelectorAll('.tag').forEach(tag => {
        const tagText = tag.textContent.toLowerCase();
        tag.classList.toggle('active', 
            (state.activeTag === null && tagText === (translations[state.language].all_tags || 'all').toLowerCase()) ||
            (tagText === state.activeTag?.toLowerCase())
        );
    });
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

// Actualizar navegación activa
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + CONFIG.SCROLL_OFFSET;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Mostrar pantalla de carga
function showLoading() {
    DOM.loadingScreen.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Ocultar pantalla de carga
function hideLoading() {
    DOM.loadingScreen.style.display = 'none';
    document.body.style.overflow = '';
}

// Debounce para optimización
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
    };
}

// Throttle para optimización
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}