import { Card, CardHeader, CardBody, CardImg } from "react-bootstrap";
import Image from "next/image";
import logoImg from "../public/logo.png";

export default function Event() {
    return (
        <Card 
        bg="primary"
        text="white"
        >
            <Image
                className="card-img-top"
                src={logoImg}
                alt="Ver en Google Maps"
            />
            <CardHeader>
                Detalles del evento:
            </CardHeader>
            <CardBody>
                Te invitamos a la inauguracion de nuestra nueva casa. Ven a celebrar con nosotros este momento especial. A degustar de un almuerzo especial y a disfrutar de la compañia de amigos y familiares.
                <hr />
                Lugar: Barrio San Sebastian, 6a. Avenida, Zona 2, San Cristobal Totonicapan, Guatemala.
                <hr />
                Fecha: Sabado 5 de Julio de 2025, 12:00 PM.
            </CardBody>
        </Card>
    );
}