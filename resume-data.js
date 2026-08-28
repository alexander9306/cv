/*
  Edit this file to update the CV. index.html reads window.RESUME_DATA
  and renders the page from it — no other file needs to change.
*/
window.RESUME_DATA = {
  name: "Alexander Damaso",
  role: "Senior Full Stack Developer — React · Node.js · TypeScript",
  location: "Santo Domingo, Dominican Republic",
  email: "alexander9306@gmail.com",
  linkedin: "https://linkedin.com/in/alexander9306",
  linkedinLabel: "linkedin.com/in/alexander9306",
  experienceBadge: "8+ years experience",
  summary:
    "Full-stack engineer with 8+ years building stateful React SPAs and Node.js/NestJS backends, " +
    "including hands-on work with mapping libraries (Maps SDK, Leaflet) for interactive map layers " +
    "and GIS-driven dashboards. Skilled in data visualization, dashboard UI, and WCAG 2.1 AA " +
    "implementation, with strong experience in API design, third-party integrations, CI/CD, and " +
    "cloud-hosted architectures. Adaptable to AI-assisted development workflows.",

  experience: [
    {
      company: "UpKeep",
      role: "Product Development Engineer",
      dates: "01/2026 – 05/2026",
      location: "Remote",
      bullets: [
        "Spearheaded end-to-end feature delivery across frontend and backend, enhancing UI and service-layer logic and improving user satisfaction within 4 months.",
        "Contributed to API design and third-party integration work, and participated in architecture, tooling, and scalability decisions.",
        "Investigated and resolved complex production issues, tracing root causes across frontend and backend systems.",
        "Designed AI-assisted development workflows — code generation, review support, requirements breakdown, and documentation — compressing concept-to-production cycle time while holding code quality standards.",
        "Led containerization strategies that automated deployment, reducing release times by 20% within 3 months.",
        "Led development of a scalable web application using Spec-Driven Development, reducing deployment time by 20% within 6 months.",
        "Designed and implemented accessible, WCAG-compliant data visualization tools, improving usability and customer satisfaction.",
      ],
      tech: ["TypeScript", "React", "Node.js", "REST/GraphQL APIs", "Authentication Flows", "Docker"],
    },
    {
      company: "Curri",
      role: "Full Stack Web Developer",
      dates: "07/2024 – 12/2025",
      location: "Austin, TX (Remote)",
      bullets: [
        "Architected the integration layer connecting Curri to a half-dozen third-party delivery providers (Uber, Pronto, and others), designing a single interface over providers with divergent API structures, auth models, and communication patterns.",
        "Redesigned the provider-selection architecture to surface every available delivery option in one request, handling variable upstream latency and partial failure so a slow or unavailable provider could not block a quote.",
        "Encapsulated each provider's logic behind a dedicated class implementing a shared contract, turning new integrations into self-contained changes instead of cross-cutting edits.",
        "Developed webhook consumers and background workers for real-time delivery updates, keeping delivery state consistent across systems.",
        "Architected a scalable microservices architecture on AWS using Docker; built automated testing frameworks that improved deployment reliability by 15%.",
        "Led design of relational databases for backend systems, improving data retrieval speed by 10%; led a data migration project that improved conversion rates by 10%.",
        "Developed interactive GIS dashboards and Web-Mapping SPA features, increasing user engagement by up to 25%.",
      ],
      tech: ["TypeScript", "Node.js", "NestJS", "GraphQL", "Next.js", "REST APIs", "Webhooks", "Docker", "AWS"],
    },
    {
      company: "Protiv",
      role: "Frontend Developer",
      dates: "04/2024 – 07/2024",
      location: "New York (Remote)",
      bullets: [
        "Built responsive React interfaces with Material-UI and Tailwind CSS, translating design specs into accessible, cross-browser UI.",
        "Established reusable component patterns that held design consistency as the team scaled feature work.",
        "Developed responsive user interfaces that increased user engagement by 20% through streamlined CI/CD pipelines.",
        "Led development of a WCAG-compliant Single Page Application, improving accessibility and engagement.",
      ],
      tech: ["React", "Material-UI", "Tailwind CSS", "JavaScript/TypeScript"],
    },
    {
      company: "AltSource, Inc.",
      role: "Full Stack Developer",
      dates: "10/2023 – 03/2024",
      location: "Lake Oswego, Oregon (Remote)",
      bullets: [
        "Led backend development on two projects in C# .NET Core, Entity Framework, and Microsoft SQL Server, including stored procedures, views, and query performance tuning.",
        "Built and maintained scalable REST APIs and backend logic in an Azure-hosted environment.",
        "Built a custom React table component from scratch with pagination, sorting, and filtering, and extended server-side rendered pages.",
        "Designed automation strategies that improved the SDLC, speeding up feature delivery; increased project delivery speed by 20% in a Node.js environment.",
        "Led development of responsive web pages using Backbone.js, ensuring adherence to brand style guides.",
      ],
      tech: ["C#", ".NET Core", "Entity Framework", "Microsoft SQL Server", "React", "Azure", "REST APIs"],
    },
    {
      company: "Nerdery",
      role: "Front End / CMS Developer — client: Nestlé Purina North America",
      dates: "03/2023 – 10/2023",
      location: "Dominican Republic (Remote)",
      bullets: [
        "Implemented CMS-driven features for the Purina.com migration to GatsbyJS with Drupal, using GraphQL as the common language between Drupal and Gatsby.",
        "Built a custom PDF generator that dynamically compiled and exported site content across languages, improving content portability and offline access.",
        "Improved site performance and SEO through efficient data fetching and static site generation.",
        "Implemented responsive pages from Adobe design specs, improving performance and engagement across Latin American markets by ~10%.",
        "Developed interactive GIS dashboards, increasing user engagement by ~20% through effective state management.",
      ],
      tech: ["GatsbyJS", "React", "Drupal", "GraphQL", "JQuery", "Shopify"],
    },
    {
      company: "Amherst",
      role: "Full Stack Developer",
      dates: "12/2021 – 03/2023",
      location: "Austin, TX (Remote)",
      bullets: [
        "Built and shipped web applications in Next.js, React, GraphQL, and NestJS, implementing server-side rendering and optimized data fetching.",
        "Delivered frontend and SEO improvements that contributed to a 25% increase in user engagement.",
      ],
      tech: ["Next.js", "React", "GraphQL", "NestJS", "TypeScript", "Tailwind CSS"],
    },
    {
      company: "Constant Contact",
      role: "Full Stack Developer",
      dates: "01/2021 – 12/2021",
      location: "Waltham, MA (Remote)",
      bullets: [
        "Built and maintained REST APIs in Node.js, Express, and NestJS, along with the React/Material-UI interfaces consuming them.",
        "Improved API communication efficiency and data management across the platform.",
      ],
      tech: ["Node.js", "Express", "NestJS", "TypeScript", "React", "Material-UI", "MongoDB"],
    },
    {
      company: "Plaza Lama",
      role: "Full Stack Developer",
      dates: "03/2018 – 12/2020",
      location: "Santo Domingo, Dominican Republic",
      bullets: [
        "Designed and built a GraphQL/Node.js application that optimized customer order logistics, including an internal order-tracking system triggered by Shopify order events.",
        "Migrated server-rendered flows to AJAX, reducing add-to-cart times and improving order-management efficiency.",
        "Developed custom Shopify Liquid themes, improving engagement by ~20% through optimized landing pages.",
        "Improved GTmetrix performance scores by removing unnecessary template code from the storefront.",
      ],
      tech: ["Node.js", "GraphQL", "React", "TypeScript", "PHP", "C#", "Shopify", "MySQL"],
    },
    {
      company: "Hunter del Caribe, Corp",
      role: "Software Developer",
      dates: "01/2017 – 09/2018",
      location: "Santo Domingo, Dominican Republic",
      bullets: [
        "Built and maintained the Hunter CRM using Razor, HTML5, JavaScript, CSS3, C#, and ASP.NET MVC.",
        "Integrated the Leaflet library for geolocation features, replacing a paid map tracking plugin — reverse-engineered the prior third-party integration and rebuilt it in-house.",
        "Proposed and implemented cursor-based pagination on the customer list, improving query performance by up to 40%.",
        "Migrated 106 stored procedures and functions from MS SQL Server into application code.",
        "Change saved the business over USD $10,000/month while improving customer satisfaction.",
      ],
      tech: ["C#", "ASP.NET MVC", "Entity Framework", "MS SQL Server", "React", "Angular", "Leaflet"],
    },
  ],

  skills: [
    {
      group: "Languages & Core",
      items: ["JavaScript (7 yrs)", "TypeScript (4 yrs)", "C#", "Python", "PHP", "HTML5 / CSS3"],
    },
    {
      group: "Frontend",
      items: ["React (5 yrs)", "Next.js", "Angular", "Material-UI", "Tailwind CSS", "Redux"],
    },
    {
      group: "Backend",
      items: ["Node.js (6 yrs)", "NestJS", "Express.js", "GraphQL (3 yrs)", "Apollo", ".NET Core"],
    },
    {
      group: "Data & Cloud",
      items: ["PostgreSQL", "MS SQL Server", "MongoDB", "Redis", "AWS", "Azure", "Docker"],
    },
    {
      group: "Platforms & CMS",
      items: ["Shopify / Liquid", "Gatsby", "Drupal", "WordPress"],
    },
    {
      group: "Mapping & A11y",
      items: ["Leaflet", "Maps SDK", "GIS Dashboards", "WCAG 2.1 AA"],
    },
    {
      group: "Practices",
      items: ["CI/CD", "Git / GitHub", "Agile / Scrum", "Jest / Testing Library", "Figma", "AI-assisted dev workflows"],
    },
  ],

  projects: [
    {
      title: "Rebaton — Blazor eCommerce",
      link: "https://alexander9306.github.io/BlazorEcommerce/",
      description: "An eCommerce site built with ASP.NET Core 3.1 on the backend and Blazor WebAssembly on the frontend.",
      tech: ["Blazor", "C#", "ASP.NET Core", "Entity Framework", "MS SQL Server"],
    },
    {
      title: "Goodwill Forms Apps",
      link: null,
      description: "Internal employee application serving all Goodwill employees. Bootstrapped a core section of the app and participated in deployment to Azure.",
      tech: ["C#", ".NET 5", "React", "React Testing Library", "Jest", "Entity Framework", "Material-UI", "Azure", "Redux"],
    },
  ],

  education: [
    {
      title: "Bachelor's Degree in Computer Science",
      sub: "Universidad Federico Henríquez y Carvajal",
      meta: "01/2012 – 12/2017",
    },
  ],

  certifications: [
    {
      title: "Meta Front-End Developer Certificate",
      sub: "Coursera",
      meta: "Since 07/2023",
    },
    {
      title: "EF SET English Certificate — 71/100 (C2 Proficient)",
      sub: "EF SET",
      meta: "Since 05/2026",
    },
  ],
};
