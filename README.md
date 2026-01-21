# Mini Time Tracker

This repository contains a **Mini Time Tracker** web application built as a test assignment for Viso Academy. The project demonstrates a full-stack architecture with a React + TypeScript frontend and a Node.js backend with a relational database.

---

## 🛠 Tech Stack

### Frontend

* **React + TypeScript**
* Vite (development server & build tool)
* Fetch API for HTTP requests

### Backend

* **Node.js + Express** (REST API)
* **Prisma ORM**
* **SQLite** (can be easily replaced with PostgreSQL)

---

## 📁 Project Structure

```
mini-time-tracker/

frontend/
  src/
    api/          # API layer (HTTP requests)
    components/   # UI components (Form, List, Totals)
    types/        # Shared TypeScript interfaces
    App.tsx       # Main app component
    main.tsx      # React entry point

backend/
  prisma/         # Prisma schema & migrations
  src/
    routes/       # API routes
    server.ts    # Express app entry point

README.md
```

---

## ⚙️ Features

* Create time entries with:

  * Date
  * Project
  * Hours
  * Description
* View entries grouped by **date**
* See **total hours per day**
* See **grand total hours** across all entries

### Validation

* All fields are required
* Hours must be a positive number
* Maximum **24 hours per calendar date**

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/OliaChuzhdiuk/timeTracker
```

---

## 🗄 Backend Setup

### Install dependencies

```bash
cd backend
npm install
```

### Setup Database

```bash
npx prisma migrate dev
```

### Start Backend Server

```bash
npm run dev
```

Server will run at:

```
http://localhost:4000
```

---

## 🌐 Frontend Setup

### Install dependencies

```bash
cd frontend
npm install
```

### Environment variables

Create a `.env` file in `frontend/`:

```
VITE_API_URL=http://localhost:4000
```


