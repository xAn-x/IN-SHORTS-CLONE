import axios from "axios";

const API_KEY='c1da482fa28a41d4bf95e2f72feef273';
const URL = `https://newsapi.org/v2/everything?q=science technology computers machine-learning&from=2022-12-05&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
export const getNews = async (page, size = 5) => {
  try {
    const news= await axios.get(URL);
    console.log(news);
    return news;
  } catch (error) {
    console.log("error while calling getNews API");
  }
};
