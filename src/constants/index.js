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
    { value: 40, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Certifications Earned" },
    { value: 2058, suffix: "", label: "GitHub Contributions" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
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

const expCards = [
    {
        // Technologies you used in this role — shown as pills on the card.
        techStack: ["React", "JavaScript", "Tailwind CSS", "Redux", "Vite"],
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for the Hostinger website.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    {
        techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Led the development of Docker's web applications, focusing on scalability.",
            "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
            "Contributed to open-source projects that were used with the Docker ecosystem.",
        ],
    },
    {
        techStack: ["React Native", "Expo", "TypeScript", "Appwrite"],
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
            "Improved app performance and user experience through code optimization and testing.",
            "Coordinated with the product team to implement features based on feedback.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
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

// NOTE: project1/2/3.png are the real screenshots; the rest are placeholders
// (no `image` -> a pastel placeholder shows) to swap for real thumbnails later.
const projects = [
    {
        id: "ryde",
        title: "On-Demand Rides Made Simple with Ryde",
        desc: "A ride-hailing app built with React Native, Expo & TailwindCSS for a fast, user-friendly experience.",
        category: "Fullstack",
        tags: ["React Native", "Expo", "TailwindCSS"],
        image: "/images/project1.png",
        bg: "bg-[#e8f3ff]",
        github: "#",
        live: "#",
    },
    {
        id: "library",
        title: "Library Management Platform",
        desc: "Manage book catalogs, lending and members in one place.",
        category: "Fullstack",
        tags: ["MERN", "JWT"],
        image: "/images/project2.png",
        bg: "bg-[#ffefdb]",
        github: "#",
        live: "#",
    },
    {
        id: "yc",
        title: "YC Directory – A Startup Showcase App",
        desc: "Submit ideas, vote on pitches and get noticed by the community.",
        category: "Fullstack",
        tags: ["Next.js", "Sanity"],
        image: "/images/project3.png",
        bg: "bg-[#ffe7eb]",
        github: "#",
        live: "#",
    },
    {
        id: "ecommerce",
        title: "E-Commerce Store",
        desc: "A full storefront with cart, checkout and an admin dashboard.",
        category: "Fullstack",
        tags: ["MERN", "Stripe"],
        bg: "bg-[#e6f6ee]",
        github: "#",
        live: "#",
    },
    {
        id: "portfolio",
        title: "3D Developer Portfolio",
        desc: "This very site — built with Vite, React, Three.js and GSAP.",
        category: "Frontend",
        tags: ["Vite", "Three.js", "GSAP"],
        bg: "bg-[#e8f3ff]",
        github: "#",
        live: "#",
    },
    {
        id: "weather",
        title: "Weather Dashboard",
        desc: "Live forecasts with a clean, responsive interface.",
        category: "Frontend",
        tags: ["React", "API"],
        bg: "bg-[#fff3e6]",
        github: "#",
        live: "#",
    },
    {
        id: "movies",
        title: "Movie Finder",
        desc: "Search and discover films in a sleek, fast grid.",
        category: "Frontend",
        tags: ["React", "TailwindCSS"],
        bg: "bg-[#fdeef0]",
        github: "#",
        live: "#",
    },
    {
        id: "platformer",
        title: "2D Platformer Game",
        desc: "A side-scroller with physics, enemies and handcrafted levels.",
        category: "Game Dev",
        tags: ["Unity", "C#"],
        bg: "bg-[#ffefdb]",
        github: "#",
        // not web-based -> no `live` link (omit the field to hide the button)
    },
    {
        id: "puzzle",
        title: "Memory Puzzle Game",
        desc: "A timed card-matching browser game.",
        category: "Game Dev",
        tags: ["JavaScript", "Canvas"],
        bg: "bg-[#e6f6ee]",
        github: "#",
    },
    {
        id: "classifier",
        title: "Image Classifier",
        desc: "A CNN that labels images in real time.",
        category: "AI/ML",
        tags: ["Python", "TensorFlow"],
        bg: "bg-[#e8f3ff]",
        github: "#",
    },
    {
        id: "chatbot",
        title: "AI Chatbot Assistant",
        desc: "A context-aware assistant with a clean chat UI.",
        category: "AI/ML",
        tags: ["Python", "LLM"],
        bg: "bg-[#fff3e6]",
        github: "#",
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
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projects,
    projectCategories,
    certifications,
    leadership,
};