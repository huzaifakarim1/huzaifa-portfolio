import { CERT_LOGOS } from "./certLogos";

const navLinks = [
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Certifications",
        link: "#certifications",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Leadership",
        link: "#leadership",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 16, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Certifications Earned" },
    { value: 2058, suffix: "", label: "GitHub Contributions" },
];



const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Always Learning",
        desc: "Constantly leveling up — with certifications from Meta, Google, IBM and more, applied in real projects.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Clear Communication",
        desc: "Readable, well-documented code and the ability to explain technical decisions in plain language.",
    },
    {
        imgPath: "/images/time.png",
        title: "End-to-End Ownership",
        desc: "I take projects from idea to deployment — building, testing, and shipping the whole thing myself.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

// Real work experience. Edit titles/dates/responsibilities/tech to your truth.
// `accent` = the company's brand colour; drives that card's timeline line.
// To add a company later, just add another object (or uncomment EFU/UBL below).
const expCards = [
    {
        accent: "#d9ecff",
        techStack: ["React", "JavaScript", "Tailwind CSS", "Redux", "Vite"],
        imgPath: "/images/companies/10pearls.svg",
        logoPath: "/images/companies/10pearls-logo.svg",
        title: "Your Role — 10Pearls",
        date: "Month Year - Month Year",
        responsibilities: [
            "Describe what you built or owned at 10Pearls.",
            "Add a second real responsibility or achievement.",
            "Add a third — keep them concrete and honest.",
        ],
    },
    {
        accent: "#F96435",
        techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
        imgPath: "/images/companies/superchat.svg",
        logoPath: "/images/companies/superchat-logo.svg",
        title: "Your Role — Superchat",
        date: "Month Year - Month Year",
        responsibilities: [
            "Describe what you worked on at Superchat.",
            "Add a second real responsibility or achievement.",
            "Add a third — keep them concrete and honest.",
        ],
    },
    {
        accent: "#4a80db",
        techStack: ["React Native", "Expo", "TypeScript", "Appwrite"],
        imgPath: "/images/companies/ibix.svg",
        logoPath: "/images/companies/ibix-logo.svg",
        title: "Your Role — Ibix Global Tech",
        date: "Month Year - Month Year",
        responsibilities: [
            "Describe what you worked on at Ibix Global Tech.",
            "Add a second real responsibility or achievement.",
            "Add a third — keep them concrete and honest.",
        ],
    },
    // {
    //     accent: "#057e8d",
    //     techStack: ["Add", "your", "tech"],
    //     imgPath: "/images/companies/efu.svg",
    //     logoPath: "/images/companies/efu-logo.svg",
    //     title: "Your Role — EFU Life",
    //     date: "Month Year - Month Year",
    //     responsibilities: [
    //         "Describe your work at EFU Life.",
    //         "Second responsibility.",
    //         "Third responsibility.",
    //     ],
    // },
    {
        accent: "#0075be",
        techStack: ["Add", "your", "tech"],
        imgPath: "/images/companies/ubl.svg",
        logoPath: "/images/companies/ubl-logo.svg",
        title: "Your Role — UBL",
        date: "Month Year - Month Year",
        responsibilities: [
            "Describe your work at UBL.",
            "Second responsibility.",
            "Third responsibility.",
        ],
    },
];



const projectCategories = [
    "All",
    "Frontend",
    "Fullstack",
    "Game Dev",
    "AI/ML",
    "Data Science",
];

const projects = [
    {
        id: "GradeME AI",
        title: "AI-Powered Auto-Grading Platform",
        desc: "AI-powered grading platform for programming courses with automated code execution, semantic grading, and plagiarism detection.",
        category: "Fullstack",
        tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Python", "Flask", "Judge0", "Sentence-BERT", "Google Gemini", "Docker", "Tailwind CSS"],
        image: "/images/grademeai.png",
        bg: "bg-[#e8f3ff]",
        github: "https://github.com/huzaifa-fullstack/grademe-ai",
        live: "https://gradmeai.app/",
    },
    {
        id: "EduVox AI",
        title: "AI-Powered Educational Voice Companion Platform",
        desc: "AI-powered voice learning platform with real-time tutoring, personalized AI companions, and interactive educational conversations.",
        category: "Fullstack",
        tags: ["Next.js", "TypeScript", "Supabase", "Clerk", "OpenAI GPT-4", "Vapi AI", "ElevenLabs", "Deepgram"],
        image: "/images/eduvoxai.png",
        bg: "bg-[#e6f6ee]",
        github: "https://github.com/huzaifa-fullstack/eduvox-ai",
        live: "https://eduvox-ai.vercel.app/",
    },
    {
        id: "Scribo Notes",
        title: "AI-Powered Smart Notes Application",
        desc: "AI-powered note-taking application with rich-text editing, intelligent writing assistance, content summarization, and secure cloud storage.",
        category: "Fullstack",
        tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "TipTap", "Tailwind CSS", "Cloudinary"],
        image: "/images/scribonotes.png",
        bg: "bg-[#ffe7eb]",
        github: "https://github.com/huzaifa-fullstack/scribo-notes-ai",
        live: "https://www.scribonotes.tech/",
    },
    {
        id: "HireFlow AI",
        title: "AI-Powered Resume Analysis Platform",
        desc: "AI-powered resume analysis platform that evaluates ATS compatibility, content, structure, tone, and skills with actionable feedback and interactive visualizations.",
        category: "Fullstack",
        tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Zustand", "PDF.js", "Puter"],
        image: "/images/hireflowai.png",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-fullstack/hireflow-ai",
        live: "https://hireflow-ai-nine.vercel.app/",
    },
    {
        id: "Little Lemon App",
        title: "Mediterranean Restaurant Web Application",
        desc: "Modern restaurant web application featuring an interactive menu, table reservations, responsive design, and a polished user experience.",
        category: "Frontend",
        tags: ["React", "JavaScript", "Material UI", "React Router", "Formik", "Yup", "Context API", "Jest"],
        image: "/images/littlelemonapp.png",
        bg: "bg-[#e8f3ff]",
        github: "https://github.com/huzaifa-frontend/little-lemon-app",
        live: "https://little-lemon-app-indol.vercel.app/",
    },
    {
        id: "Pong",
        title: "Pong — 2D Arcade Game",
        desc: "A Lua/LÖVE2D recreation of the classic Pong arcade game featuring two-player paddle controls, ball physics, collision detection, scoring, and sound effects.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50pong.png",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-pong",
    },
    {
        id: "Flappy Bird",
        title: "Flappy Bird — 2D Arcade Game",
        desc: "A Lua/LÖVE2D recreation of Flappy Bird featuring randomized pipe generation, scrolling gameplay, scoring, medals, and pause functionality.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50flappybird.png",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-flappy-bird",
    },
    {
        id: "Breakout",
        title: "Breakout — Brick-Breaking Arcade Game",
        desc: "A Lua/LÖVE2D Breakout game featuring ball physics, paddle controls, multiple levels, power-ups, particle effects, and progressive gameplay.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50breakout.png",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-breakout",
    },
    {
        id: "Match-3",
        title: "Match-3 — Tile-Matching Puzzle Game",
        desc: "A Lua/LÖVE2D puzzle game featuring tile matching, valid-only swaps, timed gameplay, score bonuses, and animated tile effects.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50match3.png",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-match3",
    },
    {
        id: "Super Mario Bros.",
        title: "Super Mario Bros. — 2D Platformer",
        desc: "A Lua/LÖVE2D platformer inspired by Super Mario Bros. featuring tile-based levels, platforming mechanics, keys, locks, goal posts, and progressive level design.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50supermariobros.png",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-super-mario-bros",
    },
    {
        id: "Legend of Zelda",
        title: "Legend of Zelda — Top-Down Dungeon Crawler",
        desc: "A Lua/LÖVE2D dungeon crawler inspired by The Legend of Zelda featuring combat, dungeon exploration, heart drops, pot pickups, and throwable pot mechanics.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50legendofzelda.jfif",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-legend-of-zelda",
    },
    {
        id: "Angry Birds",
        title: "Angry Birds — Physics-Based Projectile Game",
        desc: "A Lua/LÖVE2D physics game inspired by Angry Birds featuring projectile trajectories, destructible structures, Box2D physics, and a triple-split projectile mechanic.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D", "Box2D"],
        image: "/images/cs50angrybirds.jfif",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-angry-birds",
    },
    {
        id: "Pokemon",
        title: "Pokémon — Turn-Based RPG Battle",
        desc: "A Lua/LÖVE2D Pokémon-inspired RPG featuring turn-based battles, battle menus, Pokémon abilities, experience progression, and a dynamic level-up statistics system.",
        category: "Game Dev",
        tags: ["Lua", "LÖVE2D"],
        image: "/images/cs50pokemon.jfif",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-pokemon",
    },
      {
        id: "3D Helicopter",
        title: "Helicopter Game — 3D Flight Game",
        desc: "A Unity 3D helicopter game featuring obstacle navigation, collectible gems, scrolling environments, collision detection, spawning systems, and audio.",
        category: "Game Dev",
        tags: ["Unity", "C#"],
        image: "/images/cs503dhelicopter.jfif",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-3d-helicopter",
    },
    {
        id: "Dreadhalls",
        title: "Dreadhalls — 3D Horror Exploration Game",
        desc: "A Unity 3D horror exploration game inspired by Dreadhalls, featuring first-person exploration, atmospheric environments, and survival-focused gameplay.",
        category: "Game Dev",
        tags: ["Unity", "C#"],
        image: "/images/cs50dreadhalls.jfif",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-dreadhalls",
    },
    {
        id: "Portal",
        title: "Portal — 3D Puzzle Platformer",
        desc: "A Unity 3D puzzle game inspired by Portal featuring first-person exploration, portal-based traversal, physics interactions, and environmental puzzle mechanics.",
        category: "Game Dev",
        tags: ["Unity", "C#"],
        image: "/images/cs50portal.jfif",
        bg: "bg-[#ffefdb]",
        github: "https://github.com/huzaifa-gamedev/cs50-portal",
    },
    {
        id: "Customer Churn Prediction",
        title: "Machine Learning Prediction System",
        desc: "Machine learning application that predicts customer churn using Random Forest with data visualization, preprocessing, and an interactive desktop interface.",
        category: "AI/ML",
        tags: ["Python", "Scikit-learn", "Random Forest", "Tkinter", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        image: "/images/customerchurnprediction.png",
        bg: "bg-[#e8f3ff]",
        github: "https://github.com/huzaifa-vault/customer-churn-prediction",
    },
];

const socialImgs = [
    {
        name: "github",
        url: "https://github.com/huzaifakarim1",
        imgPath: "/images/github.svg",
    },
    {
        name: "gmail",
        url: "mailto:karimhuzaifa590@gmail.com",
        imgPath: "/images/gmail.svg",
    },
    {
        name: "linkedin",
        url: "http://www.linkedin.com/in/muhammad-huzaifa-karim-590k",
        imgPath: "/images/linkedin.png",
    },
];

// Certification issuers. Each holds one OR MANY credentials (clicking a logo
// opens a panel listing them, each with its verify link).
//   logo  -> inline SVG markup from ./certLogos (renders in Mona Sans)
//   scale -> optional per-logo size tweak (1 = default, 0.85 = 15% smaller)
const certifications = [
    {
        name: "Meta",
        logo: CERT_LOGOS.meta,
        certs: [
            {
                title: "Meta Front-End Developer",
                date: "Jun 2025",
                id: "4EDS5JSOZPG9",
                href: "https://www.coursera.org/account/accomplishments/specialization/4EDS5JSOZPG9",
            },
            {
                title: "Meta Introduction to Back-End Development",
                date: "Jun 2025",
                id: "C3BT3AYQEG45",
                href: "https://www.coursera.org/account/accomplishments/verify/C3BT3AYQEG45",
            },
        ],
    },
    {
        name: "Google",
        logo: CERT_LOGOS.google,
        certs: [
            {
                title: "Google Prompting Essentials",
                date: "Feb 2025",
                id: "62SFMQ8S2A9K",
                href: "https://www.coursera.org/account/accomplishments/verify/62SFMQ8S2A9K",
            },
            {
                title: "Google AI Essentials",
                date: "Jan 2025",
                id: "K40HY6NUAQNQ",
                href: "https://www.coursera.org/account/accomplishments/verify/K40HY6NUAQNQ",
            },
        ],
    },
    {
        name: "IBM",
        logo: CERT_LOGOS.ibm,
        scale: 0.85,
        certs: [
            {
                title: "Python for Data Science, AI & Development",
                date: "Jun 2025",
                id: "BR65XVK3DACW",
                href: "https://www.coursera.org/account/accomplishments/records/BR65XVK3DACW",
            },
        ],
    },
    {
        name: "University of Colorado",
        logo: CERT_LOGOS.colorado,
        certs: [
            {
                title: "C# Programming for Unity Game Development",
                date: "May 2025",
                id: "U8TBK28BFDHO",
                href: "https://www.coursera.org/account/accomplishments/specialization/U8TBK28BFDHO",
            },
        ],
    },
    {
        name: "DataCamp",
        logo: CERT_LOGOS.datacamp,
        certs: [
            {
                title: "AI Fundamentals",
                date: "Jun 2025",
                id: "AIF0028372837780",
                href: "https://www.datacamp.com/skill-verification/AIF0028372837780",
            },
        ],
    },
    {
        name: "Cisco",
        logo: CERT_LOGOS.cisco,
        certs: [
            {
                title: "JavaScript Essentials 1",
                date: "Mar 2025",
                id: null,
                href: "https://www.credly.com/badges/7425c05b-68d7-442e-8cdd-79a610232a28/linked_in_profile",
            },
            {
                title: "CCNA: Introduction to Networks",
                date: "Jan 2023",
                id: null,
                href: "https://www.credly.com/badges/b9ef7e45-1681-40fa-b1e4-9354c2c1c83d/linked_in_profile",
            },
        ],
    },
    {
        name: "Udacity",
        logo: CERT_LOGOS.udacity,
        certs: [
            {
                title: "AWS AI Practitioner Challenge",
                date: "Jun 2026",
                id: "d5e706dc-38a7-11f1-a9da-ff38514aaa17",
                href: "https://www.udacity.com/certificate/e/d5e706dc-38a7-11f1-a9da-ff38514aaa17",
            },
        ],
    },
    {
        name: "Harvard University",
        logo: CERT_LOGOS.harvardx,
        scale: 0.85,
        certs: [
            {
                title: "CS50G: Introduction to Game Development",
                date: "Jul 2024",
                id: "13da20196ea4431a9d230bb003b7b3ec",
                href: "https://courses.edx.org/certificates/13da20196ea4431a9d230bb003b7b3ec",
            },
        ],
    },
    {
        name: "DigiSkills.pk",
        logo: CERT_LOGOS.digiskills,
        certs: [
            {
                title: "Virtual Assistant",
                date: "Jul 2024",
                id: "ZAF6C9RMK",
                href: "https://digiskills.pk/verify/",
            },
            {
                title: "Freelancing",
                date: "Jul 2024",
                id: "HUPCBKMMK",
                href: "https://digiskills.pk/verify/",
            },
        ],
    },
];

// Leadership & Achievements section. Edit the text / numbers below to taste.
// The photo goes at:  public/images/leadership/smec-award.jpg
const leadership = {
    eyebrow: "University Leadership",
    role: "FIFA Event Lead — SMEC",
    image: "/images/leadership/smec-award.jpg",
    imageAlt:
        "Muhammad Huzaifa Karim receiving the FIFA event organizing award at SMEC",
    ribbon: "🏆 Organizing Award",
    captionHighlight: "SMEC '26",
    caption: "— receiving the FIFA event organizing award",
    editions: ["SMEC '24", "SMEC '26"],
    blurb:
        "Led the FIFA gaming module at my university's flagship engineering competition across two editions — owning the bracket format, volunteer roster, and match-day operations for a packed tournament floor of 100+ players.",
    stats: [
        { n: "100+", l: "Participants" },
        { n: "2×", l: "Editions Led" },
        { n: "3+", l: "Awards Won" },
    ],
    highlights: [
        "Designed the tournament format, scheduling & on-the-spot dispute handling.",
        "Coordinated a volunteer team to keep matches running back-to-back.",
        "Recognized by the organizing committee across both editions.",
    ],
};

export {
    words,
    abilities,
    counterItems,
    expCards,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projects,
    projectCategories,
    certifications,
    leadership,
};