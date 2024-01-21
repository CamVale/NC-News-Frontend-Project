import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTopics } from "../api/api";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
export default function TopicBar(props) {
  const [topicList, setTopicList] = useState([]);
  const [search, setSearch] = useState('')
  let navigate = useNavigate();

  useEffect(() => {
    getTopics().then((res) => {
      setTopicList(res);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/articles?search=${search}`)
    setSearch('')
  };

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/articles">
          All
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {topicList.map((topic, index) => {
              return (
                <Nav.Link className="text-capitalize" key={index} as={Link} to={`/articles?topic=${topic.slug}`}>
                  {topic.slug}
                </Nav.Link>
              );
            })}
          </Nav>
          <Form
            className="d-flex"
            onSubmit={handleSubmit}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)} 
              value={search}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

