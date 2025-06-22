
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap';
import Event from '../components/Event';
import Location from '../components/Location';

export default function Home() {
  return (
    <Container>
      <Event />
      <Location />
    </Container>


  );
}
