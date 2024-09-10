import React, { createContext } from "react";

const GlobalData = {
  //
  // -------------------------------------About Page Data-----------------------------------------
  about: {
    url: "/",
    label: "About",

    // Header data common to all pages
    header: {
      logo: require("../imgs/landing/education.png"),
      menu: require("../imgs/landing/menu.png"),
      name: "Shreejeet Kadam",
      degreeShort: "MSCSEC",
      universityShort: "GaTech",
      university: "Georgia Institute of Technology",
    },

    // footer data common to all pages
    footer: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/shreejeet-kadam/",
          icon: require("../imgs/landing/linkedin.png"),
        },
        {
          url: "https://github.com/hunterSkeleton",
          icon: require("../imgs/landing/github.png"),
        },
        {
          url: "https://app.cybrary.it/profile/hs_hunter",
          icon: require("../imgs/landing/cybrary.png"),
        },
        // {
        //   url: "https://s-threepio.medium.com/",
        //   icon: require("../imgs/landing/medium.png"),
        // },
      ],
      copyright: "© 2024 by Shreejeet Kadam",
      call: "+1 (470) 815-8243",
      email: "skshreejeetkadam@gmail.com",
    },

    // This is the left part of the landing page with profile picture (Looks like an ID Card)
    cardsection: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/shreejeet-kadam/",
          icon: require("../imgs/landing/linkedin.png"),
        },
        // {
        //   url: "https://leetcode.com/Masked_Yurnero/",
        //   icon: require("../imgs/landing/leetcode.png"),
        // },
        {
          url: "https://app.cybrary.it/profile/hs_hunter",
          icon: require("../imgs/landing/cybrary.png"),
        },
        {
          url: "https://github.com/hunterSkeleton",
          icon: require("../imgs/landing/github.png"),
        },
      ],
      pfp: require("../imgs/landing/pfp.jpg"),
      firstName: "Shreejeet",
      lastName: "Kadam",
      degreeShort: "MSCSEC @ GaTech",
      date: "Graduated May 2023",
    },

    // This is the right part of the landing page with a general welcome statement and summary
    /*
      Certainly! Here's a version with modified fields:

---

I am a Georgia Tech graduate with a Master’s degree in Cybersecurity, specializing in penetration testing, automation, DevSecOps, and network security. My strong academic background and hands-on experience have equipped me with a deep understanding of these critical areas, fueling my passion for solving complex security issues and enhancing system efficiency.

I am actively seeking full-time opportunities in cybersecurity, including roles focused on penetration testing, automation, DevSecOps, and network security, where I can apply my skills and make a significant impact on organizational security and operational excellence.

If you are looking for a dedicated professional with expertise in these domains, please feel free to reach out to me via phone or email.

Have a great day!

---
    */

    bio: {
      bigGreet: "Hello",
      intro: "I am Shreejeet and I wear a white hat.",
      description: (
        <>
          <p>
            I am a graduate of <b className="font-semibold">Georgia Tech</b>{" "}
            with a Master’s degree in{" "}
            <b className="font-semibold">Cybersecurity</b>, specializing in{" "}
            <b className="font-semibold">
              Penetration Testing, Automation, DevSecOps, and Network Security.
            </b>{" "}
            My strong academic background and hands-on experience have provided
            me with a comprehensive understanding of these critical areas,
            fueling my passion for solving complex security issues and enhancing
            system efficiency.
            <br />
            <br />I am actively seeking full-time opportunities in{" "}
            <b className="font-semibold">cybersecurity</b>, where I can apply my
            skills and make a significant impact on organizational security and
            operational excellence.
            <br />
            <br />
            If you are looking for a dedicated professional with expertise in
            these domains, please feel free to reach out to me via phone or
            email.
          </p>
          <br />
          <b className="font-semibold">Have a great day!</b>
        </>
      ),
    },
  },

  // -------------------------------------Resume Page Data-----------------------------------------
  resume: {
    url: "/resume",
    label: "Resume",
    summary: (
      <>
        Cybersecurity expert with a Master's from Georgia Tech, specializing in
        penetration testing, automation, DevSecOps, and network security.
        Experienced in identifying vulnerabilities, streamlining processes, and
        deploying scalable security solutions.
        <br />
        Seeking opportunities to apply my skills and contribute to
        organizational security.
      </>
    ),
    education: [
      {
        year: "2021-2023",
        university: "Georgia Institute of Technology",
        gpa: "4.0",
        info: " I graduated from Georgia Tech with a Master of Science in Cybersecurity. My coursework included Malware Analysis/Reverse Engineering, Network Security, Software Analysis and Test, Secure Computer Systems, Cryptography, Enterprise Risk Management, Privacy Tech Policy Law and DevSecOps",
      },
      {
        year: "2015-2019",
        university: "Vishwakarma Institute of Technology",
        gpa: "3.98",
        info: `I acquired my Bachelor of Technology degree in Computer Engineering from the Vishwakarma Institute of Technology. The
    relevant coursework included Data Structures, Design and Analysis
    of Algorithms, Operating Systems, Computer Networks etc.`,
      },
    ],
    skills: [
      {
        type: "Programming/Scripting Languages",
        info: "C, C++, Python, Javascript, Typescript, GO",
      },
      {
        type: "DevSecOps",
        info: "Terraform, Kubernetes, Container Orchestration, Docker, Cluster Management, Jenkins",
      },
      {
        type: "Web Development",
        info: "React, Angular, PostgreSQL, Express.js, Node.js, Tailwind, Bootstrap, Flask, REST API",
      },
      {
        type: "Cybersecurity",
        info: "Application Security, Vulnerability Management, Penetration Testing, Threat Intelligence, Network Security, IAM, IDS, EDR, DFIR, SOAR, SIEM, DLP, OWASP Top 10, MITRE ATT&CK, NIST CSF, SOC 2",
      },
      {
        type: "Tools",
        info: "GDB, PWNDBG, Ghidra, Pwntools, OpenSSL, Splunk, Wireshark, Burp Suite, Metasploit, Nessus, Git",
      },
      {
        type: "Software Development Practices",
        info: "Agile, Scrum, Jira, Test Driven Development, GitHub, Continuous Integration",
      },
    ],
    work: [
      {
        year: "July 2023 - July 2024",
        organisation: "Launchpad23, Inc.",
        role: "SDE",
        detail: [
          "Engineered a NextJS onboarding platform incorporating Keycloak for IAM, authentication, and RBAC, reducing attack surface by 30%.",
          "Integrated Stripe for seamless payments and deployed on DigitalOcean VPC, boosting user experience by 40% and reducing onboarding time by 60%.",
        ],
      },
      {
        year: "June 2022 - August 2022",
        organisation: "Adversarial Risk Management",
        role: "Intern",
        detail: [
          "Crafted an advanced CMS module employing React and STRAPI, integrating GitHub Webhooks for automated builds; achieved a 20% increase in deployment consistency, improving overall project stability and user experience.",
          "Implemented access control measures through Google IAM for 20+ subdomains, enhancing security protocols and reducing unauthorized access incidents by 80%, while streamlining user roles and permissions across the organization.",
        ],
      },
      {
        year: "July 2018 - May 2019",
        organisation: "Nvidia",
        role: "Intern",
        detail: [
          "Developed a multi-platform application framework to aggregate and visualize nightly GPU driver test data, deploying the tool for over 50 users, streamlining the testing and reporting processes.",
          "Created a robust reporting mechanism that automated the daily generation of PDF reports, resulting in a consistent output of over 30 reports each week, improving operational efficiency across the organization.",
        ],
      },
    ],
  },

  // -------------------------------------Skills Page Data-----------------------------------------
  /*skills: {
    url: "/skills",
    label: "Skills",
    tech: [
      {
        type: "Programming/Scripting Languages",
        info: "C, C++, Python, Javascript, Typescript, GO",
      },
      {
        type: "DevSecOps",
        info: "Terraform, Kubernetes, Container Orchestration, Docker, Cluster Management, Jenkins",
      },
      {
        type: "Web Development",
        info: "React, Angular, PostgreSQL, Express.js, Node.js, Tailwind, Bootstrap, Flask, REST API",
      },
      {
        type: "Cybersecurity",
        info: "Application Security, Vulnerability Management, Penetration Testing, Threat Intelligence, Network Security, IAM, IDS, EDR, DFIR, SOAR, SIEM, DLP, OWASP Top 10, MITRE ATT&CK, NIST CSF, SOC 2",
      },
      {
        type: "Tools",
        info: "GDB, PWNDBG, Ghidra, Pwntools, OpenSSL, Splunk, Wireshark, Burp Suite, Metasploit, Nessus, Git",
      },
      {
        type: "Software Development Practices",
        info: "Agile, Scrum, Jira, Test Driven Development, GitHub, Continuous Integration",
      },
    ],
    soft: [
      {
        img: require("../imgs/skills/soft/teamWork.png"),
        type: "Team Work",
        info: "Worked on the HSBC Oman and Qatar app with a team consisting of freshers and completed all the requirements with highest level of collaboration. I have repeatedly partenered with senior developers outside my team to resolve global level build issues",
      },
      {
        img: require("../imgs/skills/soft/adaptability.jpeg"),
        type: "Adaptibility",
        info: "I was trained in full stack however the project assigned in HSBC was of Android. I adapted to it within a week and started contributing by the first month.I was the first in the department to complete the Google's Android certification requested by HSBC.",
      },
      {
        img: require("../imgs/skills/soft/Communication.webp"),
        type: "Communication",
        info: "Communicated with the stakeholders from Oman and Qatar whilst giving demo for the sprint work every alternate week. I also took alot of knowledge tranfer sessions to educate others about the codebase and various technologies.",
      },
      {
        img: require("../imgs/skills/soft/problemSolving.webp"),
        type: "Problem Solving",
        info: "I worked on making a QR Code module configurable while it was live in production for two other entites. I also helped a different team to merge their codebase into our exisiting live modules, resolved issues during the integration and provided robust alternatives.",
      },
      {
        img: require("../imgs/skills/soft/creativity.jpg"),
        type: "Creativity",
        info: "During Covid 19 period the Thank you tree weekly activity was closed off due to work from home compulsion. Created an application to resume the activity and increase employee morale. I also took creative design decisions to make the applications entity wise configurable.",
      },
      {
        img: require("../imgs/skills/soft/time.png"),
        type: "Time Management",
        info: "I worked on the project which had regulatory requirement and had a strict timeline for completion. My team was downsized by one during Covid-19 outbreak but I still delivered all the requirements in time.",
      },
    ],
  },
  */
  // -------------------------------------Projects Page Data-----------------------------------------
  projects: {
    url: "/projects",
    label: "Projects",
    projData: [
      {
        // img: require("../imgs/projects/devsecops.jpg"),
        title: "DevSecOps",
        type: ["kubernetes", "cloud", "security"],
        link: "https://github.com/your-repo-link",
        year: "March 2023",
        points: [
          "Implemented a Flask application deployment via Kubernetes, simulating a production cluster; utilized Istio for Canary deployments and conducted Fault Injection tests, ensuring high availability and reducing downtime by 75%.",
          "Deployed Flask application on AWS using Terraform for Infrastructure-as-Code, provisioning EC2 instances, S3 and RDS buckets, and Elastic Load Balancer for seamless scalability and reliable infrastructure.",
          "Built a DAST automation pipeline that improved security protocols, reduced manual testing by 30%, and empowered the security team to expand coverage to 98% of applications.",
        ],
        tech: [
          "Kubernetes",
          "Istio",
          "Terraform",
          "MinIO",
          "Jenkins",
          "AWS EC2",
          "AWS S3",
          "AWS RDS",
        ],
      },
      {
        // img: require("../imgs/projects/software_analysis.jpg"),
        title: "Software Analysis and Test",
        type: ["llvm", "security", "analysis"],
        link: "https://github.com/your-repo-link",
        year: "October 2022",
        points: [
          "Developed an LLVM-based analysis tool for C++ programs, generating inter-procedural call, constraint, and value-flow graphs.",
          "Performed taint analysis to identify and reduce potential security vulnerabilities by 20%.",
        ],
        tech: ["LLVM", "C++"],
      },
      {
        // img: require("../imgs/projects/malware_analysis.jpg"),
        title: "Malware Analysis",
        type: ["malware", "security", "analysis"],
        link: "https://github.com/your-repo-link",
        year: "September 2022",
        points: [
          "Conducted in-depth malware analysis using IDAPro, identifying malicious functions and code patterns, enhancing threat detection and reducing false positives by 25%.",
          "Created custom tools integrated with IDAPro, producing Control Flow Graphs and Data Dependence Graphs, improving static analysis efficiency by 40%.",
          "Designed a Dynamic Analysis solution using the PIN Tool framework to observe system calls and memory patterns, reducing debugging efforts by 45% and boosting system performance by 20%.",
        ],
        tech: ["IDAPro", "Intel Pin", "C++", "Python"],
      },
      {
        // img: require("../imgs/projects/secure_computer_systems.jpg"),
        title: "Secure Computer Systems",
        type: ["security", "networking"],
        link: "https://github.com/your-repo-link",
        year: "April 2022",
        points: [
          "Analyzed and emulated distributed security models, mitigating potential threats by 60% and achieving comprehensive system protection in diverse operational environments.",
        ],
        tech: ["Python", "C++", "Bash"],
      },
      {
        // img: require("../imgs/projects/privacy_policies.jpg"),
        title: "Privacy Policies",
        type: ["policy", "gdpr", "hipaa"],
        link: "https://github.com/your-repo-link",
        year: "September 2021",
        points: [
          "Designed a privacy-preserving COVID app with a sustainable business model and robust privacy policy.",
          "Achieved GDPR and HIPAA compliance, leading to a 25% increase in user adoption and retention.",
        ],
        tech: ["Privacy Policies", "GDPR", "HIPAA"],
      },
    ],
  },

  // -------------------------------------Blogs Page Data-----------------------------------------
  /*blogs: {
    url: "/blogs",
    label: "Blogs",
    cover: require("../imgs/blog/cover.jfif"),
    summary: `My habit of sharing learnings developed in HSBC where I gave a lot of
    knowledge transfer sessions. This very habit nurtured my interest in
    writing technical blogs. Below are the technical blogs that I
    published with the same intention.`,
    blogData: [
      {
        img: require("../imgs/blog/android.png"),
        title: "01 Associate Android Developer Certification By Google",
        link: "https://s-threepio.medium.com/associate-android-developer-certification-by-google-114ab755c187",
        label: "[Medium]",
        info: "I explained the process of cracking the Google's android certification exam, interview and the approach for it's preparation. I also created resources for the same purpose",
      },
      {
        img: require("../imgs/blog/docker.png"),
        title: "02 Docker Overview with React Application",
        link: "https://s-threepio.medium.com/docker-overview-41a3bbfa19f3",
        label: "[Medium]",
        info: "I touched upon the basics of docker and it's advantages. As an add on, I have also explained the process to dockerize a basic react application.",
      },
      {
        img: require("../imgs/blog/crypto.jpg"),
        title: "03 Crypto Currency Block Chain Application",
        link: "https://s-threepio.medium.com/creating-a-cryptocurrency-blockchain-app-46d057d9a712",
        label: "[Medium]",
        info: "I wrote about the workings of the blockchain technology. I also explained how your own cryptocurrency can be created by using a redis publish subscribe model for peers.",
      },
    ],
  },*/

  // -------------------------------------Certification Page Data-----------------------------------------
  /*certifications: {
    url: "/certifications",
    label: "Certifications",
    certs: [
      {
        title: "Hackerrank - Problem Solving Intermediate",
        date: "June 2023",
        image: require("../imgs/certs/hackerrank.png"),
      },
      {
        title:
          "Technologist of the Quarter Award for Outstanding Performance by HSBC",
        date: "Jan-April 2020",
        image: require("../imgs/certs/HSBC.png"),
      },
      {
        title: "Google Certified Associate Android Developer",
        date: "Sep2020-Sep 2023",
        image: require("../imgs/certs/google.png"),
      },
      {
        title: "AWS Certified Solutions Architect - Associate (SAA)",
        date: "Feb 2020-Feb 2023",
        image: require("../imgs/certs/aws.png"),
      },
      {
        title: "Machine Learning Certified by Coursera",
        date: "Jul 2019",
        image: require("../imgs/certs/cour.png"),
      },
    ],
  },*/

  // -------------------------------------Hobbies Page Data-----------------------------------------
  /*hobbies: {
    url: "/hobbies",
    label: "Hobbies",
    hobbyData: [
      {
        hobbyname: "Book Reading",
        img: require("../imgs/hobby/book.webp"),
        description:
          "I am an avid reader of fantasy fiction and any book which has an amazing story to tell. In my opinion stories hold a lot power. Layered characters in a wonderful imagination and the decisions they make in a particular situation can tell us a lot about the way of life. My personal opinion : Every book is a self help book because reading is therapy.",
      },
      {
        hobbyname: "Piano",
        img: require("../imgs/hobby/piano.webp"),
        description:
          'Apart from listening to music, I also love to create my own with the beautiful 88 key beast. I compose when I am lucky and I play when I am not busy. I try to incorporate what Beethoven said about music."To play a wrong note is insignificant, but to play without passion is inexcusable."',
      },
    ],
  },*/
};

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  return (
    <GlobalDataContext.Provider value={GlobalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
