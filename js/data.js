const careerPilotData = {
  user: {
    name: 'Aarav Mehta',
    email: 'aarav@careerpilot.ai',
    college: 'VIT Vellore',
    degree: 'B.Tech',
    branch: 'Computer Science',
    graduationYear: '2027',
    targetCompany: 'Google',
    targetRole: 'Software Engineer',
    skills: ['JavaScript', 'React', 'Node.js', 'DBMS', 'DSA'],
    avatar: 'AM'
  },
  companies: [
    {
      id: 'google',
      name: 'Google',
      logo: 'G',
      industry: 'Technology',
      difficulty: 'Hard',
      rounds: 5,
      roles: ['Software Engineer', 'Data Analyst', 'Product Engineer'],
      progress: 82,
      description: 'Global technology company focused on search, cloud, and AI products.',
      eligibility: ['CGPA >= 7.5', 'Strong DSA fundamentals', 'Good communication'],
      skills: ['DSA', 'System Design', 'Communication', 'OOP'],
      selectionProcess: [
        { name: 'Online Assessment', difficulty: 'Hard', duration: '90 mins', description: 'Aptitude, coding and DSA questions.' },
        { name: 'Technical Interview', difficulty: 'Hard', duration: '60 mins', description: 'Core CS and coding round.' },
        { name: 'Project / Managerial', difficulty: 'Medium', duration: '45 mins', description: 'Resume deep dive and architecture discussion.' },
        { name: 'HR Interview', difficulty: 'Easy', duration: '30 mins', description: 'Behavioral and motivation questions.' }
      ],
      experiences: [
        { round: 'Technical', difficulty: 'Medium', questions: ['Explain hashing', 'What is memory hierarchy?', 'Complexity of BFS'], experience: 'I focused on system design basics and communicated my reasoning clearly.', preparationTips: ['Practice DSA thoroughly', 'Revise OS and DBMS basics'] },
        { round: 'HR', difficulty: 'Easy', questions: ['Tell me about yourself', 'Why Google?'], experience: 'Balanced confidence and clarity; answered behavioral questions with examples.', preparationTips: ['Prepare stories', 'Be intentional about goals'] }
      ],
      faqs: [
        { q: 'What is the interview format?', a: 'Usually online assessment, one coding round, and a mix of technical and HR interviews.' },
        { q: 'Is system design required?', a: 'For senior roles and some interviews, yes. For campus roles, fundamentals matter the most.' }
      ]
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      logo: 'M',
      industry: 'Software',
      difficulty: 'Medium',
      rounds: 4,
      roles: ['SDE', 'Data Engineer', 'Product Engineer'],
      progress: 76,
      description: 'Enterprise software company with cloud, productivity, and AI products.',
      eligibility: ['CGPA >= 7.0', 'Good problem-solving'],
      skills: ['DSA', 'Operating Systems', 'OOP', 'Networking'],
      selectionProcess: [
        { name: 'Aptitude', difficulty: 'Medium', duration: '45 mins', description: 'Logical reasoning and aptitude' },
        { name: 'Coding', difficulty: 'Medium', duration: '75 mins', description: 'Array and graph problems' },
        { name: 'Technical', difficulty: 'Medium', duration: '60 mins', description: 'DBMS and OS questions' },
        { name: 'HR', difficulty: 'Easy', duration: '20 mins', description: 'Motivation and culture fit' }
      ],
      experiences: [
        { round: 'Coding', difficulty: 'Medium', questions: ['Two sum', 'Rotate matrix', 'Valid parentheses'], experience: 'The round was fast but fair. I focused on writing clean code and explaining approach.', preparationTips: ['Practice DS patterns', 'Explain time complexity'] }
      ],
      faqs: [
        { q: 'How to prepare for Microsoft?', a: 'Focus on arrays, strings, trees, and problem explanation clarity.' }
      ]
    },
    {
      id: 'tcs',
      name: 'TCS',
      logo: 'T',
      industry: 'IT Services',
      difficulty: 'Easy',
      rounds: 4,
      roles: ['System Engineer', 'Software Engineer', 'Developer'],
      progress: 66,
      description: 'Tier 1 IT company with large campus recruitment programs and broad skill requirements.',
      eligibility: ['CGPA >= 6.0', 'Eligible graduation year'],
      skills: ['Aptitude', 'Logical Reasoning', 'Java', 'Communication'],
      selectionProcess: [
        { name: 'Aptitude', difficulty: 'Easy', duration: '40 mins', description: 'Quantitative and reasoning ability' },
        { name: 'Coding', difficulty: 'Medium', duration: '50 mins', description: 'Basic programming questions' },
        { name: 'Technical', difficulty: 'Easy', duration: '30 mins', description: 'Core subjects and basics' },
        { name: 'HR', difficulty: 'Easy', duration: '20 mins', description: 'Behavioral basics' }
      ],
      experiences: [
        { round: 'Technical', difficulty: 'Easy', questions: ['OOP concepts', 'SQL basics', 'DBMS normalization'], experience: 'The interviewer wanted strong basics and confidence.', preparationTips: ['Revise core subjects', 'Be ready to answer basics quickly'] }
      ],
      faqs: [
        { q: 'Is coding expected?', a: 'Yes, but for TCS it is often easier than high-end product companies.' }
      ]
    },
    {
      id: 'amazon',
      name: 'Amazon',
      logo: 'A',
      industry: 'E-commerce',
      difficulty: 'Hard',
      rounds: 5,
      roles: ['SDE 1', 'Business Analyst', 'Cloud Engineer'],
      progress: 71,
      description: 'Cloud and commerce giant with a strong focus on customer obsession and problem-solving.',
      eligibility: ['CGPA >= 7.5', 'Strong coding skills'],
      skills: ['DSA', 'System Design', 'Leadership', 'Communication'],
      selectionProcess: [
        { name: 'Online Assessment', difficulty: 'Hard', duration: '90 mins', description: 'Coders, aptitude and behavioral' },
        { name: 'Coding Round', difficulty: 'Hard', duration: '60 mins', description: 'Two medium-hard coding questions' },
        { name: 'Technical', difficulty: 'Hard', duration: '60 mins', description: 'Problem solving and system understanding' },
        { name: 'Bar Raiser', difficulty: 'Hard', duration: '45 mins', description: 'Leadership and business judgement' },
        { name: 'HR', difficulty: 'Easy', duration: '15 mins', description: 'Culture and motivation' }
      ],
      experiences: [
        { round: 'Coding', difficulty: 'Hard', questions: ['K closest points', 'Top K frequent elements', 'Design parking lot'], experience: 'Clear thinking and trade-offs mattered as much as correctness.', preparationTips: ['Practice backtracking and graphs', 'Explain algorithm choices'] }
      ],
      faqs: [
        { q: 'Does Amazon emphasize leadership?', a: 'Yes, especially in later rounds and behavior-based questions.' }
      ]
    },
    {
      id: 'infosys',
      name: 'Infosys',
      logo: 'I',
      industry: 'IT Services',
      difficulty: 'Medium',
      rounds: 4,
      roles: ['System Engineer', 'Specialist Programmer'],
      progress: 69,
      description: 'Performance-driven IT services company with structured campus recruitment processes.',
      eligibility: ['CGPA >= 6.0', 'Good aptitude'],
      skills: ['Aptitude', 'Java', 'DBMS', 'Communication'],
      selectionProcess: [
        { name: 'Aptitude', difficulty: 'Medium', duration: '45 mins', description: 'Reasoning and quant' },
        { name: 'Coding', difficulty: 'Easy', duration: '30 mins', description: 'Basic coding challenge' },
        { name: 'Technical', difficulty: 'Medium', duration: '45 mins', description: 'Core CS fundamentals' },
        { name: 'HR', difficulty: 'Easy', duration: '20 mins', description: 'Intro and motivations' }
      ],
      experiences: [
        { round: 'Technical', difficulty: 'Medium', questions: ['Explain OOP', 'Difference between list and tuple', 'What is SQL?'], experience: 'The round focused on clarity and confidence with fundamentals.', preparationTips: ['Strengthen core concepts', 'Practice verbal explanation'] }
      ],
      faqs: [
        { q: 'Does Infosys focus on coding?', a: 'It includes basics, but a strong aptitude and fundamentals base helps.' }
      ]
    },
    {
      id: 'accenture',
      name: 'Accenture',
      logo: 'AC',
      industry: 'Consulting',
      difficulty: 'Medium',
      rounds: 3,
      roles: ['Associate Software Engineer', 'Consultant'],
      progress: 72,
      description: 'Consulting and technology enterprise with emphasis on practical problem-solving and communication.',
      eligibility: ['CGPA >= 6.5', 'Strong communication'],
      skills: ['Communication', 'Java', 'DBMS', 'SQL'],
      selectionProcess: [
        { name: 'Cognitive Assessment', difficulty: 'Medium', duration: '45 mins', description: 'Aptitude and logical reasoning' },
        { name: 'Technical', difficulty: 'Medium', duration: '45 mins', description: 'Foundations and coding basics' },
        { name: 'HR', difficulty: 'Easy', duration: '20 mins', description: 'Behavioral and role fit' }
      ],
      experiences: [
        { round: 'HR', difficulty: 'Easy', questions: ['Why Accenture?', 'Tell me about a challenge'], experience: 'Communication and structured answers helped a lot.', preparationTips: ['Prepare STAR stories', 'Outline your resume well'] }
      ],
      faqs: [
        { q: 'How much does communication matter?', a: 'A lot. Consulting-style roles value clear articulation and examples.' }
      ]
    }
  ],
  questions: [
    { id: 1, company: 'Google', category: 'DBMS', topic: 'Normalization', difficulty: 'Medium', time: '3 min', question: 'What is normalization in DBMS? Explain the normal forms and why they are important.', answer: 'Normalization is the process of organizing data to reduce redundancy and improve integrity. It uses normal forms like 1NF, 2NF, 3NF, and BCNF to ensure consistency.', explanation: 'Normalization eliminates anomalies by reducing redundant data and structuring tables around entity relationships.', companyId: 'google' },
    { id: 2, company: 'Microsoft', category: 'DSA', topic: 'Binary Search', difficulty: 'Medium', time: '5 min', question: 'Explain the time complexity of binary search and when it is not applicable.', answer: 'Binary search runs in O(log n) time because it halves the search space each step. It requires sorted data; it is not applicable to unsorted collections.', explanation: 'Binary search depends on sorted order and random access for efficient divide-and-conquer search.', companyId: 'microsoft' },
    { id: 3, company: 'Amazon', category: 'OS', topic: 'Process vs Thread', difficulty: 'Medium', time: '4 min', question: 'Differentiate between a process and a thread.', answer: 'A process is an independent execution unit with its own memory space, while a thread is a lightweight execution unit that shares the process memory.', explanation: 'Threads are efficient for concurrent tasks within a process but require careful synchronization.', companyId: 'amazon' },
    { id: 4, company: 'TCS', category: 'SQL', topic: 'Joins', difficulty: 'Easy', time: '3 min', question: 'What is the difference between INNER JOIN and LEFT JOIN in SQL?', answer: 'INNER JOIN returns matching rows from both tables, while LEFT JOIN returns all rows from the left table and matched rows from the right table.', explanation: 'LEFT JOIN keeps all records from the left side even when there is no match, which is useful for complete dataset retention.', companyId: 'tcs' },
    { id: 5, company: 'Infosys', category: 'OOP', topic: 'Polymorphism', difficulty: 'Easy', time: '3 min', question: 'What is polymorphism in OOP? Provide a simple example.', answer: 'Polymorphism allows objects of different classes to be treated via the same interface, usually through method overriding or overloading.', explanation: 'It promotes flexibility and extensibility by allowing shared interfaces across multiple implementations.', companyId: 'infosys' },
    { id: 6, company: 'Accenture', category: 'Projects', topic: 'Architecture', difficulty: 'Medium', time: '6 min', question: 'How would you explain your final year project to a technical interviewer?', answer: 'I would explain the problem, solution architecture, tech stack, trade-offs, and how I validated the outcome with metrics or testing.', explanation: 'A strong project explanation links business need, technical choices, and measurable impact.', companyId: 'accenture' },
    { id: 7, company: 'Google', category: 'HR', topic: 'Behavioral', difficulty: 'Easy', time: '2 min', question: 'Describe a time you handled conflict in a team.', answer: 'I addressed the issue by listening to all perspectives, focusing on the objective, and collaborating on a clear resolution.', explanation: 'Behavioral answers are strongest when they show initiative, maturity, and outcome.', companyId: 'google' },
    { id: 8, company: 'Microsoft', category: 'DSA', topic: 'Stack', difficulty: 'Medium', time: '5 min', question: 'What are the applications of a stack in programming?', answer: 'Stacks are used for function call management, expression evaluation, backtracking, undo operations, and parsing algorithms.', explanation: 'The LIFO behavior of a stack makes it ideal for nested or recursive operations.', companyId: 'microsoft' }
  ],
  interviewQuestions: [
    'Tell me about yourself.',
    'Explain your final-year project.',
    'What is normalization in DBMS?',
    'Explain the difference between a process and a thread.',
    'What is the time complexity of binary search?'
  ],
  roadmap: [
    { day: 'Day 1', title: 'DBMS Revision', detail: 'Normalization and transactions' },
    { day: 'Day 2', title: 'SQL Practice', detail: 'Joins, subqueries, indexing' },
    { day: 'Day 3', title: 'DSA Practice', detail: 'Arrays, trees, graphs' },
    { day: 'Day 4', title: 'OOP Revision', detail: 'Inheritance, abstraction, encapsulation' },
    { day: 'Day 5', title: 'Technical Mock Interview', detail: 'Mock round with AI interviewer' }
  ]
};

window.careerPilotData = careerPilotData;
