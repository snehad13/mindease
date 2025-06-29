
# 💬 MindEase – Your AI-Powered Mental Wellness Assistant

**MindEase** is a full-stack AI chatbot built to support mental well-being.  
It detects your mood, chats with empathy, and even tracks how you're feeling over time — all in a calm, beautifully designed interface.

---

## 🌐 Live Demo

- **Frontend (React + Vercel):** [mindease-ten.vercel.app](https://mindease-ten.vercel.app/)
- **Backend (Flask + Render):** [mindease-api-cru7.onrender.com](https://mindease-api-cru7.onrender.com/)

---

## 💡 Features

- 🧠 **AI Chatbot** powered by Groq's Mixtral LLM  
- 😄 **Mood Detection** with lightweight VADER sentiment analysis  
- 📒 **Mood Journal** — beautifully styled emoji cards  
- 🎵 **Music & Quote Recommender** *(coming soon)*  
- 🧘‍♀️ Clean, soft UI with a therapeutic experience  
- ☁️ **Fully Deployed**: Vercel (frontend), Render (backend)

---

## 🛠 Tech Stack

| Frontend        | Backend           | NLP / AI         | Deployment         |
|-----------------|-------------------|------------------|--------------------|
| React.js        | Flask (Python)    | VADER Sentiment  | Vercel (Frontend)  |
| Tailwind CSS    | Flask-CORS        | Groq API (Mixtral) | Render (Backend)  |
| Axios           | Requests, Dotenv  | LocalStorage      | GitHub CI/CD       |

---

## 🧠 How It Works

1. User types a message in the chatbot
2. The frontend sends:
   - Message → `/chat` endpoint for reply
   - Message → `/detect-mood` endpoint to track mood
3. The backend:
   - Detects mood via VADER
   - Calls Groq's Mixtral model to generate a smart response
4. The chatbot reply is shown
5. The mood and timestamp are saved to a local journal

---

## 🚀 Getting Started (Local Setup)

```bash
# Clone the repo
git clone https://github.com/your-username/mindease.git
cd mindease
```

### 🖼 Frontend

```bash
cd frontend
npm install
npm start
```

### 🧠 Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 🔐 .env File (in backend folder)

Create a file called `.env` and add:

```env
GROQ_API_KEY=your_actual_groq_api_key
```

---

## 📁 Folder Structure

```
mindease/
├── backend/
│   ├── app.py
│   ├── chat_engine.py
│   ├── emotion_engine.py
│   ├── requirements.txt
├── frontend/
│   ├── src/
│   │   └── ChatWindow.js
│   └── public/
├── README.md
```

---

## 🙌 Acknowledgements

- Powered by [Groq](https://groq.com/) — ultra-fast LLM API
- Inspired by a passion for making tech more emotionally aware 💜
- Open-source and built with love by 
**Sneha Devnani**

---

## ⭐ Like this project?

Please consider ⭐ starring the repo or sharing with a friend who cares about wellness!

---
