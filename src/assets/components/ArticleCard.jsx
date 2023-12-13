import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  return (
    <li key={props.article.article_id}>
      <Link to={`/articles/${props.article.article_id}`} state={{id: props.article.article_id}}>
        <Card style={{}}>
          <Row className="g-0">
            <Col className="col-4 d-flex align-items-center" sm={2} md={2}>
              <Card.Img
                style={{ objectFit: "fill" }}
                src={props.article.article_img_url}
                alt="..."
              />
            </Col>
            <Col className="col-8" sm={10} md={10}>
              <Card.Body>
                <Card.Title className="fs-6 fw-bold">
                  {props.article.title}{" "}
                  <small className="text-muted">
                    {" "}
                    by {props.article.author}
                  </small>
                </Card.Title>
                <Card.Text>
                  <small className="text-muted" style={{ fontSize: "12px" }}>
                    Posted: {new Date(props.article.created_at).toUTCString()},
                    Votes: {props.article.votes}, Comments:{" "}
                    {props.article.comment_count}{" "}
                  </small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Link>
    </li>
  );
}

// className="hover-shadow-2-strong" style={{ maxWidth: "100vw" , backgroundColor: "rgb(167, 199, 231)"}}
