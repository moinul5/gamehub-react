# 🎮 GameHub – A Game Discovery Platform

GameHub is an engaging online game library where users can explore indie and popular games, view detailed information, and support game developers. The platform focuses on clean UI, smooth user experience, and secure authentication.

🔗 **Live Website:** - https://gamehub-11.web.app/

---

## 📌 Purpose

The purpose of GameHub is to provide a centralized platform for discovering games, especially indie titles, while allowing users to securely log in, explore game details, and manage their profiles.

---

## 🚀 Key Features

- 🔐 **User Authentication**
  - Email & Password login and registration
  - Google authentication
  - Forgot password with email reset

- 🛡️ **Protected Routes**
  - Game details page is accessible only to logged-in users

- 🎮 **Game Library**
  - Popular games sorted by rating
  - Indie Spotlight section
  - Game details page with full information

- 👤 **User Profile**
  - View profile information
  - Update name and profile photo

- 🎨 **UI & UX**
  - Fully responsive (mobile, tablet, desktop)
  - Dark urban-themed design
  - Smooth animations using Framer Motion
  - Dynamic page titles for better UX

- 🌐 **Deployment**
  - Hosted on firebase
  - Firebase authentication with environment variables
  - Reload-safe routing configuration

---

## 🧩 Technologies Used

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS, DaisyUI
- **Routing:** React Router DOM
- **Authentication:** Firebase Authentication
- **Animation:** Framer Motion
- **Slider:** Swiper.js
- **Hosting:** firebase

---

## 🔐 Environment Variables

Firebase configuration is secured using environment variables:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
