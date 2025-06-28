import os
import requests
from dotenv import load_dotenv

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

def get_chat_response(history, message):
    """
    Uses Groq's Mixtral model to get chatbot response
    """

    # Build chat history in OpenAI-compatible format
    messages = []
    for msg in history[-6:]:
        if isinstance(msg, dict) and "role" in msg and "content" in msg:
            messages.append({"role": msg["role"], "content": msg["content"]})
    messages.append({"role": "user", "content": message})

    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "mistral-saba-24b",
        "messages": messages,
        "temperature": 0.7,
        "max_tokens": 300
    }

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"].strip()

    except requests.exceptions.RequestException as e:
        print(f"Groq API error: {e}")
        return get_fallback_response(history, message)

def get_fallback_response(history, message):
    return "Sorry, I'm having trouble connecting to the server. Let's try again shortly."
