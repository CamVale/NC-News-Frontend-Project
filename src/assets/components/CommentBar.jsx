import { useEffect, useState } from "react";
import { getComments } from "../api/api";
import { Badge, ListGroup } from "react-bootstrap";

export default function CommentBar(props) {
  const [currComments, setCurrComments] = useState([]);


  useEffect(() => {
    getComments(props.currID).then((res) => {
      setCurrComments(res);
    });
  }, []);

  return (
    <ListGroup>
      {currComments.map((comment) => {
        return (
          <ListGroup.Item key={comment.comment_id}>
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
  );
}
