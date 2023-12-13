import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getArticles } from "../api/api";
import { Container , Row, Col, Image} from "react-bootstrap";
import CommentBar from "../components/CommentBar";


export default function ArticleView() {
  const [currArticle, setCurrArticle] = useState({});
  const {
    state: { id },
  } = useLocation();
  
  useEffect(() => {
    getArticles(id).then((res) => {
      setCurrArticle(res)
    });
  }, []);


  return (
    <>
      <Container>
      <Row>
        <Col xs="10"><Image src={currArticle.article_img_url} fluid /></Col>
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
