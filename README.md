# school-canteen
A modern, responsive web application for managing a school canteen's digital ordering system. Students can browse snacks, place orders, and track their spending history.
Add new students to the system

✨ Features
Core Functionality

🛒 Browse Snacks - View all available snacks with prices and popularity
👨‍🎓 Student Management - Create and manage student profiles
📦 Order Placement - Place orders with quantity selection (1-5 items)
💰 Spending Tracking - Automatic calculation of total spending per student
📊 Order History - Complete order history for each student
🔄 Real-time Updates - Live updates of order counts and spending

Technical Features

⚡ Fast and responsive UI
🎨 Modern design with Tailwind CSS
📱 Fully responsive (mobile, tablet, desktop)
✅ Form validation with React Hook Form
🔌 RESTful API integration
🎯 Component-based architecture
🗂️ Global state management with Zustand
🚦 Loading states and error handling
🎭 Modal-based interactions


🛠️ Tech Stack
Frontend

React 18 - UI library
React Router DOM - Navigation and routing
Zustand - State management
React Hook Form - Form handling and validation
Axios - HTTP client
Tailwind CSS - Styling framework

Backend

JSON Server - Mock REST API

Development Tools

npm - Package manager
ES6+ - Modern JavaScript


school-canteen/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── snacks/
│   │   │   ├── SnackCard.jsx
│   │   │   └── OrderModal.jsx
│   │   └── students/
│   │       ├── StudentListItem.jsx
│   │       ├── StudentForm.jsx
│   │       └── OrderList.jsx
│   ├── pages/
│   │   ├── SnacksPage.jsx
│   │   ├── StudentsPage.jsx
│   │   ├── StudentDetailPage.jsx
│   │   └── CreateStudentPage.jsx
│   ├── store/
│   │   └── useStore.js
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── screenshots/
│   ├── snacks-page.png
│   ├── order-modal.png
│   ├── students-page.png
│   ├── student-detail.png
│   └── create-student.png
├── db.json
├── package.json
├── tailwind.config.js
├── README.md
└── PROMPTS_USED.md
