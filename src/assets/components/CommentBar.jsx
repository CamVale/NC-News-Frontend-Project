import { useEffect, useState } from "react";
import { deleteComment, getComments, postComment } from "../api/api";
import {
  Badge,
  FloatingLabel,
  ListGroup,
  Spinner,
  Form,
  Button,
  Container,
} from "react-bootstrap";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import toast, {Toaster} from 'react-hot-toast'

export default function CommentBar(props) {
  const [currComments, setCurrComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userComment, setUserComment] = useState("");


  useEffect(() => {}, [userComment]);

  useEffect(() => {
    getComments(props.currID).then((res) => {
      setCurrComments(res);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postComment(props.currID, userComment).then((newComment) => {
      setUserComment("");
      setCurrComments((currComments) => {
        setIsLoading(false);
        return [newComment, ...currComments];
      });
    });
  };

  const handleDelete = (event, comment) =>{
    event.preventDefault()
    const index = currComments.indexOf(comment)
    setCurrComments((currComments)=>{ return currComments.filter(item => item !== comment)}) 
    deleteComment(comment.comment_id)
    toast("Comment deleted!")

  }

  return currComments.length > 0 ? (
    <>
      <Toaster/>
      <Loading isLoading={isLoading} userComment={userComment}></Loading>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          style={{ position: "relative" }}
          controlId="floatingTextarea2"
          label="Write a comment here..."
        >
          <Button
            type="submit"
            style={{ position: "absolute", right: "10px", bottom: "10px" }}
          >
            Submit
          </Button>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) => {
              setUserComment(e.target.value);
            }}
            value={userComment}
            required
          />
        </FloatingLabel>
      </Form>
      <Container style={{ minHeight: "100vh" }}>
        <ListGroup style={{ minHeight: "100vh" }}>
          {currComments.map((comment) => {
            return <>
              <CommentCard  handleDelete={handleDelete} comment={comment} key={comment.comment_id}/>
            </>;
          })}
        </ListGroup>
      </Container>
    </>
  ) : (
    <ListGroup>
      <ListGroup.Item>
        <div className="ms-2 me-auto">
          <div className="fw-bold">No comments yet...</div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}
