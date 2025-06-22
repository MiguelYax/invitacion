import { Card, CardHeader, CardBody } from "react-bootstrap";

const data = {
  "place": "Lugar: Barrio San Sebastian, 6a. Avenida, Zona 2, San Cristobal Totonicapan, Guatemala.",
  "date": "Fecha: Sabado 5 de Julio de 2025, 12:00 PM.",
  "name": "Inauguracion de casa",
  "description": "Te invitamos a la inauguracion de nuestra nueva casa. Ven a celebrar con nosotros este momento especial. A degustar de un almuerzo especial y a disfrutar de la compañia de amigos y familiares.",
}

export default function Event() {
    return (
        <Card className="mt-5">
            <CardHeader>
                Detalles del evento:
            </CardHeader>
            <CardBody>
                {data.description}
                <hr/>
                {data.place}    
                <hr />
                {data.date}
            </CardBody>
        </Card>
    );
}