// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export const sources = [
  {
    id: "bbc-news",
    name: "BBC News",
  },
  {
    id: "cnn",
    name: "CNN",
  },
  {
    id: "fox-news",
    name: "Fox News",
  },
  {
    id: "google-news",
    name: "Google News",
  },
];

export const BASE_URL = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category = "general", country = "in") => {
  return `${BASE_URL}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};

// everything_api = "<BASE_URL>/everything/<source_id>.json";
// sources = "https://saurav.tech/NewsAPI/sources.json"
