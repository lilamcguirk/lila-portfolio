export const projects = [
  {
    title: "Toyota AutoConsole",
    desc: "Architected and deployed a standardized Vue.js vehicle management system across 10 Australian Toyota dealerships.",
    tech: ["Vue.js", "State Management", "UI/UX", "SEO", "SCSS", "Database Integration"],
    type: "Professional",
    path: "/projects#toyota-autoconsole",
    previewImage: '/images/autoconcole-collage.png',
    link: "https://www.cmitoyota.com.au/"
  },
  {
    title: "Toyota RevPayments",
    desc: "Developed a secure, PCI-compliant payment portal for Toyota by integrating the Stripe API with a custom React frontend for seamless financial transactions.",
    tech: ["React", "Stripe API", "Vite", "Bootstrap"],
    type: "Professional",
    isDevelopment: true,
    previewImage: '/images/RevPayments.png',
    link: '/images/RevPayments.png',
    path: "/projects#stripe-payment-gateway",
},
{
    title: "Toyota Help Me Choose Quiz",
    desc: "A data-driven recommendation engine built with ToyotaKit to help customers navigate complex financing options and find their ideal vehicle plan through an intuitive, multi-step quiz.",
    tech: ["React", "Vite", "ToyotaKit", "SCSS"],
    isDevelopment: true,
    previewImage: '/images/hmc-collage.png',
    link: '/images/hmc-collage.png',
    path: "/projects#help-me-choose-quiz",
}
];

export const PROJECT_CATEGORIES = [
  {
    org: "T-Bone Productions",
    description: "Engineering enterprise-scale web applications and API architectures for global leaders including Toyota, Lexus, and Mazda. Specialized in delivering high-performance, full-stack solutions across React and Vue.js ecosystems.",
    projects: projects
  },
  {
    org: "Red Barn Media Group",
    description: "Managed end-to-end web production by translating direct client requirements into high-performing digital solutions. Focused on high-volume delivery, transitioning from intern to junior developer by consistently building responsive sites.",
    projects: [
      {
        title: "Responsive Website Development & SEO",
        tech: ["HTML", "PHP", "SEO", "Responsive Design"],
        desc: "Developed responsive sites for 200+ clients, driving a 941% profit increase for a premier account through technical SEO and user behavior analysis.",
        previewImage: '/images/rbmg-collage.png',
        link: 'https://www.cavindermechanical.com/'
      }
    ]
  },
  {
    org: "The University of Vermont",
    description: "Computer Science student and Teaching Assistant at UVM. Specializing in Web and Software Development with a focus on Systems Architecture and Algorithm Design.",
    projects: [
      {
        title: "Evolutionary Robotics",
        tech: ["Python", "Iterative Design"],
        desc: "Engineered a sensor-based robot capable of autonomous navigation and obstacle avoidance.",
        previewImage: '/images/robotics-collage.png',
        youtubeLink: "https://www.youtube.com/@LilaMcGuirk",
        githubLink: "https://github.com/lilamcguirk/mybots.git"
      },
      {
        title: "Pacman Remake",
        tech: ["Python", "Pygame", "Game Development", "SQL", "Object-Oriented Programming"],
        desc: "A full-scale recreation of the arcade classic, developed using Agile methodologies and Sprint cycles. Focused on modular software design, ghost AI state machines, and collision logic.",
        githubLink: "https://github.com/zach-vanzura/Pac-Man.git",
        previewImage: '/images/pac-man-final.mp4',
      }
    ]
  }
];