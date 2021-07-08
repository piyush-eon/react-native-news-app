import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI());
    setNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news: news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
