import { useEffect, useState } from "react";
import { getComments, postComment } from "../api/api";
import { Badge, FloatingLabel, ListGroup, Spinner, Form, Button } from "react-bootstrap";


export default function CommentBar(props) {
  const [currComments, setCurrComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [userComment, setUserComment] = useState("")

  useEffect(()=>{
    console.log(userComment)
  }, [userComment])


  useEffect(() => {
    getComments(props.currID).then((res) => {
      setCurrComments(res);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) {
    return (
    <>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner><h1>{userComment ? "Posting..." : "Loading..."}</h1>
      </>
    );
  }

  console.log(currComments)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setIsLoading(true)
    postComment(props.currID, userComment).then((newComment)=>{
      console.log(newComment)
      setUserComment("")
      setCurrComments((currComments)=>{
        setIsLoading(false)
        return [newComment, ...currComments]
      })
    })

  }
  

  return currComments.length > 0 ? (
    <>
    <Form onSubmit={handleSubmit}>
      <FloatingLabel style={{position: "relative"}} controlId="floatingTextarea2" label="Write a comment here...">
        <Button type="submit" style={{position: "absolute", right: "10px", bottom: "10px"}}>Submit</Button>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            onChange={(e)=>{setUserComment(e.target.value)}}
            value={userComment}
            required
          />
        </FloatingLabel>
    </Form>
    <ListGroup style={{minHeight: "100vh"}}>
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
    </ListGroup></>
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
