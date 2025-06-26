import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import {  fontBodyClass } from '../components/Font';

export const metadata = {
  title: "Fiesta de Inauguración",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-info ${fontBodyClass}`} style={{ fontSize: "1.8rem", }}>
        <Container variant="info" >
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              {children}
            </Col>
          </Row>
        </Container>
      </body>
    </html >
  );
}
