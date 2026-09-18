// ===== Translations =====
const i18n = {
  en: {
    "meta.title": "Ahmed Bassoul — Data Scientist & ML Engineer",
    "meta.description": "Portfolio of Ahmed Bassoul — Data Scientist & Machine Learning Engineer based in Tanger. LLMs, RAG pipelines, and AI agents.",
    "meta.og_title": "Ahmed Bassoul — Data Scientist & ML Engineer",
    "meta.og_description": "Building AI agents, RAG systems, and intelligent workflows.",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.freelance": "Freelance",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.hire": "Hire me",

    "nav.about_label": "01 / About",
    "nav.experience_label": "02 / Experience",
    "nav.freelance_label": "03 / Freelance projects",
    "nav.projects_label": "04 / Lab notebook",
    "nav.stack_label": "05 / Stack",
    "nav.contact_label": "06 / Contact",

    "hero.badge": "Open to work · Freelance & Full-time",
    "hero.title_role": "Data Scientist",
    "hero.title_eng": "Machine Learning Engineer",
    "hero.lede": "I build autonomous agents, retrieval-augmented systems, and AI-driven workflows that turn unstructured chaos into reliable, production-grade behavior.",
    "hero.cta_freelance": "View freelance work",
    "hero.cta_contact": "Get in touch",
    "hero.meta_based": "Based in",
    "hero.meta_focus": "Focus",
    "hero.meta_education": "Education",

    "about.title": "A bit about me",
    "about.lead": "I trained as a mathematician, fell for machine learning, and now spend my days teaching machines to read, retrieve, and reason.",
    "about.education": "I hold a Master's in Information Systems &amp; Intelligent Systems from <strong>INSEA Rabat</strong>, on top of a Bachelor's in Mathematics &amp; Computer Science from <strong>FSDM Fez</strong>. I've worked across cybersecurity AI, business intelligence, and applied LLM engineering — happiest at the intersection of rigorous data work and practical product thinking.",
    "about.current": "Right now I'm freelancing as an AI Agent Developer, building production agent systems for clients who care about reliability over theatrics.",
    "about.card_education": "Education",
    "about.card_certs": "Certifications",
    "about.edu_master": "Master M2SI",
    "about.edu_bachelor": "Bachelor SMI",
    "about.cert_ml": "ML Specialization",
    "about.cert_data": "Data Analytics",

    "exp.title": "Selected work",
    "exp.1.kind": "Freelance · Full-Stack & AI",
    "exp.1.role": "Backend & Frontend Engineer — Cylindrique Consulting",
    "exp.1.desc": "Building a full-stack SaaS platform (3 portals, 15+ modules) end to end — from a type-safe backend to a modern React front end, shipped continuously to production.",
    "exp.1.li1": "Built the platform in TypeScript, Next.js 16 (App Router, Server Components) and React 19.",
    "exp.1.li2": "Designed the backend on Supabase / PostgreSQL with Row-Level Security and Zod validation on client and server.",
    "exp.1.li3": "Integrated Stripe, KYC and e-signature via REST APIs and signed webhooks.",
    "exp.1.li4": "Set up CI/CD (GitHub Actions), Vitest / Playwright tests, and Vercel deployment.",
    "exp.2.kind": "Freelance · AI Engineering",
    "exp.2.role": "AI Agent Developer — Mendo",
    "exp.2.desc": "Designing and shipping intelligent autonomous agents and AI-driven workflows for production environments — where reliability matters more than demos.",
    "exp.2.li1": "Engineered multi-agent automated workflows in n8n for complex, branching task execution.",
    "exp.2.li2": "Built and fine-tuned custom ML models and embeddings using PyTorch.",
    "exp.2.li3": "Integrated LLMs with LangChain and LlamaIndex.",
    "exp.2.li4": "Developed RAG pipelines on Pinecone and ChromaDB.",
    "exp.3.kind": "Internship · Business Intelligence",
    "exp.3.role": "BI Analyst — AGH Data Agency Holding",
    "exp.3.desc": "BI project for a mobile recipe application — translating market signals into product strategy and a clear go-to-market plan.",
    "exp.3.li1": "Market analysis and competitive benchmarking of similar applications.",
    "exp.3.li2": "User research and segmentation to define target personas.",
    "exp.3.li3": "Forecasted growth and synthesized a BI report for marketing & strategy.",
    "exp.4.kind": "Final-Year Internship · Cybersecurity AI",
    "exp.4.role": "UBA Engineer — DataProtect",
    "exp.4.desc": "Behavioral anomaly detection for proactive threat hunting — combining classical ML, the ELK Stack, and an LLM in the loop.",
    "exp.4.li1": "Developed a <strong>User Behavior Analytics (UBA)</strong> model for proactive threat detection.",
    "exp.4.li2": "Built a log pipeline on the <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana).",
    "exp.4.li3": "Trained an <strong>LLM</strong> to flag subtle behavioral deviations — improved coverage, fewer false positives.",

    "fl.title": "Shipped for clients & users",
    "fl.lede": "Real products — full stack, from data pipeline to UI.",
    "fl.1.title": "SafeKids — Child-Safety Extension",
    "fl.1.desc": "A Chrome extension + FastAPI backend that scans children's messages in real time, classifies them with a local LLM (Ollama / llama3.2) across 10 safety categories, scores risk 0–100, and emails parents on dangerous content. 100% on-device — no cloud AI.",
    "fl.1.link": "View on GitHub ↗",
    "fl.2.title": "YouTube Downloader",
    "fl.2.desc": "A modern video & audio downloader with a glassmorphic web UI and a FastAPI backend powered by yt-dlp. Multi-quality (up to 4K), MP3 extraction, selective playlist downloading, async background jobs, and desktop notifications.",
    "fl.2.link": "View on GitHub ↗",
    "fl.3.title": "Historical RAG — WWII Q&A",
    "fl.3.desc": "A full Retrieval-Augmented Generation system answering questions on WWII over two knowledge bases (history books & military personnel). Semantic search with SentenceTransformers (mpnet), a local Ollama LLM (deepseek-r1), and a Flask UI. PDF ingestion via PyMuPDF, Camelot & spaCy.",
    "fl.3.link": "View on GitHub ↗",

    "proj.title": "Things I built to learn",
    "proj.1.title": "Image Caption Generation",
    "proj.1.desc": "Encoder-decoder pipeline using a Vision Transformer for visual features and GPT-2 for text generation. Trained on COCO to produce accurate, contextual descriptions.",
    "proj.2.title": "Invoice Information Extraction",
    "proj.2.desc": "Automated extraction of structured fields — supplier, amount, date — from messy PDFs and scanned invoices. Combines OCR with engineered prompts for high precision without fine-tuning.",
    "proj.3.title": "Production RAG Pipelines",
    "proj.3.desc": "Chunking strategies, hybrid search, reranking, citation tracking. Vector stores on Pinecone & ChromaDB, orchestration via LangChain and LlamaIndex.",
    "proj.4.title": "Multi-Agent Workflows",
    "proj.4.desc": "Branching, conditional, self-correcting agent flows wired through n8n — connecting LLMs to internal tools, REST APIs, and databases for real business automation.",

    "stack.title": "Tools I reach for",
    "stack.languages": "Languages",
    "stack.languages_list": "Python (expert), R, Java, C, SQL, JavaScript",
    "stack.ml": "ML & Deep Learning",
    "stack.ml_list": "PyTorch, TensorFlow, Scikit-learn, Transformers, ViT, Pandas, NumPy",
    "stack.llms": "LLMs & Agents",
    "stack.llms_list": "LangChain, LlamaIndex, RAG, Prompt Engineering, OpenAI / Anthropic APIs",
    "stack.data": "Data & Pipelines",
    "stack.data_list": "Apache Airflow, n8n, Talend, ELK Stack, SIEM",
    "stack.databases": "Databases",
    "stack.databases_list": "MySQL, Oracle, PL/SQL, ChromaDB, Pinecone",
    "stack.bi": "BI & Analytics",
    "stack.bi_list": "Power BI, segmentation, benchmarking, forecasting",
    "stack.web": "Web & APIs",
    "stack.web_list": "FastAPI, Flask, PHP, Laravel, HTML, CSS, JS, REST",
    "stack.exploring": "Currently exploring",
    "stack.exploring_list": "Multi-agent orchestration, evaluation frameworks, on-device LLMs",

    "contact.title": "Let's build something good",
    "contact.lede": "Open to freelance contracts, full-time roles, and collaborations around LLMs, AI agents, and data systems.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.phone": "Phone",

    "footer.copyright": "© 2026 Ahmed Bassoul",
    "footer.location": "Tanger, Morocco",
    "footer.built": "Built with HTML · CSS · JS"
  },

  fr: {
    "meta.title": "Ahmed Bassoul — Data Scientist & ingénieur ML",
    "meta.description": "Portfolio d'Ahmed Bassoul — Data Scientist & ingénieur en Machine Learning basé à Tanger. LLMs, pipelines RAG et agents IA.",
    "meta.og_title": "Ahmed Bassoul — Data Scientist & ingénieur ML",
    "meta.og_description": "Construction d'agents IA, de systèmes RAG et de workflows intelligents.",

    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.freelance": "Freelance",
    "nav.projects": "Projets",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.hire": "Engagez-moi",

    "nav.about_label": "01 / À propos",
    "nav.experience_label": "02 / Expérience",
    "nav.freelance_label": "03 / Projets freelance",
    "nav.projects_label": "04 / Carnet de laboratoire",
    "nav.stack_label": "05 / Stack",
    "nav.contact_label": "06 / Contact",

    "hero.badge": "Disponible · Freelance & CDI",
    "hero.title_role": "Data Scientist",
    "hero.title_eng": "Ingénieur en Machine Learning",
    "hero.lede": "Je construis des agents autonomes, des systèmes de recherche augmentée et des workflows pilotés par l'IA qui transforment le chaos non structuré en comportements fiables et prêts pour la production.",
    "hero.cta_freelance": "Voir les missions freelance",
    "hero.cta_contact": "Me contacter",
    "hero.meta_based": "Basé à",
    "hero.meta_focus": "Focus",
    "hero.meta_education": "Formation",

    "about.title": "À propos de moi",
    "about.lead": "Formé en mathématiques, tombé amoureux du machine learning, je passe mes journées à apprendre aux machines à lire, rechercher et raisonner.",
    "about.education": "Titulaire d'un Master en Systèmes d'Information &amp; Systèmes Intelligents de l'<strong>INSEA Rabat</strong>, et d'une Licence en Mathématiques &amp; Informatique de la <strong>FSDM Fès</strong>. J'ai travaillé sur l'IA cybersecurité, l'intelligence d'affaires et le génie LLM appliqué — le plus épanoui à l'intersection d'un travail de données rigoureux et d'une vision produit pragmatique.",
    "about.current": "Actuellement en freelance comme Développeur d'Agents IA, je construis des systèmes d'agents de production pour des clients qui privilégient la fiabilité à l'effet de spectacle.",
    "about.card_education": "Formation",
    "about.card_certs": "Certifications",
    "about.edu_master": "Master M2SI",
    "about.edu_bachelor": "Licence SMI",
    "about.cert_ml": "Spécialisation ML",
    "about.cert_data": "Analyse de Données",

    "exp.title": "Travaux sélectionnés",
    "exp.1.kind": "Freelance · Full-Stack & IA",
    "exp.1.role": "Ingénieur Backend & Frontend — Cylindrique Consulting",
    "exp.1.desc": "Construction d'une plateforme SaaS full-stack (3 portails, 15+ modules) de bout en bout — d'un backend typé sûr à un front React moderne, déployée en continu en production.",
    "exp.1.li1": "Construit la plateforme en TypeScript, Next.js 16 (App Router, Server Components) et React 19.",
    "exp.1.li2": "Conçu le backend sur Supabase / PostgreSQL avec Row-Level Security et validation Zod côté client et serveur.",
    "exp.1.li3": "Intégré Stripe, KYC et signature électronique via des API REST et webhooks signés.",
    "exp.1.li4": "Mis en place la CI/CD (GitHub Actions), les tests Vitest / Playwright et le déploiement Vercel.",
    "exp.2.kind": "Freelance · Génie IA",
    "exp.2.role": "Développeur d'Agents IA — Mendo",
    "exp.2.desc": "Conception et déploiement d'agents autonomes intelligents et de workflows pilotés par l'IA pour des environnements de production — où la fiabilité compte plus que les démos.",
    "exp.2.li1": "Conçu des workflows multi-agents automatisés dans n8n pour des exécutions de tâches complexes et ramifiées.",
    "exp.2.li2": "Construit et affiné des modèles ML et des embeddings personnalisés avec PyTorch.",
    "exp.2.li3": "Intégré des LLMs avec LangChain et LlamaIndex.",
    "exp.2.li4": "Développé des pipelines RAG sur Pinecone et ChromaDB.",
    "exp.3.kind": "Stage · Business Intelligence",
    "exp.3.role": "Analyste BI — AGH Data Agency Holding",
    "exp.3.desc": "Projet BI pour une application mobile de recettes — transformer les signaux du marché en stratégie produit et en plan go-to-market clair.",
    "exp.3.li1": "Analyse de marché et benchmark concurrentiel d'applications similaires.",
    "exp.3.li2": "Recherche utilisateur et segmentation pour définir les personas cibles.",
    "exp.3.li3": "Prévision de croissance et synthèse d'un rapport BI pour le marketing & la stratégie.",
    "exp.4.kind": "Stage de fin d'études · IA Cybersécurité",
    "exp.4.role": "Ingénieur UBA — DataProtect",
    "exp.4.desc": "Détection d'anomalies comportementales pour la chasse proactive aux menaces — combinant ML classique, ELK Stack et un LLM dans la boucle.",
    "exp.4.li1": "Développé un modèle <strong>User Behavior Analytics (UBA)</strong> pour la détection proactive des menaces.",
    "exp.4.li2": "Construit un pipeline de logs sur l'<strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana).",
    "exp.4.li3": "Entraîné un <strong>LLM</strong> pour repérer les déviations comportementales subtiles — meilleure couverture, moins de faux positifs.",

    "fl.title": "Livré pour des clients & utilisateurs",
    "fl.lede": "De vrais produits — full stack, du pipeline de données à l'interface.",
    "fl.1.title": "SafeKids — Extension de sécurité enfant",
    "fl.1.desc": "Une extension Chrome + backend FastAPI qui analyse les messages des enfants en temps réel, les classifie avec un LLM local (Ollama / llama3.2) selon 10 catégories de sécurité, note le risque de 0 à 100 et alerte les parents par e-mail en cas de contenu dangereux. 100% sur l'appareil — aucune IA cloud.",
    "fl.1.link": "Voir sur GitHub ↗",
    "fl.2.title": "YouTube Downloader",
    "fl.2.desc": "Un téléchargeur vidéo & audio moderne avec une UI web glassmorphique et un backend FastAPI propulsé par yt-dlp. Multi-qualités (jusqu'à 4K), extraction MP3, téléchargement sélectif de playlists, jobs asynchrones en arrière-plan et notifications bureau.",
    "fl.2.link": "Voir sur GitHub ↗",
    "fl.3.title": "RAG Historique — Q&R sur la WWII",
    "fl.3.desc": "Un système complet de génération augmentée par recherche répondant à des questions sur la Seconde Guerre mondiale sur deux bases de connaissances (livres d'histoire & personnel militaire). Recherche sémantique avec SentenceTransformers (mpnet), un LLM Ollama local (deepseek-r1) et une UI Flask. Ingestion PDF via PyMuPDF, Camelot & spaCy.",
    "fl.3.link": "Voir sur GitHub ↗",

    "proj.title": "Ce que j'ai construit pour apprendre",
    "proj.1.title": "Génération de légendes d'images",
    "proj.1.desc": "Pipeline encodeur-décodeur utilisant un Vision Transformer pour les caractéristiques visuelles et GPT-2 pour la génération de texte. Entraîné sur COCO pour produire des descriptions précises et contextuelles.",
    "proj.2.title": "Extraction d'informations de factures",
    "proj.2.desc": "Extraction automatisée de champs structurés — fournisseur, montant, date — à partir de PDF et factures scannées désordonnés. Combine l'OCR avec des prompts engineerés pour une haute précision sans fine-tuning.",
    "proj.3.title": "Pipelines RAG en production",
    "proj.3.desc": "Stratégies de découpage, recherche hybride, reranking, suivi des citations. Bases vectorielles sur Pinecone & ChromaDB, orchestration via LangChain et LlamaIndex.",
    "proj.4.title": "Workflows Multi-Agents",
    "proj.4.desc": "Flux d'agents ramifiés, conditionnels et auto-correctifs reliés via n8n — connectant les LLMs à des outils internes, API REST et bases de données pour une vraie automatisation métier.",

    "stack.title": "Mes outils de prédilection",
    "stack.languages": "Langages",
    "stack.languages_list": "Python (expert), R, Java, C, SQL, JavaScript",
    "stack.ml": "ML & Deep Learning",
    "stack.ml_list": "PyTorch, TensorFlow, Scikit-learn, Transformers, ViT, Pandas, NumPy",
    "stack.llms": "LLMs & Agents",
    "stack.llms_list": "LangChain, LlamaIndex, RAG, Prompt Engineering, API OpenAI / Anthropic",
    "stack.data": "Données & Pipelines",
    "stack.data_list": "Apache Airflow, n8n, Talend, ELK Stack, SIEM",
    "stack.databases": "Bases de données",
    "stack.databases_list": "MySQL, Oracle, PL/SQL, ChromaDB, Pinecone",
    "stack.bi": "BI & Analytics",
    "stack.bi_list": "Power BI, segmentation, benchmark, prévision",
    "stack.web": "Web & API",
    "stack.web_list": "FastAPI, Flask, PHP, Laravel, HTML, CSS, JS, REST",
    "stack.exploring": "En exploration",
    "stack.exploring_list": "Orchestration multi-agents, frameworks d'évaluation, LLMs on-device",

    "contact.title": "Construisons quelque chose de bien",
    "contact.lede": "Ouvert aux missions freelance, postes CDI et collaborations autour des LLMs, agents IA et systèmes de données.",
    "contact.email": "E-mail",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.phone": "Téléphone",

    "footer.copyright": "© 2026 Ahmed Bassoul",
    "footer.location": "Tanger, Maroc",
    "footer.built": "Conçu avec HTML · CSS · JS"
  }
};

// ===== Language state =====
const LANGS = ["en", "fr"];
const STORAGE_KEY = "portfolio_lang";

function getStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && LANGS.includes(stored)) return stored;
  } catch (e) {}
  return null;
}

function getInitialLang() {
  const stored = getStoredLang();
  if (stored) return stored;
  const navLang = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(navLang) ? navLang : "en";
}

let currentLang = getInitialLang();

// ===== Apply translation =====
function applyTranslations() {
  const dict = i18n[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update <html lang> and <title>
  const htmlEl = document.documentElement;
  htmlEl.setAttribute("lang", currentLang);

  // Update lang toggle active state
  document.querySelectorAll(".lang-opt").forEach((opt) => {
    const isActive = opt.getAttribute("data-lang") === currentLang;
    opt.classList.toggle("active", isActive);
    opt.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Persist choice
  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (e) {}
}

// ===== Toggle handler =====
function setupLangToggle() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const idx = LANGS.indexOf(currentLang);
    currentLang = LANGS[(idx + 1) % LANGS.length];
    applyTranslations();
  });
}

// Expose for script.js to call on load
window.__i18n = { applyTranslations, setupLangToggle, getLang: () => currentLang };
