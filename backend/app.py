from flask import Flask, request, jsonify
from flask_cors import CORS
from emotion_engine import detect_emotion
from responses import get_response
from chat_engine import get_chat_response

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})

# Route for emotion detection (basic use, optional)
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    message = data.get("message", "")
    emotion = detect_emotion(message)
    response = get_response(emotion)
    return jsonify({"emotion": emotion, "response": response})

# Route for chat response from the model
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    history = data.get("history", [])
    message = data.get("message", "")
    reply = get_chat_response(history, message)
    print("Bot reply:", reply)
    return jsonify({"response": reply})

# Route for detecting mood only (used in journal)
@app.route('/detect-mood', methods=['POST'])
def detect_mood():
    data = request.get_json()
    message = data.get("message", "")
    mood = detect_emotion(message)
    return jsonify({"mood": mood})

# Start the server
if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)

