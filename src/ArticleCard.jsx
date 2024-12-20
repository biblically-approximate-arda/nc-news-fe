import { Link } from "react-router";

export default function ArticleCard(props) {
  return <Link to={`/articles/${props.article.article_id}`}>
    <div style={{width: "300px"}} id="article-card">
      <img src={props.article.article_img_url} style={{width: "300px"}}/>
      <>{props.article.title}</>
    </div>
  </Link>
}