# 🍽️ School Canteen Management System

A modern, responsive web application for managing a school canteen's digital ordering system.  
Students can browse snacks, place orders, and track their spending and order history in real-time.

---

## ✨ Features

## 📸 Screenshots

### 🛒 Snacks Page
![Snacks Page](screenshots/snacks-page.png)

### 🧾 Order Modal
![Order Modal](screenshots/order-modal.png)

### 👨‍🎓 Students Page
![Students Page](screenshots/students-page.png)

### 📊 Student Detail Page (Order History)
![Student Detail](screenshots/student-detail.png)

### ➕ Create Student Page
![Create Student](screenshots/create-student.png)


### Core Functionality

- 🛒 **Browse Snacks** – View all available snacks with prices and popularity  
- 👨‍🎓 **Student Management** – Create and manage student profiles  
- 📦 **Order Placement** – Place orders with quantity selection (1–5 items)  
- 💰 **Spending Tracking** – Automatic calculation of total spending per student  
- 📊 **Order History** – Complete order history for each student  
- 🔄 **Real-time Updates** – Live updates of order counts and spending  

### Technical Features

- ⚡ Fast and responsive UI  
- 🎨 Modern design using Tailwind CSS  
- 📱 Fully responsive (Mobile, Tablet, Desktop)  
- ✅ Form validation using React Hook Form  
- 🔌 RESTful API integration with JSON Server  
- 🎯 Component-based architecture  
- 🗂️ Global state management using Zustand  
- 🚦 Loading states and error handling  
- 🎭 Modal-based interactions  

---

## 🛠️ Tech Stack

### Frontend

- React 18  
- React Router DOM  
- Zustand  
- React Hook Form  
- Axios  
- Tailwind CSS  

### Backend

- JSON Server (Mock REST API)

### Development Tools

- npm  
- ES6+ JavaScript  

---

## 📁 Project Structure

school-canteen/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button.jsx
│ │ │ ├── Card.jsx
│ │ │ ├── Modal.jsx
│ │ │ └── LoadingSpinner.jsx
│ │ ├── snacks/
│ │ │ ├── SnackCard.jsx
│ │ │ └── OrderModal.jsx
│ │ └── students/
│ │ ├── StudentListItem.jsx
│ │ ├── StudentForm.jsx
│ │ └── OrderList.jsx
│ ├── pages/
│ │ ├── SnacksPage.jsx
│ │ ├── StudentsPage.jsx
│ │ ├── StudentDetailPage.jsx
│ │ └── CreateStudentPage.jsx
│ ├── store/
│ │ └── useStore.js
│ ├── services/
│ │ └── api.js
│ ├── utils/
│ │ └── helpers.js
│ ├── App.jsx
│ ├── index.js
│ └── index.css
├── screenshots/
│ ├── snacks-page.png
│ ├── order-modal.png
│ ├── students-page.png
│ ├── student-detail.png
│ └── create-student.png
├── db.json
├── package.json
├── tailwind.config.js
├── README.md
└── PROMPTS_USED.md

