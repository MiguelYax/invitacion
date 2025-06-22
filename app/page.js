
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap';
import Event from '../components/Event';
import Location from '../components/Location';
import Gift from '../components/Gift';

export default function Home() {
  return (
    <Container className='mt-5 mb-5'>
      <Event />
      <Location />
      <Gift />
    </Container>
  );
}
