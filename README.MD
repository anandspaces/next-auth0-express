# Auth0 Email Notification App

A full-stack project using **Next.js 15 + Auth0** for authentication and **Node.js + Express** for backend logic to send a user their JWT token via email after login.

---

## Project Structure

```
root/
├── backend/
│   ├── src/
│   ├── .env
│   ├── Dockerfile
│   └── ...
├── frontend/
│   ├── src/
│   ├── .env
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml
└── README.md
```

---


## Environment Variables

### Frontend (`frontend/.env`)
```env
NEXT_PUBLIC_AUTH0_DOMAIN=dev-g5mwwnoswygbm18r.us.auth0.com
NEXT_PUBLIC_AUTH0_CLIENT_ID=XD2Wkw3cHCMIv1Fu9HaRA3x2h3gIr7SN
NEXT_PUBLIC_AUTH0_CALLBACK=http://localhost:3000/callback
NEXT_PUBLIC_AUTH0_AUDIENCE=http://localhost:5000
```

### Backend (`backend/.env`)
```env
AUTH0_DOMAIN=dev-g5mwwnoswygbm18r.us.auth0.com
EMAIL_USERNAME=panthera.sapiens0@gmail.com
EMAIL_PASSWORD=your_app_password_here
```
> *Use an App Password for Gmail and never commit `.env` files.*

---
## Setup Instructions (Manual)

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
---

## Docker-Based Setup (Recommended)

### Step 1: Run with Docker Compose
From the root directory:
```bash
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

### Optional: Stop and Remove Containers
```bash
docker-compose down
```

---

## Tech Stack
- Frontend: Next.js 15, React 19, TailwindCSS
- Backend: Express.js, Node.js
- Auth: Auth0 (OAuth2)
- Email: Nodemailer (Gmail SMTP)
- Docker: Containerization using `Dockerfile` + `docker-compose`

---

## Demo Flow

1. User logs in using Auth0
2. Auth0 redirects to `/callback`
3. Frontend sends `access_token` and `email` to backend
4. Backend validates and sends the token to user's email
5. Frontend redirects user to homepage

---

## Example Email
```
Subject: Your Login Token
Body:
Here is your authentication token:
<JWT TOKEN HERE>
```

---

## Future Improvements
- Add database to store login history
- Add user-friendly email template
- Add error UI for failed login/token/email
- Secure backend endpoint with Auth0 JWT middleware

---

## Built With
- [Next.js 15](https://nextjs.org/)
- [Auth0](https://auth0.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [TailwindCSS](https://tailwindcss.com/)

---

> Maintained by Anand - 2025
