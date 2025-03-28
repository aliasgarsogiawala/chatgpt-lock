# 🔐 ChatGPT Password Locker Extension (with Cloud Sync)

This is a browser extension that allows users to **lock individual ChatGPT conversations with per-chat passwords** — even when sharing the same account. Each chat can be locked with a unique password, and access is only granted upon entering the correct password.

### ✨ Features

- Lock any ChatGPT conversation with a custom password 🔒
- Automatically prompts for password when opening a locked chat
- Cloud-based sync using **MongoDB Atlas** and **Vercel Serverless API**
- Works across devices and sessions for the same ChatGPT account
- Simple, clean UI built directly into the ChatGPT interface

---

## 🚀 How It Works

1. The extension runs on [chat.openai.com](https://chat.openai.com) or [chatgpt.com](https://chatgpt.com)
2. When a user clicks "🔐 Lock Chat", the extension stores the password in a remote MongoDB database using a Vercel API
3. When the user visits that chat again, the extension prompts for a password before revealing the content

---

## 🛠️ Tech Stack

- **Browser Extension** (Manifest V3, JS, CSS)
- **Vercel Serverless Functions** (Next.js API routes)
- **MongoDB Atlas** (for password storage)
- Optional: Password hashing (coming soon)

---

## 🧩 Installation (Dev)

1. Clone this repo and unzip
2. Go to `chrome://extensions` in your browser
3. Enable **Developer Mode**
4. Click **"Load unpacked"** and select the extension folder

---

## 🌐 Vercel + MongoDB Setup

1. Create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) cluster
2. Create a database: `chatlocks` and a collection: `locks`
3. Set up a [Vercel](https://vercel.com) project with a `MONGODB_URI` environment variable
4. Push the `api/lock` route to Vercel

---

## 📁 Folder Structure

```plaintext
chatgpt-password-locker/
├── manifest.json               # Chrome extension config (Manifest V3)
├── content.js                  # Main script injected into ChatGPT
├── style.css                   # Styles for the lock screen UI
├── README.md                   # This file
└── api/                        # (Optional) Vercel serverless backend
    └── lock/
        └── route.ts            # GET & POST endpoints for MongoDB chat locks

---

## ✅ Future Features

- 🔑 Password hashing (bcrypt or argon2)
- 🧠 "Unlock All" master password
- 🌍 Multi-user cloud sync using email/login
- ✨ Slicker modals, animations, and UI polish

---

## 👥 Author

Built by Tech Horizons Club  
Open to collaboration and improvements 🚀

---

## 📄 License

MIT – Use it, modify it, and build something great with it!


