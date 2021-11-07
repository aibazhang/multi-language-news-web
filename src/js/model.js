import { AJAX } from "./helper.js";
import { newsAPIkey } from "./apiKey.js";

const createNewsObject = function (article) {
  return {
    title: article.title,
    author: article.author,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedTimeUTC: article.publishedAt,
    publishedTimeLocal: new Date(article.publishedAt).toString(),
    description: article.description,
    content: article.content,
  };
};

export const loadNews = async function () {
  try {
    const data = await AJAX(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIkey}`
    );
    console.log(data.articles);
    return data.articles.map((a) => createNewsObject(a));
  } catch (err) {
    console.log(`${err} !!! ERROR !!!`);
    throw err;
  }
};
