import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getArticles, getArticlesByTopic } from "../api/api";
import { useEffect } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useSearchParams()
  const topic = url.get('topic')
  const search = url.get('search')

  useEffect(()=>{
    console.log('o!')
    if (topic){
      setIsLoading(true)
      getArticlesByTopic(url.get('topic')).then((res)=>{
      setArticles(res.articles)
      setIsLoading(false)
    })} else {
      setIsLoading(true)
      getArticles().then((res) => {
        setArticles(res.articles);
        setIsLoading(false)
      });
    }
  }, [topic])

  useEffect(()=>{
    if(search){
      setArticles(articles.filter((article)=>{
        return article.title.includes(`${search}`)
      }))
    } else {
      setUrl("clear")
    }
  }, [search])


  

    
  return isLoading ? <Loading isLoading={isLoading}/> : (
    <>
      <h1 className="text-capitalize">{topic ? topic : "All"}</h1>
      <MDBTypography listUnStyled className="mb-0">
        {articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />;
        })}
      </MDBTypography>
    </>
  );
}

