import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "microcore",
    title: "MicroCore - Microservices Architecture",
    description: "Uçtan uca kapsamlı bir mikroservis mimarisi çözümü. Keycloak yetkilendirmesi, YARP Gateway, RabbitMQ ve MassTransit ile event-driven asenkron iletişim, gRPC entegrasyonu ve Docker ile containerization süreçlerini içerir.",
    technologies: [".NET 8", "C#", "RabbitMQ", "MassTransit", "Docker", "Keycloak", "YARP", "gRPC", "MySQL", "Redis"],
    githubUrl: "https://github.com/iamemirkaya/MicroCore",
  },
  {
    id: "boilerplate-api",
    title: "ASP.NET Core Boilerplate API",
    description: "Bir RESTful API'de bulunması gereken tüm temel altyapıları (Clean Architecture, MediatR CQRS, FluentValidation, Global Exception Handling, Serilog loglama, Rate Limiting, Health Checks, API Versioning ve JWT Authentication) barındıran kapsamlı bir başlangıç şablonu.",
    technologies: ["ASP.NET Core", "Entity Framework Core", "Serilog", "JWT", "Swagger", "AutoMapper"],
    githubUrl: "https://github.com/iamemirkaya/Boilerplate/tree/master/src/Boilerplate.API",
  },
  {
    id: "permission-hub",
    title: "PermissionHub - Advanced Auth System",
    description: "Monolitik bir yapıda; Google OAuth, Two-Factor Authentication (2FA), Role-Based ve Claim/Permission-Based yetkilendirme (Attribute-based) sistemlerini barındıran gelişmiş bir kimlik yönetimi projesi.",
    technologies: ["C#", ".NET", "IdentityServer", "Google Login", "2FA"],
    githubUrl: "https://github.com/iamemirkaya/PermissionHub",
  },
  {
    id: "estores-microservices",
    title: "EStores Microservices",
    description: "E-ticaret süreçleri için geliştirilmiş, RabbitMQ ile Saga Choreography deseninin uygulandığı, CQRS tabanlı temel düzey bir mikroservis projesi.",
    technologies: ["Microservices", "RabbitMQ", "CQRS", "Saga Pattern"],
    githubUrl: "https://github.com/iamemirkaya/EStoresMicroservices",
  },
  {
    id: "heart-attack-analysis",
    title: "Heart Attack Analysis & Risk Prediction",
    description: "Kalp krizi riskini tahmin etmeye yönelik derinlemesine Keşifsel Veri Analizi (EDA) ve tahmine dayalı modelleme (Predictive Modeling) çalışması. Veri ön işleme, aykırı değer tespiti (outlier detection) ve korelasyon analizlerini içerir.",
    technologies: ["Python", "EDA", "Machine Learning", "Data Analysis", "Seaborn"],
    kaggleUrl: "https://www.kaggle.com/code/iamemirkaya/deep-dive-heart-attack-eda-and-predictive-mode",
  },
  {
    id: "world-happiness-report",
    title: "World Happiness Report 2024: EDA & ML",
    description: "Dünya Mutluluk Raporu veri seti üzerinde Kapsamlı Keşifsel Veri Analizi (EDA). Veri ön işleme (Data Preprocessing), çok değişkenli analiz (Multivariate Analysis) ve Plotly/Seaborn ile gelişmiş görselleştirme teknikleri uygulanmıştır.",
    technologies: ["Python", "Machine Learning", "Plotly", "Seaborn", "Data Preprocessing"],
    kaggleUrl: "https://www.kaggle.com/code/iamemirkaya/world-happiness-report-2024-emir-kaya",
  },
  {
    id: "vertex-lab-test",
    title: "CitySim - 3D Web Game",
    description: "Three.js ve React Three Fiber kullanılarak web tarayıcısı üzerinde çalışan interaktif bir 3D şehir simülasyonu/oyunu denemesi.",
    technologies: ["Three.js", "React Three Fiber", "JavaScript/TypeScript"],
    githubUrl: "https://github.com/iamemirkaya/VertexLabTest",
    liveUrl: "https://vertex-lab-test.vercel.app/citysim"
  },
  {
    id: "orderflow-ddd",
    title: "OrderFlow - Clean Architecture & DDD",
    description: "Domain-Driven Design (DDD) ve Clean Architecture prensipleriyle geliştirilmiş, MediatR ile CQRS ve Domain Events (olay güdümlü mimari) kullanan sipariş yönetimi sistemi.",
    technologies: ["C#", ".NET 8", "DDD", "Clean Architecture", "CQRS", "MediatR"],
    githubUrl: "https://github.com/iamemirkaya/OrderFlow/tree/master",
  },
];