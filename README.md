# 🎙️ VettAI – AI-Powered Mock Interview Platform

Built with  
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)  
![Vapi AI](https://img.shields.io/badge/Vapi_AI-9146FF?style=for-the-badge&logo=vercel&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)  
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge)  
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)  
![Zod](https://img.shields.io/badge/Zod-3178C6?style=for-the-badge)

**VettAI** is a modern web application that helps users practice mock interviews using real-time voice agents powered by **Vapi AI** and **Google Gemini**. The app features a clean, responsive UI and intelligent feedback to enhance your preparation experience.

Whether you're learning how to integrate AI into apps or preparing for interviews, **VettAI** is a great starting point.

---

## ⚙️ Tech Stack

- **Next.js** – App routing & backend logic
- **Firebase** – Authentication & database
- **Tailwind CSS** – Styling framework
- **Vapi AI** – Voice interview agent
- **shadcn/ui** – UI components
- **Google Gemini** – AI-based feedback
- **Zod** – Schema validation

---

## 🔋 Features

- Authentication with Firebase
- AI voice interviews using Vapi
- Real-time feedback from Google Gemini
- Interview dashboard to manage sessions
- Clean and responsive UI with shadcn/ui and Tailwind CSS

---

## 🚀 Quick Start

### Prerequisites

- Git
- Node.js
- npm

### Clone & Install

```bash
git clone https://github.com/yourusername/vettai.git
cd vettai
npm install
```

## Environment Variables
Create a .env.local file in the root of your project and add the following:

```bash
makefile
Copy
Edit
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
GOOGLE_GENERATIVE_AI_API_KEY=
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```
Replace the placeholders with your actual Firebase and Vapi credentials.

Then run:
```bash
npm run dev
```