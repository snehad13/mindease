responses = {
    "joy": "So happy to hear that! Keep spreading positivity ✨",
    "anger": "Take a few deep breaths. It's okay to feel angry — you're human ❤️",
    "fear": "It’s okay to feel scared. You've got the strength to get through this 🌙",
    "sadness": "Bad days happen, but better ones are coming 🌧️➡️🌈",
    "love": "Love is powerful — let it shine and surround you 💖",
    "surprise": "Woah! Life does throw surprises. Embrace it 💫",
    "neutral": "It’s okay to just be. Ground yourself and take it slow 🌿"
}

def get_response(emotion):
    return responses.get(emotion.lower(), "Emotions are complex, but you’re doing great 🫶")
