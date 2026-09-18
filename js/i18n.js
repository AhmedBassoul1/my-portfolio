// ===== Translations =====
const i18n = {
  en: {
    "meta.title": "Ahmed Bassoul — Full-Stack Developer & AI/ML Engineer",
    "meta.description": "Portfolio of Ahmed Bassoul — Full-Stack Developer & AI/ML Engineer based in Tanger. LLMs, RAG pipelines, AI agents and modern web apps.",
    "meta.og_title": "Ahmed Bassoul — Full-Stack Developer & AI/ML Engineer",
    "meta.og_description": "Building AI agents, RAG systems, and modern full-stack web applications.",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.resume_btn": "Resume",

    "sec.01": "01.",
    "sec.02": "02.",
    "sec.03": "03.",
    "sec.04": "04.",
    "sec.05": "05.",
    "sec.06": "06.",
    "sec.07": "07.",
    "sec.08": "08.",

    "hero.hi": "Hi, my name is",
    "hero.badge": "Open to work — freelance, full-time & remote roles",
    "hero.first": "Ahmed",
    "hero.last": "Bassoul.",
    "hero.role": "Full-Stack Developer &amp; AI/ML Engineer.",
    "hero.lede": "Passionate about building exceptional digital experiences and intelligent systems. I specialize in modern web applications and AI-driven automation using <strong>Python</strong>, <strong>React</strong>, and <strong>LLM-powered agents</strong>.",
    "hero.cta_work": "View My Work",
    "hero.cta_contact": "Get In Touch",
    "hero.stat_projects": "Projects built",
    "hero.stat_years": "Years of experience",
    "hero.stat_langs": "Languages spoken",

    "about.title": "About Me",
    "about.lead": "I trained as a mathematician, fell for machine learning, and now spend my days teaching machines to read, retrieve, and reason.",
    "about.education": "I hold a Master's in Information Systems &amp; Intelligent Systems from <strong>INSEA Rabat</strong>, on top of a Bachelor's in Mathematics &amp; Computer Science from <strong>FSDM Fez</strong>. I've worked across cybersecurity AI, business intelligence, and applied LLM engineering — happiest at the intersection of rigorous data work and practical product thinking.",
    "about.current": "Right now I'm freelancing as a Full-Stack &amp; AI Agent Developer, building production web platforms and agent systems for clients who care about reliability over theatrics.",
    "about.languages": "Languages",
    "about.lang_ar": "Arabic",
    "about.lang_ar_level": "Native",
    "about.lang_fr": "French",
    "about.lang_fr_level": "Fluent",
    "about.lang_en": "English",
    "about.lang_en_level": "Professional",
    "about.card_education": "Education",
    "about.card_certs": "Certifications",
    "about.edu_master": "Master M2SI",
    "about.edu_bachelor": "Bachelor SMI",
    "about.cert_ml": "ML Specialization",
    "about.cert_data": "Data Analytics",

    "exp.title": "Experience &amp; Education",
    "exp.tab_experience": "Experience",
    "exp.tab_education": "Education",
    "exp.1.date": "06/2026 – 09/2026",
    "exp.1.kind": "Freelance · Full-Stack &amp; AI",
    "exp.1.role": "Backend &amp; Frontend Engineer <span class=\"org\">— Cylindrique Consulting</span>",
    "exp.1.desc": "Building a full-stack SaaS platform (3 portals, 15+ modules) end to end — from a type-safe backend to a modern React front end, shipped continuously to production.",
    "exp.1.li1": "Built the platform in <strong>TypeScript</strong>, <strong>Next.js 16</strong> (App Router, Server Components) and <strong>React 19</strong>.",
    "exp.1.li2": "Designed the backend on <strong>Supabase / PostgreSQL</strong> with <strong>Row-Level Security</strong> and <strong>Zod</strong> validation on client and server.",
    "exp.1.li3": "Integrated <strong>Stripe</strong>, KYC and e-signature via REST APIs and signed webhooks.",
    "exp.1.li4": "Set up <strong>CI/CD</strong> (GitHub Actions), <strong>Vitest / Playwright</strong> tests, and <strong>Vercel</strong> deployment.",
    "exp.2.date": "02/2026 – Present",
    "exp.2.kind": "Freelance · AI Engineering",
    "exp.2.role": "AI Agent Developer <span class=\"org\">— Mendo</span>",
    "exp.2.desc": "Designing and shipping intelligent autonomous agents and AI-driven workflows for production environments — where reliability matters more than demos.",
    "exp.2.li1": "Engineered multi-agent automated workflows in <strong>n8n</strong> for complex, branching task execution.",
    "exp.2.li2": "Built and fine-tuned custom ML models and embeddings using <strong>PyTorch</strong>.",
    "exp.2.li3": "Integrated <strong>LLMs</strong> with <strong>LangChain</strong> and <strong>LlamaIndex</strong>.",
    "exp.2.li4": "Developed <strong>RAG pipelines</strong> on <strong>Pinecone</strong> and <strong>ChromaDB</strong>.",
    "exp.3.kind": "Internship · Business Intelligence",
    "exp.3.role": "BI Analyst <span class=\"org\">— AGH Data Agency Holding</span>",
    "exp.3.desc": "BI project for a mobile recipe application — translating market signals into product strategy and a clear go-to-market plan.",
    "exp.3.li1": "Market analysis and competitive benchmarking of similar applications.",
    "exp.3.li2": "User research and segmentation to define target personas.",
    "exp.3.li3": "Forecasted growth and synthesized a BI report for marketing &amp; strategy.",
    "exp.4.kind": "Final-Year Internship · Cybersecurity AI",
    "exp.4.role": "UBA Engineer <span class=\"org\">— DataProtect</span>",
    "exp.4.desc": "Behavioral anomaly detection for proactive threat hunting — combining classical ML, the ELK Stack, and an LLM in the loop.",
    "exp.4.li1": "Developed a <strong>User Behavior Analytics (UBA)</strong> model for proactive threat detection.",
    "exp.4.li2": "Built a log pipeline on the <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana).",
    "exp.4.li3": "Trained an <strong>LLM</strong> to flag subtle behavioral deviations — improved coverage, fewer false positives.",
    "edu.1.date": "2023 — 2025",
    "edu.1.role": "Master's — Information Systems &amp; Intelligent Systems <span class=\"org\">— INSEA, Rabat</span>",
    "edu.1.desc": "Advanced coursework in machine learning, information systems architecture, and applied statistics.",
    "edu.2.date": "2020 — 2023",
    "edu.2.role": "Bachelor's — Mathematics &amp; Computer Science <span class=\"org\">— FSDM, Fez</span>",
    "edu.2.desc": "Foundations in mathematics, algorithms, and computer science that underpin all my later ML work.",

    "skills.title": "Technical Skills",
    "skills.ai.title": "AI &amp; Data Science",
    "skills.frameworks.title": "Frameworks &amp; Back-end",
    "skills.databases.title": "Databases",
    "skills.devops.title": "DevOps &amp; Cloud",
    "skills.bi.title": "BI &amp; Analytics",
    "skills.exploring.title": "Currently Exploring",

    "proj.title": "Projects",
    "proj.client_title": "Client &amp; Shipped Work",
    "proj.client_lede": "Real products — full stack, from data pipeline to UI.",
    "proj.lab_title": "Lab &amp; Learning Projects",
    "proj.lab_lede": "Things I built to learn and push my skills further.",
    "fl.1.title": "SafeKids — Child-Safety Extension",
    "fl.1.desc": "A Chrome extension + FastAPI backend that scans children's messages in real time, classifies them with a <strong>local LLM</strong> (Ollama / llama3.2) across 10 safety categories, scores risk 0–100, and emails parents on dangerous content. 100% on-device — no cloud AI.",
    "fl.1.link": "View on GitHub ↗",
    "fl.2.title": "YouTube Downloader",
    "fl.2.desc": "A modern video &amp; audio downloader with a glassmorphic web UI and a <strong>FastAPI</strong> backend powered by <strong>yt-dlp</strong>. Multi-quality (up to 4K), MP3 extraction, selective playlist downloading, async background jobs, and desktop notifications.",
    "fl.2.link": "View on GitHub ↗",
    "fl.3.title": "Historical RAG — WWII Q&amp;A",
    "fl.3.desc": "A full <strong>Retrieval-Augmented Generation</strong> system answering questions on WWII over two knowledge bases (history books &amp; military personnel). Semantic search with <strong>SentenceTransformers</strong> (mpnet), a local <strong>Ollama</strong> LLM (deepseek-r1), and a Flask UI. PDF ingestion via PyMuPDF, Camelot &amp; spaCy.",
    "fl.3.link": "View on GitHub ↗",
    "proj.1.title": "Image Caption Generation",
    "proj.1.desc": "Encoder-decoder pipeline using a Vision Transformer for visual features and GPT-2 for text generation. Trained on COCO to produce accurate, contextual descriptions.",
    "proj.2.title": "Invoice Information Extraction",
    "proj.2.desc": "Automated extraction of structured fields — supplier, amount, date — from messy PDFs and scanned invoices. Combines OCR with engineered prompts for high precision without fine-tuning.",
    "proj.3.title": "Production RAG Pipelines",
    "proj.3.desc": "Chunking strategies, hybrid search, reranking, citation tracking. Vector stores on Pinecone &amp; ChromaDB, orchestration via LangChain and LlamaIndex.",
    "proj.4.title": "Multi-Agent Workflows",
    "proj.4.desc": "Branching, conditional, self-correcting agent flows wired through n8n — connecting LLMs to internal tools, REST APIs, and databases for real business automation.",

    "resume.title": "My Resume",
    "resume.name": "Ahmed Bassoul",
    "resume.role": "Full-Stack Developer &amp; AI/ML Engineer",
    "resume.download": "Download Resume",
    "resume.open": "Open in new tab",
    "resume.fallback": "My latest resume PDF will be posted here shortly — in the meantime, feel free to email me for a copy.",

    "faq.title": "Frequently Asked Questions",
    "faq.1.q": "Who is Ahmed Bassoul?",
    "faq.1.a": "I'm a Full-Stack Developer &amp; AI/ML Engineer based in Tanger, Morocco, with a Master's in Information Systems from INSEA Rabat. I build production web platforms and AI agent systems for clients across full-stack development, LLMs, and applied machine learning.",
    "faq.2.q": "What AI/ML services do you offer?",
    "faq.2.a": "AI agent development and multi-agent workflow automation, RAG pipeline design, LLM integration (LangChain / LlamaIndex), custom ML model training and fine-tuning, and computer vision or NLP prototypes.",
    "faq.3.q": "Which technologies do you work with day to day?",
    "faq.3.a": "Python, PyTorch, LangChain and n8n on the AI side; TypeScript, React, Next.js, FastAPI and Supabase/PostgreSQL on the full-stack side.",
    "faq.4.q": "Are you available for freelance work, internships or full-time roles?",
    "faq.4.a": "Yes — I'm currently open to freelance contracts, full-time roles, and remote collaborations.",
    "faq.5.q": "What kind of projects have you delivered?",
    "faq.5.a": "A multi-portal SaaS platform, an on-device LLM child-safety Chrome extension (SafeKids), a Retrieval-Augmented Generation Q&amp;A system on WWII history, a YouTube downloader with an async FastAPI backend, and a behavioral anomaly detection system for cybersecurity.",
    "faq.6.q": "How can I see your CV or get in touch?",
    "faq.6.a": "Check the Resume section above for my full CV, or use the contact form below — I read every message and reply personally.",

    "contact.label": "What's Next?",
    "contact.title": "Get In Touch",
    "contact.lede": "I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!",
    "contact.name": "Name",
    "contact.name_ph": "Your name",
    "contact.email_label": "Email",
    "contact.email_ph": "your@email.com",
    "contact.message": "Message",
    "contact.message_ph": "Hi Ahmed, I'd like to talk about…",
    "contact.send": "Send Message",
    "contact.sending": "Sending…",
    "contact.success": "Success! Your message has been sent — I'll get back to you soon.",
    "contact.error": "Something went wrong. Please email me directly instead.",
    "contact.direct": "or email me directly at",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.phone": "Phone",

    "footer.copyright": "© 2026 Ahmed Bassoul",
    "footer.location": "Tanger, Morocco",
    "footer.built": "Built with HTML · CSS · JS"
  },

  fr: {
    "meta.title": "Ahmed Bassoul — Développeur Full-Stack & Ingénieur IA/ML",
    "meta.description": "Portfolio d'Ahmed Bassoul — Développeur Full-Stack & Ingénieur IA/ML basé à Tanger. LLMs, pipelines RAG, agents IA et applications web modernes.",
    "meta.og_title": "Ahmed Bassoul — Développeur Full-Stack & Ingénieur IA/ML",
    "meta.og_description": "Construction d'agents IA, de systèmes RAG et d'applications web full-stack modernes.",

    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.resume": "CV",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.resume_btn": "CV",

    "sec.01": "01.",
    "sec.02": "02.",
    "sec.03": "03.",
    "sec.04": "04.",
    "sec.05": "05.",
    "sec.06": "06.",
    "sec.07": "07.",
    "sec.08": "08.",

    "hero.hi": "Salut, je m'appelle",
    "hero.badge": "Disponible — freelance, CDI & télétravail",
    "hero.first": "Ahmed",
    "hero.last": "Bassoul.",
    "hero.role": "Développeur Full-Stack &amp; Ingénieur IA/ML.",
    "hero.lede": "Passionné par la création d'expériences digitales exceptionnelles et de systèmes intelligents. Je me spécialise dans les applications web modernes et l'automatisation pilotée par l'IA avec <strong>Python</strong>, <strong>React</strong> et des <strong>agents propulsés par des LLMs</strong>.",
    "hero.cta_work": "Voir mes projets",
    "hero.cta_contact": "Me contacter",
    "hero.stat_projects": "Projets réalisés",
    "hero.stat_years": "Années d'expérience",
    "hero.stat_langs": "Langues parlées",

    "about.title": "À propos de moi",
    "about.lead": "Formé en mathématiques, tombé amoureux du machine learning, je passe mes journées à apprendre aux machines à lire, rechercher et raisonner.",
    "about.education": "Titulaire d'un Master en Systèmes d'Information &amp; Systèmes Intelligents de l'<strong>INSEA Rabat</strong>, et d'une Licence en Mathématiques &amp; Informatique de la <strong>FSDM Fès</strong>. J'ai travaillé sur l'IA cybersécurité, l'intelligence d'affaires et le génie LLM appliqué — le plus épanoui à l'intersection d'un travail de données rigoureux et d'une vision produit pragmatique.",
    "about.current": "Actuellement en freelance comme Développeur Full-Stack &amp; Agents IA, je construis des plateformes web de production et des systèmes d'agents pour des clients qui privilégient la fiabilité à l'effet de spectacle.",
    "about.languages": "Langues",
    "about.lang_ar": "Arabe",
    "about.lang_ar_level": "Natif",
    "about.lang_fr": "Français",
    "about.lang_fr_level": "Courant",
    "about.lang_en": "Anglais",
    "about.lang_en_level": "Professionnel",
    "about.card_education": "Formation",
    "about.card_certs": "Certifications",
    "about.edu_master": "Master M2SI",
    "about.edu_bachelor": "Licence SMI",
    "about.cert_ml": "Spécialisation ML",
    "about.cert_data": "Analyse de Données",

    "exp.title": "Expérience &amp; Formation",
    "exp.tab_experience": "Expérience",
    "exp.tab_education": "Formation",
    "exp.1.date": "06/2026 – 09/2026",
    "exp.1.kind": "Freelance · Full-Stack &amp; IA",
    "exp.1.role": "Ingénieur Backend &amp; Frontend <span class=\"org\">— Cylindrique Consulting</span>",
    "exp.1.desc": "Construction d'une plateforme SaaS full-stack (3 portails, 15+ modules) de bout en bout — d'un backend typé sûr à un front React moderne, déployée en continu en production.",
    "exp.1.li1": "Construit la plateforme en <strong>TypeScript</strong>, <strong>Next.js 16</strong> (App Router, Server Components) et <strong>React 19</strong>.",
    "exp.1.li2": "Conçu le backend sur <strong>Supabase / PostgreSQL</strong> avec <strong>Row-Level Security</strong> et validation <strong>Zod</strong> côté client et serveur.",
    "exp.1.li3": "Intégré <strong>Stripe</strong>, KYC et signature électronique via des API REST et webhooks signés.",
    "exp.1.li4": "Mis en place la <strong>CI/CD</strong> (GitHub Actions), les tests <strong>Vitest / Playwright</strong> et le déploiement <strong>Vercel</strong>.",
    "exp.2.date": "02/2026 – Présent",
    "exp.2.kind": "Freelance · Génie IA",
    "exp.2.role": "Développeur d'Agents IA <span class=\"org\">— Mendo</span>",
    "exp.2.desc": "Conception et déploiement d'agents autonomes intelligents et de workflows pilotés par l'IA pour des environnements de production — où la fiabilité compte plus que les démos.",
    "exp.2.li1": "Conçu des workflows multi-agents automatisés dans <strong>n8n</strong> pour des exécutions de tâches complexes et ramifiées.",
    "exp.2.li2": "Construit et affiné des modèles ML et des embeddings personnalisés avec <strong>PyTorch</strong>.",
    "exp.2.li3": "Intégré des <strong>LLMs</strong> avec <strong>LangChain</strong> et <strong>LlamaIndex</strong>.",
    "exp.2.li4": "Développé des <strong>pipelines RAG</strong> sur <strong>Pinecone</strong> et <strong>ChromaDB</strong>.",
    "exp.3.kind": "Stage · Business Intelligence",
    "exp.3.role": "Analyste BI <span class=\"org\">— AGH Data Agency Holding</span>",
    "exp.3.desc": "Projet BI pour une application mobile de recettes — transformer les signaux du marché en stratégie produit et en plan go-to-market clair.",
    "exp.3.li1": "Analyse de marché et benchmark concurrentiel d'applications similaires.",
    "exp.3.li2": "Recherche utilisateur et segmentation pour définir les personas cibles.",
    "exp.3.li3": "Prévision de croissance et synthèse d'un rapport BI pour le marketing &amp; la stratégie.",
    "exp.4.kind": "Stage de fin d'études · IA Cybersécurité",
    "exp.4.role": "Ingénieur UBA <span class=\"org\">— DataProtect</span>",
    "exp.4.desc": "Détection d'anomalies comportementales pour la chasse proactive aux menaces — combinant ML classique, ELK Stack et un LLM dans la boucle.",
    "exp.4.li1": "Développé un modèle <strong>User Behavior Analytics (UBA)</strong> pour la détection proactive des menaces.",
    "exp.4.li2": "Construit un pipeline de logs sur l'<strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana).",
    "exp.4.li3": "Entraîné un <strong>LLM</strong> pour repérer les déviations comportementales subtiles — meilleure couverture, moins de faux positifs.",
    "edu.1.date": "2023 — 2025",
    "edu.1.role": "Master — Systèmes d'Information &amp; Systèmes Intelligents <span class=\"org\">— INSEA, Rabat</span>",
    "edu.1.desc": "Cours avancés en machine learning, architecture des systèmes d'information et statistiques appliquées.",
    "edu.2.date": "2020 — 2023",
    "edu.2.role": "Licence — Mathématiques &amp; Informatique <span class=\"org\">— FSDM, Fès</span>",
    "edu.2.desc": "Bases en mathématiques, algorithmique et informatique qui sous-tendent tout mon travail ultérieur en ML.",

    "skills.title": "Compétences Techniques",
    "skills.ai.title": "IA &amp; Data Science",
    "skills.frameworks.title": "Frameworks &amp; Back-end",
    "skills.databases.title": "Bases de données",
    "skills.devops.title": "DevOps &amp; Cloud",
    "skills.bi.title": "BI &amp; Analytics",
    "skills.exploring.title": "En exploration",

    "proj.title": "Projets",
    "proj.client_title": "Livré pour des clients & utilisateurs",
    "proj.client_lede": "De vrais produits — full stack, du pipeline de données à l'interface.",
    "proj.lab_title": "Projets de laboratoire & d'apprentissage",
    "proj.lab_lede": "Ce que j'ai construit pour apprendre et repousser mes compétences.",
    "fl.1.title": "SafeKids — Extension de sécurité enfant",
    "fl.1.desc": "Une extension Chrome + backend FastAPI qui analyse les messages des enfants en temps réel, les classifie avec un <strong>LLM local</strong> (Ollama / llama3.2) selon 10 catégories de sécurité, note le risque de 0 à 100 et alerte les parents par e-mail en cas de contenu dangereux. 100% sur l'appareil — aucune IA cloud.",
    "fl.1.link": "Voir sur GitHub ↗",
    "fl.2.title": "YouTube Downloader",
    "fl.2.desc": "Un téléchargeur vidéo &amp; audio moderne avec une UI web glassmorphique et un backend <strong>FastAPI</strong> propulsé par <strong>yt-dlp</strong>. Multi-qualités (jusqu'à 4K), extraction MP3, téléchargement sélectif de playlists, jobs asynchrones en arrière-plan et notifications bureau.",
    "fl.2.link": "Voir sur GitHub ↗",
    "fl.3.title": "RAG Historique — Q&amp;R sur la WWII",
    "fl.3.desc": "Un système complet de <strong>génération augmentée par recherche</strong> répondant à des questions sur la Seconde Guerre mondiale sur deux bases de connaissances (livres d'histoire &amp; personnel militaire). Recherche sémantique avec <strong>SentenceTransformers</strong> (mpnet), un LLM <strong>Ollama</strong> local (deepseek-r1) et une UI Flask. Ingestion PDF via PyMuPDF, Camelot &amp; spaCy.",
    "fl.3.link": "Voir sur GitHub ↗",
    "proj.1.title": "Génération de légendes d'images",
    "proj.1.desc": "Pipeline encodeur-décodeur utilisant un Vision Transformer pour les caractéristiques visuelles et GPT-2 pour la génération de texte. Entraîné sur COCO pour produire des descriptions précises et contextuelles.",
    "proj.2.title": "Extraction d'informations de factures",
    "proj.2.desc": "Extraction automatisée de champs structurés — fournisseur, montant, date — à partir de PDF et factures scannées désordonnés. Combine l'OCR avec des prompts engineerés pour une haute précision sans fine-tuning.",
    "proj.3.title": "Pipelines RAG en production",
    "proj.3.desc": "Stratégies de découpage, recherche hybride, reranking, suivi des citations. Bases vectorielles sur Pinecone &amp; ChromaDB, orchestration via LangChain et LlamaIndex.",
    "proj.4.title": "Workflows Multi-Agents",
    "proj.4.desc": "Flux d'agents ramifiés, conditionnels et auto-correctifs reliés via n8n — connectant les LLMs à des outils internes, API REST et bases de données pour une vraie automatisation métier.",

    "resume.title": "Mon CV",
    "resume.name": "Ahmed Bassoul",
    "resume.role": "Développeur Full-Stack &amp; Ingénieur IA/ML",
    "resume.download": "Télécharger le CV",
    "resume.open": "Ouvrir dans un nouvel onglet",
    "resume.fallback": "Mon CV en PDF sera bientôt disponible ici — en attendant, n'hésitez pas à m'envoyer un e-mail pour l'obtenir.",

    "faq.title": "Questions Fréquentes",
    "faq.1.q": "Qui est Ahmed Bassoul ?",
    "faq.1.a": "Je suis Développeur Full-Stack &amp; Ingénieur IA/ML basé à Tanger, Maroc, titulaire d'un Master en Systèmes d'Information de l'INSEA Rabat. Je construis des plateformes web de production et des systèmes d'agents IA pour des clients, entre développement full-stack, LLMs et machine learning appliqué.",
    "faq.2.q": "Quels services IA/ML proposez-vous ?",
    "faq.2.a": "Développement d'agents IA et automatisation de workflows multi-agents, conception de pipelines RAG, intégration de LLMs (LangChain / LlamaIndex), entraînement et fine-tuning de modèles ML sur mesure, et prototypes de vision par ordinateur ou de NLP.",
    "faq.3.q": "Avec quelles technologies travaillez-vous au quotidien ?",
    "faq.3.a": "Python, PyTorch, LangChain et n8n côté IA ; TypeScript, React, Next.js, FastAPI et Supabase/PostgreSQL côté full-stack.",
    "faq.4.q": "Êtes-vous disponible pour du freelance, un stage ou un CDI ?",
    "faq.4.a": "Oui — je suis actuellement ouvert aux missions freelance, aux postes en CDI et aux collaborations à distance.",
    "faq.5.q": "Quel type de projets avez-vous livré ?",
    "faq.5.a": "Une plateforme SaaS multi-portails, une extension Chrome de sécurité enfant avec LLM local (SafeKids), un système de questions-réponses par génération augmentée par recherche sur l'histoire de la WWII, un téléchargeur YouTube avec backend FastAPI asynchrone, et un système de détection d'anomalies comportementales pour la cybersécurité.",
    "faq.6.q": "Comment voir votre CV ou vous contacter ?",
    "faq.6.a": "Consultez la section CV ci-dessus pour mon CV complet, ou utilisez le formulaire de contact ci-dessous — je lis chaque message et je réponds personnellement.",

    "contact.label": "Et maintenant ?",
    "contact.title": "Me Contacter",
    "contact.lede": "Je suis actuellement à la recherche de nouvelles opportunités et ma boîte mail est toujours ouverte. Que vous ayez une question ou envie de dire bonjour, je ferai de mon mieux pour vous répondre !",
    "contact.name": "Nom",
    "contact.name_ph": "Votre nom",
    "contact.email_label": "E-mail",
    "contact.email_ph": "votre@email.com",
    "contact.message": "Message",
    "contact.message_ph": "Bonjour Ahmed, j'aimerais discuter de…",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi…",
    "contact.success": "Message envoyé avec succès — je vous répondrai bientôt.",
    "contact.error": "Une erreur s'est produite. Merci de m'écrire directement par e-mail.",
    "contact.direct": "ou écrivez-moi directement à",
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  // Update <html lang> and <title>
  const htmlEl = document.documentElement;
  htmlEl.setAttribute("lang", currentLang);

  // Update FR/EN toggle button label (shows the *other* language to switch to)
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    const next = LANGS[(LANGS.indexOf(currentLang) + 1) % LANGS.length];
    langBtn.textContent = next.toUpperCase();
    langBtn.setAttribute("aria-label", currentLang === "en" ? "Passer en français" : "Switch to English");
  }

  // Persist choice
  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch (e) {}

  window.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: currentLang } }));
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
window.__i18n = { applyTranslations, setupLangToggle, getLang: () => currentLang, dict: () => i18n[currentLang] };
