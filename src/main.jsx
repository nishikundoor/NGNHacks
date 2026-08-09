import React,{useEffect,useMemo,useState}from'react';
import{createRoot}from'react-dom/client';import'./styles.css';

const DB = [
  // =========================
  // COMPUTER SCIENCE / AI
  // =========================

  {
    id:'congressional-app',
    name:'Congressional App Challenge',
    org:'U.S. House of Representatives',
    type:'Competition',
    topics:['Computer Science','Coding','Government','Entrepreneurship'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'National',
    cost:0,
    paid:false,
    dates:'Annual fall competition',
    deadline:'Varies by district',
    status:'Open/Varies',
    requirements:'Middle and high school students in participating congressional districts.',
    description:'Students create an original app for the chance to be recognized by their member of Congress.',
    url:'https://www.congressionalappchallenge.us/',
    art:'▦',
    tone:'orange',
    skills:['JavaScript','Python','Design'],
    minGpa:0
  },

  {
    id:'ncwit',
    name:'NCWIT Aspirations in Computing',
    org:'NCWIT',
    type:'Award',
    topics:['Computer Science','Coding','Leadership','STEM'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'Annual',
    deadline:'Varies annually',
    status:'Recurring',
    requirements:'Students interested in computing and technology.',
    description:'An award program recognizing students for achievements and aspirations in computing.',
    url:'https://www.aspirations.org/',
    art:'✳',
    tone:'purple',
    skills:['Python','Leadership','Programming'],
    minGpa:0
  },

  {
    id:'bwsi',
    name:'Beaver Works Summer Institute',
    org:'MIT Beaver Works',
    type:'Summer Program',
    topics:['Computer Science','AI','Engineering','Robotics','Cybersecurity'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'Cambridge, MA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Varies annually',
    status:'Recurring',
    requirements:'High school students; course-specific prerequisites may apply.',
    description:'Advanced STEM summer courses covering areas such as AI, autonomous systems, cybersecurity and engineering.',
    url:'https://beaverworks.ll.mit.edu/CMS/bwsi',
    art:'⌘',
    tone:'blue',
    skills:['Python','AI','Programming','Math'],
    minGpa:3.0
  },

  {
    id:'ai4all',
    name:'AI4ALL',
    org:'AI4ALL',
    type:'Summer Program',
    topics:['AI','Computer Science','Technology','Research'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'Multiple locations',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Varies by program',
    status:'Recurring',
    requirements:'High school students; eligibility varies by AI4ALL program.',
    description:'Educational programs designed to introduce students to artificial intelligence and its applications.',
    url:'https://ai-4-all.org/',
    art:'AI',
    tone:'blue',
    skills:['Python','Research','Programming'],
    minGpa:0
  },

  {
    id:'girls-who-code',
    name:'Girls Who Code Programs',
    org:'Girls Who Code',
    type:'Program',
    topics:['Computer Science','Coding','AI','Technology'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'Year-round',
    deadline:'Varies',
    status:'Recurring',
    requirements:'High school students eligible for available Girls Who Code programs.',
    description:'Coding education and technology programs designed to help students build technical skills.',
    url:'https://girlswhocode.com/',
    art:'<>',
    tone:'pink',
    skills:['Python','JavaScript','Programming'],
    minGpa:0
  },

  // =========================
  // ENGINEERING / STEM
  // =========================

  {
    id:'mites',
    name:'MITES Summer',
    org:'MIT',
    type:'Summer Program',
    topics:['Engineering','Computer Science','STEM','Math'],
    grades:[11],
    format:'In-person',
    location:'Cambridge, MA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'Rising high school seniors; eligibility requirements apply.',
    description:'A rigorous residential STEM experience featuring college-level courses, mentorship and projects.',
    url:'https://mites.mit.edu/',
    art:'✦',
    tone:'purple',
    skills:['Python','Research','Math'],
    minGpa:3.4
  },

  {
    id:'mit-wtp',
    name:"MIT Women's Technology Program",
    org:'MIT',
    type:'Summer Program',
    topics:['Engineering','Math','STEM','Mechanical Engineering'],
    grades:[11],
    format:'In-person',
    location:'Cambridge, MA',
    cost:0,
    paid:false,
    dates:'June–July',
    deadline:'Annual',
    status:'Recurring',
    requirements:'Rising seniors with strong math and science preparation; program focuses on students with little engineering experience.',
    description:'A four-week engineering program featuring hands-on classes, labs and team projects.',
    url:'https://wtp.mit.edu/',
    art:'⚙',
    tone:'blue',
    skills:['Math','Design','Engineering'],
    minGpa:3.2
  },

  {
    id:'mit-edw',
    name:'Engineering Design Workshop',
    org:'MIT Edgerton Center',
    type:'Summer Program',
    topics:['Engineering','Design','Robotics','STEM'],
    grades:[9,10,11,12],
    format:'In-person',
    location:'Cambridge, MA',
    cost:1200,
    paid:false,
    dates:'July',
    deadline:'Annual',
    status:'Recurring',
    requirements:'Rising grades 9–12; local students are favored because the program is non-residential.',
    description:'Students work collaboratively on hands-on engineering design projects.',
    url:'https://edgerton.mit.edu/k-12-education/summer-programs/engineering-design-workshop',
    art:'⚙',
    tone:'green',
    skills:['Design','Engineering','Math'],
    minGpa:0
  },

  {
    id:'nasa-sees',
    name:'SEES High School Summer Internship',
    org:'NASA / UT Austin',
    type:'Internship',
    topics:['Space','Engineering','Data Science','Research','STEM'],
    grades:[10,11],
    format:'Hybrid',
    location:'Austin, TX',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school sophomores and juniors; project requirements vary.',
    description:'Students participate in Earth and space science research with NASA scientists and engineers.',
    url:'https://science.nasa.gov/learn/learner-opportunities/',
    art:'◒',
    tone:'pink',
    skills:['Data Analysis','Research','Python'],
    minGpa:3.2
  },

  {
    id:'science-bowl',
    name:'National Science Bowl',
    org:'U.S. Department of Energy',
    type:'Competition',
    topics:['Science','Engineering','Physics','Chemistry','Biology'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'National',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Varies',
    status:'Recurring',
    requirements:'Middle and high school students participating through teams.',
    description:'A competitive science tournament covering a broad range of STEM subjects.',
    url:'https://science.osti.gov/wdts/nsb',
    art:'⚛',
    tone:'blue',
    skills:['Science','Teamwork','Research'],
    minGpa:0
  },

  // =========================
  // MEDICINE / HEALTH
  // =========================

  {
    id:'stanford-simr',
    name:'Stanford Institutes of Medicine Summer Research',
    org:'Stanford Medicine',
    type:'Research',
    topics:['Medicine','Biology','Research','Healthcare','Bioengineering'],
    grades:[11,12],
    format:'In-person',
    location:'Stanford, CA',
    cost:0,
    paid:false,
    dates:'June–July',
    deadline:'February',
    status:'Closed for 2026',
    requirements:'Current high school juniors or seniors; U.S. citizen or permanent resident; age and location requirements apply.',
    description:'An eight-week medical research experience working with Stanford research mentors.',
    url:'https://med.stanford.edu/simr.html',
    art:'✚',
    tone:'red',
    skills:['Research','Biology','Data Analysis'],
    minGpa:3.5
  },

  {
    id:'stanford-pips',
    name:'Pediatrics Internship Program at Stanford',
    org:'Stanford Medicine',
    type:'Internship',
    topics:['Medicine','Pediatrics','Biology','Research','Healthcare'],
    grades:[11,12],
    format:'In-person',
    location:'Stanford, CA',
    cost:0,
    paid:false,
    dates:'June–July',
    deadline:'Annual',
    status:'Recurring',
    requirements:'Rising high school juniors and seniors.',
    description:'A seven-week introductory research experience focused on pediatrics and medicine.',
    url:'https://med.stanford.edu/pediatrics/education/pediatrics-internship-program.html',
    art:'✚',
    tone:'pink',
    skills:['Research','Biology','Communication'],
    minGpa:0
  },

  {
    id:'stanford-casp',
    name:'Clinical Anatomy Summer Program',
    org:'Stanford Medicine',
    type:'Summer Program',
    topics:['Medicine','Anatomy','Healthcare','Biology'],
    grades:[9,10,11,12],
    format:'In-person',
    location:'Stanford, CA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students interested in medicine and health professions.',
    description:'An immersive introduction to anatomy and health careers through Stanford Medicine.',
    url:'https://med.stanford.edu/anatomy/education0/clinical-anatomy-summer-program.html',
    art:'🩺',
    tone:'red',
    skills:['Biology','Research','Communication'],
    minGpa:0
  },

  {
    id:'stanford-lifestyle',
    name:'Lifestyle Medicine High School Summer Program',
    org:'Stanford Lifestyle Medicine',
    type:'Summer Program',
    topics:['Medicine','Healthcare','Nutrition','Public Health'],
    grades:[11,12],
    format:'Remote',
    location:'Remote',
    cost:0,
    paid:false,
    dates:'July 6–29, 2026',
    deadline:'Annual',
    status:'Recurring',
    requirements:'Rising high school juniors and seniors interested in healthcare or wellness.',
    description:'An online program exploring nutrition, health behavior, communication and lifestyle medicine.',
    url:'https://lifestylemedicine.stanford.edu/education/',
    art:'♡',
    tone:'green',
    skills:['Communication','Research','Writing'],
    minGpa:0
  },

  {
    id:'stanford-explore',
    name:'Stanford EXPLORE Lecture Series',
    org:'Stanford Medicine',
    type:'Summer Program',
    topics:['Medicine','Biology','Cancer','Neuroscience','AI','Healthcare'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'Stanford, CA',
    cost:600,
    paid:false,
    dates:'July 2026',
    deadline:'March',
    status:'Closed for 2026',
    requirements:'High school students; U.S. citizen or permanent resident living in the U.S.',
    description:'A lecture series covering topics including immunology, cancer, neuroscience, AI in biomedicine and medicine careers.',
    url:'https://med.stanford.edu/explore/explore-registration.html',
    art:'🧬',
    tone:'purple',
    skills:['Biology','Research','AI'],
    minGpa:3.0
  },

  {
    id:'nih-sip',
    name:'NIH Summer Internship Program',
    org:'National Institutes of Health',
    type:'Research',
    topics:['Medicine','Biology','Research','Healthcare','Science'],
    grades:[11,12],
    format:'In-person',
    location:'Bethesda, MD',
    cost:0,
    paid:true,
    dates:'May–August',
    deadline:'February',
    status:'Recurring',
    requirements:'Eligibility varies by NIH institute; age and citizenship/residency requirements apply.',
    description:'Research opportunities across NIH institutes and centers.',
    url:'https://www.training.nih.gov/research-training/grads/summer-internship-program-sip/',
    art:'⚕',
    tone:'blue',
    skills:['Research','Biology','Data Analysis'],
    minGpa:3.4
  },

  {
    id:'smithsonian-nmnh',
    name:'NMNH High School Internship',
    org:'Smithsonian Institution',
    type:'Internship',
    topics:['Biology','Research','Science','Healthcare'],
    grades:[10,11,12],
    format:'In-person',
    location:'Washington, DC',
    cost:0,
    paid:false,
    dates:'June–August',
    deadline:'Varies',
    status:'Recurring',
    requirements:'Eligibility varies by individual Smithsonian youth program.',
    description:'Career exploration and science experiences with Smithsonian staff.',
    url:'https://www.si.edu/learn/youth-programs',
    art:'⌁',
    tone:'green',
    skills:['Research','Communication'],
    minGpa:2.8
  },

  // =========================
  // BUSINESS / FINANCE
  // =========================

  {
    id:'wharton-entrepreneurship',
    name:'Essentials of Entrepreneurship',
    org:'Wharton Global Youth Program',
    type:'Summer Program',
    topics:['Business','Entrepreneurship','Marketing','Finance'],
    grades:[9,10,11],
    format:'In-person',
    location:'Philadelphia, PA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'January',
    status:'Closed for 2026',
    requirements:'High school students currently in grades 9–11.',
    description:'A two-week entrepreneurship program focused on innovation, marketing and venture creation.',
    url:'https://globalyouth.wharton.upenn.edu/programs-courses/essentials-of-entrepreneurship/',
    art:'$',
    tone:'orange',
    skills:['Leadership','Marketing','Entrepreneurship'],
    minGpa:0
  },

  {
    id:'wharton-finance',
    name:'Essentials of Finance',
    org:'Wharton Global Youth Program',
    type:'Summer Program',
    topics:['Business','Finance','Economics','Investing'],
    grades:[9,10,11],
    format:'In-person',
    location:'Philadelphia, PA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'January',
    status:'Closed for 2026',
    requirements:'High school students currently in grades 9–11.',
    description:'An introductory finance program covering corporate finance, valuation and investment concepts.',
    url:'https://globalyouth.wharton.upenn.edu/programs-courses/essentials-of-finance/',
    art:'$',
    tone:'yellow',
    skills:['Finance','Math','Analysis'],
    minGpa:0
  },

  {
    id:'wharton-fbw',
    name:'Future of the Business World',
    org:'Wharton Global Youth Program',
    type:'Summer Program',
    topics:['Business','Entrepreneurship','Marketing','Leadership'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'Remote',
    cost:0,
    paid:false,
    dates:'June–July',
    deadline:'Rolling',
    status:'Recurring',
    requirements:'High school students.',
    description:'An online exploration of entrepreneurship, product development and business strategy.',
    url:'https://globalyouth.wharton.upenn.edu/programs-courses/future-of-the-business-world/',
    art:'◈',
    tone:'orange',
    skills:['Entrepreneurship','Marketing','Leadership'],
    minGpa:0
  },

  {
    id:'wharton-mtsi',
    name:'Management & Technology Summer Institute',
    org:'Wharton / Penn Engineering',
    type:'Summer Program',
    topics:['Business','Engineering','Technology','Entrepreneurship'],
    grades:[11],
    format:'In-person',
    location:'Philadelphia, PA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'January',
    status:'Recurring',
    requirements:'Rising high school seniors interested in technology and management.',
    description:'A rigorous program combining business and technology concepts.',
    url:'https://fisher.wharton.upenn.edu/management-technology-summer-institute/',
    art:'⌘',
    tone:'blue',
    skills:['Leadership','Engineering','Entrepreneurship'],
    minGpa:3.5
  },

  {
    id:'wharton-one-day',
    name:'Wharton One-Day High School Experience',
    org:'Wharton Global Youth Program',
    type:'Program',
    topics:['Business','Entrepreneurship','Finance','Leadership'],
    grades:[9,10,11,12],
    format:'In-person',
    location:'Philadelphia, PA',
    cost:0,
    paid:false,
    dates:'Various events',
    deadline:'Varies',
    status:'Recurring',
    requirements:'High school and secondary school students.',
    description:'A one-day introduction to Wharton business education, entrepreneurship and finance.',
    url:'https://globalyouth.wharton.upenn.edu/on-campus-programs/one-day-experience/',
    art:'◇',
    tone:'orange',
    skills:['Leadership','Business','Communication'],
    minGpa:0
  },

  {
    id:'conrad-challenge',
    name:'Conrad Challenge',
    org:'Conrad Foundation',
    type:'Competition',
    topics:['Entrepreneurship','Business','STEM','Innovation'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students participating in teams.',
    description:'Students develop innovative solutions to real-world problems and build entrepreneurial projects.',
    url:'https://www.conradchallenge.org/',
    art:'◆',
    tone:'purple',
    skills:['Entrepreneurship','Design','Leadership'],
    minGpa:0
  },

  // =========================
  // LAW / GOVERNMENT / POLICY
  // =========================

  {
    id:'yale-young-global',
    name:'Yale Young Global Scholars',
    org:'Yale University',
    type:'Summer Program',
    topics:['Law','Government','Politics','Business','Leadership'],
    grades:[10,11,12],
    format:'In-person',
    location:'New Haven, CT',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students meeting program-specific age and grade requirements.',
    description:'An academic summer program exploring global issues through seminars, discussions and collaborative work.',
    url:'https://globalscholars.yale.edu/',
    art:'Y',
    tone:'blue',
    skills:['Writing','Leadership','Research'],
    minGpa:3.0
  },

  {
    id:'youth-in-policy',
    name:'Youth in Policy Fellowship',
    org:'Youth in Policy',
    type:'Fellowship',
    topics:['Law','Government','Politics','Public Policy','Leadership'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Varies',
    status:'Recurring',
    requirements:'High school students interested in policy and civic engagement.',
    description:'A student fellowship focused on policy research, civic engagement and leadership.',
    url:'https://www.yipinstitute.org/',
    art:'§',
    tone:'blue',
    skills:['Writing','Research','Leadership'],
    minGpa:0
  },

  {
    id:'civics-unplugged',
    name:'Civics Unplugged',
    org:'Civics Unplugged',
    type:'Fellowship',
    topics:['Government','Law','Politics','Leadership','Entrepreneurship'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'National',
    cost:0,
    paid:false,
    dates:'Year-round',
    deadline:'Varies',
    status:'Recurring',
    requirements:'Young people interested in civic innovation.',
    description:'Fellowships and learning opportunities for young civic leaders.',
    url:'https://www.civicsunplugged.org/',
    art:'⚖',
    tone:'green',
    skills:['Leadership','Writing','Communication'],
    minGpa:0
  },

  {
    id:'senate-youth-program',
    name:'Senate Youth Program',
    org:'United States Senate',
    type:'Government Program',
    topics:['Government','Law','Politics','Leadership'],
    grades:[11,12],
    format:'In-person',
    location:'Washington, DC',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Varies by state',
    status:'Annual',
    requirements:'High school juniors and seniors selected through state-level processes.',
    description:'An intensive government and leadership experience in Washington, DC.',
    url:'https://ussenateyouth.org/',
    art:'🏛',
    tone:'blue',
    skills:['Leadership','Public Speaking','Government'],
    minGpa:0
  },

  {
    id:'boys-girls-state',
    name:'American Legion Boys State / Girls State',
    org:'American Legion',
    type:'Government Program',
    topics:['Government','Law','Politics','Leadership'],
    grades:[11],
    format:'In-person',
    location:'Multiple locations',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Varies by state',
    status:'Annual',
    requirements:'High school juniors; selection and eligibility vary by state.',
    description:'Students participate in a hands-on simulation of government and civic leadership.',
    url:'https://www.legion.org/get-involved/youth-programs',
    art:'🏛',
    tone:'orange',
    skills:['Leadership','Public Speaking','Government'],
    minGpa:0
  },

  // =========================
  // SCIENCE / RESEARCH
  // =========================

  {
    id:'regeneron-sts',
    name:'Regeneron Science Talent Search',
    org:'Society for Science',
    type:'Competition',
    topics:['Research','Biology','Science','Engineering','Medicine'],
    grades:[12],
    format:'Hybrid',
    location:'National',
    cost:0,
    paid:false,
    dates:'Fall–spring',
    deadline:'Annual',
    status:'Annual',
    requirements:'High school seniors conducting original scientific research.',
    description:'A prestigious research competition recognizing outstanding high school scientists.',
    url:'https://www.societyforscience.org/regeneron-sts/',
    art:'◌',
    tone:'yellow',
    skills:['Research','Writing','Science'],
    minGpa:3.2
  },

  {
    id:'science-talent',
    name:'Regeneron ISEF',
    org:'Society for Science',
    type:'Competition',
    topics:['Research','Science','Engineering','Medicine','Technology'],
    grades:[9,10,11,12],
    format:'In-person',
    location:'National',
    cost:0,
    paid:false,
    dates:'Spring',
    deadline:'Qualifying fairs',
    status:'Annual',
    requirements:'Students qualify through affiliated science fairs.',
    description:'A major international science and engineering research competition for high school students.',
    url:'https://www.societyforscience.org/isef/',
    art:'⚗',
    tone:'purple',
    skills:['Research','Science','Presentation'],
    minGpa:0
  },

  {
    id:'ssp',
    name:'Summer Science Program',
    org:'Summer Science Program',
    type:'Summer Program',
    topics:['Science','Research','Astrophysics','Biology','Chemistry'],
    grades:[11,12],
    format:'In-person',
    location:'Multiple locations',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school juniors and seniors; program-specific eligibility applies.',
    description:'An intensive residential research experience in science and mathematics.',
    url:'https://summerscience.org/',
    art:'✧',
    tone:'purple',
    skills:['Research','Math','Science'],
    minGpa:3.5
  },

  {
    id:'rsi',
    name:'Research Science Institute',
    org:'MIT',
    type:'Research',
    topics:['Research','Science','Engineering','Math','Computer Science'],
    grades:[11],
    format:'In-person',
    location:'Cambridge, MA',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Annual',
    requirements:'Highly competitive program for outstanding high school students.',
    description:'An intensive research program combining advanced coursework with independent research.',
    url:'https://www.cee.org/programs/research-science-institute',
    art:'Σ',
    tone:'purple',
    skills:['Research','Math','Science'],
    minGpa:3.8
  },

  {
    id:'simons',
    name:'Simons Summer Research Program',
    org:'Stony Brook University',
    type:'Research',
    topics:['Research','Science','Engineering','Math'],
    grades:[11],
    format:'In-person',
    location:'Stony Brook, NY',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students meeting program-specific requirements.',
    description:'A research-focused summer experience working with faculty mentors.',
    url:'https://www.stonybrook.edu/commcms/simons/',
    art:'∑',
    tone:'blue',
    skills:['Research','Math','Science'],
    minGpa:3.5
  },

  // =========================
  // WRITING / COMMUNICATION
  // =========================

  {
    id:'scholastic-writing',
    name:'Scholastic Art & Writing Awards',
    org:'Alliance for Young Artists & Writers',
    type:'Competition',
    topics:['Writing','Journalism','Arts','Humanities'],
    grades:[7,8,9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Varies by region',
    status:'Annual',
    requirements:'Students in grades 7–12.',
    description:'A national competition recognizing student writing and visual arts.',
    url:'https://www.artandwriting.org/',
    art:'✎',
    tone:'pink',
    skills:['Writing','Communication','Creativity'],
    minGpa:0
  },

  {
    id:'jqa',
    name:'Junior Journalism Achievement',
    org:'Journalism Education Association',
    type:'Competition',
    topics:['Journalism','Writing','Communication','Media'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Varies',
    status:'Recurring',
    requirements:'High school students interested in journalism.',
    description:'Opportunities for students to develop journalism and communication skills.',
    url:'https://jea.org/',
    art:'📰',
    tone:'yellow',
    skills:['Writing','Journalism','Communication'],
    minGpa:0
  },

  // =========================
  // ENVIRONMENT / SOCIAL IMPACT
  // =========================

  {
    id:'conservation-commons',
    name:'National Geographic Student Expeditions',
    org:'National Geographic',
    type:'Program',
    topics:['Environment','Science','Geography','Leadership'],
    grades:[9,10,11,12],
    format:'In-person',
    location:'Multiple locations',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Varies',
    status:'Recurring',
    requirements:'High school students; trip-specific requirements apply.',
    description:'Educational experiences focused on exploration, geography and global issues.',
    url:'https://www.nationalgeographic.com/expeditions/',
    art:'◎',
    tone:'green',
    skills:['Research','Leadership','Communication'],
    minGpa:0
  },

  {
    id:'conrad',
    name:'Conrad Challenge',
    org:'Conrad Foundation',
    type:'Competition',
    topics:['Environment','STEM','Entrepreneurship','Innovation'],
    grades:[9,10,11,12],
    format:'Remote',
    location:'National',
    cost:0,
    paid:false,
    dates:'School year',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students working in teams.',
    description:'Students develop innovative solutions to major global challenges.',
    url:'https://www.conradchallenge.org/',
    art:'◆',
    tone:'green',
    skills:['Research','Design','Entrepreneurship'],
    minGpa:0
  },

  // =========================
  // LEADERSHIP / GENERAL
  // =========================

  {
    id:'yygs',
    name:'Yale Young Global Scholars',
    org:'Yale University',
    type:'Summer Program',
    topics:['Leadership','Government','Business','Law','STEM'],
    grades:[10,11,12],
    format:'In-person',
    location:'New Haven, CT',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students meeting program-specific age requirements.',
    description:'A global academic summer program bringing students together around interdisciplinary topics.',
    url:'https://globalscholars.yale.edu/',
    art:'Y',
    tone:'blue',
    skills:['Leadership','Writing','Research'],
    minGpa:3.0
  },

  {
    id:'launchx',
    name:'LaunchX',
    org:'LaunchX',
    type:'Entrepreneurship',
    topics:['Business','Entrepreneurship','Technology','Leadership'],
    grades:[9,10,11,12],
    format:'Hybrid',
    location:'Multiple locations',
    cost:0,
    paid:false,
    dates:'Summer',
    deadline:'Annual',
    status:'Recurring',
    requirements:'High school students interested in entrepreneurship.',
    description:'An entrepreneurship experience focused on building products, teams and ventures.',
    url:'https://launchx.com/',
    art:'↗',
    tone:'orange',
    skills:['Entrepreneurship','Leadership','Marketing'],
    minGpa:0
  }
];
const defaults={name:'',grade:'10',interests:['Computer Science','Engineering'],major:'Computer Science',gpa:'3.8',score:'1290',skills:['Python','Leadership'],location:'Detroit, MI',travel:'Yes, anywhere',budget:'1000',paid:'Either',format:'Hybrid',dates:'Summer 2026',types:['Internship','Summer Program','Competition']};
const get=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
const set=(key,v)=>localStorage.setItem(key,JSON.stringify(v));
function score(o,p){
  const lower = a => String(a || '').toLowerCase();

  const interests = [
    ...(p.interests || []),
    p.major,
    ...(p.skills || [])
  ].filter(Boolean).map(lower);

  const topicMatches = o.topics.filter(topic =>
    interests.some(x =>
      x === lower(topic) ||
      x.includes(lower(topic)) ||
      lower(topic).includes(x)
    )
  );

  const skillMatches = o.skills.filter(skill =>
    (p.skills || []).some(userSkill =>
      lower(userSkill) === lower(skill) ||
      lower(userSkill).includes(lower(skill)) ||
      lower(skill).includes(lower(userSkill))
    )
  );

  let score = 0;
  let why = [];

  // Interests — 35 points
  const interestScore = Math.min(35, topicMatches.length * 10);
  score += interestScore;

  if(topicMatches.length){
    why.push(
      `matches your ${topicMatches.slice(0,2).join(' and ')} interests`
    );
  }

  // Skills — 15 points
  const skillScore = Math.min(15, skillMatches.length * 5);
  score += skillScore;

  if(skillMatches.length){
    why.push(
      `uses your ${skillMatches.slice(0,2).join(' and ')} skills`
    );
  }

  // Grade — 15 points
  if(o.grades.includes(Number(p.grade))){
    score += 15;
    why.push(`welcomes students in grade ${p.grade}`);
  } else {
    score -= 25;
  }

  // GPA — 10 points
  if(o.minGpa === 0){
    score += 10;
  } else if(Number(p.gpa) >= o.minGpa){
    score += 10;
    why.push('fits your academic profile');
  } else {
    score -= 10;
  }

  // Budget — 10 points
  if(o.cost === 0){
    score += 10;
    why.push('is free');
  } else if(o.cost <= Number(p.budget)){
    score += 10;
    why.push('fits your budget');
  } else {
    score -= 15;
  }

  // Format — 5 points
  if(
    p.format === o.format ||
    p.format === 'Hybrid' ||
    o.format === 'Hybrid'
  ){
    score += 5;
  }

  // Travel / location — 10 points
  if(o.format === 'Remote'){
    score += 10;
  } else if(p.travel === 'Yes, anywhere'){
    score += 10;
  } else if(
    p.travel === 'Yes, nearby' &&
    (
      o.location.includes('Detroit') ||
      o.location === 'National'
    )
  ){
    score += 10;
  } else if(o.location === p.location){
    score += 10;
  }

  return {
    value: Math.max(0, Math.min(100, Math.round(score))),
    why
  };
}
function parseSearch(q,opps){let words=q.toLowerCase();return opps.filter(o=>{let text=[o.name,o.org,o.type,o.topics.join(' '),o.format,o.location,o.cost?'paid tuition':'free'].join(' ').toLowerCase();let conditions=[];if(/intern/.test(words))conditions.push(o.type==='Internship');if(/competition/.test(words))conditions.push(o.type==='Competition');if(/scholarship/.test(words))conditions.push(o.type==='Scholarship');if(/program|summer/.test(words))conditions.push(o.type==='Summer Program');if(/free|no cost/.test(words))conditions.push(o.cost===0);if(/paid/.test(words))conditions.push(o.paid);if(/remote|virtual/.test(words))conditions.push(o.format==='Remote'||o.format==='Hybrid');if(/research/.test(words))conditions.push(o.topics.includes('Research'));if(/biology|health/.test(words))conditions.push(o.topics.some(t=>['Biology','Healthcare'].includes(t)));if(/business|entrepreneur|finance|economics/.test(words))
    conditions.push(
        o.topics.some(t =>
            ['Business','Entrepreneurship','Finance','Economics'].includes(t)
        )
    );

if(/law|legal|policy|government|politics/.test(words))
    conditions.push(
        o.topics.some(t =>
            ['Law','Government','Politics','Public Policy'].includes(t)
        )
    );

if(/medicine|medical|health|healthcare|biology|pre-med/.test(words))
    conditions.push(
        o.topics.some(t =>
            ['Medicine','Healthcare','Biology','Public Health','Pediatrics'].includes(t)
        )
    );

if(/engineering/.test(words))
    conditions.push(
        o.topics.includes('Engineering')
    );

if(/science|research/.test(words))
    conditions.push(
        o.topics.some(t =>
            ['Science','Research'].includes(t)
        )
    );

if(/computer|coding|programming|software|ai/.test(words))
    conditions.push(
        o.topics.some(t =>
            ['Computer Science','Coding','AI','Technology'].includes(t)
        )
    );
    
  if(/ai|computer|coding/.test(words))conditions.push(o.topics.some(t=>['AI','Computer Science'].includes(t)));if(/engineering/.test(words))conditions.push(o.topics.includes('Engineering'));if(/near me/.test(words))conditions.push(o.location.includes('Detroit')||o.location==='National'||o.format==='Remote'||o.format==='Hybrid');return conditions.length?conditions.every(Boolean):text.includes(words)||words.split(' ').some(w=>w.length>2&&text.includes(w))});}

function App(){const [auth, setAuth] = useState(false);const[profile,setProfile]=useState(()=>get('voyage_profile',defaults));const[saved,setSaved]=useState(()=>get('voyage_saved',[]));const[apps,setApps]=useState(()=>get('voyage_apps',[]));const[roadmap,setRoadmap]=useState(()=>get('voyage_roadmap',null));const[view,setView]=useState('Discover');const[toast,setToast]=useState('');useEffect(()=>set('voyage_profile',profile),[profile]);useEffect(()=>set('voyage_saved',saved),[saved]);useEffect(()=>set('voyage_apps',apps),[apps]);useEffect(()=>set('voyage_roadmap',roadmap),[roadmap]);const notify=x=>{setToast(x);setTimeout(()=>setToast(''),2200)};if(!auth)return <Auth done={(p)=>{setProfile(p);setAuth(true);setRoadmap(buildRoadmap(p));}}/>;return <div className="app"><Sidebar view={view} setView={setView} profile={profile} saved={saved.length}/><main><Topbar setView={setView} saved={saved} profile={profile} />{view==='Discover'&&<Discover {...{profile,saved,setSaved,apps,setApps,setView,notify}}/>}{view==='Applications'&&<Applications {...{apps,setApps,saved,profile,notify}}/>}{view==='Roadmap'&&<Roadmap {...{profile,setView,roadmap,setRoadmap,notify}}/>}{view==='Saved'&&<Saved {...{saved,setSaved,profile,setView,apps,setApps,notify}}/>}{view==='Profile'&&<Profile profile={profile} setProfile={setProfile} notify={notify}/>}<Footer/></main>{toast&&<div className="toast">✓ {toast}</div>}</div>}
function Auth({done}){const[mode,setMode]=useState('start'),[step,setStep]=useState(0),[p,setP]=useState(defaults);const fields=[['About you',['name','grade','location','travel']],['Your direction',['interests','major','types']],['Academic snapshot',['gpa','score','skills']],['Preferences',['budget','paid','format','dates']]];const update=(k,v)=>setP({...p,[k]:v});if(mode==='start')return <div className="auth"><div className="auth-logo"><span className="brandmark">v</span> voyage</div><section><p className="overline">WELCOME TO VOYAGE</p><h1>Find the next thing that feels like you.</h1><p>Discover programs, internships, scholarships, and competitions—then turn possibility into a plan.</p><button className="google" onClick={()=>setMode('onboard')}>G <b>Continue with Google</b></button><button className="email" onClick={()=>setMode('onboard')}>✉ <b>Continue with Email</b></button><small>By continuing, you agree to Voyage’s Terms and Privacy Policy.</small></section><div className="auth-art">✦<span>⌘</span><i>◌</i><b>YOUR FUTURE,<br/>IN MOTION</b></div></div>;let [title,keys]=fields[step];return <div className="onboard"><div className="auth-logo"><span className="brandmark">v</span> voyage</div><div className="steps">{fields.map((x,i)=><i className={i<=step?'on':''}/>)}</div><section><p className="overline">PROFILE SETUP · {step+1} OF {fields.length}</p><h1>{title}</h1><p>These details power your recommendations, matches, and roadmap. You can edit them anytime.</p><div className="formgrid">{keys.map(k=><Field key={k} k={k} p={p} update={update}/>)}</div><div className="onboard-buttons">{step>0&&<button onClick={()=>setStep(step-1)}>Back</button>}<button className="darkbtn" onClick={()=>step===fields.length-1?done(p):setStep(step+1)}>{step===fields.length-1?'Build my Voyage':'Continue'} <span>→</span></button></div></section></div>}
function Field({k,p,update}){
  let labels={
    name:'Your name',
    grade:'Current grade',
    location:'Where are you based?',
    travel:'Willingness to travel',
    interests:'Interests (separate with commas)',
    major:'Intended major or career',
    types:'Opportunity types (separate with commas)',
    gpa:'GPA',
    score:'SAT / ACT score (optional)',
    skills:'Skills (separate with commas)',
    budget:'Maximum budget ($)',
    paid:'Paid / unpaid preference',
    format:'Format preference',
    dates:'Preferred dates'
  };

  let choices={
    grade:['9','10','11','12'],
    travel:['No','Yes, nearby','Yes, anywhere'],
    paid:['Paid','Unpaid','Either'],
    format:['Remote','In-person','Hybrid']
  };

  let isCommaField=['interests','types','skills'].includes(k);

  let val=isCommaField
    ? (Array.isArray(p[k]) ? p[k].join(', ') : (p[k] || ''))
    : (p[k] ?? '');

  if(choices[k]){
    return (
      <label>
        {labels[k]}
        <select
          value={p[k] ?? ''}
          onChange={e=>update(k,e.target.value)}
        >
          {choices[k].map(x=>(
            <option key={x} value={x}>{x}</option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label>
      {labels[k]}
      <input
        type="text"
        value={val}
        onChange={e=>update(k,e.target.value)}
        placeholder={labels[k]}
      />
    </label>
  );
}
function Sidebar({view,setView,profile,saved}){let links=[['Discover','⌕'],['Applications','▣'],['Roadmap','⌇'],['Saved','♡'],['Profile','⚙']];return <aside><div className="brand"><span className="brandmark">v</span><b>voyage</b></div><button className="profile" onClick={()=>setView('Profile')}><div className="avatar">{profile.name[0]}</div><div><b>{profile.name}</b><small>{profile.grade}th grade · {profile.location}</small></div><span>⌄</span></button><nav>{links.map(([v,i])=><button key={v} className={view===v?'active':''} onClick={()=>setView(v)}><span className="icon">{i}</span>{v==='Applications'?'My applications':v==='Roadmap'?'My roadmap':v==='Saved'?'Saved opportunities':v}{v==='Saved'&&<em>{saved}</em>}</button>)}</nav><div className="sidebar-bottom"><article><span>✦</span><div><b>Profile powers every match</b><small>Edit it anytime to refresh your results.</small></div></article></div></aside>}
function Topbar({setView,saved,profile}){
  const initial = profile?.name?.trim()?.charAt(0)?.toUpperCase() || 'A';

  return (
    <>
      <button className="mobile-brand" onClick={()=>setView('Discover')}>
        v voyage
      </button>

      <button className="saved-top" onClick={()=>setView('Saved')}>
        ♡ {saved}
      </button>

      <button className="top-avatar" onClick={()=>setView('Profile')}>
        {initial}
      </button>
    </>
  );
}
function Discover({profile,saved,setSaved,apps,setApps,setView,notify}){const[q,setQ]=useState('');const[type,setType]=useState('All');const[format,setFormat]=useState('Any format');const[selected,setSelected]=useState(DB[0]);const[tab,setTab]=useState('Recommended for You');const recommendations = useMemo(() =>
  [...DB]
    .map(o => ({
      ...o,
      match: score(o, profile)
    }))
    .sort((a, b) => b.match.value - a.match.value),
  [profile]
);const universe=useMemo(()=>DB.map(o=>({...o,match:score(o,profile)})),[profile]);const searched=q.trim()?parseSearch(q,universe):universe;const shown=(tab==='Recommended for You'?recommendations.filter(o=>o.match.value>=65):tab==='Search Results'?searched:universe).filter(o=>(type==='All'||o.type===type)&&(format==='Any format'||o.format===format));useEffect(()=>{if(!shown.find(o=>o.id===selected.id)&&shown[0])setSelected(shown[0])},[q,type,format,tab]);const toggle=id=>setSaved(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);return <><section className="welcome"><div><p className="overline">YOUR OPPORTUNITY HUB</p><h1>Good morning, {profile.name.split(' ')[0]} <span>✦</span></h1><p>Recommendations update automatically as your goals evolve.</p></div><button className="profilecard" onClick={()=>setView('Profile')}><div className="progress-ring"><b>✓</b></div><div><b>Your profile is live</b><small>Edit your details to refresh every match and suggestion.</small></div><span>→</span></button></section><section className="feature"><div className="feature-copy"><p className="overline">CURATED FOR YOU</p><h2>Top matches for your path</h2><p>{profile.interests.slice(0,2).join(' + ')} opportunities that fit your profile today.</p><button className="viewall" onClick={()=>{setTab('Recommended for You');document.getElementById('explore').scrollIntoView({behavior:'smooth'})}}>Explore matches <span>→</span></button></div><div className="matchcards">{recommendations.slice(0,3).map((o,i)=><button className={'match-card card-'+i} key={o.id} onClick={()=>{setSelected(o);document.getElementById('explore').scrollIntoView({behavior:'smooth'})}}><div className={'card-art '+o.tone}><span>{o.art}</span>{i===0&&<b>Top match</b>}</div><div className="card-body"><small>{o.org.toUpperCase()}</small><h3>{o.name}</h3><div><strong>{o.match.value}% match</strong><span>{o.location}</span></div></div></button>)}</div></section><section className="discover-row" id="explore"><div className="section-title"><div><p className="overline">EXPLORE</p><h2>Discover every opportunity</h2></div><button className="filterbtn" onClick={()=>{setType('All');setFormat('Any format');setQ('')}}>Reset filters</button></div><div className="searchrow"><div className="search"><span>⌕</span><input value={q} onChange={e=>{setQ(e.target.value);if(e.target.value)setTab('Search Results')}} placeholder="Try “free biology research programs near me”"/></div><select value={type} onChange={e=>setType(e.target.value)}><option>All</option>{[...new Set(DB.map(o=>o.type))].map(x=><option key={x}>{x}</option>)}</select><select value={format} onChange={e=>setFormat(e.target.value)}><option>Any format</option><option>Remote</option><option>In-person</option><option>Hybrid</option></select></div><div className="tabs">{['Recommended for You','Explore All','Search Results'].map(x=><button className={tab===x?'on':''} key={x} onClick={()=>setTab(x)}>{x}{x==='Search Results'&&q&&` (${searched.length})`}</button>)}</div><div className="browse-layout"><div><p className="resultnote">{tab==='Recommended for You'?'Ranked using your grade, interests, academics, location, budget, and preferences.':tab==='Search Results'?`AI-style query matching across the full opportunity database.`:'Browse broadly—these aren’t limited to your current profile.'}</p><div className="opportunity-list">{shown.length?shown.map(o=><Opportunity key={o.id} o={o} saved={saved.includes(o.id)} toggle={()=>toggle(o.id)} active={selected.id===o.id} choose={()=>setSelected(o)}/>):<div className="empty">No opportunities match those filters. Try a broader search or reset filters.</div>}</div></div><Detail o={selected} profile={profile} saved={saved.includes(selected.id)} toggle={()=>toggle(selected.id)} apps={apps} setApps={setApps} notify={notify}/></div></section><section className="planning"><div className="plan-illustration"><span>✦</span><div className="notebook">✎<i>☀</i></div></div><div><p className="overline">PLAN WITH CONFIDENCE</p><h2>See the bigger picture.</h2><p>Your roadmap starts with {profile.major || 'your goals'} and stays yours to shape.</p><button className="darkbtn" onClick={()=>setView('Roadmap')}>Explore your roadmap <span>→</span></button></div></section></>}
function Opportunity({o,saved,toggle,active,choose}){return <article className={'opp '+(active?'selected':'')} onClick={choose}><div className={'logo-tile '+o.tone}>{o.art}</div><div className="opp-main"><p>{o.org.toUpperCase()}</p><h3>{o.name}</h3><div className="tags">{o.topics.slice(0,2).map(t=><span key={t}>{t}</span>)}</div><div className="meta"><span>◷ {o.deadline}</span><span>⌖ {o.location}</span><span>{o.cost?'$'+o.cost:'Free'}</span></div></div><div className="match"><b>{o.match?.value||'—'}%</b><small>match</small></div><button className={'heart '+(saved?'hearted':'')} aria-label="Save opportunity" onClick={e=>{e.stopPropagation();toggle()}}>{saved?'♥':'♡'}</button></article>}
function Detail({o,profile,saved,toggle,apps,setApps,notify}){let m=score(o,profile),tracked=apps.find(a=>a.id===o.id);const add=()=>{if(!tracked){setApps([...apps,{id:o.id,status:'Not started',tasks:['Application form','Resume'].map((name,i)=>({id:Date.now()+i,name,done:false}))}]);notify('Added to your application tracker')}else notify('Already in your application tracker')};return <aside className="detail"><button className={'detail-save '+(saved?'hearted':'')} onClick={toggle}>{saved?'♥ Saved':'♡ Save'}</button><div className={'detail-art '+o.tone}><span>{o.art}</span></div><p className="overline">{o.org.toUpperCase()}</p><h2>{o.name}</h2><p className="detail-description">{o.description}</p><div className="detail-match"><b>{m.value}% <small>match</small></b><div><strong>Why it fits you</strong><p>{m.why.slice(0,3).join(', ')}.</p></div></div><div className="info-grid"><div><small>ELIGIBILITY</small><b>Grades {o.grades.join('–')}</b></div><div><small>DEADLINE</small><b>{o.deadline}</b></div><div><small>DATES</small><b>{o.dates}</b></div><div><small>FORMAT</small><b>{o.format}</b></div><div><small>LOCATION</small><b>{o.location}</b></div><div><small>COST</small><b>{o.cost?'$'+o.cost:'Free'}</b></div></div><p className="requirements"><b>Requirements: </b>{o.requirements}</p><a className="apply" href={o.url} target="_blank" rel="noreferrer">Application website <span>↗</span></a><button className="track" onClick={add}>{tracked?'✓ In application tracker':'+ Add to application tracker'}</button>{m.value<82&&<Candidate o={o} profile={profile} m={m}/>}</aside>}
function Candidate({o,profile,m}){const[open,setOpen]=useState(false);let gaps=[];if(!o.grades.includes(+profile.grade))gaps.push(`grade eligibility (this opportunity currently serves grades ${o.grades.join('–')})`);if(+profile.gpa<o.minGpa)gaps.push('the academic profile typically expected');let missing=o.skills.filter(x=>!profile.skills.some(s=>s.toLowerCase().includes(x.toLowerCase())));if(missing.length)gaps.push(`${missing.join(' and ')} evidence`);return <div className="ai-box"><span>✦</span><div><b>Become a stronger candidate</b><p>Specific next steps based on your profile and this opportunity.</p><button onClick={()=>setOpen(!open)}>{open?'Hide advice':'Ask Voyage AI'} <span>→</span></button></div>{open&&<div className="ai-answer"><b>Your current strengths:</b> {m.why.slice(0,2).join(' and ')}.<br/><b>What is holding this match back:</b> {gaps.length?gaps.join(', '):'this is a selective program with a narrow fit.'}<br/><b>Next 3–6 months:</b> {missing.length?`build a small ${missing[0]} project and document it in a portfolio; `:''}ask a teacher or local organization about a related project, then use the results in your application essay.</div>}</div>}
function Applications({apps,setApps,saved,profile,notify}){let entries=apps.map(a=>({...a,o:DB.find(o=>o.id===a.id)})).filter(x=>x.o);const addSaved=()=>{let o=DB.find(o=>saved.find(id=>id===o.id)&&!apps.find(a=>a.id===o.id));if(o){setApps([...apps,{id:o.id,status:'Not started',tasks:[]}]);notify(`${o.name} added to tracker`)}else notify('Save an opportunity first, or choose one from Explore')};const toggleTask=(aid,tid)=>setApps(apps.map(a=>a.id!==aid?a:{...a,tasks:a.tasks.map(t=>t.id===tid?{...t,done:!t.done}:t)}));const addTask=(aid)=>{let name=prompt('Task name (e.g. Request transcript)');if(name)setApps(apps.map(a=>a.id!==aid?a:{...a,tasks:[...a.tasks,{id:Date.now(),name,done:false}]}))};return <div className="page"><p className="overline">APPLICATION DASHBOARD</p><h1>Keep your momentum going.</h1><p className="intro">Track applications, deadlines, and every small task that gets you to submit.</p><div className="stats"><article><b>{entries.length}</b><span>Applications in progress</span></article><article><b>{entries.reduce((n,a)=>n+a.tasks.filter(t=>!t.done).length,0)}</b><span>Tasks to complete</span></article><article><b>{saved.length}</b><span>Saved opportunities</span></article></div><div className="dash-grid"><section className="application-table"><div className="table-title"><h2>Your applications</h2><button onClick={addSaved}>+ Add saved opportunity</button></div>{entries.length?entries.map(a=><article className="app-row" key={a.id}><div className={'mini-logo '+a.o.tone}>{a.o.art}</div><div><b>{a.o.name}</b><small>{a.o.org}</small></div><select value={a.status} onChange={e=>setApps(apps.map(x=>x.id===a.id?{...x,status:e.target.value}:x))}>{['Not started','In progress','Ready to submit','Submitted'].map(x=><option key={x}>{x}</option>)}</select><span>Deadline <b>{a.o.deadline}</b></span><button onClick={()=>setApps(apps.filter(x=>x.id!==a.id))} title="Remove">×</button><div className="tasks"><b>Tasks</b>{a.tasks.map(t=><label key={t.id}><input type="checkbox" checked={t.done} onChange={()=>toggleTask(a.id,t.id)}/><span>{t.name}</span></label>)}<button onClick={()=>addTask(a.id)}>+ Add task</button></div></article>):<div className="empty">Your tracker is clear. Add an opportunity from Explore or from your saved list.</div>}</section><section className="deadline-card"><p className="overline">UP NEXT</p><h2>{entries[0]?.o.name||'Start your list'}</h2><b className="date">{entries[0]?.o.deadline||'—'}</b><p>{entries.length?'Break the work into tasks and keep the deadline visible.':'Save an opportunity to start tracking its deadline and application tasks.'}</p></section></div></div>}
const buildRoadmap=p=>{let focus=p.major||p.interests[0]||'your interests';let stage=+p.grade;return ['Grade 9','Summer 9','Grade 10','Summer 10','Grade 11','Summer 11','Grade 12'].map((slot,i)=>({slot,items:(i===Math.min(6,Math.max(0,(stage-9)*2)))?[{id:Date.now()+i,title:`Build a ${focus} project`,kind:'Personal project'}]:i>=(stage-9)*2?[{id:Date.now()+i,title:i%2?`Explore a ${focus} summer opportunity`:`Develop ${focus} skills`,kind:i%2?'Summer program':'Skill goal'}]:[]}))};
function Roadmap({profile,setView,roadmap,setRoadmap,notify}){let update=(slot,fn)=>setRoadmap(roadmap.map(c=>c.slot!==slot?c:{...c,items:fn(c.items)}));let add=slot=>{let title=prompt(`Add a goal to ${slot}`);if(title)update(slot,items=>[...items,{id:Date.now(),title,kind:'Custom goal'}])};let edit=(slot,item)=>{let title=prompt('Edit milestone',item.title);if(title!==null)update(slot,items=>items.map(x=>x.id===item.id?{...x,title}:x))};let regenerate=()=>{if(confirm('Add refreshed suggestions from your updated profile? Your custom items will stay.')){let fresh=buildRoadmap(profile);setRoadmap(roadmap.map((c,i)=>({...c,items:[...c.items,...fresh[i].items.filter(n=>!c.items.some(x=>x.title===n.title))]})));notify('Fresh profile-based suggestions added')}};return <div className="page roadmap"><p className="overline">YOUR FOUR-YEAR ROADMAP</p><h1>A calmer way to plan ahead.</h1><p className="intro">A personal starting point for {profile.major||profile.interests[0]}, with room for every goal that matters to you.</p><div className="road-head"><button className="addgoal" onClick={regenerate}>↻ Update suggestions</button><button className="outline" onClick={()=>setView('Profile')}>Edit profile</button></div><div className="road-grid">{roadmap.map(col=><article key={col.slot}><div className="yearnum">{col.slot.replace('Grade ','').replace('Summer ','S')}</div><p className="overline">{col.slot.toUpperCase()}</p><div className="road-items">{col.items.map(item=><div className="road-item" key={item.id}><span>✦</span><div><b>{item.title}</b><small>{item.kind}</small></div><button onClick={()=>edit(col.slot,item)}>✎</button><button onClick={()=>update(col.slot,x=>x.filter(a=>a.id!==item.id))}>×</button></div>)}</div><button className="add-item" onClick={()=>add(col.slot)}>+ Add to this stage</button></article>)}</div></div>}
function Saved({saved,setSaved,profile,setView,apps,setApps,notify}){let items=DB.filter(o=>saved.includes(o.id)).map(o=>({...o,match:score(o,profile)}));return <div className="page"><p className="overline">YOUR LIST</p><h1>Saved opportunities</h1><p className="intro">Keep the possibilities you want to revisit, compare, or add to your tracker.</p>{items.length?<div className="saved-grid">{items.map(o=><div key={o.id}><Opportunity o={o} saved toggle={()=>setSaved(saved.filter(x=>x!==o.id))} choose={()=>{}}/><button className="saved-track" onClick={()=>{if(!apps.some(a=>a.id===o.id)){setApps([...apps,{id:o.id,status:'Not started',tasks:[]}]);notify('Added to application tracker')}setView('Applications')}}>Add to tracker →</button></div>)}</div>:<div className="empty"><p>No saved opportunities yet.</p><button className="darkbtn" onClick={()=>setView('Discover')}>Explore opportunities →</button></div>}</div>}
function Profile({profile,setProfile,notify}){const[draft,setDraft]=useState(profile);useEffect(()=>setDraft(profile),[profile]);return <div className="page profile-page"><p className="overline">YOUR PERSONALIZATION ENGINE</p><h1>Edit your profile</h1><p className="intro">Saving changes refreshes matches, explanations, recommendations, and your next roadmap update immediately.</p><div className="profile-form">{['name','grade','interests','major','gpa','score','skills','location','travel','budget','paid','format','dates','types'].map(k=><Field key={k} k={k} p={draft} update={(a,b)=>setDraft({...draft,[a]:b})}/>)}</div><button className="darkbtn save-profile" onClick={()=>{
  const cleaned={
    ...draft,
    interests:Array.isArray(draft.interests)
      ? draft.interests
      : draft.interests.split(',').map(x=>x.trim()).filter(Boolean),

    skills:Array.isArray(draft.skills)
      ? draft.skills
      : draft.skills.split(',').map(x=>x.trim()).filter(Boolean),

    types:Array.isArray(draft.types)
      ? draft.types
      : draft.types.split(',').map(x=>x.trim()).filter(Boolean)
  };

  setProfile(cleaned);
  notify('Profile saved — your recommendations are refreshed');
}}>Save and refresh my matches <span>→</span></button></div>}
function Footer(){return <footer><b><span className="brandmark">v</span> voyage</b><span>Made to make the next step feel possible.</span><div><a href="#explore">Explore</a><a href="https://mites.mit.edu/discover-mites/apply-to-mites/" target="_blank" rel="noreferrer">Official programs</a></div></footer>}
createRoot(document.getElementById('root')).render(<App/>);
