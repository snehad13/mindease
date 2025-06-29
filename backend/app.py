from flask import Flask, request, jsonify
from flask_cors import CORS
from emotion_engine import detect_emotion
from responses import get_response
from chat_engine import get_chat_response

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

# Home route for testing or display
@app.route('/', methods=['GET'])
def home():
    return "🧠 MindEase API is live. Use POST requests to /chat, /analyze, or /detect-mood."

# Optional: Simple docs route to describe API usage
@app.route('/docs', methods=['GET'])
def docs():
    return """
    <h2>MindEase API Endpoints</h2>
    <ul>
        <li><strong>/chat</strong> [POST] – Send JSON with 'message' and 'history'</li>
        <li><strong>/analyze</strong> [POST] – Returns emotion + response</li>
        <li><strong>/detect-mood</strong> [POST] – Returns only detected mood</li>
    </ul>
    """

# Route for emotion detection
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    message = data.get("message", "")
    emotion = detect_emotion(message)
    response = get_response(emotion)
    return jsonify({"emotion": emotion, "response": response})

# Route for chat response
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    history = data.get("history", [])
    message = data.get("message", "")
    reply = get_chat_response(history, message)
    print("Bot reply:", reply)
    return jsonify({"response": reply})

# Route for mood detection
@app.route('/detect-mood', methods=['POST'])
def detect_mood():
    data = request.get_json()
    message = data.get("message", "")
    mood = detect_emotion(message)
    return jsonify({"mood": mood})

# Run server
if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
