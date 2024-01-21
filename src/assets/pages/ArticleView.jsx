import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getArticles } from "../api/api";


import CommentBar from "../components/CommentBar";

import { Container , Row, Col, Image, Spinner} from "react-bootstrap";



export default function ArticleView() {
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const [articleID, setArticleID] = useState()
  const {
    article_id: id
  } = useParams();
  
  useEffect(() => {
    getArticles(id).then((res) => {
      setCurrArticle(res);
      setIsLoading(false)
    });
  }, [useParams()]);



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
      <Container>
      <Row>
        <Col xs="10"><Image src={currArticle.article_img_url} fluid />
        <small className="text-muted">{new Date(currArticle.created_at).toUTCString()}</small></Col>
        <Col xs="2">Kudos: {currArticle.votes}</Col>
      </Row>
      <Row className="p-3 mb-2 bg-primary text-emphasis-primary">
        <Col >{currArticle.title}</Col>
        <Col>{currArticle.author}</Col>
      </Row>
      <Row>
        <Col className="p-3 mb-2 bg-primary-subtle text-emphasis-primary">{currArticle.body}</Col>
      </Row>
      </Container>
      <CommentBar currID={id}/>
    </>
  );
}
