import { useState } from "react"
import ArticleCard from "../components/ArticleCard"
import { getArticles } from "../api/api";
import { useEffect } from "react";


export default function Articles(){

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
          setArticles(res.articles);
        });
      }, []);

    return (
        <>
        <h1>Articles!</h1>
        <ul className="articles-list">
        {articles.map((article, index)=>{
          return <ArticleCard article={article} key={index}/>
        })}
      </ul>
      </>
    )
}