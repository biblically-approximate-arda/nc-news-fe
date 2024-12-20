import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react"

export default function AllArticles() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch("https://nc-news-m9np.onrender.com/api/articles")
    .then(dat => dat.json())
    .then((newArticles) => {
      setArticles(newArticles.articles)
      console.log(articles)
    })
  }, [])
  return articles ? 
  <div id="article-list">
    {articles.map((arti) => {
      return <ArticleCard article = {arti}/>
    })}
  </div>
  : <p></p>
}