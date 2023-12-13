import { useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../api/api";
import { useEffect } from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import { Spinner } from "react-bootstrap";


export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  
  useEffect(() => {
      getArticles().then((res) => {
          setArticles(res.articles);
          setIsLoading(false)
        });
    }, []);
    
    if (isLoading) {
      return (<>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner><h1>Loading...</h1>
        </>
      );
    }
  return (
    <>
      <h1>Articles!</h1>
      <MDBTypography listUnStyled className="mb-0">
        {articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />;
        })}
      </MDBTypography>
    </>
  );
}

