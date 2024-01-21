import { Spinner } from "react-bootstrap";

export default function Loading(props){

    if (props.isLoading) {
        return (
        <>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner><h1>{props.userComment ? "Posting..." : "Loading..."}</h1>
          </>
        );
      }
}