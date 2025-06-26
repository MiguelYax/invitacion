import { Card, CardHeader, CardBody, CardImg } from "react-bootstrap";
import Image from "next/image";
import logoImg from "../public/logo.png";
import { fontHeaderClass } from './Font';

export default function Event() {
    return (
        <Card className="mt-5">
            <Image
                className="card-img-top"
                src={logoImg}
            />
            <CardHeader className={fontHeaderClass}>
                Detalles del evento:
            </CardHeader>
            <CardBody>
                Te invito a la inauguracion de mi hogar. Ven a compartir conmigo un momento importante. A degustar de un almuerzo especial y disfrutar de la compañía de amigos y familiares.
                <hr />
                Lugar: Barrio San Sebastian, 6a. Avenida, Zona 2, San Cristobal Totonicapan, Guatemala.
                <hr />
                Fecha: Sabado 5 de Julio de 2025, a partir de las 11:00 de la mañana.
            </CardBody>
        </Card>
    );
}