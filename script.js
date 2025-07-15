// Configuración global
const CONFIG = {
    DEFAULT_LANGUAGE: 'es',
    THEME_KEY: 'bitforge-theme',
    LANGUAGE_KEY: 'bitforge-language'
};

// Estado global
const state = {
    language: CONFIG.DEFAULT_LANGUAGE,
    darkMode: true,
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
		badges: ["cnxa"],
        platform: "mobile"
    },
    {
        id: 5,
        title: {
            en: "Spotify v9.0.64.840 (Premium)",
            es: "Spotify v9.0.64.840 (Premium)",
			pt: "Spotify v9.0.64.840 (Premium)"
        },
        description: {
            en: "Spotify is one of the most popular music streaming platforms in the world. It offers nearly all music released by quality artists globally, with audio quality that few competitors can match. In addition, it provides an excellent user experience, helping it build a large fan base. For music lovers, it's an essential app on their smartphones.",
            es: "Spotify es una de las plataformas musicales en línea más conocidas del mundo. Ofrece prácticamente toda la música lanzada por artistas de calidad de todo el mundo, con una calidad de audio superior a la de la mayoría de sus competidores. Además, brinda una excelente experiencia al usuario, lo que le ha permitido ganar una gran base de seguidores. Para los amantes de la música, es una aplicación esencial en sus smartphones.",
            pt: "O Spotify é uma das plataformas musicais online mais famosas do mundo. Ela oferece praticamente toda a música lançada por artistas de qualidade ao redor do globo, com uma qualidade sonora superior à da maioria dos concorrentes. Além disso, proporciona uma excelente experiência ao usuário, o que lhe permite conquistar uma grande base de fãs. Para os apaixonados por música, é um aplicativo essencial nos seus smartphones."
        },
        image: "https://liteapks.com/wp-content/uploads/2022/04/spotify-music-and-podcasts-1.png",
        downloadLink: "https://www.mediafire.com/file/e5c9crjmpu2f8ju/Spotify+v9.0.64.840+(Premium)+Fix.apk/file",
        tags: ["mobile"],
		badges: ["mobile"],
        platform: "mobile"
    },
    {
        id: 6,
        title: {
            en: "VPN Super v2.12.1 (Premium Unlocked)",
            es: "VPN Super v2.12.1 (Premium Desbloqueado)",
			pt: "VPN Super v2.12.1 (Premium Desbloqueado)"
        },
        description: {
            en: "Browse without limits with full privacy and security. VPN Super allows you to access restricted content, protect your data, and bypass geo-blocks. With all premium features unlocked, enjoy fast connections, reliable servers, and no data limits.",
            es: "Accede a contenido ilimitado de forma segura y anónima con VPN Super , una potente herramienta que te permite navegar sin restricciones, proteger tu privacidad y evitar firewalls o bloqueos geográficos. Con todas las funciones premium desbloqueadas, disfruta de servidores ultrarrápidos, conexión segura y sin límites de datos.",
            pt: "Navegue sem limites com total privacidade e segurança. VPN Super permite que você acesse conteúdo restrito, proteja seus dados e contorne bloqueios geográficos. Com todos os recursos premium desbloqueados, aproveite conexões rápidas, servidores confiáveis e sem limites de dados."
        },
        image: "https://s3.amazonaws.com/www-itopvpn-com/blog/20240624/1719220195233170.jpg",
        downloadLink: "https://www.mediafire.com/file/e6oes5guj05sfiw/VPN+Super+Unlimited+Proxy+v2.12.1+(Premium).apk/file",
        tags: ["mobile", "VPN"],
		badges: ["mobile"],
        platform: "mobile"
    },
    {
        id: 7,
        title: {
            en: "Mob Control v2.90.2",
            es: "Mob Control v2.90.2",
			pt: "Mob Control v2.90.2"
        },
        description: {
            en: "The city is having a competition to see who can gather more individuals and win. Mob Control brings you new experiences, and here you are, the one who can gather many individuals to win. The official rebellion began, and whichever side was stronger and had more individuals won the final victory.",
            es: "La ciudad está celebrando una competición para ver quién puede reunir a más individuos y ganar. Mob Control te trae nuevas experiencias, y aquí estás tú, el que puede reunir a muchos individuos para ganar. La rebelión oficial comenzó, y el bando que fuera más fuerte y tuviera más individuos ganó la victoria final.",
            pt: "A cidade está a ter uma competição para ver quem consegue reunir mais indivíduos e ganhar. O Mob Control traz-te novas experiências, e aqui estás tu, aquele que consegue reunir muitos indivíduos para ganhar. A rebelião oficial começou, e o lado mais forte e com mais indivíduos ganhou a vitória final."
        },
        image: "https://liteapks.com/wp-content/uploads/2022/07/mob-control-mod.png",
        downloadLink: "",
        tags: ["mobile"],
		badges: ["mobile"],
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
            description: "Primary server"
        },
        {
            name: "Google Drive",
            url: "https://drive.google.com/file/d/1wGND7gK_8tdGBjKusRyE50XcjojMQTOs/view ",
            icon: "fas fa-download",
            description: "Secondary server"
        }
    ],
	"KineMaster Pro": [
		{
			name: "MediaFire",
            url: "https://www.mediafire.com/file/z8xm54hwk0qqcqo/KineMaster-pro%252Bthe-thunder_16.apk.apk/file",
            icon: "fas fa-solid fa-download",
            description: "Primary server"
			
		},
		{
            name: "Hugging Face",
            url: "https://littletest-sorryplease.hf.space/KineMaster-pro%2Bthe-thunder_16.apk.apk?download=true",
            icon: "fas fa-cloud-download",
            description: "Secondary server"
        }
	],
    "Mob Control v2.90.2": [
        {
            name: "MediaFire",
            url: "https://www.mediafire.com/file/wqoi6zjxlr9i2d2/Mob-Control-2.90.1-mod1.apk/file",
            icon: "fas fa-solid fa-download",
            description: "Mod 1: Coin Earn Multiplier, Premium Enabled"
        },
        {
            name: "MediaFire",
            url: "https://www.mediafire.com/file/0tfbvqs619som2s/Mob-Control-v2.90.1-mod2.apk/file",
            icon: "fas fa-cloud-download",
            description: "Mod 2: Unlimited Money"
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