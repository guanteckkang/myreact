import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { useState } from "react";

const fruits = ["apple", "banana", "pineapple", "pear", "orange"];
function App() {
  return (
    <div>
      <Navbar1 />
      <div style={{ height: 50 }}></div>
      <Container1 />
      <Button1 name="apple" />
      <Count />
    </div>
  );
}
function Count(props) {
  const [count, setCount] = useState(0);
  var num = 1;
  const plus1 = () => {
    setCount(count + num);
  };
  const plus2 = () => {
    setCount(count + 2);
  };
  const plus3 = () => {
    setCount(count + 3);
  };
  const minus1 = () => {
    setCount(count - 1);
  };
  const minus2 = () => {
    setCount(count - 2);
  };
  const minus3 = () => {
    setCount(count - 3);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      {/* test useState */}
      <p>clicked {count} times</p>
      {count % 2 === 0 ? <p>Even</p> : <p>Odd</p>}
      <button num={6} onClick={plus1}>
        Click +1
      </button>
      <button onClick={plus2}>Click +2</button>
      <button onClick={plus3}>Click +3</button>
      <br />
      <button onClick={minus1}>Click -1</button>
      <button onClick={minus2}>Click -2</button>
      <button onClick={minus3}>Click -3</button>
      <br />
      <button onClick={reset}>Reset count</button>
    </div>
  );
}
function Button1() {
  const postClick = () => {
    alert("You Clicked Me! ");
  };
  return (
    <div>
      <button onClick={postClick}>Click me</button>
    </div>
  );
}
function Navbar1() {
  return (
    <Navbar fixed="top" key="sm" bg="primary" expand="sm" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              List
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
function Test1(props) {
  const a = "World";
  return (
    <div>
      {/* <h1>Hello {a}</h1> */}
      <h1>Hello {props.name}</h1>
    </div>
  );
}
function Img1(props) {
  return (
    <div>
      <a href={props.url}>{props.name}</a>
      {/* <img src={props.url}></img>; */}
    </div>
  );
}
function Condition1(props) {
  return (
    <div>{props.a > props.b ? "A is bigger than B" : "B is bigger than A"}</div>
  );
}
function Fruits(props) {
  return (
    <div>
      {fruits.map((n) => {
        return <div>{n}</div>;
      })}
    </div>
  );
}
function Container1(props) {
  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col sm="2">Test1</Col>
        <Col sm="8">Test2</Col>
        <Col sm="2">Test3</Col>
      </Row>
    </Container>
  );
}
export default App;
