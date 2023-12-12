import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdb-react-ui-kit";

export default function ArticleCard(props) {
  return (
    <li key={props.article.article_id}>
      <MDBCard style={{ maxWidth: "100vw", background: "linear-gradient(180deg, rgba(0,157,255,1) 0%, rgba(130,207,255,1) 49%, rgba(0,157,255,1) 100%)"}}>
            <MDBRow className="g-0">
              <MDBCol className="col-4 d-flex align-items-center" sm={2} md={2} >
                <MDBCardImage  src={props.article.article_img_url} alt="..." fluid/>
              </MDBCol>
              <MDBCol className="col-8" sm={10} md={10}>
                <MDBCardBody >
                  <MDBCardTitle className="fs-6 fw-bold">
                    {props.article.title}{" "}
                    <small className="text-muted"> by {props.article.author}</small>
                  </MDBCardTitle>
                  <MDBCardText>
                    <small className="text-muted">
                      Posted: {new Date(props.article.created_at).toUTCString()}, 
                      Votes: {props.article.votes}, 
                      Comments: {props.article.comment_count}{" "}
                    </small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
      </MDBCard>
    </li>
  );
}
