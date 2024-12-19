import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArticleCard(props) {
  return <div style={{width: "300px"}}>
    <img src={props.article.article_img_url} style={{width: "300px"}}/>
    <>{props.article.title}</>
  </div>;
}