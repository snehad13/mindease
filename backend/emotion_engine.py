from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

analyzer = SentimentIntensityAnalyzer()

def detect_emotion(text):
    if not text.strip():
        return "neutral"

    scores = analyzer.polarity_scores(text)
    compound = scores['compound']

    if compound >= 0.3:
        return "joy"
    elif compound <= -0.3:
        return "sadness"
    elif scores['neg'] > 0.4:
        return "anger"
    elif scores['neu'] > 0.6:
        return "calm"
    elif scores['pos'] > 0.4 and scores['neu'] < 0.5:
        return "love"
    else:
        return "neutral"
