// ============================================================
// YASIR.SEC — PORTFOLIO DATA FILE
// ============================================================
// This is the ONLY file you need to edit to update your site!
// Follow the examples carefully. Don't delete the brackets {} [] or commas ,
// ============================================================

const PORTFOLIO_DATA = {

  // ── PERSONAL INFO ────────────────────────────────────────
  profile: {
    name: "Yasir",
    title: "Junior Penetration Tester",
    subtitle: "Cybersecurity Student // TryHackMe // Jr Pentester Path",
    description: "Breaking things to understand how to fix them. Documenting the journey from zero to security professional.",
    location: "Ibadan, Nigeria 🇳🇬",
    status: "Actively Learning", // Change to "Open to Work", "Employed", etc.
    tryhackme_points: "94+",
    platform: "TryHackMe",
    terminal_goals: [
      "Complete Jr Pentester Path",
      "Earn eJPT / CEH certification",
      "Land first security role",
    ],
  },

  // ── STATS (hero section numbers) ─────────────────────────
  stats: [
    { num: "6",   label: "CTFs Completed" },
    { num: "94+", label: "TryHackMe Points" },
    { num: "5",   label: "CVEs Exploited" },
    // ADD MORE: { num: "1", label: "Certifications" },
  ],

  // ── SOCIAL LINKS ─────────────────────────────────────────
  socials: [
    { icon: "🐙", name: "GitHub",    handle: "Yasir-TechGuy",   url: "https://github.com/Yasir-TechGuy",               active: true  },
    { icon: "✍️", name: "Medium",    handle: "@donyaskid0609",  url: "https://medium.com/@donyaskid0609",              active: true  },
    { icon: "🎯", name: "TryHackMe", handle: "Active Learner",  url: "https://tryhackme.com",                          active: true  },
    { icon: "💼", name: "LinkedIn",  handle: "Coming Soon",     url: "#",                                              active: false },
    // ADD MORE: { icon: "🐦", name: "Twitter", handle: "@yourhandle", url: "https://twitter.com/yourhandle", active: true },
  ],

  // ── CERTIFICATIONS ───────────────────────────────────────
  // Add each certification you earn here!
  certifications: [
    // EXAMPLE (remove // to activate):
    // { name: "eJPT", issuer: "eLearnSecurity", date: "Dec 2026", icon: "🏅", url: "" },
    // { name: "CEH",  issuer: "EC-Council",     date: "2027",     icon: "🎓", url: "" },
  ],
  // Set to true once you have at least one cert
  show_certifications: false,

  // ── CTF WRITE-UPS ─────────────────────────────────────────
  // Most recent first! Add new CTFs at the TOP of this list.
  ctfs: [
    {
      num: "06",
      name: "Tomghost",
      description: "CVE-2020-1938 Ghostcat · Apache Tomcat AJP · PGP Cracking · sudo zip",
      tags: [
        { label: "CVE",        color: "red"    },
        { label: "Metasploit", color: "cyan"   },
        { label: "PGP",        color: "green"  },
      ],
      url: "https://github.com/Yasir-TechGuy/CTF-Rooms-Write-up/tree/main/Tomghost",
      date: "Mar 5, 2026",
      difficulty: "Easy",
      completed: true,
    },
    {
      num: "05",
      name: "Brooklyn Nine Nine",
      description: "Steganography · FTP Anonymous · Hydra SSH · nano/less GTFOBins · 2 Attack Paths",
      tags: [
        { label: "Stego",     color: "yellow" },
        { label: "Hydra",     color: "cyan"   },
        { label: "Dual Path", color: "green"  },
      ],
      url: "https://github.com/Yasir-TechGuy/CTF-Rooms-Write-up/tree/main/Brooklyn%2099",
      date: "Mar 4, 2026",
      difficulty: "Easy",
      completed: true,
    },
    {
      num: "04",
      name: "Bounty Hacker",
      description: "FTP Anonymous · Credential Discovery · Hydra SSH Brute Force · sudo tar GTFOBins",
      tags: [
        { label: "FTP",    color: "cyan"  },
        { label: "Hydra",  color: "green" },
        { label: "PrivEsc",color: "red"   },
      ],
      url: "https://github.com/Yasir-TechGuy/CTF-Rooms-Write-up/tree/main/Bounty-Hacker",
      date: "Mar 4, 2026",
      difficulty: "Easy",
      completed: true,
    },
    {
      num: "03",
      name: "Easy Peasy",
      description: "Multi-port scan · Base64/62/Binary/ROT13 · GOST hash · Steganography · Cron job abuse",
      tags: [
        { label: "Encoding", color: "yellow" },
        { label: "Stego",    color: "cyan"   },
        { label: "Cron",     color: "red"    },
      ],
      url: "https://github.com/Yasir-TechGuy/CTF-Rooms-Write-up/tree/main/Easy-Peasy",
      date: "Mar 2026",
      difficulty: "Medium",
      completed: true,
    },
    {
      num: "02",
      name: "Pickle Rick",
      description: "Web enumeration · Page source · robots.txt · Command injection · Sudo abuse",
      tags: [
        { label: "Web",       color: "green" },
        { label: "CmdInject", color: "cyan"  },
        { label: "Sudo",      color: "red"   },
      ],
      url: "https://github.com/Yasir-TechGuy/CTF-Rooms-Write-up/tree/main/Prickle_Rick",
      date: "Mar 2026",
      difficulty: "Easy",
      completed: true,
    },
    {
      num: "01",
      name: "Love Letter Locker",
      description: "Valentine CTF 2026 · IDOR · Web Hacking",
      tags: [
        { label: "IDOR", color: "cyan"  },
        { label: "Web",  color: "green" },
      ],
      url: "#",
      date: "Feb 2026",
      difficulty: "Easy",
      completed: true,
    },
    // ── ADD NEW CTF HERE (copy this block) ──
    // {
    //   num: "07",
    //   name: "Room Name",
    //   description: "Short description of what you did",
    //   tags: [
    //     { label: "Tag1", color: "green" },   // colors: green, cyan, red, yellow
    //     { label: "Tag2", color: "cyan"  },
    //   ],
    //   url: "https://github.com/Yasir-TechGuy/CTF-Rooms-Write-up/tree/main/FolderName",
    //   date: "Apr 2026",
    //   difficulty: "Easy",  // Easy / Medium / Hard
    //   completed: true,
    // },
  ],

  // ── BLOG POSTS ────────────────────────────────────────────
  // Add new blog posts at the TOP. Set coming_soon: true for drafts.
  blog_posts: [
    {
      category: "CTF Write-up",
      title: "Easy Peasy — TryHackMe CTF Write-up",
      excerpt: "Full walkthrough covering multi-port scanning, encoding chains, steganography and cron job privilege escalation.",
      url: "https://medium.com/@donyaskid0609/easy-peasy-tryhackme-ctf-writeup-99527f6ac31e",
      platform: "Medium",
      date: "Mar 2026",
      coming_soon: false,
    },
    {
      category: "Tips & Tricks",
      title: "GTFOBins — Your Privilege Escalation Cheat Sheet",
      excerpt: "A practical guide to GTFOBins. Covers tar, nano, less, zip and common pitfalls with placeholder paths.",
      url: "#",
      platform: "Coming Soon",
      date: "—",
      coming_soon: true,
    },
    {
      category: "Learning Notes",
      title: "My TryHackMe Jr Pentester Journey — Month 1",
      excerpt: "Progress update: completed modules, CTF rooms, lessons learned and what's coming next.",
      url: "#",
      platform: "Coming Soon",
      date: "—",
      coming_soon: true,
    },
    {
      category: "Cybersecurity Tips",
      title: "5 Things to Check on Every CTF Web Challenge",
      excerpt: "Page source, robots.txt, headers, cookies, directory busting — the checklist I use on every web challenge.",
      url: "#",
      platform: "Coming Soon",
      date: "—",
      coming_soon: true,
    },
    // ── ADD NEW BLOG POST HERE ──
    // {
    //   category: "CTF Write-up",   // or "Tips & Tricks" / "Learning Notes" / "Cybersecurity Tips"
    //   title: "Your Post Title",
    //   excerpt: "Short description of the post.",
    //   url: "https://medium.com/...",
    //   platform: "Medium",
    //   date: "Apr 2026",
    //   coming_soon: false,
    // },
  ],

  // ── SKILLS ────────────────────────────────────────────────
  skills: [
    { icon: "🔍", name: "Reconnaissance",       desc: "Port scanning, service enumeration, OSINT",          tags: ["Nmap", "Gobuster", "Dirb", "OSINT"]              },
    { icon: "🌐", name: "Web Hacking",           desc: "OWASP Top 10, authentication bypass, IDOR",          tags: ["Burp Suite", "SQLi", "XSS", "IDOR"]              },
    { icon: "🔑", name: "Exploitation",          desc: "CVE exploitation, brute-forcing, password attacks",  tags: ["Hydra", "Metasploit", "John", "CVEs"]            },
    { icon: "⬆️", name: "Privilege Escalation",  desc: "sudo misconfig, SUID, cron jobs, GTFOBins",          tags: ["GTFOBins", "sudo -l", "Cron", "SUID"]           },
    { icon: "🕵️", name: "Steganography",         desc: "Hidden data extraction, passphrase cracking",        tags: ["Steghide", "Stegseek", "CyberChef"]             },
    { icon: "📝", name: "Documentation",         desc: "Professional reports, CTF write-ups, GitHub",        tags: ["Reports", "Markdown", "GitHub"]                  },
    // ADD MORE: { icon: "🛡️", name: "Blue Team", desc: "Log analysis, SIEM, threat hunting", tags: ["Splunk", "ELK", "Wireshark"] },
  ],

  // ── TOOLS ─────────────────────────────────────────────────
  tools: [
    { icon: "🗺️", name: "Nmap",       category: "Recon"          },
    { icon: "🕷️", name: "Gobuster",   category: "Enumeration"    },
    { icon: "🔥", name: "Burp Suite", category: "Web Hacking"    },
    { icon: "💧", name: "Hydra",      category: "Brute Force"    },
    { icon: "🎯", name: "Metasploit", category: "Exploitation"   },
    { icon: "🔨", name: "John",       category: "Password Crack" },
    { icon: "🔐", name: "Hashcat",    category: "Password Crack" },
    { icon: "🖼️", name: "Steghide",   category: "Steganography"  },
    { icon: "⚡", name: "Stegseek",   category: "Steganography"  },
    { icon: "🍳", name: "CyberChef",  category: "Encoding"       },
    { icon: "🔒", name: "GPG/PGP",    category: "Crypto"         },
    { icon: "📚", name: "GTFOBins",   category: "PrivEsc Ref"    },
    // ADD MORE: { icon: "🦈", name: "Wireshark", category: "Network Analysis" },
  ],

  // ── LEARNING PATH PROGRESS ────────────────────────────────
  learning_path: [
    { name: "Pre-Security",                                  pct: 100, active: true  },
    { name: "Intro to Cybersecurity",                        pct: 100, active: true  },
    { name: "Jr Pentester — Intro to Web Hacking",           pct: 40,  active: true  },
    { name: "Burp Suite Module",                             pct: 0,   active: false },
    { name: "Metasploit + Privilege Escalation",             pct: 0,   active: false },
    // ADD MORE as you progress:
    // { name: "Active Directory Basics", pct: 0, active: false },
  ],

  // ── METHODOLOGY STEPS ────────────────────────────────────
  methodology: [
    { num: "01", name: "Recon",      desc: "Nmap full scan, service detection, OS fingerprint"       },
    { num: "02", name: "Enumerate",  desc: "Web dirs, FTP anon, SMB shares, service versions"        },
    { num: "03", name: "Exploit",    desc: "CVE search, brute force, injection, file upload"         },
    { num: "04", name: "Escalate",   desc: "sudo -l, SUID, cron jobs, GTFOBins, writable files"      },
    { num: "05", name: "Document",   desc: "Report findings, write-up, GitHub publish"               },
  ],

  // ── MOTIVATIONAL QUOTES ───────────────────────────────────
  // These rotate on the site. Add as many as you like!
  quotes: [
    { text: "The quieter you become, the more you can hear.",          author: "Kali Linux"         },
    { text: "Hacking is not a crime, it's an art.",                   author: "Unknown"            },
    { text: "The best defense is understanding the offense.",          author: "Security Proverb"   },
    { text: "Every expert was once a beginner.",                       author: "Unknown"            },
    { text: "Try harder.",                                             author: "Offensive Security" },
    { text: "Root is just a sudo away.",                              author: "GTFOBins"           },
    // ADD YOUR OWN:
    // { text: "Your quote here", author: "Author" },
  ],

  // ── HACK LAB ─────────────────────────────────────────────
  // Set coming_soon: false and add items when your lab is ready!
  hack_lab: {
    coming_soon: true,
    description: "Personal home lab setup, vulnerable VMs, custom scripts and tools. Under construction!",
    items: [
      // { name: "Home Lab Setup",     desc: "VirtualBox + Kali + Vulnerable VMs", status: "Planning",    icon: "🖥️" },
      // { name: "Custom Nmap Scripts",desc: "Automated recon scripts",             status: "In Progress", icon: "📜" },
    ],
  },

  // ── GAMES (future feature) ───────────────────────────────
  games: {
    coming_soon: false,
    description: "Interactive security challenges and mini-games.",
    items: [
      { name: "HackChess", desc: "Chess vs AI — 20 levels", url: "hackchess.html", icon: "♟️" },
  
      // { name: "", desc: "Guess the hash type", url: "#", icon: "🎮" },
      // { name: "CTF Quiz",          desc: "Test your knowledge", url: "#", icon: "🧠" },
    ],
  },

  // ── ACHIEVEMENTS / BADGES ────────────────────────────────
  achievements: [
    { icon: "🏆", name: "First Blood",     desc: "Completed first CTF room",              earned: true  },
    { icon: "🔥", name: "On a Roll",       desc: "Completed 5 CTFs in a row",             earned: true  },
    { icon: "🎯", name: "CVE Hunter",      desc: "Exploited a real-world CVE",            earned: true  },
    { icon: "🕵️", name: "Stego Master",    desc: "Cracked steganography challenge",       earned: true  },
    { icon: "⬆️", name: "Root Seeker",     desc: "Achieved root on 5+ machines",         earned: true  },
    { icon: "📝", name: "Documenter",      desc: "Published 5+ write-ups on GitHub",     earned: true  },
    { icon: "🎓", name: "Certified",       desc: "Earned first security certification",  earned: false },
    { icon: "💼", name: "Professional",    desc: "Landed first security job",            earned: false },
    // ADD MORE: { icon: "🛡️", name: "Defender", desc: "Completed blue team challenge", earned: false },
  ],

};
