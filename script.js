// Configuración global
const CONFIG = {
    DEFAULT_LANGUAGE: 'es',
    THEME_KEY: 'bitforge-theme',
    LANGUAGE_KEY: 'bitforge-language'
};

// Estado global
const state = {
    language: CONFIG.DEFAULT_LANGUAGE,
    darkMode: false,
    activeTag: null,
    searchQuery: '',
    isMenuOpen: false,
    platformFilter: ''
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
            es: "Minecraft Bedrock 1.21.93.1",
            pt: "Minecraft Bedrock 1.21.93.1"
        },
        description: {
            es: "Minecraft Bedrock 1.21.93.1 es una actualización menor enfocada en correcciones y estabilidad.",
            en: "Minecraft Bedrock 1.21.93.1 is a minor update focused on fixes and stability.",
            pt: "Minecraft Bedrock 1.21.93.1 é uma atualização menor focada em correções e estabilidade."
        },
        image: "https://feedback.minecraft.net/hc/article_attachments/37393479626253 ",
        downloadLink: "https://www.mediafire.com/file/r53coajqssxrldl/Minecraft_v1.21.93.1.apk/file ",
        tags: ["minecraft", "mobile"],
        badges: ["updated"],
        platform: "mobile"
    },
	{
        id: 2,
        title: {
            en: "SurvivalCraft 2",
            es: "SurvivalCraft 2",
			pt: "SurvivalCraft 2"
        },
        description: {
            es: "SurvivalCraft 2 es un juego de supervivencia en mundo abierto con gráficos voxel. Debes explorar, recolectar recursos, construir refugios y defenderte de criaturas peligrosas mientras gestionas tu salud y hambre.",
            en: "SurvivalCraft 2 is an open-world survival game with voxel graphics. You must explore, gather resources, build shelters, and defend yourself from dangerous creatures while managing your health and hunger.",
			pt: "SurvivalCraft 2 é um jogo de sobrevivência em mundo aberto com gráficos voxel. Tens de explorar, recolher recursos, construir abrigos e defender-te de criaturas perigosas enquanto geres a tua saúde e a tua fome."
        },
        image: "https://play-lh.googleusercontent.com/C91zGYVJYv0Z3zF0hvntqvqM5683H2BjllsorL8oaZxlzR1TN5YlQsJSiSX5SQUzrA=w526-h296-rw",
        downloadLink: "https://drive.google.com/file/d/1wGND7gK_8tdGBjKusRyE50XcjojMQTOs/view",
        tags: ["mobile"],
        platform: "mobile"
    },
	{
        id: 3,
        title: {
            en: "KineMaster Pro",
            es: "KineMaster Pro",
			pt: "KineMaster Pro"
        },
        description: {
            en: "KineMaster Pro is an enhanced version of the popular video editing app, offering advanced tools like layers, professional effects, watermark removal, and high-quality exporting, ideal for content creators.",
            es: "KineMaster Pro es una versión mejorada de la popular app de edición de video, ofreciendo herramientas avanzadas como capas, efectos profesionales, eliminación de marcas de agua y exportación en alta calidad, ideal para creadores de contenido.",
			pt: "O KineMaster Pro é uma versão melhorada da popular aplicação de edição de vídeo, oferecendo ferramentas avançadas como camadas, efeitos profissionais, remoção de marcas de água e exportação de alta qualidade, ideal para criadores de conteúdos."
		},
        image: "https://livepositively.com/images/gallery/user/cover/76148_kinemasterproapk765x5001.jpg",
        downloadLink: "",
        tags: ["editor", "mobile"],
        platform: "mobile"
    },
	{
        id: 4,
        title: {
            en: "CapCut Pro",
            es: "CapCut Pro",
			pt: "CapCut Pro"
        },
        description: {
            en: "CapCut Pro is the advanced version of the video editing app, featuring watermark removal, premium effects, precision tools, and professional templates, perfect for creating high-quality social media content.",
            es: "CapCut Pro es la versión avanzada de la app de edición de video, con funciones como eliminación de marcas de agua, efectos premium, herramientas de precisión y plantillas profesionales, ideal para crear contenido de alta calidad en redes sociales.",
			pt: "O CapCut Pro é a versão avançada da aplicação de edição de vídeo, com funcionalidades como a remoção de marcas de água, efeitos premium, ferramentas de precisão e modelos profissionais, ideais para criar conteúdos de alta qualidade para as redes sociais."
		},
        image: "https://www.elpais.com.co/resizer/v2/X66BWPWC35DW7IEYCM47VIN3FY.jfif?auth=61ff02ebb7d764016afe66edf0eb45612eb477b14cdb1ea8264adcae026b1a03&smart=true&quality=75&width=1280&height=720",
        downloadLink: "https://www.mediafire.com/file/dg7u3gni0h8cbo2/CapCut.apk/file",
        tags: ["editor", "mobile"],
        badge: ["cnxa"],
        platform: "mobile"
    }
];

// Traducciones
const translations = {
    es: {
        "title": "CrackDroid",
        "subtitle": "Descarga los proyectos o juegos",
        "projects": "Juegos y Programas",
        "social": "Redes Sociales",
        "download": "Descargar",
        "search_placeholder": "Buscar...",
        "select_server": "Selecciona servidor de descarga",
        "direct_download": "Descarga directa",
        "all_tags": "Todos",
        "no_results": "No se encontraron proyectos",
        "follow_social": "Sígueme en mis redes",
		"updated": "Actualizado",
        "mobile": "Móvil",
        "cnxa": "ERROR: Conexión fallida",
        "new": "Nuevo"
    },
    en: {
        "title": "CrackDroid",
        "subtitle": "Download the projects or games",
        "projects": "Games & Programs",
        "social": "Social Media",
        "download": "Download",
        "search_placeholder": "Search...",
        "select_server": "Select download server",
        "direct_download": "Direct Download",
        "all_tags": "All",
        "no_results": "No projects found",
        "follow_social": "Follow me on social media",
		"updated": "Updated",
        "mobile": "Mobile",
        "cnxa": "ERROR: Connection failed",
        "new": "New"
    },
    pt: {
        "title": "CrackDroid",
        "subtitle": "Baixe os melhores jogos e programas",
        "projects": "Jogos e Programas",
        "social": "Redes Sociais",
        "download": "Baixar",
        "search_placeholder": "Pesquisar...",
        "select_server": "Selecione o servidor de download",
        "direct_download": "Download direto",
        "all_tags": "Todos",
        "no_results": "Nenhum projeto encontrado",
        "follow_social": "Siga-me nas redes sociais",
		"updated": "Atualizado",
        "mobile": "Móvel",
        "cnxa": "ERRO: Falha na conexão",
        "new": "Novo"
    }
};

// Servidores de descarga
const downloadServers = {
    "Minecraft Bedrock 1.21.93.1": [
        {
            name: "MediaFire",
            url: "https://www.mediafire.com/file/r53coajqssxrldl/Minecraft_v1.21.93.1.apk/file ",
            icon: "fas fa-cloud-download-alt",
            description: "Servidor principal"
        },
        {
            name: "Google Drive",
            url: "https://drive.google.com/file/d/1wGND7gK_8tdGBjKusRyE50XcjojMQTOs/view ",
            icon: "fas fa-download",
            description: "Servidor secundario"
        }
    ],
	"KineMaster Pro": [
		{
			name: "MediaFire",
            url: "https://www.mediafire.com/file/z8xm54hwk0qqcqo/KineMaster-pro%252Bthe-thunder_16.apk.apk/file",
            icon: "fas fa-solid fa-download",
            description: "Servidor principal"
			
		},
		{
            name: "Hugging Face",
            url: "https://littletest-sorryplease.hf.space/KineMaster-pro%2Bthe-thunder_16.apk.apk?download=true",
            icon: "fas fa-cloud-download",
            description: "Servidor secundario"
        }
	]
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
    } else {
        state.language = CONFIG.DEFAULT_LANGUAGE;
    }

    DOM.languageSelector.value = state.language;
}

function setupEventListeners() {
    // Tema
    DOM.themeToggle?.addEventListener('click', toggleTheme);
    // Selector de idioma
    DOM.languageSelector?.addEventListener('change', (e) => {
        state.language = e.target.value;
        localStorage.setItem(CONFIG.LANGUAGE_KEY, state.language);
        render();
    });
    // Búsqueda
    DOM.searchInput?.addEventListener('input', debounce(() => {
        state.searchQuery = DOM.searchInput.value.toLowerCase();
        renderProjects();
    }, 300));
    // Menú móvil
    DOM.menuToggle?.addEventListener('click', () => {
        state.isMenuOpen = !state.isMenuOpen;
        DOM.mobileNav.classList.toggle('active');
        document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
    });
    // Cerrar modal
    DOM.closeModal?.addEventListener('click', () => {
        DOM.downloadModal.style.display = 'none';
    });
    // Cerrar al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === DOM.downloadModal) {
            DOM.downloadModal.style.display = 'none';
        }
    });
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') DOM.downloadModal.style.display = 'none';
    });
    // Navegación suave
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function toggleTheme() {
    state.darkMode = !state.darkMode;
    localStorage.setItem(CONFIG.THEME_KEY, state.darkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    DOM.themeIcon.className = state.darkMode ? 'fas fa-sun' : 'fas fa-moon';
}

function preloadImages() {
    return Promise.all(projects.map(project => {
        return new Promise(resolve => {
            const img = new Image();
            img.src = project.image.trim(); // Elimina espacios
            img.onload = resolve;
            img.onerror = resolve;
        });
    }));
}

function render() {
    updateTexts();
    renderProjects();
    renderTags();
}

function updateTexts() {
    const t = translations[state.language];
    DOM.headerTitle.textContent = t.title;
    DOM.headerSubtitle.textContent = t.subtitle;
    DOM.projectsTitle.textContent = t.projects;
    DOM.socialTitle.textContent = t.social;
    DOM.searchInput.placeholder = t.search_placeholder;

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (t[key]) el.textContent = t[key];
    });
}

function filterProjects() {
    return projects.filter(project => {
        const title = project.title[state.language].toLowerCase();
        const description = project.description[state.language].toLowerCase();
        const matchesQuery = !state.searchQuery || title.includes(state.searchQuery) || description.includes(state.searchQuery);
        const matchesTag = !state.activeTag || (project.tags && project.tags.includes(state.activeTag));
        const matchesPlatform = !state.platformFilter || project.platform === state.platformFilter;
        return matchesQuery && matchesTag && matchesPlatform;
    });
}

function renderProjects() {
    const filtered = filterProjects();
    DOM.projectsContainer.innerHTML = '';

    if (filtered.length === 0) {
        DOM.projectsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>${translations[state.language].no_results}</h3>
            </div>`;
        return;
    }

    filtered.forEach(project => {
        const card = createProjectCard(project);
        DOM.projectsContainer.appendChild(card);
    });

    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const projectTitle = this.getAttribute('data-project');
            showDownloadModal(projectTitle);
        });
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const badgeHTML = project.badges && project.badges.length > 0
        ? `<div class="project-badges">${project.badges.map(badge => `<span class="project-badge">${translations[state.language][badge]}</span>`).join('')}</div>`
        : '';

    card.innerHTML = `
        <div class="project-image">
            ${badgeHTML}
            <img src="${project.image}" alt="${project.title[state.language]}" loading="lazy">
        </div>
        <div class="project-info">
            <h3>${project.title[state.language]}</h3>
            <p>${project.description[state.language]}</p>
            <button class="download-btn" data-project="${project.title.en}">
                <i class="fas fa-download"></i> ${translations[state.language].download}
            </button>
        </div>
    `;
    return card;
}

function showDownloadModal(projectTitle) {
    const project = projects.find(p => p.title.en === projectTitle);
    if (!project) return;

    DOM.modalTitle.textContent = `${translations[state.language].select_server}: ${project.title[state.language]}`;
    DOM.downloadOptions.innerHTML = '';

    const servers = downloadServers[projectTitle] || [];

    if (servers.length === 0 && project.downloadLink) {
        addDownloadOption({
            name: translations[state.language].direct_download,
            url: project.downloadLink,
            icon: "fas fa-download",
            description: project.title[state.language]
        });
    } else {
        servers.forEach(server => addDownloadOption(server));
    }

    DOM.downloadModal.style.display = 'block';
}

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

function renderTags() {
    const tags = [...new Set(projects.flatMap(p => p.tags || []))];
    DOM.tagContainer.innerHTML = `
        <span class="tag active" data-tag="all">${translations[state.language].all_tags || 'Todos'}</span>
    ` + tags.map(tag => `
        <span class="tag" data-tag="${tag}">${tag}</span>
    `).join('');

    document.querySelectorAll('.tag').forEach(tagEl => {
        tagEl.addEventListener('click', () => {
            const tag = tagEl.dataset.tag;
            state.activeTag = tag === 'all' ? null : tag;
            renderProjects();
            updateActiveTags();
        });
    });
}

function updateActiveTags() {
    document.querySelectorAll('.tag').forEach(tagEl => {
        const isActive = state.activeTag === null ? tagEl.dataset.tag === 'all' : tagEl.dataset.tag === state.activeTag;
        tagEl.classList.toggle('active', isActive);
    });
}

function showLoading() {
    if (DOM.loadingScreen) DOM.loadingScreen.style.display = 'flex';
}

function hideLoading() {
    if (DOM.loadingScreen) DOM.loadingScreen.style.display = 'none';
}

function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}