from transformers import pipeline

# Load the emotion classification model ONCE at start
emotion_classifier = pipeline("text-classification", model="nateraw/bert-base-uncased-emotion")

def detect_emotion(text):
    if not text.strip():
        return "neutral"
    result = emotion_classifier(text)[0]  # returns label and score
    return result['label']  # e.g., 'joy', 'fear', 'anger'
