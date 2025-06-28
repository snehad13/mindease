// src/recommendations.js
const moodData = {
  joy: {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC" // Happy Hits
  },
  sadness: {
    quote: "This too shall pass.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634"
  },
  anger: {
    quote: "For every minute you are angry you lose sixty seconds of happiness.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl"
  },
  fear: {
    quote: "Feel the fear and do it anyway.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u"
  },
  love: {
    quote: "You yourself, as much as anybody, deserve your love and affection.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWVgynK0t3H3x"
  },
  surprise: {
    quote: "Surprise yourself every day with your own courage.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ"
  },
  neutral: {
    quote: "Every day is a fresh start.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO"
  }
};

export function getRecommendations(mood) {
  const key = mood?.toLowerCase();
  return moodData[key] || {
    quote: "Breathe. Everything will be okay.",
    spotify: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0" // fallback
  };
}
