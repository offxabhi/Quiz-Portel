// Initial Database Seed Data (stored in LocalStorage if not present)
const DEFAULT_QUIZZES = [
    {
        id: "quiz-cs",
        title: "Computer Science & Web Architecture",
        subject: "Computer Science",
        duration: 15, // minutes
        questions: [
            {
                text: "What is the primary function of an activation function in a neural network?",
                options: [
                    "To normalize the inputs of the network",
                    "To introduce non-linearity into the network",
                    "To speed up the backpropagation phase",
                    "To prevent overfitting by dropping neurons randomly"
                ],
                correct: 1
            },
            {
                text: "Which of the following algorithm designs is primarily used by Decision Trees?",
                options: [
                    "Divide and conquer",
                    "Greedy search (recursive partitioning)",
                    "Dynamic programming",
                    "Random walk optimization"
                ],
                correct: 1
            },
            {
                text: "What does the term 'temperature' control in generative language models?",
                options: [
                    "The GPU cooling requirement during inference",
                    "The size of the context window context length",
                    "The randomness and creativity of generated text output",
                    "The learning rate decay velocity"
                ],
                correct: 2
            },
            {
                text: "Which browser security policy prevents a malicious script on one page from obtaining access to sensitive data on another?",
                options: [
                    "Content Security Policy (CSP)",
                    "Cross-Origin Resource Sharing (CORS)",
                    "Same-Origin Policy (SOP)",
                    "Strict-Transport-Security (HSTS)"
                ],
                correct: 2
            },
            {
                text: "What is the primary benefit of HTTP/2 multiplexing?",
                options: [
                    "It encrypts request headers using a faster algorithm",
                    "It allows multiple request and response messages to be sent concurrently on a single TCP connection",
                    "It serves content from the nearest CDN node automatically",
                    "It compresses media assets to half their original payload size"
                ],
                correct: 1
            },
            {
                text: "How does a JWT (JSON Web Token) guarantee that its signature is valid?",
                options: [
                    "The payload is completely encrypted and readable only by the server",
                    "It uses a browser-level cookie flag that prevents modification",
                    "It includes a cryptographic signature verified with a secret key",
                    "It changes its token ID on every single API request"
                ],
                correct: 2
            },
            {
                text: "Which of the following database isolation levels offers the highest degree of protection against concurrency anomalies?",
                options: [
                    "Read Committed",
                    "Repeatable Read",
                    "Serializable",
                    "Snapshot Isolation"
                ],
                correct: 2
            },
            {
                text: "In Git, what is the effect of running a 'git reset --soft HEAD~1' command?",
                options: [
                    "It deletes the last commit and discards all changes in the working directory",
                    "It undoes the last commit but keeps the changes staged in your index",
                    "It undoes the last commit and moves changes to the unstaged working directory",
                    "It creates a new commit that reverts the changes of the last commit"
                ],
                correct: 1
            },
            {
                text: "Which hashing algorithm is widely recommended for securely storing user passwords?",
                options: [
                    "SHA-256",
                    "bcrypt",
                    "MD5",
                    "SHA-1"
                ],
                correct: 1
            },
            {
                text: "In networking, what is the role of the Address Resolution Protocol (ARP)?",
                options: [
                    "To map an IP address to a physical MAC address",
                    "To assign dynamic IP addresses to devices on a local area network",
                    "To translate domain names into routing coordinates",
                    "To manage session handshakes between remote web hosts"
                ],
                correct: 0
            },
            {
                text: "What is the primary objective of the Domain Name System Security Extensions (DNSSEC)?",
                options: [
                    "To encrypt all DNS queries to ensure student privacy",
                    "To authenticate DNS records and prevent spoofing/poisoning attacks",
                    "To load-balance DNS lookups across distributed web clusters",
                    "To block access to malicious websites at the domain level"
                ],
                correct: 1
            },
            {
                text: "Which TCP/IP protocol layer is responsible for routing data packets across multiple networks?",
                options: [
                    "Transport Layer",
                    "Network (Internet) Layer",
                    "Data Link Layer",
                    "Application Layer"
                ],
                correct: 1
            },
            {
                text: "What does the 'S' in SOLID design principles represent?",
                options: [
                    "Scope isolation Principle",
                    "Single Responsibility Principle",
                    "System Segregation Principle",
                    "State Synchronization Principle"
                ],
                correct: 1
            },
            {
                text: "Which scheduling algorithm in Operating Systems can cause starvation for low priority processes?",
                options: [
                    "Round Robin",
                    "First-Come, First-Served",
                    "Priority Scheduling",
                    "Shortest Job First"
                ],
                correct: 2
            },
            {
                text: "What is the time complexity of searching in a balanced Binary Search Tree (BST)?",
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                correct: 1
            }
        ]
    },
    {
        id: "quiz-math",
        title: "Mathematics & Analytical Calculus",
        subject: "Mathematics",
        duration: 15,
        questions: [
            {
                text: "What is the derivative of f(x) = ln(x) with respect to x?",
                options: [
                    "e^x",
                    "1/x",
                    "x",
                    "ln(x)/x"
                ],
                correct: 1
            },
            {
                text: "Which mathematical constant is defined as the limit of (1 + 1/n)^n as n approaches infinity?",
                options: [
                    "Pi (π)",
                    "Euler's number (e)",
                    "The Golden Ratio (φ)",
                    "Euler-Mascheroni constant (γ)"
                ],
                correct: 1
            },
            {
                text: "What is the value of the definite integral of x^2 from 0 to 3?",
                options: [
                    "9",
                    "27",
                    "3",
                    "6"
                ],
                correct: 0
            },
            {
                text: "In linear algebra, if a square matrix has a determinant of 0, what is true about the matrix?",
                options: [
                    "It is invertible",
                    "It is singular (non-invertible)",
                    "It is symmetric",
                    "Its eigenvalues are all positive"
                ],
                correct: 1
            },
            {
                text: "What is the value of i^4, where i is the imaginary unit?",
                options: [
                    "i",
                    "-1",
                    "1",
                    "-i"
                ],
                correct: 2
            },
            {
                text: "What is the sum of the infinite geometric series: 1 + 1/2 + 1/4 + 1/8 + ...?",
                options: [
                    "1.5",
                    "2",
                    "Infinity",
                    "1.75"
                ],
                correct: 1
            },
            {
                text: "Which of the following is the general equation of a circle with center (h, k) and radius r?",
                options: [
                    "(x-h)^2 - (y-k)^2 = r^2",
                    "(x-h)^2 + (y-k)^2 = r^2",
                    "y - k = r(x - h)",
                    "x^2/h^2 + y^2/k^2 = r^2"
                ],
                correct: 1
            },
            {
                text: "What is the value of log10(1000)?",
                options: [
                    "1",
                    "2",
                    "3",
                    "10"
                ],
                correct: 2
            },
            {
                text: "Which theorem states that for any right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides?",
                options: [
                    "Fermat's Last Theorem",
                    "Euler's Theorem",
                    "Pythagorean Theorem",
                    "Mean Value Theorem"
                ],
                correct: 2
            },
            {
                text: "What is the limit of (sin x) / x as x approaches 0?",
                options: [
                    "0",
                    "1",
                    "Infinity",
                    "Undefined"
                ],
                correct: 1
            },
            {
                text: "What is the probability of flipping a fair coin 3 times and getting exactly 2 heads?",
                options: [
                    "3/8",
                    "1/2",
                    "1/4",
                    "5/8"
                ],
                correct: 0
            },
            {
                text: "How many degrees are in a radian?",
                options: [
                    "180/π",
                    "π/180",
                    "360/π",
                    "90/π"
                ],
                correct: 0
            },
            {
                text: "In statistics, what represents the middle value in a sorted data set?",
                options: [
                    "Mean",
                    "Mode",
                    "Median",
                    "Variance"
                ],
                correct: 2
            },
            {
                text: "What is the sum of the interior angles of a regular hexagon?",
                options: [
                    "360 degrees",
                    "540 degrees",
                    "720 degrees",
                    "900 degrees"
                ],
                correct: 2
            },
            {
                text: "What is the value of the mathematical expression 5! (factorial of 5)?",
                options: [
                    "25",
                    "60",
                    "120",
                    "24"
                ],
                correct: 2
            }
        ]
    },
    {
        id: "quiz-science",
        title: "General Science & Thermodynamics",
        subject: "Science",
        duration: 15,
        questions: [
            {
                text: "What is the second law of thermodynamics?",
                options: [
                    "Energy cannot be created or destroyed",
                    "The entropy of an isolated system always increases over time",
                    "Absolute zero cannot be reached in a finite number of steps",
                    "Force equals mass times acceleration"
                ],
                correct: 1
            },
            {
                text: "Which component of the cell is primarily responsible for generating chemical energy in the form of ATP?",
                options: [
                    "Nucleus",
                    "Ribosome",
                    "Mitochondria",
                    "Golgi Apparatus"
                ],
                correct: 2
            },
            {
                text: "What is the chemical formula for Ozone?",
                options: [
                    "O2",
                    "O3",
                    "CO2",
                    "H2O"
                ],
                correct: 1
            },
            {
                text: "Which element has the atomic number 1 on the periodic table?",
                options: [
                    "Helium",
                    "Hydrogen",
                    "Lithium",
                    "Carbon"
                ],
                correct: 1
            },
            {
                text: "What is the speed of light in a vacuum, approximately?",
                options: [
                    "150,000 km/s",
                    "300,000 km/s",
                    "450,000 km/s",
                    "600,000 km/s"
                ],
                correct: 1
            },
            {
                text: "Which gas is most abundant in the Earth's atmosphere?",
                options: [
                    "Oxygen",
                    "Nitrogen",
                    "Carbon Dioxide",
                    "Argon"
                ],
                correct: 1
            },
            {
                text: "What is the acceleration due to gravity on Earth, approximately?",
                options: [
                    "9.8 m/s^2",
                    "8.9 m/s^2",
                    "10.8 m/s^2",
                    "7.8 m/s^2"
                ],
                correct: 0
            },
            {
                text: "What type of chemical bond involves the sharing of electron pairs between atoms?",
                options: [
                    "Ionic bond",
                    "Covalent bond",
                    "Hydrogen bond",
                    "Metallic bond"
                ],
                correct: 1
            },
            {
                text: "Which organ in the human body is primarily responsible for filtering blood?",
                options: [
                    "Heart",
                    "Liver",
                    "Kidney",
                    "Lungs"
                ],
                correct: 2
            },
            {
                text: "What is the pH level of pure water at room temperature?",
                options: [
                    "5",
                    "7",
                    "9",
                    "0"
                ],
                correct: 1
            },
            {
                text: "What is the primary source of energy for the Earth's climate system?",
                options: [
                    "Geothermal heat",
                    "Lunar gravity",
                    "Solar radiation",
                    "Wind currents"
                ],
                correct: 2
            },
            {
                text: "Which scientist is famous for formulating the laws of motion and universal gravitation?",
                options: [
                    "Albert Einstein",
                    "Galileo Galilei",
                    "Isaac Newton",
                    "Nikola Tesla"
                ],
                correct: 2
            },
            {
                text: "What state of matter exists at extremely high temperatures where electrons are stripped from nuclei?",
                options: [
                    "Gas",
                    "Plasma",
                    "Bose-Einstein Condensate",
                    "Liquid"
                ],
                correct: 1
            },
            {
                text: "Which planet in our solar system is known as the Red Planet?",
                options: [
                    "Venus",
                    "Mars",
                    "Jupiter",
                    "Saturn"
                ],
                correct: 1
            },
            {
                text: "What is the unit of electric resistance?",
                options: [
                    "Volt",
                    "Ampere",
                    "Ohm",
                    "Watt"
                ],
                correct: 2
            }
        ]
    }
];

const DEFAULT_USERS = [
    { email: "student@example.com", password: "password", name: "Alice Johnson", role: "student" },
    { email: "instructor@example.com", password: "password", name: "Dr. Sarah Jenkins", role: "instructor" }
];

const DEFAULT_ATTEMPTS = [
    {
        id: "attempt-1",
        studentName: "John Doe",
        quizTitle: "Computer Science & Web Architecture",
        score: 66,
        totalQuestions: 15,
        correctAnswers: 10,
        warnings: 1,
        complianceStatus: "Flagged",
        timestamp: "2026-06-05T10:15:30.000Z",
        durationText: "08:45",
        logs: [
            { time: "10:15:30", type: "system", text: "Secure session initiated." },
            { time: "10:15:32", type: "system", text: "Fullscreen mode activated." },
            { time: "10:20:15", type: "warning", text: "Clipboard Intercept: Blocked illegal COPY command." },
            { time: "10:24:15", type: "system", text: "Session submitted." }
        ]
    }
];

// App State
let state = {
    users: [],
    quizzes: [],
    attempts: [],
    currentUser: null,
    authMode: 'login',
    authRole: 'student',
    
    // Quiz taking state
    activeQuiz: null,
    currentQuestionIndex: 0,
    answers: {},
    quizTimerInterval: null,
    secondsLeft: 0,
    examStartTime: null,
    
    // Proctoring telemetry
    warnings: 0,
    maxWarnings: 3,
    proctorActive: false,
    complianceSessionSuspended: false,
    sessionLogs: [],

    // Dashboard filters
    selectedSubjectFilter: 'All',
    searchQuery: ''
};

// Initialize Application
function initApp() {
    // Clear legacy local storage to load the updated database questions
    localStorage.removeItem('sentinel_quizzes');

    if (!localStorage.getItem('sentinel_users')) {
        localStorage.setItem('sentinel_users', JSON.stringify(DEFAULT_USERS));
    }
    if (!localStorage.getItem('sentinel_quizzes')) {
        localStorage.setItem('sentinel_quizzes', JSON.stringify(DEFAULT_QUIZZES));
    }
    if (!localStorage.getItem('sentinel_attempts')) {
        localStorage.setItem('sentinel_attempts', JSON.stringify(DEFAULT_ATTEMPTS));
    }

    state.users = JSON.parse(localStorage.getItem('sentinel_users'));
    state.quizzes = JSON.parse(localStorage.getItem('sentinel_quizzes'));
    state.attempts = JSON.parse(localStorage.getItem('sentinel_attempts'));

    document.getElementById('app-logo').addEventListener('click', () => {
        if (state.currentUser) {
            showPage(state.currentUser.role);
        } else {
            showPage('auth');
        }
    });

    document.getElementById('btn-logout').addEventListener('click', handleLogout);

    const savedUser = sessionStorage.getItem('active_user');
    if (savedUser) {
        state.currentUser = JSON.parse(savedUser);
        updateHeaderUser();
        showPage(state.currentUser.role);
    } else {
        showPage('auth');
    }
}

// Router/Page Switching
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    if (pageId === 'student') {
        setupStudentDashboard();
    } else if (pageId === 'instructor') {
        setupInstructorDashboard();
    } else if (pageId === 'auth') {
        setupAuthPage();
    }
}

// User Badge Info in Nav Header
function updateHeaderUser() {
    const headerSection = document.getElementById('nav-user-section');
    if (state.currentUser) {
        headerSection.style.display = 'flex';
        document.getElementById('nav-user-name').textContent = state.currentUser.name;
        const roleLabel = document.getElementById('nav-user-role');
        roleLabel.textContent = state.currentUser.role.toUpperCase();
        
        roleLabel.className = 'role';
        if (state.currentUser.role === 'student') {
            roleLabel.classList.add('role-student');
        } else {
            roleLabel.classList.add('role-instructor');
        }
    } else {
        headerSection.style.display = 'none';
    }
}

// ================= AUTHENTICATION HANDLERS =================

function setupAuthPage() {
    state.currentUser = null;
    updateHeaderUser();
    document.getElementById('auth-form').reset();
    setAuthRole('student');
    setAuthMode('login');
}

function setAuthRole(role) {
    state.authRole = role;
    document.getElementById('auth-role-student').classList.toggle('active', role === 'student');
    document.getElementById('auth-role-instructor').classList.toggle('active', role === 'instructor');
}

function setAuthMode(mode) {
    state.authMode = mode;
    const isSignup = mode === 'signup';
    document.getElementById('group-fullname').style.display = isSignup ? 'block' : 'none';
    document.getElementById('auth-fullname').required = isSignup;
    document.getElementById('auth-subtitle').textContent = isSignup ? 'Create a secure assessment account' : 'Sign in to your assessment portal';
    document.getElementById('btn-auth-submit').textContent = isSignup ? 'Register Account' : 'Sign In';
    document.getElementById('auth-toggle-msg').textContent = isSignup ? 'Already have an account?' : "Don't have an account?";
    document.getElementById('auth-toggle-link').textContent = isSignup ? 'Sign In' : 'Sign Up';
}

function toggleAuthMode() {
    setAuthMode(state.authMode === 'login' ? 'signup' : 'login');
}

function handleAuthSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-fullname').value.trim();

    if (state.authMode === 'login') {
        const user = state.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.role === state.authRole);
        if (user) {
            completeLogin(user);
        } else {
            alert("Invalid credentials. Try: student@example.com / password (for student) or instructor@example.com / password (for instructor).");
        }
    } else {
        const userExists = state.users.some(u => u.email.toLowerCase() === email.toLowerCase());
        if (userExists) {
            alert("Email address already registered.");
            return;
        }

        const newUser = { email, password, name, role: state.authRole };
        state.users.push(newUser);
        localStorage.setItem('sentinel_users', JSON.stringify(state.users));
        completeLogin(newUser);
    }
}

function completeLogin(user) {
    state.currentUser = user;
    sessionStorage.setItem('active_user', JSON.stringify(user));
    updateHeaderUser();
    showPage(user.role);
}

function handleLogout() {
    stopProctoringEvents();
    state.currentUser = null;
    sessionStorage.removeItem('active_user');
    showPage('auth');
}

// ================= STUDENT PORTAL =================

function setupStudentDashboard() {
    document.getElementById('student-welcome-heading').textContent = `Hello, ${state.currentUser.name}!`;
    
    // Populate subject filters
    const subjects = new Set();
    state.quizzes.forEach(q => {
        if (q.subject) subjects.add(q.subject);
    });

    const filterContainer = document.getElementById('subject-filters-container');
    filterContainer.innerHTML = `
        <button class="role-btn ${state.selectedSubjectFilter === 'All' ? 'active' : ''}" onclick="filterSubject('All')">All Subjects</button>
    `;
    subjects.forEach(subj => {
        const activeClass = state.selectedSubjectFilter === subj ? 'active' : '';
        filterContainer.innerHTML += `
            <button class="role-btn ${activeClass}" onclick="filterSubject('${escapeHTML(subj)}')">${escapeHTML(subj)}</button>
        `;
    });

    renderAvailableQuizzes();

    // Render attempts
    const attemptsContainer = document.getElementById('student-attempts-container');
    const myAttempts = state.attempts.filter(a => a.studentName.toLowerCase() === state.currentUser.name.toLowerCase());
    
    if (myAttempts.length === 0) {
        attemptsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 1.5rem; border: 1px dashed var(--border-color); border-radius: var(--radius-md);">No exams completed yet.</p>`;
        
        document.getElementById('student-proctor-status-box').style.background = "rgba(16, 185, 129, 0.05)";
        document.getElementById('student-proctor-status-box').style.borderColor = "rgba(16, 185, 129, 0.2)";
        document.getElementById('student-proctor-status-title').textContent = "Proctor Status: Clean";
        document.getElementById('student-proctor-status-title').style.color = "var(--success)";
        document.getElementById('student-proctor-status-desc').textContent = "No compliance logs flagged in your past assessments.";
    } else {
        attemptsContainer.innerHTML = '';
        let hasFlaggedOrSuspended = false;
        
        myAttempts.forEach(attempt => {
            const attemptRow = document.createElement('div');
            attemptRow.className = 'glass-panel';
            attemptRow.style.padding = '0.75rem 1rem';
            attemptRow.style.display = 'flex';
            attemptRow.style.justifyContent = 'space-between';
            attemptRow.style.alignItems = 'center';
            attemptRow.style.borderRadius = 'var(--radius-md)';
            
            const isSuspended = attempt.complianceStatus === 'Suspended';
            const isFlagged = attempt.complianceStatus === 'Flagged';
            if (isSuspended || isFlagged) hasFlaggedOrSuspended = true;

            let badgeClass = 'badge-green';
            if (isSuspended) badgeClass = 'badge-red';
            else if (isFlagged) badgeClass = 'badge-red';

            attemptRow.innerHTML = `
                <div>
                    <h5 style="font-size: 0.9rem; font-weight: 700;">${escapeHTML(attempt.quizTitle)}</h5>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">${new Date(attempt.timestamp).toLocaleDateString()}</span>
                </div>
                <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem;">
                    <span style="font-weight: 800; font-size: 1rem;">${attempt.score}%</span>
                    <span class="badge ${badgeClass}">${attempt.complianceStatus}</span>
                </div>
            `;
            attemptsContainer.appendChild(attemptRow);
        });

        if (hasFlaggedOrSuspended) {
            document.getElementById('student-proctor-status-box').style.background = "rgba(239, 68, 68, 0.05)";
            document.getElementById('student-proctor-status-box').style.borderColor = "rgba(239, 68, 68, 0.2)";
            document.getElementById('student-proctor-status-title').textContent = "Proctor Status: Flagged";
            document.getElementById('student-proctor-status-title').style.color = "var(--danger)";
            document.getElementById('student-proctor-status-desc').textContent = "Some attempts registered event warning flags. Avoid copy-pasting, right-clicking, or switching tabs.";
        } else {
            document.getElementById('student-proctor-status-box').style.background = "rgba(16, 185, 129, 0.05)";
            document.getElementById('student-proctor-status-box').style.borderColor = "rgba(16, 185, 129, 0.2)";
            document.getElementById('student-proctor-status-title').textContent = "Proctor Status: Clean";
            document.getElementById('student-proctor-status-title').style.color = "var(--success)";
            document.getElementById('student-proctor-status-desc').textContent = "All examinations comply fully with exam conditions.";
        }
    }
}

function filterSubject(subject) {
    state.selectedSubjectFilter = subject;
    setupStudentDashboard();
}

function renderAvailableQuizzes() {
    const container = document.getElementById('available-quizzes-list');
    container.innerHTML = '';

    // Filter by subject tab first
    let filtered = state.selectedSubjectFilter === 'All' 
        ? state.quizzes 
        : state.quizzes.filter(q => q.subject === state.selectedSubjectFilter);

    // Filter by search query (checks title and subject)
    if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(q => 
            q.title.toLowerCase().includes(query) || 
            (q.subject && q.subject.toLowerCase().includes(query))
        );
    }

    if (filtered.length === 0) {
        if (state.searchQuery.trim().length >= 2) {
            const topic = state.searchQuery.trim();
            container.innerHTML = `
                <div style="text-align: center; padding: 2.5rem; background: rgba(255, 255, 255, 0.02); border: 1px dashed var(--border-color); border-radius: var(--radius-md);">
                    <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">No quizzes found matching "${escapeHTML(topic)}".</p>
                    <button class="btn btn-primary" onclick="generateAIQuiz('${escapeHTML(topic)}')">
                        ✨ Auto-Generate 15-Question Quiz on "${escapeHTML(topic)}"
                    </button>
                </div>
            `;
        } else {
            container.innerHTML = `<p style="color: var(--text-secondary); text-align: center; padding: 2rem;">No assessments matching your criteria.</p>`;
        }
    } else {
        filtered.forEach(quiz => {
            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.innerHTML = `
                <div class="quiz-meta">
                    <span class="quiz-title">${escapeHTML(quiz.title)}</span>
                    <div class="quiz-stats">
                        <span class="badge badge-purple">${escapeHTML(quiz.subject || 'General')}</span>
                        <span>⏱️ ${quiz.duration} mins</span>
                        <span>❓ ${quiz.questions.length} Questions</span>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="startQuiz('${quiz.id}')">Start Exam</button>
            `;
            container.appendChild(card);
        });
    }
}

function handleQuizSearch(query) {
    state.searchQuery = query;
    renderAvailableQuizzes();
}

function generateAIQuiz(topic) {
    const container = document.getElementById('available-quizzes-list');
    container.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <div style="margin-bottom: 1.5rem; font-size: 2.5rem; animation: pulse 1s infinite alternate;">🤖</div>
            <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem; font-family: var(--font-heading);">AI Generating Assessment...</h4>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">Analyzing "${escapeHTML(topic)}" and synthesizing 15 questions...</p>
        </div>
    `;

    setTimeout(() => {
        const tLower = topic.toLowerCase();
        let questions = [];
        let subject = "Computer Science";

        if (tLower.includes("java") && !tLower.includes("script")) {
            subject = "Computer Science";
            questions = [
                { text: "What is the correct way to declare a main method in Java?", options: ["public static void main(String[] args)", "void main(String[] args)", "public void main(String args)", "static void main(String args[])"], correct: 0 },
                { text: "Which class is the superclass of all classes in Java?", options: ["Class", "Object", "String", "System"], correct: 1 },
                { text: "What is the size of an int data type in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"], correct: 1 },
                { text: "Which keyword is used to inherit a class in Java?", options: ["implements", "inherits", "extends", "import"], correct: 2 },
                { text: "Which collection class allows duplicate elements and maintains insertion order?", options: ["HashSet", "HashMap", "ArrayList", "TreeSet"], correct: 2 },
                { text: "What is the purpose of the 'garbage collector' in Java?", options: ["To prevent syntax errors", "To compile source code", "To reclaim unused memory automatically", "To optimize program speed"], correct: 2 },
                { text: "Which Java package is imported by default?", options: ["java.util", "java.io", "java.lang", "java.net"], correct: 2 },
                { text: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Version Manager", "Java Visual Monitor", "Java Variable Memory"], correct: 0 },
                { text: "Which keyword is used to define a constant in Java?", options: ["static", "final", "const", "immutable"], correct: 1 },
                { text: "What is the default value of a local variable in Java?", options: ["0", "null", "No default value (Compile error if uninitialized)", "depends on IDE"], correct: 2 },
                { text: "Which access modifier makes a member visible only within its own class?", options: ["public", "protected", "private", "default (package)"], correct: 2 },
                { text: "Which of the following is NOT a primitive data type in Java?", options: ["int", "double", "String", "char"], correct: 2 },
                { text: "Which exception is thrown when an array is accessed with an invalid index?", options: ["NullPointerException", "ArrayIndexOutOfBoundsException", "ArithmeticException", "IllegalArgumentException"], correct: 1 },
                { text: "What is the size of a double variable in Java?", options: ["4 bytes", "8 bytes", "16 bytes", "depends on system architecture"], correct: 1 },
                { text: "What is the return type of a constructor in Java?", options: ["void", "int", "None (constructor doesn't have a return type)", "Object"], correct: 2 }
            ];
        } else if (tLower.includes("python")) {
            subject = "Computer Science";
            questions = [
                { text: "Which keyword is used to define a function in Python?", options: ["func", "def", "function", "lambda"], correct: 1 },
                { text: "How do you insert single-line comments in Python code?", options: ["// Comment", "/* Comment */", "# Comment", "-- Comment"], correct: 2 },
                { text: "Which data type is mutable in Python?", options: ["list", "tuple", "str", "int"], correct: 0 },
                { text: "What is the output of len([1, 2, 3]) in Python?", options: ["2", "3", "4", "None"], correct: 1 },
                { text: "Which statement is used to import a module in Python?", options: ["require", "include", "import", "using"], correct: 2 },
                { text: "What is the output of 3 * 3 in Python?", options: ["9", "27", "6", "12"], correct: 0 },
                { text: "What is the default return value of a function that doesn't have a return statement?", options: ["0", "False", "None", "Null"], correct: 2 },
                { text: "Which method is used to add an element to the end of a list?", options: ["add()", "insert()", "append()", "push()"], correct: 2 },
                { text: "What does PEP 8 represent in Python?", options: ["A coding style guide for Python", "A library for networking", "A package installer", "A debugger tool"], correct: 0 },
                { text: "How do you handle exceptions in Python?", options: ["try-catch", "try-except", "throw-catch", "do-catch"], correct: 1 },
                { text: "Which of the following data structures stores key-value pairs in Python?", options: ["list", "tuple", "dict", "set"], correct: 2 },
                { text: "Which keyword is used to create a generator in Python?", options: ["return", "yield", "produce", "generate"], correct: 1 },
                { text: "How do you create an empty set in Python?", options: ["{}", "set()", "empty_set()", "[]"], correct: 1 },
                { text: "What is the purpose of the 'pass' statement in Python?", options: ["To exit a loop", "To do nothing (null operation placeholder)", "To throw an exception", "To print a message"], correct: 1 },
                { text: "What is the output of 2 ** 3 in Python?", options: ["6", "8", "9", "5"], correct: 1 }
            ];
        } else {
            subject = "General Topic";
            const capitalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
            questions = [
                { text: `What is the primary purpose of ${capitalizedTopic} in modern computing?`, options: ["Resource scheduling", "Logic design", "Data encapsulation", "Network handshakes"], correct: 2 },
                { text: `Which of the following represents a core feature of ${capitalizedTopic}?`, options: ["Dynamic memory mapping", "High extensibility", "Compile-time safety", "Zero latency"], correct: 1 },
                { text: `How is error handling typically managed in ${capitalizedTopic}?`, options: ["Exceptions", "Error codes", "Structured exit codes", "Assertions"], correct: 0 },
                { text: `What is a key performance advantage when using ${capitalizedTopic}?`, options: ["Low memory consumption", "Single-threaded design", "Asynchronous capabilities", "No configuration required"], correct: 2 },
                { text: `Which of the following is considered a best practice in ${capitalizedTopic}?`, options: ["Overriding methods blindly", "Keeping dependencies modular", "Storing configurations globally", "Hardcoding variables"], correct: 1 },
                { text: `In ${capitalizedTopic}, how do you typically initialize a new instance or state?`, options: ["Using a constructor", "Using static methods", "Using factories", "All of the above"], correct: 3 },
                { text: `What is a common architectural pattern associated with ${capitalizedTopic}?`, options: ["MVC (Model-View-Controller)", "Microservices", "Event-driven architecture", "All of the above"], correct: 3 },
                { text: `Which limitation is most commonly encountered in ${capitalizedTopic}?`, options: ["Slow scaling times", "Network security hazards", "Complex concurrency configurations", "Poor documentation"], correct: 2 },
                { text: `In ${capitalizedTopic}, how do you define configuration parameters?`, options: ["YAML/JSON files", "Hardcoded strings", "Environment variables", "Options A and C"], correct: 3 },
                { text: `Which framework or library is most commonly associated with ${capitalizedTopic}?`, options: ["Core Libraries", "Third-party packages", "Plugin systems", "Standard APIs"], correct: 0 },
                { text: `How does ${capitalizedTopic} achieve high concurrency and performance?`, options: ["Thread pooling", "Asynchronous loop handling", "Load balancing", "All of the above"], correct: 3 },
                { text: `What is the main difference between ${capitalizedTopic} and its primary competitor?`, options: ["Community support volume", "Licensing terms", "Execution performance speed", "All of the above"], correct: 3 },
                { text: `Which community standard governs the implementation of ${capitalizedTopic}?`, options: ["IEEE standards", "W3C specifications", "Open source RFC guidelines", "Depends on project team"], correct: 2 },
                { text: `What is a typical debugging technique used in ${capitalizedTopic}?`, options: ["Console tracing", "Breakpoints in IDEs", "Analyzing stack traces", "All of the above"], correct: 3 },
                { text: `In ${capitalizedTopic}, what is the significance of package management?`, options: ["Organizing codebase structures", "Managing third-party dependencies", "Resolving version conflicts", "All of the above"], correct: 3 }
            ];
        }

        const newQuiz = {
            id: `quiz-ai-${Date.now()}`,
            title: `AI-Generated Quiz: ${escapeHTML(topic)}`,
            subject: subject,
            duration: 15,
            questions: questions
        };

        state.quizzes.push(newQuiz);
        localStorage.setItem('sentinel_quizzes', JSON.stringify(state.quizzes));
        
        state.searchQuery = "";
        document.getElementById('quiz-search-bar').value = "";
        setupStudentDashboard();

        alert(`✨ Successfully generated a 15-question quiz on "${escapeHTML(topic)}"! You can now click "Start Exam" to take it.`);
    }, 1500);
}

// ================= QUIZ PROCTOR ENGINE & TIMERS =================

function startQuiz(quizId) {
    const quiz = state.quizzes.find(q => q.id === quizId);
    if (!quiz) return;

    const consent = confirm("You are about to start a secure examination.\n\nBrowser-level Security Rules:\n1. Keep window focused. Leaving focus/tabs triggers warnings.\n2. Exiting fullscreen mode will trigger a warning.\n3. Keyboard Copy-Paste shortcuts and Right-Clicks are disabled.\n4. Reaching 3 warnings terminates the exam instantly.\n\nDo you wish to enter the quiz environment?");
    if (!consent) return;

    state.activeQuiz = quiz;
    state.currentQuestionIndex = 0;
    state.answers = {};
    state.warnings = 0;
    state.secondsLeft = quiz.duration * 60;
    state.examStartTime = new Date();
    state.sessionLogs = [];
    state.proctorActive = true;
    state.complianceSessionSuspended = false;

    logSessionEvent("system", "Secure session initiated.");
    
    requestFullScreenMode();
    updateWarningUI();
    renderCurrentQuestion();
    showPage('quiz');
    
    startProctoringEvents();
    startQuizTimer();
}

function requestFullScreenMode() {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen().catch(() => {
            logSessionEvent("warning", "Fullscreen mode declined by browser/user.");
        });
    }
}

function startQuizTimer() {
    clearInterval(state.quizTimerInterval);
    updateTimerUI();
    state.quizTimerInterval = setInterval(() => {
        state.secondsLeft--;
        updateTimerUI();
        if (state.secondsLeft <= 0) {
            clearInterval(state.quizTimerInterval);
            logSessionEvent("system", "Time limit expired.");
            alert("Assessment timer reached zero. Submitting solutions automatically.");
            submitExam(true);
        }
    }, 1000);
}

function updateTimerUI() {
    const mins = Math.floor(state.secondsLeft / 60);
    const secs = state.secondsLeft % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('quiz-timer').textContent = timeStr;
}

function renderCurrentQuestion() {
    const quiz = state.activeQuiz;
    const qIndex = state.currentQuestionIndex;
    const question = quiz.questions[qIndex];

    document.getElementById('quiz-badge-name').textContent = quiz.title.toUpperCase();
    document.getElementById('quiz-question-title').textContent = quiz.title;
    
    document.getElementById('question-progress-text').textContent = `Question ${qIndex + 1} of ${quiz.questions.length}`;
    document.getElementById('question-progress-bar').style.width = `${((qIndex + 1) / quiz.questions.length) * 100}%`;
    
    document.getElementById('current-question-text').textContent = question.text;

    const optionsContainer = document.getElementById('current-options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((opt, idx) => {
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';
        if (state.answers[qIndex] === idx) {
            optionItem.classList.add('selected');
        }
        optionItem.innerHTML = `
            <span class="radio-dot"></span>
            <span>${escapeHTML(opt)}</span>
        `;
        optionItem.addEventListener('click', () => {
            state.answers[qIndex] = idx;
            renderCurrentQuestion();
        });
        optionsContainer.appendChild(optionItem);
    });

    document.getElementById('btn-prev-question').style.display = qIndex === 0 ? 'none' : 'block';
    
    const isLast = qIndex === quiz.questions.length - 1;
    document.getElementById('btn-next-question').style.display = isLast ? 'none' : 'block';
    document.getElementById('btn-submit-exam').style.display = isLast ? 'block' : 'none';
}

function navigateQuestion(direction) {
    state.currentQuestionIndex += direction;
    renderCurrentQuestion();
}

function confirmSubmitExam() {
    const total = state.activeQuiz.questions.length;
    const answeredCount = Object.keys(state.answers).length;
    
    let msg = "Confirm submission of your assessment?";
    if (answeredCount < total) {
        msg = `You completed only ${answeredCount} of ${total} questions. Are you sure you want to finish?`;
    }

    if (confirm(msg)) {
        submitExam(false);
    }
}

function submitExam(isAuto = false) {
    clearInterval(state.quizTimerInterval);
    stopProctoringEvents();
    exitFullScreenMode();

    const quiz = state.activeQuiz;
    let correctCount = 0;
    
    quiz.questions.forEach((q, idx) => {
        if (state.answers[idx] === q.correct) {
            correctCount++;
        }
    });

    const scorePct = Math.round((correctCount / quiz.questions.length) * 100);
    const durationSec = Math.round((new Date() - state.examStartTime) / 1000);
    const minutesText = Math.floor(durationSec / 60).toString().padStart(2, '0');
    const secondsText = (durationSec % 60).toString().padStart(2, '0');
    const finalDurationText = `${minutesText}:${secondsText}`;

    logSessionEvent("system", isAuto ? "Session terminated automatically." : "Session submitted.");

    let status = "Clean";
    if (state.complianceSessionSuspended || state.warnings >= 3) {
        status = "Suspended";
    } else if (state.warnings > 0) {
        status = "Flagged";
    }

    const newAttempt = {
        id: `attempt-${Date.now()}`,
        studentName: state.currentUser.name,
        quizTitle: quiz.title,
        score: scorePct,
        totalQuestions: quiz.questions.length,
        correctAnswers: correctCount,
        warnings: state.warnings,
        complianceStatus: status,
        timestamp: new Date().toISOString(),
        durationText: finalDurationText,
        logs: state.sessionLogs
    };

    state.attempts.push(newAttempt);
    localStorage.setItem('sentinel_attempts', JSON.stringify(state.attempts));

    document.getElementById('feedback-title').textContent = status === "Suspended" ? "Exam Suspended" : "Assessment Completed";
    document.getElementById('feedback-subtitle').textContent = status === "Suspended" 
        ? "The security system locked your assessment due to multiple compliance failures." 
        : "Your score was successfully updated. You may review your status below.";
    
    document.getElementById('feedback-success-icon').textContent = status === "Suspended" ? "🚨" : "🏆";
    document.getElementById('feedback-score-display').textContent = `${scorePct}%`;
    document.getElementById('feedback-score-display').style.color = status === "Suspended" ? "var(--danger)" : "var(--success)";
    document.getElementById('feedback-warnings').textContent = state.warnings;
    document.getElementById('feedback-compliance-status').textContent = status.toUpperCase();
    
    const statusPill = document.getElementById('feedback-compliance-status');
    statusPill.className = 'metric-val';
    if (status === 'Clean') statusPill.style.color = 'var(--success)';
    else if (status === 'Flagged') statusPill.style.color = 'var(--warning)';
    else statusPill.style.color = 'var(--danger)';

    document.getElementById('feedback-duration').textContent = finalDurationText;

    state.activeQuiz = null;
    state.proctorActive = false;

    showPage('feedback');
}

function exitFullScreenMode() {
    if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    }
}

// ================= LOW-LEVEL EVENT PROCTORING MODULE =================

function startProctoringEvents() {
    document.getElementById('proctor-live-log-list').innerHTML = `<div style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 1rem;" id="empty-warnings-placeholder">Secure Browser Session Active.</div>`;
    
    document.getElementById('proctor-status-text').textContent = "MONITORING ACTIVE";
    document.getElementById('proctor-status-dot').className = 'ai-status-dot';

    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    document.addEventListener('copy', handleClipboardInterceptors);
    document.addEventListener('cut', handleClipboardInterceptors);
    document.addEventListener('paste', handleClipboardInterceptors);

    document.addEventListener('contextmenu', handleRightClickInterceptor);
    document.addEventListener('keydown', handleKeyCombinationInterceptor);
}

function stopProctoringEvents() {
    window.removeEventListener('blur', handleWindowBlur);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
    
    document.removeEventListener('copy', handleClipboardInterceptors);
    document.removeEventListener('cut', handleClipboardInterceptors);
    document.removeEventListener('paste', handleClipboardInterceptors);
    
    document.removeEventListener('contextmenu', handleRightClickInterceptor);
    document.removeEventListener('keydown', handleKeyCombinationInterceptor);

    document.getElementById('compliance-warning-overlay').classList.remove('active');
}

function handleWindowBlur() {
    if (!state.proctorActive || state.complianceSessionSuspended) return;
    triggerComplianceViolation("Tab switch: Focus moved away from assessment screen.");
}

function handleVisibilityChange() {
    if (!state.proctorActive || state.complianceSessionSuspended) return;
    if (document.hidden) {
        triggerComplianceViolation("Tab hidden: User navigated to another browser page.");
    }
}

function handleFullscreenChange() {
    if (!state.proctorActive || state.complianceSessionSuspended) return;
    if (!document.fullscreenElement) {
        triggerComplianceViolation("Exited Fullscreen: Fullscreen layout deactivated.");
    }
}

function handleClipboardInterceptors(e) {
    if (!state.proctorActive || state.complianceSessionSuspended) return;
    e.preventDefault();
    triggerComplianceViolation(`Clipboard Intercept: Blocked illegal ${e.type.toUpperCase()} command.`);
}

function handleRightClickInterceptor(e) {
    if (!state.proctorActive || state.complianceSessionSuspended) return;
    e.preventDefault();
    triggerComplianceViolation("Inspect defense: Right-click context menu blocked.");
}

function handleKeyCombinationInterceptor(e) {
    if (!state.proctorActive || state.complianceSessionSuspended) return;

    const isF12 = e.key === 'F12';
    const isCtrlCombination = (e.ctrlKey || e.metaKey) && ['c', 'v', 'u', 'i', 'x'].includes(e.key.toLowerCase());
    const isDeveloperToolsKey = (e.ctrlKey && e.shiftKey && ['i', 'c', 'j'].includes(e.key.toLowerCase()));

    if (isF12 || isCtrlCombination || isDeveloperToolsKey) {
        e.preventDefault();
        
        let blockedKey = e.key;
        if (e.ctrlKey) blockedKey = `Ctrl + ${e.key}`;
        
        triggerComplianceViolation(`Keys Blocked: Shortcut attempt '${blockedKey}' intercepted.`);
    }
}

function triggerComplianceViolation(reason) {
    if (!state.proctorActive || state.complianceSessionSuspended) return;

    logSessionEvent("warning", reason);
    
    const list = document.getElementById('proctor-live-log-list');
    const placeholder = document.getElementById('empty-warnings-placeholder');
    if (placeholder) placeholder.remove();

    const timestamp = new Date().toLocaleTimeString();
    const item = document.createElement('div');
    item.className = 'violation-log-item';
    item.innerHTML = `<strong>[${timestamp}]</strong> ${escapeHTML(reason)}`;
    list.insertBefore(item, list.firstChild);

    playAlertBeep();

    state.warnings++;
    updateWarningUI();

    if (state.warnings >= state.maxWarnings) {
        state.complianceSessionSuspended = true;
        alert("🚨 EXAMINATION SUSPENDED 🚨\nYou committed 3 security violations. The workspace has been locked and answers submitted.");
        submitExam(true);
    } else {
        showComplianceOverlay(reason);
    }
}

function updateWarningUI() {
    const pill = document.getElementById('proctor-warning-counter');
    pill.textContent = `${state.warnings} / ${state.maxWarnings}`;
    
    if (state.warnings === 0) {
        pill.style.background = 'var(--success-glow)';
        pill.style.color = 'var(--success)';
        pill.style.borderColor = 'rgba(16, 185, 129, 0.2)';
    } else if (state.warnings === 1) {
        pill.style.background = 'var(--warning-glow)';
        pill.style.color = 'var(--warning)';
        pill.style.borderColor = 'rgba(245, 158, 11, 0.2)';
    } else {
        pill.style.background = 'var(--danger-glow)';
        pill.style.color = 'var(--danger)';
        pill.style.borderColor = 'rgba(239, 68, 68, 0.25)';
    }
}

function showComplianceOverlay(reason) {
    document.getElementById('compliance-warning-overlay').classList.add('active');
    document.getElementById('warning-overlay-desc').textContent = `${reason}. To prevent exam termination, return focus and click the button to enter Fullscreen focus.`;
}

function resumeComplianceSession() {
    document.getElementById('compliance-warning-overlay').classList.remove('active');
    requestFullScreenMode();
}

function playAlertBeep() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sine';
        oscillator.frequency.value = 750;
        gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.12);
    } catch(e) {}
}

function logSessionEvent(type, text) {
    const timestamp = new Date().toLocaleTimeString();
    state.sessionLogs.push({ time: timestamp, type, text });
}

// ================= INSTRUCTOR CONTROL PANEL =================

function setupInstructorDashboard() {
    const attempts = state.attempts;
    const totalSubmissions = attempts.length;
    
    const flaggedCount = attempts.filter(a => a.complianceStatus === 'Flagged').length;
    const suspendedCount = attempts.filter(a => a.complianceStatus === 'Suspended').length;

    document.getElementById('stat-active-quizzes').textContent = state.quizzes.length;
    document.getElementById('stat-submissions').textContent = totalSubmissions;
    document.getElementById('stat-flagged').textContent = flaggedCount;
    document.getElementById('stat-suspended').textContent = suspendedCount;

    const tbody = document.getElementById('instructor-reports-tbody');
    tbody.innerHTML = '';

    if (attempts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No student attempts logged yet.</td></tr>`;
    } else {
        [...attempts].reverse().forEach(attempt => {
            const tr = document.createElement('tr');
            
            let statusBadgeClass = 'badge-green';
            if (attempt.complianceStatus === 'Suspended') statusBadgeClass = 'badge-red';
            else if (attempt.complianceStatus === 'Flagged') statusBadgeClass = 'badge-red';

            tr.innerHTML = `
                <td><strong>${escapeHTML(attempt.studentName)}</strong></td>
                <td>${escapeHTML(attempt.quizTitle)}</td>
                <td><span style="font-weight: 700;">${attempt.score}%</span></td>
                <td>${attempt.correctAnswers}/${attempt.totalQuestions} Correct</td>
                <td>${attempt.warnings} warnings</td>
                <td><span class="badge ${statusBadgeClass}">${attempt.complianceStatus}</span></td>
                <td>
                    <button class="btn btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="viewAttemptLogs('${attempt.id}')">
                        🔍 Security Logs
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function viewAttemptLogs(attemptId) {
    const attempt = state.attempts.find(a => a.id === attemptId);
    if (!attempt) return;

    document.getElementById('modal-audit-student').textContent = attempt.studentName;
    document.getElementById('modal-audit-quiz').textContent = attempt.quizTitle;
    
    const statusText = `${attempt.complianceStatus} (${attempt.warnings} Warnings, Duration: ${attempt.durationText})`;
    const statusLabel = document.getElementById('modal-audit-status');
    statusLabel.textContent = statusText;
    
    statusLabel.className = '';
    if (attempt.complianceStatus === 'Clean') statusLabel.className = 'text-success';
    else if (attempt.complianceStatus === 'Flagged') statusLabel.className = 'text-warning';
    else statusLabel.className = 'text-danger';

    const timeline = document.getElementById('modal-audit-timeline-container');
    timeline.innerHTML = '';

    attempt.logs.forEach(log => {
        const row = document.createElement('div');
        row.className = 'timeline-item';
        
        let typeColorClass = 'text-success';
        if (log.type === 'warning') typeColorClass = 'text-danger';
        else if (log.type === 'system' && log.text.includes('started')) typeColorClass = 'text-success';

        row.innerHTML = `
            <div class="timeline-time">${log.time}</div>
            <div class="timeline-content">
                <div class="timeline-title ${typeColorClass}">${log.type === 'warning' ? '⚠️ SECURITY VIOLATION' : '⚙️ SESSION EVENT'}</div>
                <div class="timeline-desc">${escapeHTML(log.text)}</div>
            </div>
        `;
        timeline.appendChild(row);
    });

    openModal('modal-log-details');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// ================= QUIZ CREATOR FORM =================

function openCreateQuizModal() {
    document.getElementById('create-quiz-form').reset();
    document.getElementById('questions-builder-container').innerHTML = '';
    addQuestionToForm();
    openModal('modal-create-quiz');
}

function addQuestionToForm() {
    const container = document.getElementById('questions-builder-container');
    const index = container.children.length + 1;
    
    const div = document.createElement('div');
    div.className = 'question-builder-item';
    div.id = `q-builder-${index}`;
    
    div.innerHTML = `
        <button type="button" class="remove-q-btn" onclick="removeQuestionFromForm(${index})">Remove</button>
        <div class="form-group">
            <label>Question ${index}</label>
            <input type="text" class="form-control q-text-input" placeholder="Enter question description" required>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem;">
            <input type="text" class="form-control opt-input-0" placeholder="Option A" required>
            <input type="text" class="form-control opt-input-1" placeholder="Option B" required>
            <input type="text" class="form-control opt-input-2" placeholder="Option C" required>
            <input type="text" class="form-control opt-input-3" placeholder="Option D" required>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label>Correct Answer Option</label>
            <select class="form-control correct-opt-select" required>
                <option value="0">Option A</option>
                <option value="1">Option B</option>
                <option value="2">Option C</option>
                <option value="3">Option D</option>
            </select>
        </div>
    `;
    container.appendChild(div);
}

function removeQuestionFromForm(index) {
    const container = document.getElementById('questions-builder-container');
    if (container.children.length <= 1) {
        alert("A quiz must have at least one question.");
        return;
    }
    const target = document.getElementById(`q-builder-${index}`);
    if (target) target.remove();
    
    Array.from(container.children).forEach((child, i) => {
        child.querySelector('label').textContent = `Question ${i + 1}`;
    });
}

function handleCreateQuizSubmit(event) {
    event.preventDefault();
    const title = document.getElementById('new-quiz-title').value.trim();
    const duration = parseInt(document.getElementById('new-quiz-duration').value);

    // Prompt user to select subject for the new quiz
    const subjectsList = ["Computer Science", "Mathematics", "Science"];
    const subjectPrompt = prompt(`Select a subject for this quiz (Type one of: ${subjectsList.join(', ')}):`, "Computer Science");
    
    let subject = "General";
    if (subjectPrompt && subjectsList.map(s => s.toLowerCase()).includes(subjectPrompt.trim().toLowerCase())) {
        subject = subjectsList.find(s => s.toLowerCase() === subjectPrompt.trim().toLowerCase());
    } else if (subjectPrompt) {
        subject = subjectPrompt.trim(); // Allow custom subject naming
    }

    const builderItems = document.querySelectorAll('.question-builder-item');
    const questions = [];

    let validationErr = false;
    builderItems.forEach(item => {
        const text = item.querySelector('.q-text-input').value.trim();
        const optA = item.querySelector('.opt-input-0').value.trim();
        const optB = item.querySelector('.opt-input-1').value.trim();
        const optC = item.querySelector('.opt-input-2').value.trim();
        const optD = item.querySelector('.opt-input-3').value.trim();
        const correct = parseInt(item.querySelector('.correct-opt-select').value);

        if (!text || !optA || !optB || !optC || !optD) {
            validationErr = true;
            return;
        }

        questions.push({
            text,
            options: [optA, optB, optC, optD],
            correct
        });
    });

    if (validationErr) {
        alert("Please fill in all question fields and options.");
        return;
    }

    const newQuiz = {
        id: `quiz-${Date.now()}`,
        title,
        subject,
        duration,
        questions
    };

    state.quizzes.push(newQuiz);
    localStorage.setItem('sentinel_quizzes', JSON.stringify(state.quizzes));

    closeModal('modal-create-quiz');
    setupInstructorDashboard();
    alert(`Assessment "${title}" generated under subject "${subject}"!`);
}

function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

window.addEventListener('DOMContentLoaded', initApp);
