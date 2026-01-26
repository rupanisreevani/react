import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Products.css"; // 👈 add this line

function Products() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Products</h2>

      <Row className="g-4">
        {/* Smart Watch */}
        <Col md={4}>
          <Card className="text-center shadow-sm h-100">
            <Card.Img
              variant="top"
              src="/watch.webp"
              alt="Smart Watch"
              className="product-img"
            />
            <Card.Body>
              <Card.Title>Smart Watch</Card.Title>
              <Card.Text>
                Latest smartwatch with fitness tracking
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Laptop */}
        <Col md={4}>
          <Card className="text-center shadow-sm h-100">
            <Card.Img
              variant="top"
              src="/laptop.webp"
              alt="Laptop"
              className="product-img"
            />
            <Card.Body>
              <Card.Title>Laptop</Card.Title>
              <Card.Text>
                High-performance laptop for work.
              </Card.Text>
              <Button variant="primary">View More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Online Course */}
        <Col md={4}>
          <Card className="text-center shadow-sm h-100">
            <Card.Img
              variant="top"
              src="/books.png"
              alt="Online Course"
              className="product-img"
            />
            <Card.Body>
              <Card.Title>Online Course</Card.Title>
              <Card.Text>
                Learn React from scratch.
              </Card.Text>
              <Button variant="primary">Enroll Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
