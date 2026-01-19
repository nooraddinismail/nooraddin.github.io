// Cybersecurity Portfolio Data - Nooraddin Ismail
const portfolioData = {
  // Personal Information
  personal: {
    name: "Nooraddin Ismail",
    title: "Final Year Cybersecurity & Digital Forensics Student",
    university: "Al-Nasser University",
    location: "Sana'a-Sawan Street",
    phone: "+967774208430",
    email: "Nooraddin71@gmail.com",
    linkedin: "https://linkedin.com/in/nooraddin-ismail",
    github: "https://github.com/nooraddinismail",
    profileImage: "nooraddin.png",
    status: "🟢 Final Year Student | Seeking 2025 Opportunities"
  },

  // About Section
  about: {
    description: "Dedicated Cybersecurity & Digital Forensics student with a passion for ethical hacking, network security, and digital investigations. Specializing in penetration testing, forensic analysis, and secure system architecture.",
    highlights: [
      "Network Security Specialist (Cisco, Wireshark, Firewalls)",
      "Software Development (Python, Flutter, Java)",
      "Cyber Operations & Digital Forensics",
      "Active TryHackMe Practitioner"
    ]
  },

  // Experience Sections
  experience: {
    networkSecurity: {
      title: "Network Security",
      description: "Advanced expertise in network infrastructure and security protocols",
      skills: [
        "Cisco Firewalls Configuration",
        "Routing & Switching (OSPF, EIGRP)",
        "NAT/DMZ Implementation",
        "Wireshark Traffic Analysis",
        "Network Segmentation",
        "VPN Configuration",
        "Intrusion Detection Systems"
      ]
    },
    softwareDev: {
      title: "Software Development",
      description: "Full-stack development with focus on secure application design",
      skills: [
        "Flutter App Development",
        "Product Management Systems",
        "GUI Design for Business Applications",
        "Database Design & Management",
        "API Development",
        "User Interface/UX Design",
        "Cross-platform Development"
      ]
    },
    cyberOperations: {
      title: "Cyber Operations",
      description: "Hands-on experience in offensive and defensive cybersecurity",
      skills: [
        "System Hacking & Penetration Testing",
        "Criminal Investigations & Digital Forensics",
        "Active Directory Management",
        "Cipher Chat Encryption Systems",
        "Vulnerability Assessment",
        "Incident Response",
        "Malware Analysis"
      ]
    }
  },

  // Skills Grid
  skills: {
    programming: {
      title: "Programming",
      icon: "fas fa-code",
      skills: [
        "Python",
        "C++",
        "Java",
        "SQL",
        "JavaScript",
        "Dart (Flutter)"
      ]
    },
    tools: {
      title: "Tools & Platforms",
      icon: "fas fa-tools",
      skills: [
        "Wireshark",
        "Kali Linux",
        "Ubuntu",
        "Metasploit",
        "Burp Suite",
        "Nmap"
      ]
    },
    specialized: {
      title: "Specialized Skills",
      icon: "fas fa-shield-alt",
      skills: [
        "Digital Forensics",
        "Active Directory",
        "Network Security",
        "Ethical Hacking",
        "Cryptography",
        "Incident Response"
      ]
    }
  },

  // Projects/Portfolio
  projects: [
    {
      title: "Secure Network Architecture",
      category: "Network Security",
      description: "Designed and implemented enterprise-level network security infrastructure with advanced threat protection and monitoring capabilities.",
      technologies: ["Cisco ASA", "Juniper", "Wireshark", "SNORT", "pfSense"],
      status: "Completed"
    },
    {
      title: "Digital Forensics Lab",
      category: "Cyber Investigations",
      description: "Built comprehensive digital forensics environment for analyzing cyber attacks, collecting evidence, and conducting investigations.",
      technologies: ["FTK Imager", "Autopsy", "EnCase", "Wireshark", "Volatility"],
      status: "Completed"
    },
    {
      title: "CipherChat Application",
      category: "Cryptography",
      description: "Developed secure messaging application with end-to-end encryption, implementing multiple cryptographic algorithms and secure key exchange.",
      technologies: ["Java", "AES", "RSA", "Diffie-Hellman", "SSL/TLS"],
      status: "Completed"
    },
    {
      title: "Business Management Suite",
      category: "Software Development",
      description: "Created comprehensive business management system with inventory tracking, customer management, and analytics dashboard.",
      technologies: ["Flutter", "Firebase", "SQLite", "Dart", "Material Design"],
      status: "Completed"
    }
  ],

  // Education
  education: [
    {
      degree: "Bachelor's in Cybersecurity & Digital Forensics",
      institution: "Al-Nasser University",
      period: "2022 - 2026",
      status: "Final Year",
      description: "Comprehensive program covering network security, digital forensics, ethical hacking, cryptography, and secure software development."
    },
    {
      degree: "English Language Diploma",
      institution: "4U Institute",
      period: "Completed",
      status: "Certified",
      description: "Advanced English proficiency for technical documentation and international cybersecurity collaboration."
    }
  ],

  // Certifications & Achievements
  certifications: [
    {
      name: "TryHackMe Platform",
      issuer: "TryHackMe",
      status: "Active Practitioner",
      description: "Regular participation in cybersecurity challenges and room completions"
    },
    {
      name: "Cisco Networking Fundamentals",
      issuer: "Cisco",
      status: "Certified",
      description: "Network infrastructure and security fundamentals"
    }
  ],

  // Contact Information
  contact: {
    location: "Sana'a-Sawan Street, Yemen",
    phone: "+967 774 208 430",
    email: "Nooraddin71@gmail.com",
    linkedin: "https://linkedin.com/in/nooraddin-ismail",
    github: "https://github.com/nooraddinismail"
  },

  // Stats for dashboard
  stats: {
    experience: "3+ Years",
    projects: "10+ Completed",
    certifications: "5+ Earned",
    skills: "25+ Mastered"
  }
};

// Export for Node.js compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
