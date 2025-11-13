// VisionVault Unified Script.js
// Handles: Menu Toggle • Course Search • Exam Search • Tabs • Quiz Redirect • Quiz Evaluation

/* -------------------- 🗃️ QUIZ DATA STORE -------------------- */
const quizData = {
  //Machine learning DATA(id:machine_learning)

  machine_learning: {
    title: "MACHINE LEARNING – MCQ QUIZ (INTERMEDIATE TO ADVANCED)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "ml1",
        text: "Which of the following is a type of supervised learning?",
        options: {
          A: "Clustering",
          B: "Regression",
          C: "Association",
          D: "Dimensionality Reduction",
        },
        correctAnswer: "B",
        explanation:
          "Regression predicts continuous outputs based on labeled input data — a key supervised learning approach.",
      },
      {
        qId: "ml2",
        text: "In unsupervised learning, the model tries to:",
        options: {
          A: "Predict future outcomes using labels",
          B: "Group similar data points without labels",
          C: "Optimize a cost function with supervision",
          D: "Learn through reinforcement signals",
        },
        correctAnswer: "B",
        explanation:
          "Unsupervised learning finds hidden patterns and clusters without any target labels.",
      },
      {
        qId: "ml3",
        text: "The bias-variance tradeoff is crucial because:",
        options: {
          A: "It balances model complexity and training speed",
          B: "It affects how well the model generalizes",
          C: "It determines the number of neurons in a network",
          D: "It controls regularization strength",
        },
        correctAnswer: "B",
        explanation:
          "High bias causes underfitting, while high variance causes overfitting.",
      },
      {
        qId: "ml4",
        text: "Which algorithm is most suitable for classifying emails as spam or not spam?",
        options: {
          A: "Linear Regression",
          B: "Naive Bayes",
          C: "K-Means",
          D: "PCA",
        },
        correctAnswer: "B",
        explanation:
          "Naive Bayes is efficient for text classification and spam detection.",
      },
      {
        qId: "ml5",
        text: "What is the main purpose of feature scaling?",
        options: {
          A: "To increase the dataset size",
          B: "To improve interpretability",
          C: "To ensure all features contribute equally to model performance",
          D: "To reduce dimensionality",
        },
        correctAnswer: "C",
        explanation:
          "Feature scaling stabilizes feature ranges, improving convergence in algorithms like SVM and KNN.",
      },
      {
        qId: "ml6",
        text: "Which of the following is NOT a common activation function in neural networks?",
        options: {
          A: "ReLU",
          B: "Sigmoid",
          C: "Softmax",
          D: "Gradient Boosting",
        },
        correctAnswer: "D",
        explanation:
          "Gradient Boosting is a separate ensemble method, not an activation function.",
      },
      {
        qId: "ml7",
        text: "Overfitting occurs when:",
        options: {
          A: "The model is too simple",
          B: "The model performs well on training but poorly on test data",
          C: "The model performs poorly on both training and test data",
          D: "The model has too few parameters",
        },
        correctAnswer: "B",
        explanation:
          "Overfitting means the model memorizes training data instead of learning patterns.",
      },
      {
        qId: "ml8",
        text: "The main goal of dimensionality reduction is to:",
        options: {
          A: "Increase model accuracy",
          B: "Remove irrelevant features while retaining key information",
          C: "Reduce dataset size for storage",
          D: "Improve CPU performance",
        },
        correctAnswer: "B",
        explanation:
          "Techniques like PCA reduce dimensionality to simplify models and avoid overfitting.",
      },
      {
        qId: "ml9",
        text: "Which evaluation metric is most appropriate for an imbalanced classification problem?",
        options: {
          A: "Accuracy",
          B: "Precision and Recall",
          C: "Mean Squared Error",
          D: "R² Score",
        },
        correctAnswer: "B",
        explanation:
          "For imbalanced datasets, precision and recall provide better insight into true performance than accuracy.",
      },
      {
        qId: "ml10",
        text: "Reinforcement learning involves:",
        options: {
          A: "Learning from labeled datasets",
          B: "Learning from rewards and penalties",
          C: "Grouping similar data",
          D: "Generating synthetic data",
        },
        correctAnswer: "B",
        explanation:
          "In RL, agents learn by interacting with the environment and optimizing cumulative rewards.",
      },
      {
        qId: "ml11",
        text: "Which of these is NOT a type of machine learning?",
        options: {
          A: "Supervised",
          B: "Unsupervised",
          C: "Semi-supervised",
          D: "Manual learning",
        },
        correctAnswer: "D",
        explanation: "Manual learning is not a formal ML type.",
      },
      {
        qId: "ml12",
        text: "In gradient descent, the learning rate determines:",
        options: {
          A: "The number of epochs",
          B: "The step size during optimization",
          C: "The type of activation function",
          D: "The batch size",
        },
        correctAnswer: "B",
        explanation:
          "Learning rate controls how fast weights are updated during training.",
      },
      {
        qId: "ml13",
        text: "Which algorithm is commonly used for clustering?",
        options: {
          A: "Decision Tree",
          B: "K-Means",
          C: "Logistic Regression",
          D: "Random Forest",
        },
        correctAnswer: "B",
        explanation: "K-Means groups data into clusters based on similarity.",
      },
      {
        qId: "ml14",
        text: "Which statement about Support Vector Machines (SVM) is true?",
        options: {
          A: "SVM can only be used for regression",
          B: "SVM aims to find the maximum margin hyperplane",
          C: "SVM requires categorical data only",
          D: "SVM ignores outliers completely",
        },
        correctAnswer: "B",
        explanation: "SVM separates classes with the widest possible margin.",
      },
      {
        qId: "ml15",
        text: "Ensemble methods combine:",
        options: {
          A: "Multiple datasets",
          B: "Multiple models to improve prediction accuracy",
          C: "Multiple hardware systems",
          D: "Multiple loss functions",
        },
        correctAnswer: "B",
        explanation:
          "Ensemble methods (e.g., bagging, boosting) combine models to reduce variance and bias.",
      },
      {
        qId: "ml16",
        text: "Which of these algorithms is based on decision trees?",
        options: {
          A: "KNN",
          B: "Random Forest",
          C: "Logistic Regression",
          D: "PCA",
        },
        correctAnswer: "B",
        explanation:
          "Random Forest builds multiple decision trees and averages their predictions.",
      },
      {
        qId: "ml17",
        text: "Cross-validation is used to:",
        options: {
          A: "Train models faster",
          B: "Evaluate model generalization on unseen data",
          C: "Reduce the number of features",
          D: "Increase bias",
        },
        correctAnswer: "B",
        explanation:
          "Cross-validation ensures stable model evaluation by splitting data into folds.",
      },
      {
        qId: "ml18",
        text: "Which of the following is a type of loss function used in classification?",
        options: {
          A: "Mean Squared Error",
          B: "Cross-Entropy Loss",
          C: "Hinge Loss",
          D: "Both B and C",
        },
        correctAnswer: "D",
        explanation:
          "Cross-Entropy and Hinge Loss are both commonly used in classification problems.",
      },
      {
        qId: "ml19",
        text: "Deep learning differs from traditional ML mainly because:",
        options: {
          A: "It doesn’t require data",
          B: "It uses multiple hidden layers for feature extraction",
          C: "It doesn’t require training",
          D: "It only uses decision trees",
        },
        correctAnswer: "B",
        explanation:
          "Deep learning automates feature extraction via deep neural networks.",
      },
      {
        qId: "ml20",
        text: "The main challenge of training deep neural networks is:",
        options: {
          A: "Lack of GPU support",
          B: "Vanishing or exploding gradients",
          C: "Simple architectures",
          D: "Lack of data normalization",
        },
        correctAnswer: "B",
        explanation:
          "Deep networks often suffer from unstable gradient flow, making optimization difficult.",
      },
    ],
  },

  //CYBER SECURITY DATA(id:cyber_security)

  cyber_security: {
    title: "CYBER SECURITY – MCQ QUIZ (INTERMEDIATE TO ADVANCED)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "cs1",
        text: "The main goal of cybersecurity is to:",
        options: {
          A: "Develop AI systems",
          B: "Protect data, networks, and systems from attacks",
          C: "Create new programming languages",
          D: "Replace encryption algorithms",
        },
        correctAnswer: "B",
        explanation:
          "Cybersecurity ensures confidentiality, integrity, and availability (CIA triad) of information systems.",
      },
      {
        qId: "cs2",
        text: "Which of the following represents the CIA triad?",
        options: {
          A: "Confidentiality, Integrity, Authentication",
          B: "Confidentiality, Integrity, Availability",
          C: "Control, Integrity, Access",
          D: "Confidentiality, Inference, Authorization",
        },
        correctAnswer: "B",
        explanation:
          "CIA triad forms the foundation of information security principles.",
      },
      {
        qId: "cs3",
        text: "Phishing attacks typically involve:",
        options: {
          A: "Manipulating sensors",
          B: "Sending deceptive emails to steal user credentials",
          C: "Injecting malicious code in websites",
          D: "Overloading network bandwidth",
        },
        correctAnswer: "B",
        explanation:
          "Phishing deceives users into providing sensitive information via fake emails or websites.",
      },
      {
        qId: "cs4",
        text: "Which of the following is a type of malware?",
        options: {
          A: "Firewall",
          B: "Trojan horse",
          C: "VPN",
          D: "Hashing",
        },
        correctAnswer: "B",
        explanation:
          "A Trojan horse disguises itself as legitimate software but performs malicious actions.",
      },
      {
        qId: "cs5",
        text: "A DoS (Denial of Service) attack aims to:",
        options: {
          A: "Encrypt data for security",
          B: "Slow down the system for maintenance",
          C: "Make a network or website unavailable to users",
          D: "Improve system speed",
        },
        correctAnswer: "C",
        explanation:
          "DoS attacks flood systems with traffic, making them unavailable to legitimate users.",
      },
      {
        qId: "cs6",
        text: "The process of converting data into unreadable code is called:",
        options: {
          A: "Compression",
          B: "Encryption",
          C: "Decryption",
          D: "Encoding",
        },
        correctAnswer: "B",
        explanation:
          "Encryption transforms readable data into cipher text to prevent unauthorized access.",
      },
      {
        qId: "cs7",
        text: "Which of the following protocols provides secure communication over the internet?",
        options: {
          A: "HTTP",
          B: "HTTPS",
          C: "FTP",
          D: "SMTP",
        },
        correctAnswer: "B",
        explanation:
          "HTTPS encrypts web traffic using SSL/TLS to ensure secure communication.",
      },
      {
        qId: "cs8",
        text: "What is the function of a firewall?",
        options: {
          A: "Detects and removes malware",
          B: "Filters incoming and outgoing network traffic",
          C: "Encrypts stored data",
          D: "Manages user passwords",
        },
        correctAnswer: "B",
        explanation:
          "Firewalls monitor and control data packets based on security rules.",
      },
      {
        qId: "cs9",
        text: "Which type of attack involves modifying data in transit?",
        options: {
          A: "Phishing",
          B: "Man-in-the-Middle (MitM)",
          C: "Ransomware",
          D: "SQL Injection",
        },
        correctAnswer: "B",
        explanation:
          "MitM attacks intercept communication between two parties to steal or alter data.",
      },
      {
        qId: "cs10",
        text: "Hashing is mainly used to:",
        options: {
          A: "Encrypt data for transmission",
          B: "Store passwords securely",
          C: "Hide IP addresses",
          D: "Compress large files",
        },
        correctAnswer: "B",
        explanation:
          "Hash functions generate fixed-length codes, ideal for password storage and verification.",
      },
      {
        qId: "cs11",
        text: "A zero-day vulnerability refers to:",
        options: {
          A: "A newly discovered security flaw with no available patch",
          B: "An outdated security issue",
          C: "A malware that self-replicates",
          D: "A user error",
        },
        correctAnswer: "A",
        explanation:
          "Zero-day exploits target software before developers can fix the vulnerability.",
      },
      {
        qId: "cs12",
        text: "The process of verifying user identity is called:",
        options: {
          A: "Authorization",
          B: "Authentication",
          C: "Access Control",
          D: "Auditing",
        },
        correctAnswer: "B",
        explanation:
          "Authentication ensures that only verified users gain access to systems.",
      },
      {
        qId: "cs13",
        text: "Which of the following is an example of social engineering?",
        options: {
          A: "Brute-force attack",
          B: "Tailgating",
          C: "DDoS attack",
          D: "SQL Injection",
        },
        correctAnswer: "B",
        explanation:
          "Social engineering manipulates people to breach security, e.g., entering a secure area by following someone authorized.",
      },
      {
        qId: "cs14",
        text: "Which tool is commonly used for network packet analysis?",
        options: {
          A: "Nmap",
          B: "Wireshark",
          C: "Metasploit",
          D: "Burp Suite",
        },
        correctAnswer: "B",
        explanation:
          "Wireshark captures and analyzes network packets to detect suspicious activities.",
      },
      {
        qId: "cs15",
        text: "In symmetric encryption:",
        options: {
          A: "Public and private keys are used",
          B: "Same key is used for encryption and decryption",
          C: "Keys differ for sender and receiver",
          D: "No key is needed",
        },
        correctAnswer: "B",
        explanation:
          "Symmetric encryption uses one shared key for both processes.",
      },
      {
        qId: "cs16",
        text: "What is the main difference between a virus and a worm?",
        options: {
          A: "Worms require user action, viruses don’t",
          B: "Viruses need user action to spread, worms self-replicate",
          C: "Worms affect only hardware",
          D: "Viruses cannot spread through networks",
        },
        correctAnswer: "B",
        explanation:
          "Worms spread automatically, while viruses attach to files and require execution to spread.",
      },
      {
        qId: "cs17",
        text: "Ransomware typically:",
        options: {
          A: "Deletes user data permanently",
          B: "Encrypts files and demands payment for decryption",
          C: "Hijacks IP addresses",
          D: "Sends spam emails automatically",
        },
        correctAnswer: "B",
        explanation:
          "Ransomware locks access to data until ransom is paid, often via cryptocurrency.",
      },
      {
        qId: "cs18",
        text: "Which cybersecurity framework is widely used for risk management?",
        options: {
          A: "ISO 9001",
          B: "NIST",
          C: "HTTP",
          D: "W3C",
        },
        correctAnswer: "B",
        explanation:
          "The NIST framework provides guidelines for managing and reducing cybersecurity risks.",
      },
      {
        qId: "cs19",
        text: "Public key cryptography is mainly used in:",
        options: {
          A: "Symmetric encryption",
          B: "Asymmetric encryption",
          C: "Hashing",
          D: "Obfuscation",
        },
        correctAnswer: "B",
        explanation:
          "Public key cryptography uses two keys — a public and a private one — for secure communication (asymmetric encryption).",
      },
      {
        qId: "cs20",
        text: "The best defense against phishing is:",
        options: {
          A: "Installing antivirus only",
          B: "User awareness and email verification practices",
          C: "Ignoring all emails",
          D: "Disabling Wi-Fi",
        },
        correctAnswer: "B",
        explanation:
          "Educating users to identify suspicious emails is the most effective preventive measure.",
      },
    ],
  },

  //INTERNET OF THINGS(id:internet_of_things)

  internet_of_things: {
    title: "INTERNET OF THINGS (IoT) – MCQ QUIZ (INTERMEDIATE TO ADVANCED)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "iot1",
        text: "The Internet of Things (IoT) primarily connects:",
        options: {
          A: "People to people",
          B: "Devices to the internet and each other",
          C: "Only computers",
          D: "None of the above",
        },
        correctAnswer: "B",
        explanation:
          "IoT connects smart devices through networks to exchange data automatically.",
      },
      {
        qId: "iot2",
        text: "Which of the following is NOT a layer of the IoT architecture?",
        options: {
          A: "Perception layer",
          B: "Network layer",
          C: "Application layer",
          D: "Database layer",
        },
        correctAnswer: "D",
        explanation:
          "Standard IoT architecture includes perception, network, and application layers.",
      },
      {
        qId: "iot3",
        text: "IoT sensors mainly perform which function?",
        options: {
          A: "Data storage",
          B: "Data collection from the environment",
          C: "Data encryption",
          D: "Data transmission",
        },
        correctAnswer: "B",
        explanation:
          "Sensors collect real-world data like temperature, pressure, or motion.",
      },
      {
        qId: "iot4",
        text: "The protocol most commonly used for IoT message transfer is:",
        options: {
          A: "HTTP",
          B: "MQTT",
          C: "SMTP",
          D: "FTP",
        },
        correctAnswer: "B",
        explanation:
          "MQTT is a lightweight messaging protocol ideal for low-power IoT devices.",
      },
      {
        qId: "iot5",
        text: "Which technology is crucial for IoT device identification?",
        options: {
          A: "IPv6",
          B: "RFID",
          C: "Blockchain",
          D: "VPN",
        },
        correctAnswer: "B",
        explanation:
          "Radio Frequency Identification (RFID) tags uniquely identify connected devices.",
      },
      {
        qId: "iot6",
        text: "Edge computing in IoT helps by:",
        options: {
          A: "Storing data in the cloud",
          B: "Processing data near the source",
          C: "Increasing data latency",
          D: "Reducing local computation",
        },
        correctAnswer: "B",
        explanation:
          "Edge computing minimizes latency by processing data close to IoT devices.",
      },
      {
        qId: "iot7",
        text: "Smart homes and wearable devices are examples of:",
        options: {
          A: "Industrial IoT",
          B: "Consumer IoT",
          C: "Healthcare IoT",
          D: "Agricultural IoT",
        },
        correctAnswer: "B",
        explanation:
          "Consumer IoT devices enhance personal convenience and lifestyle.",
      },
      {
        qId: "iot8",
        text: "The main challenge of IoT systems is:",
        options: {
          A: "High speed",
          B: "Security and privacy",
          C: "Lack of sensors",
          D: "No automation",
        },
        correctAnswer: "B",
        explanation:
          "IoT networks often face risks like unauthorized access and data leaks.",
      },
      {
        qId: "iot9",
        text: "Which of the following IoT devices is used in smart agriculture?",
        options: {
          A: "Soil moisture sensor",
          B: "Smartwatch",
          C: "Smart TV",
          D: "Router",
        },
        correctAnswer: "A",
        explanation:
          "It helps farmers optimize irrigation and monitor crop health.",
      },
      {
        qId: "iot10",
        text: "An IoT gateway functions to:",
        options: {
          A: "Delete data",
          B: "Connect IoT devices to the cloud",
          C: "Increase latency",
          D: "Replace sensors",
        },
        correctAnswer: "B",
        explanation:
          "IoT gateways manage data flow between devices and cloud servers.",
      },
      {
        qId: "iot11",
        text: "What is the main role of the perception layer in IoT?",
        options: {
          A: "Data visualization",
          B: "Data sensing and collection",
          C: "Communication routing",
          D: "Storage and analysis",
        },
        correctAnswer: "B",
        explanation:
          "The perception layer is responsible for sensing and collecting data from the physical world.",
      },
      {
        qId: "iot12",
        text: "Which communication technology is preferred for low-power IoT devices?",
        options: {
          A: "Wi-Fi",
          B: "LoRaWAN",
          C: "Bluetooth Classic",
          D: "Ethernet",
        },
        correctAnswer: "B",
        explanation:
          "LoRaWAN provides long-range, low-power communication for IoT devices.",
      },
      {
        qId: "iot13",
        text: "The concept of “smart cities” uses IoT for:",
        options: {
          A: "Entertainment",
          B: "Real-time traffic and waste management",
          C: "Gaming",
          D: "Cryptocurrency mining",
        },
        correctAnswer: "B",
        explanation:
          "IoT in smart cities is used for optimizing urban services like traffic flow and waste collection.",
      },
      {
        qId: "iot14",
        text: "Which company introduced the term “Internet of Things”?",
        options: {
          A: "IBM",
          B: "Microsoft",
          C: "Cisco",
          D: "Kevin Ashton (Procter & Gamble)",
        },
        correctAnswer: "D",
        explanation:
          "Kevin Ashton coined the term 'Internet of Things' in 1999 while working at Procter & Gamble.",
      },
      {
        qId: "iot15",
        text: "IoT device data is commonly stored using:",
        options: {
          A: "Local databases only",
          B: "Cloud storage",
          C: "Optical disks",
          D: "USB drives",
        },
        correctAnswer: "B",
        explanation:
          "The vast amount of data generated by IoT devices is typically stored and managed in the cloud.",
      },
      {
        qId: "iot16",
        text: "Which of these security techniques helps secure IoT communication?",
        options: {
          A: "Data masking",
          B: "Encryption",
          C: "Compression",
          D: "Data partitioning",
        },
        correctAnswer: "B",
        explanation:
          "Encryption secures data transmitted between IoT devices and the cloud.",
      },
      {
        qId: "iot17",
        text: "Which of the following is NOT a characteristic of IoT?",
        options: {
          A: "Automation",
          B: "Connectivity",
          C: "Isolation",
          D: "Intelligence",
        },
        correctAnswer: "C",
        explanation:
          "IoT relies on high connectivity, not isolation, to function.",
      },
      {
        qId: "iot18",
        text: "The “Thing” in IoT can be:",
        options: {
          A: "Only a smartphone",
          B: "Any object with a sensor and network connection",
          C: "Only a computer",
          D: "None of these",
        },
        correctAnswer: "B",
        explanation:
          "The 'Thing' is a unique physical object capable of collecting and transmitting data.",
      },
      {
        qId: "iot19",
        text: "The biggest issue with massive IoT deployments is:",
        options: {
          A: "Excess energy",
          B: "Device management and scalability",
          C: "Small data",
          D: "No AI support",
        },
        correctAnswer: "B",
        explanation:
          "Managing and scaling millions or billions of diverse devices presents significant operational challenges.",
      },
      {
        qId: "iot20",
        text: "Which of these best describes “Industrial IoT”?",
        options: {
          A: "IoT in homes",
          B: "IoT applied in manufacturing and logistics",
          C: "IoT in wearable tech",
          D: "IoT in healthcare",
        },
        correctAnswer: "B",
        explanation:
          "IIoT (Industrial IoT) focuses on optimizing industrial processes, production, and supply chains.",
      },
    ],
  },

  //BLOCKCHAIN(id:blockchain)

  blockchain: {
    title: "BLOCKCHAIN – MCQ QUIZ (INTERMEDIATE TO ADVANCED)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "bc1",
        text: "Blockchain is primarily a:",
        options: {
          A: "Centralized database",
          B: "Decentralized distributed ledger",
          C: "File-sharing protocol",
          D: "Data warehouse",
        },
        correctAnswer: "B",
        explanation:
          "Blockchain is a distributed ledger technology that operates without a central authority.",
      },
      {
        qId: "bc2",
        text: "Each block in a blockchain contains:",
        options: {
          A: "Only transaction data",
          B: "Hash of previous block + data + timestamp",
          C: "Only user IDs",
          D: "Encryption keys only",
        },
        correctAnswer: "B",
        explanation:
          "Each block includes the hash of the preceding block to link the chain together, plus its own data and a timestamp.",
      },
      {
        qId: "bc3",
        text: "The immutability of blockchain data is achieved using:",
        options: {
          A: "Cloud storage",
          B: "Cryptographic hashing",
          C: "User passwords",
          D: "Relational databases",
        },
        correctAnswer: "B",
        explanation:
          "Cryptographic hashing ensures that any change to a block invalidates the hashes of all subsequent blocks.",
      },
      {
        qId: "bc4",
        text: "What consensus mechanism is used by Bitcoin?",
        options: {
          A: "Proof of Stake",
          B: "Proof of Work",
          C: "Delegated Proof",
          D: "Byzantine Fault Tolerance",
        },
        correctAnswer: "B",
        explanation:
          "Bitcoin uses Proof of Work (PoW), requiring miners to expend computational effort to validate transactions.",
      },
      {
        qId: "bc5",
        text: "A “smart contract” is:",
        options: {
          A: "A legal document",
          B: "Code that executes automatically when conditions are met",
          C: "A token",
          D: "A mining protocol",
        },
        correctAnswer: "B",
        explanation:
          "Smart contracts are self-executing contracts with the terms of the agreement directly written into code.",
      },
      {
        qId: "bc6",
        text: "Ethereum was developed by:",
        options: {
          A: "Satoshi Nakamoto",
          B: "Vitalik Buterin",
          C: "Elon Musk",
          D: "Charles Hoskinson",
        },
        correctAnswer: "B",
        explanation:
          "Vitalik Buterin is the co-founder of the Ethereum blockchain.",
      },
      {
        qId: "bc7",
        text: "In blockchain, a fork occurs when:",
        options: {
          A: "The chain splits into two versions",
          B: "The data is deleted",
          C: "A node fails",
          D: "The block is mined twice",
        },
        correctAnswer: "A",
        explanation:
          "A fork happens when the network consensus temporarily or permanently splits, resulting in two different chains.",
      },
      {
        qId: "bc8",
        text: "The primary benefit of decentralization is:",
        options: {
          A: "Faster data transfer",
          B: "Reduced single-point failure",
          C: "Central authority control",
          D: "Higher costs",
        },
        correctAnswer: "B",
        explanation:
          "Decentralization distributes control, making the system resilient to attacks or failure at a single point.",
      },
      {
        qId: "bc9",
        text: "Mining in blockchain involves:",
        options: {
          A: "Solving complex cryptographic puzzles",
          B: "Editing block data",
          C: "Uploading files",
          D: "Creating user accounts",
        },
        correctAnswer: "A",
        explanation:
          "Miners use computational power to solve puzzles (PoW) to validate transactions and add new blocks to the chain.",
      },
      {
        qId: "bc10",
        text: "Which of the following blockchains supports decentralized applications (DApps)?",
        options: {
          A: "Bitcoin",
          B: "Ethereum",
          C: "Ripple",
          D: "Litecoin",
        },
        correctAnswer: "B",
        explanation:
          "Ethereum was designed with smart contract capabilities, making it the primary platform for DApps.",
      },
      {
        qId: "bc11",
        text: "A hash function in blockchain must be:",
        options: {
          A: "Reversible",
          B: "Deterministic and one-way",
          C: "Randomized",
          D: "Plaintext",
        },
        correctAnswer: "B",
        explanation:
          "The same input must always produce the same output (deterministic), and it must be computationally infeasible to reverse the process (one-way).",
      },
      {
        qId: "bc12",
        text: "What is a blockchain node?",
        options: {
          A: "A transaction",
          B: "A device maintaining a copy of the ledger",
          C: "A user wallet",
          D: "A miner only",
        },
        correctAnswer: "B",
        explanation:
          "A node is a computer connected to the blockchain network that validates and stores the blockchain's data.",
      },
      {
        qId: "bc13",
        text: "In Proof of Stake, the chance to create a block depends on:",
        options: {
          A: "Hash power",
          B: "Coin ownership",
          C: "Network speed",
          D: "Node size",
        },
        correctAnswer: "B",
        explanation:
          "In PoS, validators are chosen based on the amount of cryptocurrency they 'stake' or hold.",
      },
      {
        qId: "bc14",
        text: "The process of verifying blockchain transactions is called:",
        options: {
          A: "Hashing",
          B: "Mining",
          C: "Logging",
          D: "Caching",
        },
        correctAnswer: "B",
        explanation:
          "Mining (in PoW) or validating (in PoS) is the process of verifying transactions and bundling them into a new block.",
      },
      {
        qId: "bc15",
        text: "The smallest Bitcoin unit is called:",
        options: {
          A: "Block",
          B: "Token",
          C: "Satoshi",
          D: "Ether",
        },
        correctAnswer: "C",
        explanation: "One Satoshi is equal to 0.00000001 BTC.",
      },
      {
        qId: "bc16",
        text: "Public blockchains are:",
        options: {
          A: "Permissioned",
          B: "Open to anyone for participation",
          C: "Restricted to banks",
          D: "Private networks",
        },
        correctAnswer: "B",
        explanation:
          "Public blockchains (like Bitcoin or Ethereum) are open and transparent, allowing anyone to join, read, and participate.",
      },
      {
        qId: "bc17",
        text: "A private blockchain is mainly used by:",
        options: {
          A: "Open communities",
          B: "Enterprises needing controlled access",
          C: "Hackers",
          D: "Governments only",
        },
        correctAnswer: "B",
        explanation:
          "Private (permissioned) blockchains restrict access to a select group of authorized participants, often used by companies or consortiums.",
      },
      {
        qId: "bc18",
        text: "The 51% attack affects:",
        options: {
          A: "Private blockchains only",
          B: "Blockchains where one miner controls most computing power",
          C: "Blockchain wallets",
          D: "Non-mining nodes",
        },
        correctAnswer: "B",
        explanation:
          "A 51% attack occurs when one entity gains control of more than half of the network's hash rate, allowing them to potentially manipulate transactions.",
      },
      {
        qId: "bc19",
        text: "Which programming language is used for Ethereum smart contracts?",
        options: {
          A: "Solidity",
          B: "Java",
          C: "Python",
          D: "Go",
        },
        correctAnswer: "A",
        explanation:
          "Solidity is the most popular, high-level language for implementing smart contracts on the Ethereum Virtual Machine (EVM).",
      },
      {
        qId: "bc20",
        text: "Blockchain improves data security mainly by:",
        options: {
          A: "Central storage",
          B: "Transparency and cryptographic validation",
          C: "Password protection",
          D: "File compression",
        },
        correctAnswer: "B",
        explanation:
          "Security is enhanced through transparent ledger copies distributed across the network and cryptographic chaining of blocks, making tampering traceable.",
      },
    ],
  },

  //BIG DATA(id:bigdata)

  bigdata: {
    title: "Big Data – MCQ Quiz (Intermediate → Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "bd1",
        text: "Big Data is primarily characterized by:",
        options: {
          A: "3D printing",
          B: "Volume, Velocity, Variety",
          C: "Low latency",
          D: "Structured databases only",
        },
        correctAnswer: "B",
        explanation:
          "The three Vs — Volume, Velocity, and Variety — define Big Data characteristics.",
      },
      {
        qId: "bd2",
        text: "HDFS stands for:",
        options: {
          A: "Hadoop Distributed File System",
          B: "High Data File System",
          C: "Hadoop Data File Service",
          D: "Hyper Distributed File Storage",
        },
        correctAnswer: "A",
        explanation: "HDFS is the storage layer for Apache Hadoop.",
      },
      {
        qId: "bd3",
        text: "MapReduce in Big Data is used for:",
        options: {
          A: "Data encryption",
          B: "Distributed data processing",
          C: "Web hosting",
          D: "Memory caching",
        },
        correctAnswer: "B",
        explanation:
          "MapReduce is a programming model for processing large datasets with a parallel, distributed algorithm.",
      },
      {
        qId: "bd4",
        text: "Which of the following is a NoSQL database commonly used in Big Data?",
        options: {
          A: "MySQL",
          B: "MongoDB",
          C: "Oracle",
          D: "SQL Server",
        },
        correctAnswer: "B",
        explanation:
          "MongoDB is a document-based NoSQL database widely used for handling varied, large-scale data.",
      },
      {
        qId: "bd5",
        text: "Apache Spark is preferred over Hadoop MapReduce because:",
        options: {
          A: "It is slower",
          B: "It provides in-memory computation",
          C: "It stores less data",
          D: "It does not support clusters",
        },
        correctAnswer: "B",
        explanation:
          "Spark's ability to process data in memory makes it significantly faster than disk-based MapReduce.",
      },
      {
        qId: "bd6",
        text: "Data streaming in Big Data is handled by:",
        options: {
          A: "Apache Kafka",
          B: "Hadoop HDFS",
          C: "RDBMS",
          D: "Excel",
        },
        correctAnswer: "A",
        explanation:
          "Apache Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications.",
      },
      {
        qId: "bd7",
        text: "Which Big Data component is used for batch processing?",
        options: {
          A: "Apache Spark Streaming",
          B: "Apache Hadoop",
          C: "MongoDB",
          D: "Tableau",
        },
        correctAnswer: "B",
        explanation:
          "Apache Hadoop (specifically MapReduce) is traditionally used for large-scale, non-time-critical batch processing.",
      },
      {
        qId: "bd8",
        text: "ETL stands for:",
        options: {
          A: "Extract, Transform, Load",
          B: "Encrypt, Transfer, Log",
          C: "Evaluate, Train, Learn",
          D: "Encode, Test, Launch",
        },
        correctAnswer: "A",
        explanation:
          "ETL is the process of extracting data from sources, transforming it into a useful format, and loading it into a destination.",
      },
      {
        qId: "bd9",
        text: "Which tool is used for Big Data visualization?",
        options: {
          A: "Tableau",
          B: "Eclipse",
          C: "Jenkins",
          D: "Git",
        },
        correctAnswer: "A",
        explanation:
          "Tableau is a popular business intelligence and data visualization tool used to create interactive dashboards from large datasets.",
      },
      {
        qId: "bd10",
        text: "Data variety in Big Data refers to:",
        options: {
          A: "Different file formats and types",
          B: "Data speed",
          C: "Data volume",
          D: "Data accuracy",
        },
        correctAnswer: "A",
        explanation:
          "Variety refers to the diverse range of data sources, formats (structured, semi-structured, unstructured), and types.",
      },
      {
        qId: "bd11",
        text: "Hadoop’s HDFS divides data into:",
        options: {
          A: "Files",
          B: "Blocks",
          C: "Tables",
          D: "Partitions",
        },
        correctAnswer: "B",
        explanation:
          "HDFS splits large files into smaller pieces called blocks (typically 128MB or 256MB) for distribution across nodes.",
      },
      {
        qId: "bd12",
        text: "Which language is used for writing Spark programs?",
        options: {
          A: "Java, Scala, Python",
          B: "C++ only",
          C: "Ruby",
          D: "PHP",
        },
        correctAnswer: "A",
        explanation:
          "Apache Spark provides APIs for Java, Scala, Python, and R.",
      },
      {
        qId: "bd13",
        text: "Which of the following is an open-source Big Data framework?",
        options: {
          A: "Hadoop",
          B: "Oracle",
          C: "SQL Server",
          D: "MS Access",
        },
        correctAnswer: "A",
        explanation:
          "Apache Hadoop is the foundational open-source framework for storing and processing Big Data.",
      },
      {
        qId: "bd14",
        text: "Data velocity refers to:",
        options: {
          A: "Data size",
          B: "Speed at which data is generated and processed",
          C: "Variety of formats",
          D: "Accuracy",
        },
        correctAnswer: "B",
        explanation:
          "Velocity is the speed at which data is created, collected, and needs to be processed, often in real-time.",
      },
      {
        qId: "bd15",
        text: "NoSQL databases are preferred for Big Data because they are:",
        options: {
          A: "Structured",
          B: "Schema-less and scalable",
          C: "Expensive",
          D: "Slow",
        },
        correctAnswer: "B",
        explanation:
          "NoSQL databases can handle unstructured data (schema-less) and scale horizontally easily to accommodate high volume.",
      },
      {
        qId: "bd16",
        text: "Which of the following is used for real-time processing?",
        options: {
          A: "Hadoop MapReduce",
          B: "Spark Streaming",
          C: "HDFS",
          D: "Hive",
        },
        correctAnswer: "B",
        explanation:
          "Spark Streaming allows for continuous processing of live data streams.",
      },
      {
        qId: "bd17",
        text: "Which of these is a Big Data programming model?",
        options: {
          A: "MapReduce",
          B: "Bootstrap",
          C: "jQuery",
          D: "React",
        },
        correctAnswer: "A",
        explanation:
          "MapReduce is a core programming model designed for distributed processing of massive data sets.",
      },
      {
        qId: "bd18",
        text: "Which of the following supports distributed storage?",
        options: {
          A: "HDFS",
          B: "Excel",
          C: "SQLite",
          D: "Access",
        },
        correctAnswer: "A",
        explanation:
          "HDFS (Hadoop Distributed File System) is designed to store data across multiple commodity hardware machines.",
      },
      {
        qId: "bd19",
        text: "Big Data analytics helps businesses mainly in:",
        options: {
          A: "Reducing memory usage",
          B: "Decision-making based on insights",
          C: "Running small apps",
          D: "Desktop file management",
        },
        correctAnswer: "B",
        explanation:
          "The ultimate goal of Big Data analytics is to derive actionable insights to drive better business decisions.",
      },
      {
        qId: "bd20",
        text: "The “Volume” in Big Data refers to:",
        options: {
          A: "Data quantity",
          B: "Data variety",
          C: "Data veracity",
          D: "Data velocity",
        },
        correctAnswer: "A",
        explanation:
          "Volume refers to the immense size or quantity of data being generated.",
      },
    ],
  },

  //FULL STACK DEVELOPMENT(id:full_stack)

  full_stack: {
    title: "Full Stack (MERN) Development – MCQ QUIZ",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "mern1",
        text: "MERN stands for:",
        options: {
          A: "MySQL, Express, React, Node",
          B: "MongoDB, Express.js, React.js, Node.js",
          C: "MySQL, Express, Redux, Node",
          D: "MongoDB, Ember, React, Node",
        },
        correctAnswer: "B",
        explanation:
          "MERN is an acronym for the four technologies: MongoDB, Express.js, React.js, and Node.js.",
      },
      {
        qId: "mern2",
        text: "MongoDB is a:",
        options: {
          A: "Relational database",
          B: "NoSQL document-based database",
          C: "Key-value store",
          D: "Graph database",
        },
        correctAnswer: "B",
        explanation:
          "MongoDB is a document database that stores data in flexible, JSON-like documents.",
      },
      {
        qId: "mern3",
        text: "Express.js is used for:",
        options: {
          A: "Frontend UI",
          B: "Backend web server framework",
          C: "Database queries",
          D: "CSS styling",
        },
        correctAnswer: "B",
        explanation:
          "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
      },
      {
        qId: "mern4",
        text: "React.js uses which concept for UI updates?",
        options: {
          A: "Virtual DOM",
          B: "Live DOM",
          C: "Backend rendering",
          D: "SQL queries",
        },
        correctAnswer: "A",
        explanation:
          "The Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory and synced with the 'real' DOM.",
      },
      {
        qId: "mern5",
        text: "Node.js allows JavaScript to run:",
        options: {
          A: "Only in browsers",
          B: "On the server",
          C: "On mobile apps only",
          D: "On databases",
        },
        correctAnswer: "B",
        explanation:
          "Node.js is a runtime environment that executes JavaScript code outside a web browser, typically on a server.",
      },
      {
        qId: "mern6",
        text: "Which of these is used to manage dependencies in Node.js?",
        options: {
          A: "npm",
          B: "yarn",
          C: "Both A and B",
          D: "pip",
        },
        correctAnswer: "C",
        explanation:
          "Both npm (Node Package Manager) and yarn are package managers used to install, share, and manage project dependencies in Node.js.",
      },
      {
        qId: "mern7",
        text: "In MERN, data flows from MongoDB to React using:",
        options: {
          A: "Express APIs",
          B: "Direct database connection",
          C: "Redux only",
          D: "Node CLI",
        },
        correctAnswer: "A",
        explanation:
          "The Express.js framework running on Node.js serves as the intermediary API layer, fetching data from MongoDB and sending it to the React frontend.",
      },
      {
        qId: "mern8",
        text: "The JSX syntax in React allows:",
        options: {
          A: "Using HTML in JavaScript",
          B: "Styling with CSS",
          C: "Database connection",
          D: "Node execution",
        },
        correctAnswer: "A",
        explanation:
          "JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.",
      },
      {
        qId: "mern9",
        text: "Which HTTP method is used to fetch data from an API?",
        options: {
          A: "GET",
          B: "POST",
          C: "DELETE",
          D: "PUT",
        },
        correctAnswer: "A",
        explanation:
          "The GET method is used to request data from a specified resource.",
      },
      {
        qId: "mern10",
        text: "In MongoDB, a collection is:",
        options: {
          A: "Equivalent to a table",
          B: "Equivalent to a database",
          C: "Equivalent to a column",
          D: "A schema",
        },
        correctAnswer: "A",
        explanation:
          "A collection in MongoDB is equivalent to a table in relational databases, grouping related documents.",
      },
      {
        qId: "mern11",
        text: "Node.js is built on which engine?",
        options: {
          A: "SpiderMonkey",
          B: "V8",
          C: "Chakra",
          D: "Rhino",
        },
        correctAnswer: "B",
        explanation:
          "Node.js uses the Google V8 engine, which is the same engine used in Google Chrome, to execute JavaScript code.",
      },
      {
        qId: "mern12",
        text: "React.js is primarily:",
        options: {
          A: "Backend framework",
          B: "Frontend library",
          C: "Database engine",
          D: "Middleware",
        },
        correctAnswer: "B",
        explanation:
          "React.js is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
      },
      {
        qId: "mern13",
        text: "Express.js routing allows:",
        options: {
          A: "Defining API endpoints",
          B: "Styling pages",
          C: "Database indexing",
          D: "State management",
        },
        correctAnswer: "A",
        explanation:
          "Routing in Express.js refers to determining how an application responds to a client request to a particular endpoint URL (URI) and a specific HTTP method (GET, POST, etc.).",
      },
      {
        qId: "mern14",
        text: "MongoDB stores data in:",
        options: {
          A: "Tables",
          B: "Documents",
          C: "Arrays only",
          D: "CSV files",
        },
        correctAnswer: "B",
        explanation:
          "MongoDB is a document database, meaning it stores data records as BSON documents (a binary representation of JSON).",
      },
      {
        qId: "mern15",
        text: "Which of these is a state management library often used with React?",
        options: {
          A: "Redux",
          B: "jQuery",
          C: "Express",
          D: "Node.js",
        },
        correctAnswer: "A",
        explanation:
          "Redux is a predictable state container often used alongside React to manage application state across components.",
      },
      {
        qId: "mern16",
        text: "In MERN, backend APIs are built using:",
        options: {
          A: "React.js",
          B: "Express.js & Node.js",
          C: "MongoDB only",
          D: "HTML & CSS",
        },
        correctAnswer: "B",
        explanation:
          "Express.js provides the structure and routing capabilities, while Node.js provides the runtime environment for the backend server.",
      },
      {
        qId: "mern17",
        text: "React components can be:",
        options: {
          A: "Class-based or functional",
          B: "Only functional",
          C: "Only class-based",
          D: "Only templates",
        },
        correctAnswer: "A",
        explanation:
          "Historically, React used both class components (before Hooks) and functional components; both are still supported today.",
      },
      {
        qId: "mern18",
        text: "Which method in React updates state?",
        options: {
          A: "this.setState()",
          B: "setState()",
          C: "state.update()",
          D: "updateState()",
        },
        correctAnswer: "A",
        explanation:
          "For class components, `this.setState()` is the primary method to schedule an update to the component's state.",
      },
      {
        qId: "mern19",
        text: "Which package is used to connect MongoDB with Node.js?",
        options: {
          A: "mongoose",
          B: "sequelize",
          C: "express-mongo",
          D: "react-mongo",
        },
        correctAnswer: "A",
        explanation:
          "Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution.",
      },
      {
        qId: "mern20",
        text: "Full-stack development refers to:",
        options: {
          A: "Only frontend development",
          B: "Both frontend and backend development",
          C: "Database management only",
          D: "Server hardware management",
        },
        correctAnswer: "B",
        explanation:
          "A full-stack developer works with all layers of an application, from the user interface (frontend) to the server logic and database (backend).",
      },
    ],
  },

  //DATA ANALYTICS(id:data_analytics)

  data_analytics: {
    title: "Data Analytics – MCQ Quiz (Intermediate → Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "da1",
        text: "Data Analytics primarily involves:",
        options: {
          A: "Designing websites",
          B: "Extracting insights from raw data",
          C: "Writing Java programs",
          D: "Running operating systems",
        },
        correctAnswer: "B",
        explanation:
          "Data analytics transforms data into meaningful insights for decision-making.",
      },
      {
        qId: "da2",
        text: "Which of the following is NOT a type of data analytics?",
        options: {
          A: "Descriptive",
          B: "Predictive",
          C: "Prescriptive",
          D: "Sequential",
        },
        correctAnswer: "D",
        explanation:
          "The four main types are Descriptive, Diagnostic, Predictive, and Prescriptive.",
      },
      {
        qId: "da3",
        text: "ETL in data analytics stands for:",
        options: {
          A: "Extract, Transform, Load",
          B: "Evaluate, Transfer, Learn",
          C: "Encrypt, Test, Log",
          D: "Extract, Test, Launch",
        },
        correctAnswer: "A",
        explanation: "ETL is the process of getting data ready for analysis.",
      },
      {
        qId: "da4",
        text: "Data cleaning helps by:",
        options: {
          A: "Encrypting data",
          B: "Removing inconsistencies and errors",
          C: "Deleting databases",
          D: "Reducing server speed",
        },
        correctAnswer: "B",
        explanation:
          "Data cleaning, or scrubbing, ensures data quality before analysis.",
      },
      {
        qId: "da5",
        text: "Which visualization tool is commonly used in analytics?",
        options: {
          A: "Tableau",
          B: "Photoshop",
          C: "VS Code",
          D: "Eclipse",
        },
        correctAnswer: "A",
        explanation:
          "Tableau is a leading tool for creating visual reports and dashboards.",
      },
      {
        qId: "da6",
        text: "Predictive analytics uses:",
        options: {
          A: "Historical data and statistical models",
          B: "Only current data",
          C: "Manual calculations",
          D: "None of the above",
        },
        correctAnswer: "A",
        explanation:
          "Predictive analytics forecasts future events using past data and techniques like regression or machine learning.",
      },
      {
        qId: "da7",
        text: "In analytics, a KPI stands for:",
        options: {
          A: "Key Performance Indicator",
          B: "Knowledge Process Interface",
          C: "Known Prediction Index",
          D: "Key Programming Indicator",
        },
        correctAnswer: "A",
        explanation:
          "KPIs are quantifiable measures used to track and assess specific business objectives.",
      },
      {
        qId: "da8",
        text: "Which of these is a data analytics programming language?",
        options: {
          A: "R",
          B: "Python",
          C: "Both A and B",
          D: "Java only",
        },
        correctAnswer: "C",
        explanation:
          "R and Python are the two most popular languages for statistical computing and data science.",
      },
      {
        qId: "da9",
        text: "Outliers in datasets:",
        options: {
          A: "Are always correct",
          B: "Can skew analysis",
          C: "Have no effect",
          D: "Are mandatory for predictions",
        },
        correctAnswer: "B",
        explanation:
          "Outliers (data points far from others) can drastically distort statistical results and model training.",
      },
      {
        qId: "da10",
        text: "Correlation measures:",
        options: {
          A: "Causation",
          B: "Relationship between two variables",
          C: "Randomness",
          D: "Accuracy",
        },
        correctAnswer: "B",
        explanation:
          "Correlation quantifies the degree to which two variables are related, but does not imply causation.",
      },
      {
        qId: "da11",
        text: "Which type of analytics answers “what happened?”",
        options: {
          A: "Descriptive",
          B: "Predictive",
          C: "Prescriptive",
          D: "Diagnostic",
        },
        correctAnswer: "A",
        explanation: "Descriptive analytics summarizes past data.",
      },
      {
        qId: "da12",
        text: "A/B testing is used to:",
        options: {
          A: "Compare two variants and evaluate performance",
          B: "Analyze time series",
          C: "Create dashboards",
          D: "Data encryption",
        },
        correctAnswer: "A",
        explanation:
          "A/B testing is an experimental approach to test two versions of a variable to see which performs better.",
      },
      {
        qId: "da13",
        text: "Which of the following is used for big data analytics?",
        options: {
          A: "Hadoop",
          B: "Tableau",
          C: "Excel",
          D: "Both A and B",
        },
        correctAnswer: "D",
        explanation:
          "Hadoop handles big data processing, and Tableau is used for visualizing the results.",
      },
      {
        qId: "da14",
        text: "Which metric measures predictive model accuracy for classification?",
        options: {
          A: "Precision",
          B: "Recall",
          C: "F1 Score",
          D: "All of the above",
        },
        correctAnswer: "D",
        explanation:
          "Precision, Recall, and F1 Score are all crucial metrics for evaluating classification models, especially with imbalanced data.",
      },
      {
        qId: "da15",
        text: "Descriptive analytics is mainly:",
        options: {
          A: "Forward-looking",
          B: "Historical and summary-based",
          C: "Prescriptive",
          D: "Predictive only",
        },
        correctAnswer: "B",
        explanation:
          "It focuses on summarizing and describing characteristics of past data.",
      },
      {
        qId: "da16",
        text: "Data wrangling involves:",
        options: {
          A: "Collecting, cleaning, transforming data",
          B: "Encrypting files",
          C: "Compiling programs",
          D: "Setting up networks",
        },
        correctAnswer: "A",
        explanation:
          "Data wrangling (or Munging) is the process of cleaning, structuring, and enriching raw data into a desired format for analysis.",
      },
      {
        qId: "da17",
        text: "Which type of chart is best for trends over time?",
        options: {
          A: "Line chart",
          B: "Pie chart",
          C: "Bar chart",
          D: "Scatter plot",
        },
        correctAnswer: "A",
        explanation:
          "Line charts effectively show changes and trends in a single variable over a continuous period.",
      },
      {
        qId: "da18",
        text: "Machine learning in analytics helps to:",
        options: {
          A: "Predict future outcomes",
          B: "Design websites",
          C: "Store data",
          D: "Encrypt data",
        },
        correctAnswer: "A",
        explanation:
          "Machine learning is the primary driver for predictive analytics.",
      },
      {
        qId: "da19",
        text: "Data normalization ensures:",
        options: {
          A: "Uniform scaling of features",
          B: "Data deletion",
          C: "Faster compilation",
          D: "None of the above",
        },
        correctAnswer: "A",
        explanation:
          "Normalization scales numerical features to a standard range (e.g., 0 to 1) so they contribute equally to model training.",
      },
      {
        qId: "da20",
        text: "Which of these is a common data source for analytics?",
        options: {
          A: "Logs",
          B: "Databases",
          C: "APIs",
          D: "All of the above",
        },
        correctAnswer: "D",
        explanation:
          "Analysts gather data from a multitude of sources, including system logs, databases (SQL/NoSQL), and external APIs.",
      },
    ],
  },
  //QUANTUM COMPUTING(id:quantum_computing)

  quantum_computing: {
    title: "Quantum Computing – MCQ Quiz (Intermediate → Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "qc1",
        text: "Quantum computing uses which principle?",
        options: {
          A: "Classical bits",
          B: "Quantum bits (qubits)",
          C: "RAM and CPU",
          D: "Hard disks",
        },
        correctAnswer: "B",
        explanation:
          "Quantum computers use qubits, which leverage quantum mechanical phenomena like superposition and entanglement.",
      },
      {
        qId: "qc2",
        text: "A qubit can exist in:",
        options: {
          A: "0 only",
          B: "1 only",
          C: "Superposition of 0 and 1",
          D: "None of these",
        },
        correctAnswer: "C",
        explanation:
          "Superposition allows a qubit to be in a probabilistic combination of all possible states simultaneously.",
      },
      {
        qId: "qc3",
        text: "Quantum entanglement refers to:",
        options: {
          A: "Independent qubits",
          B: "Correlation between qubits even at distance",
          C: "Data storage",
          D: "Encryption",
        },
        correctAnswer: "B",
        explanation:
          "Entanglement links the properties of two or more qubits such that they cannot be described independently.",
      },
      {
        qId: "qc4",
        text: "Which of the following is NOT a quantum gate?",
        options: {
          A: "Hadamard",
          B: "Pauli-X",
          C: "CNOT",
          D: "AND",
        },
        correctAnswer: "D",
        explanation:
          "AND is a classical logic gate; Hadamard, Pauli-X, and CNOT are fundamental quantum gates.",
      },
      {
        qId: "qc5",
        text: "Quantum computers are faster than classical computers for:",
        options: {
          A: "All tasks",
          B: "Certain tasks like factoring large numbers",
          C: "Web browsing",
          D: "Text editing",
        },
        correctAnswer: "B",
        explanation:
          "Quantum computers offer exponential speedup only for specific problems where quantum algorithms exist, like Shor's algorithm.",
      },
      {
        qId: "qc6",
        text: "Qubits are implemented using:",
        options: {
          A: "Photons, electrons, or ions",
          B: "Only electrons",
          C: "Magnetic disks",
          D: "CPU cores",
        },
        correctAnswer: "A",
        explanation:
          "Qubits can be realized physically using various systems, including trapped ions, superconducting circuits, or the spin of electrons/photons.",
      },
      {
        qId: "qc7",
        text: "Quantum decoherence is:",
        options: {
          A: "Maintaining qubit state",
          B: "Loss of qubit information due to environment",
          C: "Faster computation",
          D: "Data storage method",
        },
        correctAnswer: "B",
        explanation:
          "Decoherence is the rapid loss of quantum properties (superposition and entanglement) due to interaction with the environment.",
      },
      {
        qId: "qc8",
        text: "Shor’s algorithm is used for:",
        options: {
          A: "Factorizing large integers",
          B: "Sorting arrays",
          C: "Searching databases",
          D: "Encryption only",
        },
        correctAnswer: "A",
        explanation:
          "Shor's algorithm can efficiently break common public-key cryptography (like RSA) by factoring large numbers.",
      },
      {
        qId: "qc9",
        text: "Quantum supremacy refers to:",
        options: {
          A: "Quantum computers performing tasks classical computers can’t efficiently",
          B: "Quantum internet",
          C: "Classical computer speed",
          D: "AI model training",
        },
        correctAnswer: "A",
        explanation:
          "Quantum supremacy (or advantage) is achieved when a quantum machine solves a problem in a matter of minutes that would take the fastest supercomputer thousands of years.",
      },
      {
        qId: "qc10",
        text: "The Bloch sphere represents:",
        options: {
          A: "Classical bits",
          B: "Qubit states",
          C: "Storage disks",
          D: "CPU cores",
        },
        correctAnswer: "B",
        explanation:
          "The Bloch sphere is a geometrical representation of the pure state space of a single qubit.",
      },
      {
        qId: "qc11",
        text: "Quantum computing relies on:",
        options: {
          A: "Binary logic only",
          B: "Quantum mechanics principles",
          C: "CMOS technology",
          D: "SSD storage",
        },
        correctAnswer: "B",
        explanation:
          "It exploits quantum mechanical principles to perform computations.",
      },
      {
        qId: "qc12",
        text: "Which company developed the IBM Q System?",
        options: {
          A: "Google",
          B: "IBM",
          C: "Microsoft",
          D: "Intel",
        },
        correctAnswer: "B",
        explanation:
          "IBM is a major player in quantum hardware and software, developing the IBM Q System.",
      },
      {
        qId: "qc13",
        text: "Grover’s algorithm is used for:",
        options: {
          A: "Factoring integers",
          B: "Searching unsorted databases",
          C: "Sorting data",
          D: "Quantum error correction",
        },
        correctAnswer: "B",
        explanation:
          "Grover's algorithm provides a quadratic speedup for searching an unsorted database compared to classical algorithms.",
      },
      {
        qId: "qc14",
        text: "Which is a main challenge in building quantum computers?",
        options: {
          A: "Quantum decoherence",
          B: "Classical memory limitation",
          C: "Hard disk speed",
          D: "Monitor resolution",
        },
        correctAnswer: "A",
        explanation:
          "Maintaining the stability of qubits and preventing decoherence is the most difficult challenge.",
      },
      {
        qId: "qc15",
        text: "Qubits can be in which two states simultaneously due to:",
        options: {
          A: "Entanglement",
          B: "Superposition",
          C: "Decoherence",
          D: "Isolation",
        },
        correctAnswer: "B",
        explanation:
          "Superposition is the property that allows a quantum system to exist in multiple states at once.",
      },
      {
        qId: "qc16",
        text: "Which of the following is a quantum programming framework?",
        options: {
          A: "Qiskit",
          B: "TensorFlow",
          C: "React",
          D: "Hadoop",
        },
        correctAnswer: "A",
        explanation:
          "Qiskit is an open-source SDK developed by IBM for working with quantum computers at the level of circuits, algorithms, and applications.",
      },
      {
        qId: "qc17",
        text: "Quantum teleportation allows:",
        options: {
          A: "Sending data faster than light",
          B: "Transferring qubit state to another qubit remotely",
          C: "Classical file transfer",
          D: "Cloud data backup",
        },
        correctAnswer: "B",
        explanation:
          "It is a process by which quantum information (the state of a qubit) is transmitted from one location to another using entanglement.",
      },
      {
        qId: "qc18",
        text: "Which hardware is used for superconducting qubits?",
        options: {
          A: "Silicon chips",
          B: "Cryogenic circuits",
          C: "Photovoltaics",
          D: "USB drives",
        },
        correctAnswer: "B",
        explanation:
          "Superconducting qubits must be kept at extremely low temperatures (near absolute zero) using cryogenic equipment to maintain their quantum state.",
      },
      {
        qId: "qc19",
        text: "Quantum error correction is important because:",
        options: {
          A: "Qubits are perfectly stable",
          B: "Qubits are prone to errors from decoherence",
          C: "Classical storage is expensive",
          D: "None of these",
        },
        correctAnswer: "B",
        explanation:
          "Due to high noise and instability (decoherence), error correction is vital for scalable quantum computers.",
      },
      {
        qId: "qc20",
        text: "The main advantage of quantum computing over classical is:",
        options: {
          A: "Lower electricity usage",
          B: "Faster solution for certain complex problems",
          C: "Smaller size",
          D: "Classical simulation",
        },
        correctAnswer: "B",
        explanation:
          "Quantum computing is designed to solve specific, highly complex mathematical and computational problems faster than any classical computer.",
      },
    ],
  },
  //DATA STRUCTURES AND ALGORITHMS(id:dsa)

  dsa: {
    title: "Data Structures & Algorithms (DSA) – MCQ Quiz (C, C++, Java)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "dsa1",
        text: "Which data structure uses LIFO (Last In, First Out)?",
        options: {
          A: "Queue",
          B: "Stack",
          C: "Array",
          D: "Linked List",
        },
        correctAnswer: "B",
        explanation:
          "Stack operations follow LIFO order, where the last element added is the first one removed.",
      },
      {
        qId: "dsa2",
        text: "Which of these is a linear data structure?",
        options: {
          A: "Array",
          B: "Graph",
          C: "Tree",
          D: "Heap",
        },
        correctAnswer: "A",
        explanation:
          "Linear data structures (like arrays, linked lists, queues, stacks) arrange data sequentially.",
      },
      {
        qId: "dsa3",
        text: "Which traversal method visits nodes in “Left-Root-Right” order?",
        options: {
          A: "Pre-order",
          B: "In-order",
          C: "Post-order",
          D: "Level-order",
        },
        correctAnswer: "B",
        explanation:
          "In-order traversal is commonly used to print elements of a Binary Search Tree (BST) in sorted order.",
      },
      {
        qId: "dsa4",
        text: "The time complexity of binary search on a sorted array is:",
        options: {
          A: "O(n)",
          B: "O(log n)",
          C: "O(n log n)",
          D: "O(1)",
        },
        correctAnswer: "B",
        explanation:
          "Binary search eliminates half the search space in each step, resulting in logarithmic time complexity.",
      },
      {
        qId: "dsa5",
        text: "A queue that allows insertion and deletion at both ends is called:",
        options: {
          A: "Circular Queue",
          B: "Deque",
          C: "Priority Queue",
          D: "Simple Queue",
        },
        correctAnswer: "B",
        explanation: "Deque stands for Double-Ended Queue.",
      },
      {
        qId: "dsa6",
        text: "Which sorting algorithm is fastest on average for large datasets?",
        options: {
          A: "Bubble Sort",
          B: "Quick Sort",
          C: "Selection Sort",
          D: "Insertion Sort",
        },
        correctAnswer: "B",
        explanation:
          "Quick Sort's average time complexity of O(n log n) makes it generally the fastest practical sorting algorithm.",
      },
      {
        qId: "dsa7",
        text: "Which data structure is used in BFS (Breadth-First Search)?",
        options: {
          A: "Stack",
          B: "Queue",
          C: "Linked List",
          D: "Heap",
        },
        correctAnswer: "B",
        explanation:
          "BFS explores neighbors level by level, requiring a Queue to manage nodes to be visited.",
      },
      {
        qId: "dsa8",
        text: "In a min-heap, the root node is:",
        options: {
          A: "Maximum value",
          B: "Minimum value",
          C: "Random value",
          D: "Average value",
        },
        correctAnswer: "B",
        explanation:
          "In a min-heap, the value of the parent node is always smaller than or equal to the values of its children.",
      },
      {
        qId: "dsa9",
        text: "Which of the following is NOT a hashing collision resolution method?",
        options: {
          A: "Chaining",
          B: "Open addressing",
          C: "Double hashing",
          D: "Bubble sort",
        },
        correctAnswer: "D",
        explanation:
          "Bubble sort is a sorting algorithm, not a method for resolving collisions in hash tables.",
      },
      {
        qId: "dsa10",
        text: "The worst-case time complexity of linear search is:",
        options: {
          A: "O(1)",
          B: "O(log n)",
          C: "O(n)",
          D: "O(n²)",
        },
        correctAnswer: "C",
        explanation:
          "In the worst case (element not found or found at the end), linear search has to check every element once.",
      },
      {
        qId: "dsa11",
        text: "Which traversal method visits nodes in “Root-Left-Right” order?",
        options: {
          A: "Pre-order",
          B: "In-order",
          C: "Post-order",
          D: "Level-order",
        },
        correctAnswer: "A",
        explanation:
          "Pre-order traversal visits the root first, followed by the left subtree and then the right subtree.",
      },
      {
        qId: "dsa12",
        text: "Which data structure is ideal for implementing recursion?",
        options: {
          A: "Queue",
          B: "Stack",
          C: "Array",
          D: "Graph",
        },
        correctAnswer: "B",
        explanation:
          "Recursion inherently uses the call stack to manage function calls and local variables.",
      },
      {
        qId: "dsa13",
        text: "Which of the following is a self-balancing binary search tree?",
        options: {
          A: "AVL Tree",
          B: "Binary Heap",
          C: "Graph",
          D: "Linked List",
        },
        correctAnswer: "A",
        explanation:
          "AVL Trees automatically perform rotations to maintain a balanced structure, guaranteeing O(log n) operations.",
      },
      {
        qId: "dsa14",
        text: "Time complexity of inserting into a hash table with chaining is:",
        options: {
          A: "O(1) on average",
          B: "O(n²)",
          C: "O(n log n)",
          D: "O(n) always",
        },
        correctAnswer: "A",
        explanation:
          "Given a good hash function and proper load factor, insertion into a hash table takes constant time on average.",
      },
      {
        qId: "dsa15",
        text: "Which data structure is used in Dijkstra’s algorithm?",
        options: {
          A: "Stack",
          B: "Queue",
          C: "Priority Queue",
          D: "Array",
        },
        correctAnswer: "C",
        explanation:
          "Dijkstra's algorithm uses a Priority Queue to efficiently extract the unvisited node with the smallest current distance.",
      },
      {
        qId: "dsa16",
        text: "The worst-case complexity of quicksort occurs when:",
        options: {
          A: "Pivot is median",
          B: "Pivot is smallest/largest element",
          C: "Array is empty",
          D: "Array has duplicates only",
        },
        correctAnswer: "B",
        explanation:
          "If the pivot is repeatedly chosen as the smallest or largest element, quicksort degrades to O(n²).",
      },
      {
        qId: "dsa17",
        text: "Which is used for dynamic memory allocation in C++?",
        options: {
          A: "malloc",
          B: "new",
          C: "delete",
          D: "Both B and C",
        },
        correctAnswer: "D",
        explanation:
          "The `new` operator allocates memory and calls the constructor, while `delete` deallocates memory and calls the destructor.",
      },
      {
        qId: "dsa18",
        text: "Which of these is not a stable sorting algorithm?",
        options: {
          A: "Merge Sort",
          B: "Bubble Sort",
          C: "Quick Sort",
          D: "Insertion Sort",
        },
        correctAnswer: "C",
        explanation:
          "A stable sort preserves the relative order of equal elements. Quick Sort is typically unstable.",
      },
      {
        qId: "dsa19",
        text: "In a circular queue, the condition for full is:",
        options: {
          A: "rear = front",
          B: "(rear + 1) % size = front",
          C: "rear > front",
          D: "front = 0",
        },
        correctAnswer: "B",
        explanation:
          "This condition checks if the space immediately following the `rear` index is the `front` index, indicating no free space.",
      },
      {
        qId: "dsa20",
        text: "DFS uses which data structure?",
        options: {
          A: "Stack (or recursive call stack)",
          B: "Queue",
          C: "Linked List",
          D: "Array",
        },
        correctAnswer: "A",
        explanation:
          "DFS (Depth-First Search) explores as far as possible along each branch before backtracking, naturally requiring a Stack to manage nodes.",
      },
    ],
  },
  //ROBOTICS(id:robotics)

  robotics: {
    title: "Robotics – MCQ Quiz (Intermediate → Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "rob1",
        text: "Robotics combines:",
        options: {
          A: "Mechanics, Electronics, and Computer Science",
          B: "Only Mechanics",
          C: "Only Electronics",
          D: "Only AI",
        },
        correctAnswer: "A",
        explanation:
          "Robotics is an interdisciplinary field that integrates mechanical engineering, electrical engineering (electronics), and computer science.",
      },
      {
        qId: "rob2",
        text: "The brain of a robot is called:",
        options: {
          A: "Actuator",
          B: "Sensor",
          C: "Controller or Microcontroller",
          D: "Motor",
        },
        correctAnswer: "C",
        explanation:
          "The controller processes information from sensors and sends commands to the actuators.",
      },
      {
        qId: "rob3",
        text: "Robotic sensors detect:",
        options: {
          A: "Force, Light, Temperature, Motion",
          B: "Only temperature",
          C: "Only motion",
          D: "None of these",
        },
        correctAnswer: "A",
        explanation:
          "Sensors are essential for a robot to perceive and interact with its environment.",
      },
      {
        qId: "rob4",
        text: "An actuator in robotics is used for:",
        options: {
          A: "Sensing",
          B: "Movement",
          C: "Data storage",
          D: "Computation",
        },
        correctAnswer: "B",
        explanation:
          "Actuators convert electrical energy into physical movement or action.",
      },
      {
        qId: "rob5",
        text: "Which is NOT a type of robot?",
        options: {
          A: "Industrial",
          B: "Service",
          C: "Domestic",
          D: "Calculator",
        },
        correctAnswer: "D",
        explanation:
          "Robots are classified by their application, such as industrial, service (including domestic), or exploration.",
      },
      {
        qId: "rob6",
        text: "Degrees of Freedom (DOF) refers to:",
        options: {
          A: "The number of independent motions a robot can perform",
          B: "Its processing speed",
          C: "Power consumption",
          D: "Type of sensor",
        },
        correctAnswer: "A",
        explanation:
          "DOF defines the mobility of a robot manipulator, usually corresponding to the number of joints.",
      },
      {
        qId: "rob7",
        text: "Which control system is widely used in robots?",
        options: {
          A: "Open-loop",
          B: "Closed-loop",
          C: "Manual only",
          D: "None of these",
        },
        correctAnswer: "B",
        explanation:
          "Closed-loop systems use feedback from sensors to adjust actuator commands for accurate control.",
      },
      {
        qId: "rob8",
        text: "Robot manipulators are:",
        options: {
          A: "Arms used to interact with the environment",
          B: "Sensors",
          C: "Wheels",
          D: "Controllers",
        },
        correctAnswer: "A",
        explanation:
          "A manipulator is the arm-like mechanism of the robot, often featuring an end-effector.",
      },
      {
        qId: "rob9",
        text: "Pick-and-place robots are commonly used in:",
        options: {
          A: "Industries for assembly and packaging",
          B: "Gaming",
          C: "Cloud computing",
          D: "Web development",
        },
        correctAnswer: "A",
        explanation:
          "These robots are a fundamental part of automated manufacturing and logistics.",
      },
      {
        qId: "rob10",
        text: "SLAM in robotics stands for:",
        options: {
          A: "Simultaneous Localization and Mapping",
          B: "Single Line Algorithm Method",
          C: "Sensing Logic and Motion",
          D: "System Linear Analysis Model",
        },
        correctAnswer: "A",
        explanation:
          "SLAM is a computational problem of constructing a map of an unknown environment while simultaneously keeping track of the agent's location within it.",
      },
      {
        qId: "rob11",
        text: "Which type of robot moves in a straight line using wheels or tracks?",
        options: {
          A: "Wheeled robot",
          B: "Articulated robot",
          C: "SCARA robot",
          D: "Cylindrical robot",
        },
        correctAnswer: "A",
        explanation:
          "Wheeled and tracked robots are designed for locomotion on various surfaces.",
      },
      {
        qId: "rob12",
        text: "The main programming language for ROS is:",
        options: {
          A: "Python and C++",
          B: "Java",
          C: "MATLAB only",
          D: "JavaScript",
        },
        correctAnswer: "A",
        explanation:
          "The Robot Operating System (ROS) is primarily programmed using Python and C++ due to their versatility and performance needs.",
      },
      {
        qId: "rob13",
        text: "Which sensor measures distance using ultrasonic waves?",
        options: {
          A: "Infrared",
          B: "Ultrasonic sensor",
          C: "LIDAR",
          D: "Gyroscope",
        },
        correctAnswer: "B",
        explanation:
          "Ultrasonic sensors emit sound waves and measure the time it takes for the echo to return.",
      },
      {
        qId: "rob14",
        text: "Inverse kinematics in robotics calculates:",
        options: {
          A: "Joint angles for desired end-effector position",
          B: "Sensor placement",
          C: "Actuator power",
          D: "None of these",
        },
        correctAnswer: "A",
        explanation:
          "Inverse kinematics is the mathematical process of determining the joint parameters required to achieve a desired configuration of the robot's end-effector.",
      },
      {
        qId: "rob15",
        text: "Which robot configuration allows vertical movement around a central axis?",
        options: {
          A: "SCARA",
          B: "Cartesian",
          C: "Cylindrical",
          D: "Articulated",
        },
        correctAnswer: "C",
        explanation:
          "Cylindrical robots feature a vertical column and a radial arm that moves vertically and rotates around the column.",
      },
      {
        qId: "rob16",
        text: "Pick-and-place robot uses which control mechanism?",
        options: {
          A: "Closed-loop feedback",
          B: "Open-loop",
          C: "None",
          D: "Manual control",
        },
        correctAnswer: "A",
        explanation:
          "Precision tasks like pick-and-place require continuous feedback (closed-loop) to ensure the target position is accurately reached.",
      },
      {
        qId: "rob17",
        text: "A manipulator’s workspace is:",
        options: {
          A: "Area reachable by its end-effector",
          B: "Controller’s memory",
          C: "Power supply",
          D: "Sensor range",
        },
        correctAnswer: "A",
        explanation:
          "The workspace defines the volume of space the end-effector (or tool) can reach.",
      },
      {
        qId: "rob18",
        text: "Which is an example of an industrial robot application?",
        options: {
          A: "Welding",
          B: "Cooking",
          C: "Gaming",
          D: "Social media",
        },
        correctAnswer: "A",
        explanation:
          "Welding, painting, and assembly are common applications of industrial robots.",
      },
      {
        qId: "rob19",
        text: "Robots can be classified by:",
        options: {
          A: "Application, configuration, power source",
          B: "Color only",
          C: "Operating system",
          D: "Web compatibility",
        },
        correctAnswer: "A",
        explanation:
          "Robots are classified based on what they do (application), their physical structure (configuration), and how they are powered.",
      },
      {
        qId: "rob20",
        text: "The main function of a robot’s controller is:",
        options: {
          A: "Compute commands for actuators",
          B: "Store files",
          C: "Display graphics",
          D: "Connect to Wi-Fi",
        },
        correctAnswer: "A",
        explanation:
          "The controller's core job is to execute the robot's program and calculate the necessary control signals for the motors/actuators.",
      },
    ],
  },

  //APP DEVELOPMENT(id:app_development)

  app_development: {
    title: "App Development – MCQ Quiz (Intermediate → Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "ad1",
        text: "Native apps are developed using:",
        options: {
          A: "Platform-specific languages like Swift (iOS) or Kotlin (Android)",
          B: "HTML only",
          C: "CSS only",
          D: "Python exclusively",
        },
        correctAnswer: "A",
        explanation:
          "Native apps use platform-specific SDKs for optimal performance and access to hardware features.",
      },
      {
        qId: "ad2",
        text: "Cross-platform app frameworks include:",
        options: {
          A: "React Native, Flutter",
          B: "C++ only",
          C: "Java only",
          D: "Swift only",
        },
        correctAnswer: "A",
        explanation:
          "React Native and Flutter allow developers to use a single codebase for multiple platforms (iOS, Android).",
      },
      {
        qId: "ad3",
        text: "In mobile app architecture, MVC stands for:",
        options: {
          A: "Model-View-Controller",
          B: "Mobile Visual Component",
          C: "Multi-Variable Coding",
          D: "Model Vector Compiler",
        },
        correctAnswer: "A",
        explanation:
          "MVC is a common design pattern separating the application logic (Model), UI (View), and input handling (Controller).",
      },
      {
        qId: "ad4",
        text: "Which is a backend service for mobile apps?",
        options: {
          A: "Firebase",
          B: "Xcode",
          C: "SwiftUI",
          D: "Android Studio",
        },
        correctAnswer: "A",
        explanation:
          "Firebase is a Backend-as-a-Service (BaaS) platform providing databases, hosting, and authentication.",
      },
      {
        qId: "ad5",
        text: "App UI should be designed with:",
        options: {
          A: "Responsiveness and usability in mind",
          B: "Complex animations only",
          C: "Random colors",
          D: "Minimum coding",
        },
        correctAnswer: "A",
        explanation:
          "Good UI/UX design focuses on creating an intuitive, easy-to-use, and adaptive interface.",
      },
      {
        qId: "ad6",
        text: "APK stands for:",
        options: {
          A: "Android Package Kit",
          B: "Application Program Key",
          C: "Android Programming Kernel",
          D: "App Pack Key",
        },
        correctAnswer: "A",
        explanation:
          "The APK file format is used by the Android operating system for distribution and installation of mobile apps.",
      },
      {
        qId: "ad7",
        text: "Which language is used in Flutter?",
        options: {
          A: "Dart",
          B: "Java",
          C: "Kotlin",
          D: "C#",
        },
        correctAnswer: "A",
        explanation:
          "Flutter apps are primarily developed using the Dart programming language, created by Google.",
      },
      {
        qId: "ad8",
        text: "Push notifications are used for:",
        options: {
          A: "User engagement",
          B: "Data storage",
          C: "App compilation",
          D: "Cloud networking",
        },
        correctAnswer: "A",
        explanation:
          "Push notifications are a powerful tool to re-engage users by sending real-time alerts and messages.",
      },
      {
        qId: "ad9",
        text: "Which of the following is a hybrid app framework?",
        options: {
          A: "Ionic",
          B: "React",
          C: "Node.js",
          D: "Swift",
        },
        correctAnswer: "A",
        explanation:
          "Ionic is a framework that uses web technologies (HTML, CSS, JavaScript) to build apps that run inside a native wrapper (WebView).",
      },
      {
        qId: "ad10",
        text: "Mobile app testing includes:",
        options: {
          A: "Functional testing",
          B: "UI testing",
          C: "Performance testing",
          D: "All of the above",
        },
        correctAnswer: "D",
        explanation:
          "A comprehensive testing strategy includes checking functionality, user interface accuracy, and performance under load.",
      },
      {
        qId: "ad11",
        text: "Which is used to publish Android apps?",
        options: {
          A: "Google Play Store",
          B: "Apple App Store",
          C: "Microsoft Store",
          D: "Linux Repo",
        },
        correctAnswer: "A",
        explanation:
          "The Google Play Store is the official distribution channel for Android applications.",
      },
      {
        qId: "ad12",
        text: "App prototyping tools include:",
        options: {
          A: "Figma, Adobe XD",
          B: "Eclipse",
          C: "Visual Studio Code",
          D: "Xcode only",
        },
        correctAnswer: "A",
        explanation:
          "Figma and Adobe XD are dedicated tools for designing and creating interactive prototypes of app user interfaces.",
      },
      {
        qId: "ad13",
        text: "App lifecycle includes:",
        options: {
          A: "Install → Launch → Background → Termination",
          B: "Only Launch",
          C: "Only Install",
          D: "Only Background",
        },
        correctAnswer: "A",
        explanation:
          "An app's lifecycle describes the various states it passes through from initial installation to final termination.",
      },
      {
        qId: "ad14",
        text: "Which backend solution is serverless?",
        options: {
          A: "Firebase Functions",
          B: "Apache Spark",
          C: "Hadoop",
          D: "MySQL",
        },
        correctAnswer: "A",
        explanation:
          "Firebase Functions (based on Google Cloud Functions) allows running backend code without managing servers, a key serverless feature.",
      },
      {
        qId: "ad15",
        text: "Which is used for app performance monitoring?",
        options: {
          A: "Firebase Analytics",
          B: "React Native",
          C: "Flutter SDK",
          D: "Xcode Interface",
        },
        correctAnswer: "A",
        explanation:
          "Firebase Analytics provides comprehensive data on user behavior and app performance metrics.",
      },
      {
        qId: "ad16",
        text: "Which of the following is true about hybrid apps?",
        options: {
          A: "Run on multiple platforms with one codebase",
          B: "Native UI always",
          C: "Only Android supported",
          D: "Cannot access device hardware",
        },
        correctAnswer: "A",
        explanation:
          "Hybrid apps achieve cross-platform capability by wrapping web code in a native container.",
      },
      {
        qId: "ad17",
        text: "Which component handles navigation in React Native apps?",
        options: {
          A: "React Navigation",
          B: "Node.js",
          C: "Redux",
          D: "MongoDB",
        },
        correctAnswer: "A",
        explanation:
          "React Navigation is the most popular, community-driven solution for handling complex screen navigation in React Native applications.",
      },
      {
        qId: "ad18",
        text: "Which method improves app startup speed?",
        options: {
          A: "Lazy loading resources",
          B: "Adding more libraries",
          C: "Complex animations",
          D: "Heavy images",
        },
        correctAnswer: "A",
        explanation:
          "Lazy loading loads resources only when they are needed, reducing the initial load time and improving startup speed.",
      },
      {
        qId: "ad19",
        text: "Which is used for app crash reporting?",
        options: {
          A: "Firebase Crashlytics",
          B: "Eclipse IDE",
          C: "Visual Studio",
          D: "GitHub",
        },
        correctAnswer: "A",
        explanation:
          "Firebase Crashlytics is a powerful, real-time crash reporter that helps developers track, prioritize, and fix stability issues.",
      },
      {
        qId: "ad20",
        text: "App development best practices include:",
        options: {
          A: "Clean code, modular design, testing",
          B: "Random design, no testing",
          C: "Copy-paste coding",
          D: "Ignoring performance",
        },
        correctAnswer: "A",
        explanation:
          "These practices ensure the app is maintainable, scalable, robust, and provides a good user experience.",
      },
    ],
  },
  //PROMPT ENGINEERING(id:prompt_engineering)

  prompt_engineering: {
    title: "Prompt Engineering Quiz (Intermediate \u2192 Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "pe1",
        text: "Prompt engineering primarily focuses on:",
        options: {
          A: "Designing inputs for AI models to get desired outputs",
          B: "Coding databases",
          C: "Web design",
          D: "Compiling Java programs",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe2",
        text: "Which AI model is commonly used with prompt engineering?",
        options: {
          A: "Large Language Models (LLMs) like GPT",
          B: "SQL servers",
          C: "React",
          D: "Hadoop",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe3",
        text: "Effective prompts are usually:",
        options: {
          A: "Clear, concise, and context-aware",
          B: "Vague and long",
          C: "Only numerical",
          D: "Only code",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe4",
        text: "Zero-shot prompting refers to:",
        options: {
          A: "Asking a model to perform a task without examples",
          B: "Training from scratch",
          C: "Using datasets",
          D: "Prompt testing",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe5",
        text: "Few-shot prompting includes:",
        options: {
          A: "Providing a few examples in the prompt",
          B: "No examples",
          C: "Full training dataset",
          D: "Model evaluation only",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe6",
        text: "Chain-of-thought prompting is used for:",
        options: {
          A: "Step-by-step reasoning",
          B: "Encryption",
          C: "Image editing",
          D: "UI design",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe7",
        text: "Prompt templates are:",
        options: {
          A: "Reusable structures to design prompts",
          B: "Data storage",
          C: "CSS frameworks",
          D: "APIs",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe8",
        text: "Role-based prompting specifies:",
        options: {
          A: "The AI\u2019s perspective or persona",
          B: "File permissions",
          C: "Cloud resources",
          D: "Web pages",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe9",
        text: "Which tool can help evaluate prompt performance?",
        options: {
          A: "OpenAI Playground",
          B: "GitHub",
          C: "Visual Studio",
          D: "MySQL",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe10",
        text: "Prompt tuning involves:",
        options: {
          A: "Adjusting input phrasing for better AI responses",
          B: "Changing hardware",
          C: "Database queries",
          D: "Debugging software",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe11",
        text: "Instruction-based prompting is used to:",
        options: {
          A: "Direct the model explicitly on the task",
          B: "Change database schemas",
          C: "Compile Java programs",
          D: "Deploy websites",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe12",
        text: "Ambiguous prompts result in:",
        options: {
          A: "Unreliable or incorrect outputs",
          B: "Perfect predictions",
          C: "Faster computation",
          D: "Improved memory usage",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe13",
        text: "Which of these improves LLM response accuracy?",
        options: {
          A: "Providing examples and context",
          B: "Short prompts only",
          C: "Random inputs",
          D: "Ignoring grammar",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe14",
        text: "Role prompts can define AI as:",
        options: {
          A: "A teacher, assistant, or programmer",
          B: "Only an AI",
          C: "Only a database",
          D: "Only a frontend engineer",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe15",
        text: "Prompt injection attacks exploit:",
        options: {
          A: "Malicious prompts to manipulate AI output",
          B: "User credentials",
          C: "Cloud memory",
          D: "Server CPU",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe16",
        text: "Dynamic prompt generation is used for:",
        options: {
          A: "Adjusting prompts programmatically based on context",
          B: "Compiling apps",
          C: "Database normalization",
          D: "Static websites",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe17",
        text: "A high-quality prompt is:",
        options: {
          A: "Clear, unambiguous, and context-rich",
          B: "Confusing and long",
          C: "Random text",
          D: "Only code",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe18",
        text: "Prompt chaining is:",
        options: {
          A: "Combining multiple prompts to solve complex tasks",
          B: "Linking databases",
          C: "Compressing data",
          D: "Writing CSS",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe19",
        text: "Temperature setting in AI prompts affects:",
        options: {
          A: "Randomness and creativity of responses",
          B: "Memory usage",
          C: "Disk storage",
          D: "Frontend rendering",
        },
        correctAnswer: "A",
      },
      {
        qId: "pe20",
        text: "Prompt evaluation metrics include:",
        options: {
          A: "Accuracy, relevance, completeness",
          B: "Compilation time",
          C: "CPU usage",
          D: "Disk speed",
        },
        correctAnswer: "A",
      },
    ],
  },

  //UI/UX(id:ui_ux)

  ui_ux: {
    title: "UI/UX Quiz (Intermediate \u2192 Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "uiux1",
        text: "UI stands for:",
        options: {
          A: "User Interface",
          B: "Unified Internet",
          C: "User Input",
          D: "Uniform Integration",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux2",
        text: "UX stands for:",
        options: {
          A: "User Experience",
          B: "User Execution",
          C: "Universal Xperience",
          D: "Unified Exchange",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux3",
        text: "Wireframes are used for:",
        options: {
          A: "Low-fidelity layout designs",
          B: "Backend coding",
          C: "Database queries",
          D: "Server deployment",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux4",
        text: "A good UI should have:",
        options: {
          A: "Consistency, readability, and accessibility",
          B: "Random colors",
          C: "Excessive animations",
          D: "Complex navigation",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux5",
        text: "The primary goal of UX design is:",
        options: {
          A: "Enhance user satisfaction",
          B: "Increase server performance",
          C: "Improve database queries",
          D: "Reduce code size",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux6",
        text: "Which tool is used for UI/UX prototyping?",
        options: {
          A: "Figma",
          B: "VS Code",
          C: "Xcode",
          D: "MongoDB",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux7",
        text: "Persona creation helps in:",
        options: {
          A: "Understanding target users",
          B: "Compiling code",
          C: "Database design",
          D: "Server management",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux8",
        text: "Heuristic evaluation in UX is:",
        options: {
          A: "Expert review based on usability principles",
          B: "Writing HTML",
          C: "Server setup",
          D: "Database query optimization",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux9",
        text: "Color contrast is important for:",
        options: {
          A: "Accessibility",
          B: "Animation",
          C: "SEO",
          D: "Cloud integration",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux10",
        text: "Responsive design ensures:",
        options: {
          A: "Optimal viewing on multiple devices",
          B: "Faster server speed",
          C: "Smaller database",
          D: "Only mobile optimization",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux11",
        text: "Which of these is a UX research method?",
        options: {
          A: "User interviews",
          B: "Backend coding",
          C: "SQL queries",
          D: "Server deployment",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux12",
        text: "Affinity mapping is used for:",
        options: {
          A: "Grouping user insights",
          B: "Data encryption",
          C: "Debugging code",
          D: "UI styling",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux13",
        text: "Card sorting helps to:",
        options: {
          A: "Organize information architecture",
          B: "Optimize CPU",
          C: "Create databases",
          D: "Test server load",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux14",
        text: "Micro-interactions in UI are:",
        options: {
          A: "Small interactive elements enhancing feedback",
          B: "Database triggers",
          C: "Large animations",
          D: "Code libraries",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux15",
        text: "UX testing can be conducted via:",
        options: {
          A: "A/B testing",
          B: "Backend profiling",
          C: "SQL joins",
          D: "Server monitoring",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux16",
        text: "Navigation design should be:",
        options: {
          A: "Intuitive and consistent",
          B: "Random",
          C: "Hidden",
          D: "Very complex",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux17",
        text: "High-fidelity prototypes include:",
        options: {
          A: "Detailed visuals and interactions",
          B: "Only wireframes",
          C: "Raw sketches",
          D: "Backend code",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux18",
        text: "Accessibility in UI ensures:",
        options: {
          A: "Use by people with disabilities",
          B: "Faster server queries",
          C: "Smaller apps",
          D: "SEO optimization",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux19",
        text: "Which principle improves usability?",
        options: {
          A: "Simplicity and consistency",
          B: "Random layout",
          C: "Complex animations",
          D: "Hidden navigation",
        },
        correctAnswer: "A",
      },
      {
        qId: "uiux20",
        text: "User flow diagrams show:",
        options: {
          A: "Steps a user takes to complete tasks",
          B: "Code structure",
          C: "Server architecture",
          D: "Database schema",
        },
        correctAnswer: "A",
      },
    ],
  },
  //DATA SCIENCE(id:data_science)
  data_science: {
    title: "Data Science Quiz (Intermediate \u2192 Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "ds1",
        text: "Data Science primarily involves:",
        options: {
          A: "Extracting insights from structured and unstructured data",
          B: "Web design",
          C: "Mobile app development",
          D: "System administration",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds2",
        text: "Which of these is used for data visualization?",
        options: {
          A: "Matplotlib, Seaborn",
          B: "React Native",
          C: "Node.js",
          D: "MongoDB",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds3",
        text: "Supervised learning uses:",
        options: {
          A: "Labeled data",
          B: "Unlabeled data",
          C: "Random data",
          D: "SQL queries only",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds4",
        text: "Unsupervised learning uses:",
        options: {
          A: "Unlabeled data",
          B: "Labeled data",
          C: "HTML only",
          D: "Backend frameworks",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds5",
        text: "Which is a classification algorithm?",
        options: {
          A: "Logistic Regression",
          B: "K-Means",
          C: "PCA",
          D: "Linear Regression",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds6",
        text: "Which is a clustering algorithm?",
        options: {
          A: "K-Means",
          B: "Decision Tree",
          C: "Logistic Regression",
          D: "Linear Regression",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds7",
        text: "Feature engineering involves:",
        options: {
          A: "Creating or transforming variables to improve model performance",
          B: "Database indexing",
          C: "UI design",
          D: "App compilation",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds8",
        text: "PCA is used for:",
        options: {
          A: "Dimensionality reduction",
          B: "Classification",
          C: "Regression",
          D: "Clustering only",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds9",
        text: "Overfitting occurs when:",
        options: {
          A: "Model performs well on training but poorly on test data",
          B: "Model generalizes perfectly",
          C: "Model has no training",
          D: "Model is unsupervised",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds10",
        text: "Cross-validation is used to:",
        options: {
          A: "Evaluate model performance",
          B: "Store data",
          C: "Design UI",
          D: "Deploy apps",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds11",
        text: "Which language is most commonly used in Data Science?",
        options: {
          A: "Python",
          B: "C++",
          C: "Java",
          D: "HTML",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds12",
        text: "The target variable in supervised learning is called:",
        options: {
          A: "Dependent variable",
          B: "Independent variable",
          C: "Feature",
          D: "Constant",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds13",
        text: "Confusion matrix is used for:",
        options: {
          A: "Evaluating classification models",
          B: "Data cleaning",
          C: "Feature scaling",
          D: "Database queries",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds14",
        text: "Which metric is used for regression evaluation?",
        options: {
          A: "Mean Squared Error (MSE)",
          B: "Precision",
          C: "Recall",
          D: "F1-Score",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds15",
        text: "Random Forest is:",
        options: {
          A: "Ensemble of decision trees",
          B: "Single tree",
          C: "Neural network",
          D: "Clustering algorithm",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds16",
        text: "Normalization scales data to:",
        options: {
          A: "0 to 1",
          B: "Any integer",
          C: "Only negative values",
          D: "None of these",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds17",
        text: "Which library is used for machine learning in Python?",
        options: {
          A: "scikit-learn",
          B: "Django",
          C: "Flask",
          D: "React",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds18",
        text: "EDA stands for:",
        options: {
          A: "Exploratory Data Analysis",
          B: "Enhanced Data Architecture",
          C: "Extreme Data Access",
          D: "External Database Application",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds19",
        text: "Which technique handles missing data?",
        options: {
          A: "Imputation",
          B: "Clustering",
          C: "Classification",
          D: "PCA",
        },
        correctAnswer: "A",
      },
      {
        qId: "ds20",
        text: "Time series forecasting is an example of:",
        options: {
          A: "Predictive analytics",
          B: "Descriptive analytics",
          C: "Data storage",
          D: "App design",
        },
        correctAnswer: "A",
      },
    ],
  },
  //CLOUD COMPUTING(id:cloud_computing)

  cloud_computing: {
    title: "Cloud Computing Quiz (Intermediate \u2192 Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "cc1",
        text: "Cloud computing provides:",
        options: {
          A: "On-demand computing resources over the internet",
          B: "Only offline storage",
          C: "Only physical servers",
          D: "Desktop software only",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc2",
        text: "IaaS stands for:",
        options: {
          A: "Infrastructure as a Service",
          B: "Internet as a Service",
          C: "Internal Application Server",
          D: "Instance as a Solution",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc3",
        text: "PaaS provides:",
        options: {
          A: "Platform for developing and deploying applications",
          B: "Hardware only",
          C: "Networking cables",
          D: "SQL queries",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc4",
        text: "SaaS provides:",
        options: {
          A: "Software delivered over the internet",
          B: "Only APIs",
          C: "Cloud storage hardware",
          D: "Server configuration",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc5",
        text: "Which is a public cloud provider?",
        options: {
          A: "AWS",
          B: "Private server",
          C: "Local storage",
          D: "Personal computer",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc6",
        text: "Hybrid cloud combines:",
        options: {
          A: "Public and private clouds",
          B: "Only public cloud",
          C: "Only private cloud",
          D: "On-premises servers only",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc7",
        text: "Which is a cloud deployment model?",
        options: {
          A: "Public, Private, Hybrid",
          B: "Linux, Windows",
          C: "Apache, Nginx",
          D: "SQL, NoSQL",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc8",
        text: "Auto-scaling in cloud means:",
        options: {
          A: "Dynamically adjusting resources based on demand",
          B: "Manual server management",
          C: "Static resource allocation",
          D: "Only storage scaling",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc9",
        text: "Which service is used for cloud storage?",
        options: {
          A: "Amazon S3",
          B: "AWS Lambda",
          C: "EC2",
          D: "CloudWatch",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc10",
        text: "Load balancing in cloud computing helps:",
        options: {
          A: "Distribute traffic across multiple servers",
          B: "Increase latency",
          C: "Reduce security",
          D: "Delete data",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc11",
        text: "Which of the following is serverless computing?",
        options: {
          A: "AWS Lambda",
          B: "EC2",
          C: "S3",
          D: "VPC",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc12",
        text: "Which is a cloud monitoring service?",
        options: {
          A: "AWS CloudWatch",
          B: "DynamoDB",
          C: "Azure Blob",
          D: "RDS",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc13",
        text: "VPC in cloud computing stands for:",
        options: {
          A: "Virtual Private Cloud",
          B: "Variable Processing Core",
          C: "Virtual Platform Cache",
          D: "Volume Provisioned Cloud",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc14",
        text: "Cloud elasticity refers to:",
        options: {
          A: "Ability to scale resources up or down automatically",
          B: "Fixed resource allocation",
          C: "Only storage expansion",
          D: "Only CPU scaling",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc15",
        text: "Which cloud model offers complete control over OS and hardware?",
        options: {
          A: "IaaS",
          B: "PaaS",
          C: "SaaS",
          D: "DaaS",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc16",
        text: "Which is a cloud database service?",
        options: {
          A: "Amazon RDS",
          B: "S3",
          C: "Lambda",
          D: "CloudFront",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc17",
        text: "Multi-tenancy in cloud means:",
        options: {
          A: "Multiple users share the same resources securely",
          B: "Single user per server",
          C: "Users share passwords",
          D: "Only public cloud access",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc18",
        text: "Which is a container orchestration tool for cloud?",
        options: {
          A: "Kubernetes",
          B: "Dockerfile",
          C: "GitHub",
          D: "Jenkins",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc19",
        text: "Which cloud service is used for content delivery?",
        options: {
          A: "CDN (Content Delivery Network)",
          B: "RDS",
          C: "Lambda",
          D: "EC2",
        },
        correctAnswer: "A",
      },
      {
        qId: "cc20",
        text: "Cloud security involves:",
        options: {
          A: "Data encryption, identity management, compliance",
          B: "Only firewalls",
          C: "Only antivirus",
          D: "Only hardware",
        },
        correctAnswer: "A",
      },
    ],
  },
  //DevOps(id:devops)

  devops: {
    title: "DevOps Quiz (Intermediate \u2192 Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "devops1",
        text: "DevOps combines:",
        options: {
          A: "Development and Operations for faster delivery",
          B: "Only coding",
          C: "Only server setup",
          D: "Only UI design",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops2",
        text: "CI stands for:",
        options: {
          A: "Continuous Integration",
          B: "Code Implementation",
          C: "Continuous Improvement",
          D: "Cloud Integration",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops3",
        text: "CD stands for:",
        options: {
          A: "Continuous Deployment or Continuous Delivery",
          B: "Code Debugging",
          C: "Continuous Design",
          D: "Cloud Deployment",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops4",
        text: "Which tool is used for version control?",
        options: {
          A: "Git",
          B: "Jenkins",
          C: "Docker",
          D: "Kubernetes",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops5",
        text: "Jenkins is used for:",
        options: {
          A: "Automation of CI/CD pipelines",
          B: "Database management",
          C: "Frontend design",
          D: "Cloud storage",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops6",
        text: "Docker is used for:",
        options: {
          A: "Containerization of applications",
          B: "Compilation",
          C: "Monitoring servers",
          D: "Writing frontend code",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops7",
        text: "Kubernetes helps with:",
        options: {
          A: "Orchestration of containers",
          B: "Backend coding",
          C: "Cloud storage only",
          D: "Web design",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops8",
        text: "Infrastructure as Code (IaC) tool is:",
        options: {
          A: "Terraform",
          B: "Visual Studio",
          C: "Eclipse",
          D: "Android Studio",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops9",
        text: "Monitoring tool in DevOps is:",
        options: {
          A: "Prometheus",
          B: "Docker",
          C: "Git",
          D: "React",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops10",
        text: "DevOps practice emphasizes:",
        options: {
          A: "Collaboration, automation, and feedback",
          B: "Only coding",
          C: "Only deployment",
          D: "Only server setup",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops11",
        text: "Which version control system is widely used in DevOps?",
        options: {
          A: "Git",
          B: "SVN",
          C: "Mercurial",
          D: "All of the above",
        },
        correctAnswer: "D",
      },
      {
        qId: "devops12",
        text: "Blue-Green deployment is used for:",
        options: {
          A: "Reducing downtime during releases",
          B: "Database scaling",
          C: "Code compilation",
          D: "Monitoring apps",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops13",
        text: "Which CI/CD tool integrates with GitHub repositories?",
        options: {
          A: "Jenkins",
          B: "Docker",
          C: "Kubernetes",
          D: "Terraform",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops14",
        text: "Canary deployment is:",
        options: {
          A: "Releasing updates to a small subset of users first",
          B: "Releasing updates to all users immediately",
          C: "Only testing code locally",
          D: "Debugging servers",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops15",
        text: "Configuration management tool in DevOps is:",
        options: {
          A: "Ansible",
          B: "Jenkins",
          C: "Kubernetes",
          D: "Docker",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops16",
        text: "CI/CD pipelines help in:",
        options: {
          A: "Faster and automated software delivery",
          B: "Manual deployment only",
          C: "Server monitoring only",
          D: "UI design",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops17",
        text: "Which of the following is used for artifact storage?",
        options: {
          A: "Nexus or Artifactory",
          B: "GitHub only",
          C: "Docker only",
          D: "Kubernetes only",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops18",
        text: "DevOps encourages:",
        options: {
          A: "Frequent code integration and testing",
          B: "Delayed releases",
          C: "Manual testing only",
          D: "No automation",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops19",
        text: "IaC helps in:",
        options: {
          A: "Automating infrastructure provisioning",
          B: "Manual server setup",
          C: "Writing frontend code",
          D: "Database normalization",
        },
        correctAnswer: "A",
      },
      {
        qId: "devops20",
        text: "Key metrics in DevOps include:",
        options: {
          A: "Deployment frequency, lead time, MTTR",
          B: "CPU usage only",
          C: "Memory usage only",
          D: "Disk space only",
        },
        correctAnswer: "A",
      },
    ],
  },
  //Artificial Intelligence(id:artificial_intelligence)

  artificial_intelligence: {
    title: "Artificial Intelligence Quiz (Intermediate \u2192 Advanced)",
    timeLimitSeconds: 120,
    questions: [
      {
        qId: "ai1",
        text: "Which of the following best defines Artificial Intelligence (AI)?",
        options: {
          A: "Study of computer hardware",
          B: "Enabling machines to simulate human intelligence",
          C: "Creating high-speed processors",
          D: "Study of biological systems",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai2",
        text: "Which search algorithm is both complete and optimal for a unit cost problem?",
        options: {
          A: "Depth-First Search",
          B: "Breadth-First Search",
          C: "Hill Climbing",
          D: "Greedy Best-First Search",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai3",
        text: "What does the term \u2018rational agent\u2019 mean in AI?",
        options: {
          A: "One that always acts randomly",
          B: "One that acts to maximize expected performance measure",
          C: "One that performs all actions",
          D: "One that learns without feedback",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai4",
        text: "The knowledge representation technique that uses logic is called:",
        options: {
          A: "Semantic Networks",
          B: "Frames",
          C: "Propositional Logic",
          D: "Neural Networks",
        },
        correctAnswer: "C",
      },
      {
        qId: "ai5",
        text: "In heuristic search, the function f(n) = g(n) + h(n) represents:",
        options: {
          A: "Random walk function",
          B: "Cost of path so far + estimated cost to goal",
          C: "Neural activation function",
          D: "Probability of success",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai6",
        text: "Which AI technique is used to handle uncertainty?",
        options: {
          A: "Neural Networks",
          B: "Fuzzy Logic",
          C: "Symbolic AI",
          D: "Search Trees",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai7",
        text: "The Turing Test is used to measure:",
        options: {
          A: "Computer speed",
          B: "Human learning ability",
          C: "Machine intelligence",
          D: "Algorithm complexity",
        },
        correctAnswer: "C",
      },
      {
        qId: "ai8",
        text: "The branch of AI that deals with understanding natural language is:",
        options: {
          A: "NLP (Natural Language Processing)",
          B: "Robotics",
          C: "Computer Vision",
          D: "Deep Learning",
        },
        correctAnswer: "A",
      },
      {
        qId: "ai9",
        text: "In reinforcement learning, the agent learns by:",
        options: {
          A: "Being programmed manually",
          B: "Receiving rewards or penalties from the environment",
          C: "Reading data files",
          D: "Using labeled datasets",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai10",
        text: "An expert system mainly consists of:",
        options: {
          A: "Data warehouse",
          B: "Knowledge base and inference engine",
          C: "Web server",
          D: "Compiler",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai11",
        text: "Which of the following algorithms is used for pathfinding in AI games?",
        options: {
          A: "Genetic Algorithm",
          B: "A* Algorithm",
          C: "Simplex Method",
          D: "K-Means Clustering",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai12",
        text: "Which of the following is NOT a property of a good heuristic function?",
        options: {
          A: "Admissibility",
          B: "Consistency",
          C: "Randomness",
          D: "Accuracy",
        },
        correctAnswer: "C",
      },
      {
        qId: "ai13",
        text: "In neural networks, the process of adjusting weights to minimize error is known as:",
        options: {
          A: "Pruning",
          B: "Backpropagation",
          C: "Forward propagation",
          D: "Clustering",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai14",
        text: "The concept of \u201cutility-based agents\u201d focuses on:",
        options: {
          A: "Maximizing performance measure",
          B: "Maximizing expected utility",
          C: "Following fixed rules",
          D: "Minimizing computation time",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai15",
        text: "Knowledge-based AI systems require which type of knowledge?",
        options: {
          A: "Procedural and Declarative",
          B: "Randomized",
          C: "Temporal only",
          D: "Probabilistic only",
        },
        correctAnswer: "A",
      },
      {
        qId: "ai16",
        text: "Which type of learning algorithm is K-Means Clustering?",
        options: {
          A: "Supervised",
          B: "Unsupervised",
          C: "Reinforcement",
          D: "Hybrid",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai17",
        text: "What is the main goal of computer vision?",
        options: {
          A: "Enable computers to understand and interpret visual information",
          B: "Improve graphics rendering",
          C: "Store digital images",
          D: "Encode audio signals",
        },
        correctAnswer: "A",
      },
      {
        qId: "ai18",
        text: "The minimax algorithm is primarily used in:",
        options: {
          A: "Image recognition",
          B: "Game playing",
          C: "Pattern matching",
          D: "Fuzzy inference",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai19",
        text: "In AI, overfitting occurs when:",
        options: {
          A: "Model performs poorly on training data",
          B: "Model learns noise instead of patterns",
          C: "Data is insufficient",
          D: "Model is too simple",
        },
        correctAnswer: "B",
      },
      {
        qId: "ai20",
        text: "The term \u2018Singularity\u2019 in AI refers to:",
        options: {
          A: "Hardware limit of computation",
          B: "Point where AI surpasses human intelligence",
          C: "A neural network type",
          D: "Single-agent decision-making",
        },
        correctAnswer: "B",
      },
    ],
  },
};
/* -------------------- 🗃️ END QUIZ DATA STORE -------------------- */

/* -------------------- 🗃️ EXAM DATA STORE (Descriptive) -------------------- */

function getQuizIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function selectRandomQuestions(questionsArray, count) {
  // 1. Create a shallow copy to avoid modifying the original data
  const shuffled = [...questionsArray];
  let n = shuffled.length;
  let t, i;

  // 2. Fisher-Yates Shuffle algorithm
  while (n > 0) {
    // Pick a remaining element
    i = Math.floor(Math.random() * n--);

    // And swap it with the current element (n)
    t = shuffled[n];
    shuffled[n] = shuffled[i];
    shuffled[i] = t;
  }

  // 3. Return the first 'count' elements
  return shuffled.slice(0, count);
}

document.addEventListener("DOMContentLoaded", function () {
  /* -------------------- 🌐 MOBILE MENU -------------------- */
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Close mobile menu on link click (UX improvement)
  document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (!mobileMenu.classList.contains("hidden"))
        mobileMenu.classList.add("hidden");
    });
  });

  /* -------------------- 📚 COURSE SEARCH -------------------- */
  const courseSearch = document.getElementById("courseSearch");
  const courseGrid = document.getElementById("courseGrid");
  const noResults = document.getElementById("noResults");

  if (courseSearch && courseGrid) {
    courseSearch.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      const courseCards = courseGrid.querySelectorAll(".course-card");
      let found = false;

      courseCards.forEach((card) => {
        const title = (
          card.getAttribute("data-course-title") || ""
        ).toLowerCase();
        const desc = (
          card.getAttribute("data-course-description") || ""
        ).toLowerCase();
        const match = title.includes(searchTerm) || desc.includes(searchTerm);
        card.classList.toggle("hidden", !match);
        if (match) found = true;
      });

      if (noResults) noResults.classList.toggle("hidden", found);
    });
  }

  /* -------------------- 🧾 EXAM SEARCH -------------------- */
  const examSearch = document.getElementById("examSearch");
  const examGrid = document.getElementById("examGrid");
  const examNoRes = document.getElementById("examNoResults");

  if (examSearch && examGrid) {
    examSearch.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      const examCards = examGrid.querySelectorAll(".exam-card");
      let found = false;

      examCards.forEach((card) => {
        const title = (
          card.getAttribute("data-exam-title") || ""
        ).toLowerCase();
        const desc = (card.textContent || "").toLowerCase();
        const match = title.includes(term) || desc.includes(term);
        card.classList.toggle("hidden", !match);
        if (match) found = true;
      });

      if (examNoRes) examNoRes.classList.toggle("hidden", found);
    });
  }

  // ... after the EXAM SEARCH section
  // 🛑 The rest of the script continues only if we were NOT on exam-detail.html
  // or if the logic above returns.

  /* -------------------- 📑 COURSE DETAIL TABS -------------------- */
  const tabButtons = document.querySelectorAll(".tab-button");
  if (tabButtons.length > 0) {
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabButtons.forEach((b) => b.classList.remove("tab-active"));
        btn.classList.add("tab-active");

        const target = btn.getAttribute("data-tab");
        const contents = document.querySelectorAll(".tab-content");
        contents.forEach((c) => c.classList.add("hidden"));

        const active = document.getElementById(target);
        if (active) active.classList.remove("hidden");
      });
    });
  }

  /* -------------------- 🧠 QUIZ REDIRECT (Updated) -------------------- */
  const quizButtons = document.querySelectorAll(".quiz-category-card button");
  quizButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Get the unique ID from the parent card
      const card = btn.closest(".quiz-category-card");
      const quizId = card.getAttribute("data-quiz-id"); // e.g., 'frontend' or 'python'

      // Redirect with the ID as a query parameter
      if (quizId) {
        window.location.href = `quiz-detail.html?id=${quizId}`;
      } else {
        window.location.href = "quiz-detail.html";
      }
    });
  });

  // In script.js, inside document.addEventListener('DOMContentLoaded', function() { ... });
  /* -------------------- 🧩 QUIZ LOGIC (Dynamic) -------------------- */

  /* -------------------- 🧩 QUIZ LOGIC (Dynamic with Timer) -------------------- */
  const QUESTIONS_PER_QUIZ = 5; // Changed to 5 questions as requested

  // Global timer variables
  let timerInterval;
  const quizForm = document.getElementById("quizForm");
  const quizTitleEl = document.getElementById("quizTitle");
  const questionsContainer = document.getElementById("quizQuestionsContainer");
  const quizTimerEl = document.getElementById("quizTimer");
  const quizReviewContainer = document.getElementById("quizReviewContainer");
  let currentQuizAnswers = {};
  let questionsToDisplay = [];

  // --- Core Function: Submits and Evaluates the Quiz ---
  function submitQuiz(quiz, isTimedOut = false) {
    // 1. Stop the Timer immediately
    clearInterval(timerInterval);

    if (
      document.getElementById("quizResult").classList.contains("hidden") ===
      false
    ) {
      return;
    }
    // 2. Calculate Score
    let score = 0;
    const total = questionsToDisplay.length;

    questionsToDisplay.forEach((q) => {
      const selected = quizForm.querySelector(`input[name="${q.qId}"]:checked`);
      if (selected && selected.value === currentQuizAnswers[q.qId]) {
        score++;
      }
    });

    // 3. Display Results
    const resultBox = document.getElementById("quizResult");
    const scoreText = document.getElementById("scoreText");

    resultBox.classList.remove("hidden");
    quizForm.classList.add("hidden");

    let resultMessage = `${score} / ${total} Correct`;
    if (isTimedOut) {
      resultMessage += " (Time Expired)";
    }
    scoreText.textContent = resultMessage;

    // Feedback color
    scoreText.classList.remove(
      "text-green-400",
      "text-yellow-400",
      "text-red-400"
    );
    if (score === total) scoreText.classList.add("text-green-400");
    else if (score >= total / 2) scoreText.classList.add("text-yellow-400");
    else scoreText.classList.add("text-red-400");

    let reviewHtml = `
      <h2 class="text-3xl font-['Rajdhani'] text-white text-center mb-8">Review Your Answers</h2>
  `;

    questionsToDisplay.forEach((q, index) => {
      // Get the user's selected radio button value (e.g., 'A', 'B', 'C')
      const userAnswerKey = quizForm.querySelector(
        `input[name="${q.qId}"]:checked`
      )?.value;
      const correctAnswerKey = currentQuizAnswers[q.qId];
      const isCorrect = userAnswerKey === correctAnswerKey;

      const correctClass = "text-green-400 font-bold";
      const incorrectClass = "text-red-400 font-bold";
      const indicator = isCorrect ? "✅ Correct" : "❌ Incorrect";
      const statusClass = isCorrect ? correctClass : incorrectClass;

      // Get the full text of the correct option
      const correctOptionText = q.options[correctAnswerKey];

      let userAnswerText = "Not Answered";
      let userAnswerDisplayClass = "text-white/60";

      if (userAnswerKey) {
        // Get the full text of the user's selected option
        userAnswerText = q.options[userAnswerKey];
        userAnswerDisplayClass = isCorrect ? correctClass : incorrectClass;
      }

      reviewHtml += `
          <div class="glass-card p-6 border-l-4 ${
            isCorrect ? "border-green-500" : "border-red-500"
          }">
              <h3 class="text-[#00d9ff] font-semibold mb-3">${index + 1}. ${
        q.text
      } <span class="float-right ${statusClass} text-base">${indicator}</span></h3>
              
              <p class="mt-2 ${userAnswerDisplayClass}">
                  You Answered: ${userAnswerText}
              </p>
              
              ${
                !isCorrect
                  ? `
                  <p class="mt-1 ${correctClass}">
                      Correct Answer: ${correctOptionText}
                  </p>
              `
                  : ""
              }
          </div>
      `;
    });

    // Inject the final review HTML into the container
    if (quizReviewContainer) {
      quizReviewContainer.innerHTML = reviewHtml;
    }
  }

  // --- Timer Function ---
  function startTimer(duration, quiz) {
    let time = duration;

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    if (quizTimerEl) quizTimerEl.textContent = formatTime(time);

    timerInterval = setInterval(() => {
      time--;
      if (quizTimerEl) quizTimerEl.textContent = formatTime(time);

      if (time <= 30 && quizTimerEl) {
        // Warning color for last 30 seconds
        quizTimerEl.classList.remove("text-[#00d9ff]");
        quizTimerEl.classList.add("text-red-500");
      }

      if (time <= 0) {
        // 🚨 CRITICAL: When time hits zero, call submitQuiz directly.
        // This forces evaluation and result display.
        submitQuiz(quiz, true);
      }
    }, 1000);
  }

  // --- Initialization Logic ---
  if (questionsContainer) {
    const quizId = getQuizIdFromUrl();
    const quiz = quizData[quizId];
    // Moved declaration to be accessible by submitQuiz

    if (quiz) {
      // Randomization Step
      questionsToDisplay = selectRandomQuestions(
        quiz.questions,
        QUESTIONS_PER_QUIZ
      );

      // 1. Set the Quiz Title
      quizTitleEl.textContent = quiz.title;

      // 2. Generate the Questions HTML
      let questionsHtml = "";
      let questionNumber = 1;

      questionsToDisplay.forEach((q) => {
        currentQuizAnswers[q.qId] = q.correctAnswer; // Store answers

        // ... (HTML generation loop remains the same) ...
        let optionsHtml = "";
        Object.entries(q.options).forEach(([key, value]) => {
          optionsHtml += `<label class="block mb-2 text-white/90"><input type="radio" name="${q.qId}" value="${key}" class="mr-2"> ${value}</label>`;
        });

        questionsHtml += `
                <div class="glass-card p-6">
                    <h3 class="text-[#00d9ff] font-semibold mb-3">${questionNumber++}. ${
          q.text
        }</h3>
                    ${optionsHtml}
                </div>
            `;
      });
      questionsContainer.innerHTML = questionsHtml;

      // 4. Start the Timer
      startTimer(quiz.timeLimitSeconds, quiz);

      // 5. Quiz Form Submission Listener
      if (quizForm) {
        quizForm.addEventListener("submit", (e) => {
          e.preventDefault();
          submitQuiz(quiz, false); // Manual submit
        });
      }
    } else {
      if (quizTitleEl) quizTitleEl.textContent = "Quiz Not Found";
      if (quizForm) quizForm.classList.add("hidden");
    }
  }

  // Retake button logic (remains the same)
  const retakeBtn = document.getElementById("retakeQuiz");
  if (retakeBtn) {
    retakeBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
});
