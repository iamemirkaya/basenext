import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "microcore",
    title: "MicroCore - Microservices Architecture",
    description: "A comprehensive end-to-end microservices architecture solution. It covers Keycloak authorization, a YARP Gateway, event-driven asynchronous communication with RabbitMQ and MassTransit, gRPC integration, and containerization with Docker.",
    technologies: [".NET 8", "C#", "RabbitMQ", "MassTransit", "Docker", "Keycloak", "YARP", "gRPC", "MySQL", "Redis"],
    githubUrl: "https://github.com/iamemirkaya/MicroCore",
  },
  {
    id: "boilerplate-api",
    title: "ASP.NET Core Boilerplate API",
    description: "A comprehensive starter template that includes all the core infrastructure a RESTful API needs (Clean Architecture, MediatR CQRS, FluentValidation, Global Exception Handling, Serilog logging, Rate Limiting, Health Checks, API Versioning, and JWT Authentication).",
    technologies: ["ASP.NET Core", "Entity Framework Core", "Serilog", "JWT", "Swagger", "AutoMapper"],
    githubUrl: "https://github.com/iamemirkaya/Boilerplate/tree/master/src/Boilerplate.API",
  },
  {
    id: "permission-hub",
    title: "PermissionHub - Advanced Auth System",
    description: "An advanced identity management project built as a monolith, featuring Google OAuth, Two-Factor Authentication (2FA), and Role-Based and Claim/Permission-Based (attribute-based) authorization.",
    technologies: ["C#", ".NET", "IdentityServer", "Google Login", "2FA"],
    githubUrl: "https://github.com/iamemirkaya/PermissionHub",
  },
  {
    id: "estores-microservices",
    title: "EStores Microservices",
    description: "An entry-level, CQRS-based microservices project built for e-commerce workflows, implementing the Saga Choreography pattern with RabbitMQ.",
    technologies: ["Microservices", "RabbitMQ", "CQRS", "Saga Pattern"],
    githubUrl: "https://github.com/iamemirkaya/EStoresMicroservices",
  },
  {
    id: "heart-attack-analysis",
    title: "Heart Attack Analysis & Risk Prediction",
    description: "An in-depth Exploratory Data Analysis (EDA) and predictive modeling study aimed at predicting heart attack risk. It includes data preprocessing, outlier detection, and correlation analysis.",
    technologies: ["Python", "EDA", "Machine Learning", "Data Analysis", "Seaborn"],
    kaggleUrl: "https://www.kaggle.com/code/iamemirkaya/deep-dive-heart-attack-eda-and-predictive-mode",
  },
  {
    id: "world-happiness-report",
    title: "World Happiness Report 2024: EDA & ML",
    description: "A comprehensive Exploratory Data Analysis (EDA) of the World Happiness Report dataset, applying data preprocessing, multivariate analysis, and advanced visualization techniques with Plotly and Seaborn.",
    technologies: ["Python", "Machine Learning", "Plotly", "Seaborn", "Data Preprocessing"],
    kaggleUrl: "https://www.kaggle.com/code/iamemirkaya/world-happiness-report-2024-emir-kaya",
  },
  {
    id: "vertex-lab-test",
    title: "CitySim - 3D Web Game",
    description: "An experimental interactive 3D city simulation game that runs in the browser, built with Three.js and React Three Fiber.",
    technologies: ["Three.js", "React Three Fiber", "JavaScript/TypeScript"],
    githubUrl: "https://github.com/iamemirkaya/VertexLabTest",
    liveUrl: "https://vertex-lab-test.vercel.app/citysim"
  },
  {
    id: "orderflow-ddd",
    title: "OrderFlow - Clean Architecture & DDD",
    description: "An order management system built on Domain-Driven Design (DDD) and Clean Architecture principles, using CQRS with MediatR and Domain Events (event-driven architecture).",
    technologies: ["C#", ".NET 8", "DDD", "Clean Architecture", "CQRS", "MediatR"],
    githubUrl: "https://github.com/iamemirkaya/OrderFlow/tree/master",
  },
];