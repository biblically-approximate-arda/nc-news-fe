import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comments from "./Comments"

export default function ArticlePage() {
  const { article_id } = useParams()
  const [article, setArticle] = useState({})
  const [loadedArticle, setLoadedArticle] = useState(false)

  useEffect(() => {
    fetch("https://nc-news-m9np.onrender.com/api/articles/" + article_id)
    .then(dat => dat.json())
    .then((articleData) => {
      setLoadedArticle(true)
      setArticle(articleData.article)
    })
  }, [])
  console.log(article)
  return <>
  {loadedArticle ? 
    <> 
      <h2> {article.title} </h2>
      <h4>by {article.author}</h4>
      <span style={{color:"#888888"}}> {article.topic.toUpperCase()} </span> 
      <p></p>
      <div style={{display: "flex", width: "80vw"}}>
        <img src={article.article_img_url} style={{width: "30vw", "padding-right":"10px"}}/>
        <span>{article.body}</span>
      </div>
    </> 
  : <p>Loading article..</p>}
  <Comments/>
  </>
}