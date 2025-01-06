import axios from 'axios';

export const fetchNews = async (query = '') => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}`, {
    headers: { Authorization: `Bearer ${process.env.NEWS_API_KEY}` },
  });
  return response.data.articles;
};