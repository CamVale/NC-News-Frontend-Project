import { useContext, useState } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { UserContext } from "./UserProvider";


export default function CommentCard(props){
    
    const {user, setUser} = useContext(UserContext)
    const {comment, handleDelete} = props

    

    return (
        <ListGroup.Item key={comment.comment_id}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{comment.author} <small className="text-muted fw-light" style={{ fontSize: "12px" }}> posted at: {new Date(comment.created_at).toUTCString()}</small></div>
            {comment.body}
          </div>
          <Badge bg="primary" pill>{comment.votes}</Badge>{comment.author === user && <Button style={{padding: "1px"}} variant="danger" size="sm" onClick={(e)=>{handleDelete(e, comment)}}><small>Delete</small></Button>}
        </ListGroup.Item>
      );
}