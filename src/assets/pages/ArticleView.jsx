import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getArticles, patchVotes } from "../api/api";
import {
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  Badge,
} from "react-bootstrap";
import CommentBar from "../components/CommentBar";
import { MDBIcon } from "mdb-react-ui-kit";

export default function ArticleView() {
  const [currArticle, setCurrArticle] = useState({});
  const [currVotes, setCurrVotes] = useState();
  const { article_id: id } = useParams();

  useEffect(() => {
    getArticles(id).then((res) => {
      setCurrArticle(res);
      setCurrVotes(res.votes);
    });
  }, []);

  const handleVote = (change) => {
    patchVotes(id, change);
    return change === "up"
      ? setCurrVotes(currVotes + 1)
      : setCurrVotes(currVotes - 1);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs="10">
            <Image src={currArticle.article_img_url} fluid />
          </Col>
          <Col xs="2">
            <ButtonGroup style={{ translate: "-20px" }} vertical>
              <Button
                onClick={() => {
                  handleVote("up");
                }}
                style={{
                  borderBottomLeftRadius: "2px",
                  borderBottomRightRadius: "2px",
                }}
              >
                ↑
              </Button>
              <Badge style={{ margin: "2px" }} bg="primary">
                <small>Votes:</small>
                {currVotes}
              </Badge>
              <Button
                onClick={() => {
                  handleVote("down");
                }}
                style={{
                  borderTopLeftRadius: "2px",
                  borderTopRightRadius: "2px",
                }}
              >
                ↓
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="p-3 mb-2 bg-primary text-emphasis-primary">
          <Col>{currArticle.title}</Col>
          <Col>{currArticle.author}</Col>
        </Row>
        <Row>
          <Col className="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
            {currArticle.body}
          </Col>
        </Row>
      </Container>
      <CommentBar currID={id} />
    </>
  );
}
