import { useEffect, useState } from "react";
import { getComments } from "../api/api";
import { Badge, ListGroup, Spinner } from "react-bootstrap";

export default function CommentBar(props) {
  const [currComments, setCurrComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    getComments(props.currID).then((res) => {
      setCurrComments(res);
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

  return currComments.length > 0 ? (
    <ListGroup>
      {currComments.map((comment) => {
        return (
          <ListGroup.Item>
            <div className="ms-2 me-auto">
              <div className="fw-bold">{comment.author} <small className="text-muted" style={{ fontSize: "12px" }}> posted at: {new Date(comment.created_at).toUTCString()}</small></div>
              {comment.body}
            </div>
            <Badge bg="primary" pill>
              {comment.votes}
            </Badge>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  ) : (
    <ListGroup>
      <ListGroup.Item>
      <div className="ms-2 me-auto">
        <div className="fw-bold">No comments yet...</div>
      </div>
      </ListGroup.Item>
    </ListGroup>
  )
}
