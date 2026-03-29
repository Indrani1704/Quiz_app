


export const quizData = [
  {
    id: 1,
    question: "What is React primarily used for?",
    options: ["Database", "User Interface", "Server", "Networking"],
    correctAnswer: "User Interface",
    hint: "Think about what users directly interact with on a website.",
    explanation:
      "React is a JavaScript library used for building user interfaces, especially dynamic and interactive UIs in single-page applications.",
  },
  {
    id: 2,
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: "useState",
    hint: "Which hook lets you store and update values inside a component?",
    explanation:
      "useState is used to add and manage state inside functional components, allowing UI updates when state changes.",
  },
  {
    id: 3,
    question: "What is Redux mainly used for?",
    options: ["Routing", "State Management", "Styling", "Animations"],
    correctAnswer: "State Management",
    hint: "It helps manage data across multiple components globally.",
    explanation:
      "Redux is used for centralized state management, making it easier to share and control data across large applications.",
  },
  {
    id: 4,
    question: "Which method is used to create a Redux slice?",
    options: ["createStore", "createSlice", "configureStore", "combineReducers"],
    correctAnswer: "createSlice",
    hint: "Redux Toolkit simplifies reducers and actions in one function.",
    explanation:
      "createSlice is part of Redux Toolkit and helps define reducers and actions together in a clean and concise way.",
  },
  {
    id: 5,
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON XML",
      "JavaScript Extension",
    ],
    correctAnswer: "JavaScript XML",
    hint: "It allows writing HTML-like syntax inside JavaScript.",
    explanation:
      "JSX stands for JavaScript XML. It allows developers to write HTML-like code inside JavaScript, making UI development easier.",
  },
  {
    id: 6,
    question: "Which hook runs side effects in React?",
    options: ["useState", "useEffect", "useReducer", "useContext"],
    correctAnswer: "useEffect",
    hint: "Used for API calls, subscriptions, or DOM updates.",
    explanation:
      "useEffect is used to handle side effects such as fetching data, updating the DOM, or setting up subscriptions.",
  },
  {
    id: 7,
    question: "What is the purpose of Redux Thunk?",
    options: [
      "Styling",
      "Handling async logic",
      "Routing",
      "Testing",
    ],
    correctAnswer: "Handling async logic",
    hint: "It helps when dealing with API calls inside Redux.",
    explanation:
      "Redux Thunk allows asynchronous logic (like API requests) to be written inside Redux action creators.",
  },
  {
    id: 8,
    question: "Which library is used for routing in React apps?",
    options: [
      "React Router",
      "Redux",
      "Axios",
      "Material UI",
    ],
    correctAnswer: "React Router",
    hint: "Used to navigate between pages in a React app.",
    explanation:
      "React Router enables navigation between different components/pages in a React application without reloading the page.",
  },
  {
    id: 9,
    question: "What is Tailwind CSS?",
    options: [
      "JS Framework",
      "Utility-first CSS framework",
      "Database",
      "State library",
    ],
    correctAnswer: "Utility-first CSS framework",
    hint: "You style using small utility classes like p-4, text-center.",
    explanation:
      "Tailwind CSS is a utility-first CSS framework that provides low-level classes to build custom designs quickly.",
  },
  {
    id: 10,
    question: "What does useSelector do in React-Redux?",
    options: [
      "Dispatch actions",
      "Select state from store",
      "Create reducers",
      "Handle API calls",
    ],
    correctAnswer: "Select state from store",
    hint: "It reads data from Redux store into your component.",
    explanation:
      "useSelector allows React components to access and subscribe to specific parts of the Redux store state.",
  },
];