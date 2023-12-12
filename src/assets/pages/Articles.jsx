import { useState } from "react"
import ArticleCard from "../components/ArticleCard"
import { getArticles } from "../api/api";
import { useEffect } from "react";
import { MDBTypography } from "mdb-react-ui-kit";


export default function Articles(){

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((res) => {
          setArticles(res);
        });
      }, []);

    return (
        <>
        <h1>Articles!</h1>
        <MDBTypography listUnStyled className='mb-0'>
        {articles.map((article, index)=>{
          return <ArticleCard article={article} key={index}/>
        })}
      </MDBTypography>
      </>
    )
}