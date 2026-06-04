<<<<<<< HEAD
﻿# nexium-grand-project
=======
# 🍳 AI Recipe Generator

A smart recipe app that helps you create recipes from whatever ingredients you have at home. Just type what you’ve got, hit generate, and get a step-by-step recipe instantly using AI.

🔗 [Live Demo] https://grand-projet-psi.vercel.app/

🔗 [short video] https://www.linkedin.com/posts/bilal-ahmed-b70339292_im-excited-to-share-my-latest-project-ai-activity-7355518041591287809-xhFB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbiekQBAfHmhmLWdoEkewoLgHGvDknvBMM

---

## 📌 What This Project Does

The AI Recipe Generator takes your available ingredients, sends them to an AI (Gemini via n8n), and gives you back a full recipe with steps, cooking time, servings, and more. It’s like having your own personal chef who knows what to do with what’s in your kitchen.

---

## 🔥 Key Features

- **Instant Recipe Generator** — Just enter ingredients, get a recipe
- **AI Integration** — Uses Gemini through n8n workflows
- **User Login** — Supabase auth (email sign-in)
- **Recipe History** — View your recent recipe generations
- **Fully Responsive** — Works on all devices
- **Clean UI** — Built with Tailwind CSS + ShadCN components

---

## 🧠 How It Works (Short Version)

1. User enters ingredients on the dashboard
2. Clicks “Generate Recipe”
3. Ingredients are sent to backend (`Express.js`)
4. Backend sends data to **n8n + Gemini API**
5. AI returns a recipe
6. Frontend displays it nicely

---

## 📄 Pages and What They Do

### 🔐 Login Page
- Login with Supabase magic link
- Automatically redirects logged-in users to the dashboard

### 🧪 Dashboard Page
- Input ingredients (just type or paste them)
- Click “Generate” to get a recipe
- Shows recipe title, time, servings, ingredients, instructions
- Also shows a preview of your recent 4 recipes
- Option to log out from user menu

### 🕓 History Page
- Full list of previously generated recipes
- View, search

---

🧰 Tech Stack
Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express

AI: Gemini API via n8n workflow

Auth: Supabase (magic link login)

Database: MongoDB (for saving recipes)

Hosting: Vercel (frontend, backend), n8n Cloud (AI)


# 📁 Project Structure

```bash
ai-recipe-generator/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── HistoryPage.jsx
│   │   │   └── RecipeViewPage.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── ui/
│   │   │
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── services/
│   │   │   └── recipeService.js
│   │   │
│   │   ├── hooks/
│   │   │   └── use-mobile.js
│   │   │
│   │   ├── lib/
│   │   │   ├── supabase.js
│   │   │   └── utils.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── routes/
│   │   └── recipes.js
│   │
│   ├── models/
│   │   └── Recipe.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── n8n/
│   └── recipe-generation-workflow.json
│
├── README.md
└── .gitignore
```
>>>>>>> 401c2d665dee68ccc1009eee4a7bd083f44bc463
