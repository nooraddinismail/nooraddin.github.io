// Cybersecurity Portfolio Data
const portfolioData = {
  personal: {
    name: "Nooraddin Ismail",
    headline: "Final Year Cybersecurity & Digital Forensics Student at Al-Nasser University",
    email: "Nooraddin71@gmail.com",
    linkedin: "https://linkedin.com/in/nooraddin-ismail",
    github: "https://github.com/nooraddinismail",
    profileImage: "https://via.placeholder.com/300x300/374151/10b981?text=NI"
  },

  about: {
    description: "A dedicated cybersecurity and digital forensics student with a passion for problem-solving and ethical hacking. I actively practice on TryHackMe to enhance my skills and stay updated with the latest security trends and techniques. My goal is to contribute to the cybersecurity field by protecting digital assets and investigating cyber threats.",
    highlights: [
      "Problem-solving oriented approach to cybersecurity challenges",
      "Active practitioner on TryHackMe platform",
      "Focused on ethical hacking and digital forensics",
      "Committed to continuous learning and skill development"
    ]
  },

  education: [
    {
      degree: "Bachelor's in Cybersecurity & Digital Forensics",
      institution: "Al-Nasser University",
      period: "2021 - 2025",
      status: "Final Year Student",
      description: "Specializing in cybersecurity principles, digital forensics, network security, and ethical hacking methodologies."
    },
    {
      degree: "English Diploma",
      institution: "4U Institute",
      period: "Completed",
      status: "Completed",
      description: "Advanced English language proficiency for professional communication in cybersecurity field."
    }
  ],

  skills: {
    security: [
      "Digital Forensics",
      "Network Security",
      "Wireshark Analysis",
      "Firewall Configuration",
      "Penetration Testing",
      "Active Directory",
      "Ethical Hacking",
      "Cyber Threat Analysis"
    ],
    development: [
      "Python",
      "SQL",
      "C++",
      "Java (OOP)",
      "Flutter",
      "HTML/CSS",
      "JavaScript",
      "Database Management"
    ],
    operatingSystems: [
      "Windows Server",
      "Kali Linux",
      "Ubuntu",
      "Windows Desktop",
      "Linux Command Line",
      "Virtualization"
    ]
  },

  projects: [
    {
      title: "Network Architecture Design",
      category: "Network Security",
      description: "Designed and implemented comprehensive network architectures including router configuration, switch management, NAT implementation, and DMZ setup for secure network segmentation.",
      technologies: ["Cisco Routers", "Network Switches", "NAT", "DMZ", "Firewall Rules"],
      status: "Completed"
    },
    {
      title: "Hacking & Criminal Investigations",
      category: "Digital Forensics",
      description: "Conducted digital forensics investigations, analyzed cyber attack patterns, and developed methodologies for criminal cyber investigations and evidence collection.",
      technologies: ["Digital Forensics Tools", "Evidence Analysis", "Cyber Investigation", "Report Writing"],
      status: "Completed"
    },
    {
      title: "Cipher Chat Application",
      category: "Cryptography",
      description: "Developed a secure messaging application with advanced encryption and decryption capabilities, implementing various cryptographic algorithms for secure communication.",
      technologies: ["Cryptography", "Encryption Algorithms", "Java", "Secure Communication"],
      status: "Completed"
    },
    {
      title: "Web & App Development Projects",
      category: "Development",
      description: "Created multiple web and mobile applications including GUI design for clothing business management systems and comprehensive product management platforms.",
      technologies: ["Flutter", "HTML/CSS", "JavaScript", "GUI Design", "Database Integration"],
      status: "Completed"
    }
  ],

  experience: [
    {
      title: "Cybersecurity Student Researcher",
      organization: "Al-Nasser University",
      period: "2023 - Present",
      description: "Conducting research in network security, digital forensics, and ethical hacking. Participating in cybersecurity competitions and practical labs.",
      achievements: [
        "Completed advanced network security modules",
        "Active TryHackMe practitioner",
        "Developed multiple security projects",
        "Participated in cybersecurity workshops"
      ]
    },
    {
      title: "Independent Security Projects",
      organization: "Personal Projects",
      period: "2022 - Present",
      description: "Self-directed learning and project development in cybersecurity, focusing on practical implementation of security concepts and tools.",
      achievements: [
        "Built network architecture models",
        "Developed encryption applications",
        "Conducted digital forensics exercises",
        "Created security-focused web applications"
      ]
    }
  ],

  certifications: [
    {
      name: "TryHackMe Active Practitioner",
      issuer: "TryHackMe",
      status: "Active",
      description: "Regular practice and completion of various cybersecurity challenges and rooms"
    }
  ],

  contact: {
    email: "Nooraddin71@gmail.com",
    linkedin: "https://linkedin.com/in/nooraddin-ismail",
    github: "https://github.com/nooraddinismail",
    location: "Libya"
  },

  stats: {
    yearsOfExperience: "3+",
    projectsCompleted: "10+",
    certifications: "5+",
    skillsMastered: "25+"
  }
};

// Export the data for use in the main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
