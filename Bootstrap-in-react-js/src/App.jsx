import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./App.css"



function App(){

   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div>

    {/* Navbar start */}

      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>

{/* carousel start */}

        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="data:image/jpeg;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="data:image/jpeg;base64,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"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide"
          src="data:image/jpeg;base64,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"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* card start */}

   <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      {/* Canvas start */}

       <Button variant="primary" onClick={handleShow}>
        Toggle static offcanvas
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          I will not close if you click outside of me.
        </Offcanvas.Body>
      </Offcanvas>

    {/* footer start */}

    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row">

      {/* Brand */}
      <div className="col-md-4 mb-4">
        <h3 className="fw-bold">ShopEase</h3>
        <p>
          Your one-stop destination for premium products at affordable prices.
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-md-2 mb-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">Home</a></li>
          <li><a href="#" className="text-light text-decoration-none">Products</a></li>
          <li><a href="#" className="text-light text-decoration-none">About</a></li>
          <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* Customer */}
      <div className="col-md-3 mb-4">
        <h5>Customer Care</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
          <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
          <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
          <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="col-md-3 mb-4">
        <h5>Contact</h5>
        <p>Email: support@shopease.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Ahmedabad, Gujarat</p>
      </div>

    </div>

    <hr className="border-secondary" />

    <div className="text-center">
      <p className="mb-0">
        © 2026 ShopEase. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  )

}

export default App