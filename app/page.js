
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Title, Paragraph, Caption } from '../components/Text';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Title className='mt-5'>
            Miguel de Jesus Yax Tzunun, Tiene el honor e invitarle a la celebracion:
          </Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title>
            <em>
              Inauguracion de casa
            </em>
          </Title>
        </Col>
      </Row>
      <Row >
        <Col>
          <Paragraph>
            Sabado 5 de Julio de 2025, 12:00 PM.
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col>
          <Paragraph>
            Barrio San Sebastian, 6a. Avenida, Zona 2, San Cristobal Totonicapan, Guatemala.
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col>
          <Paragraph>
            Su presencia sera un grato recuerdo.
          </Paragraph>
        </Col>
      </Row>
    </Container>
  );
}
