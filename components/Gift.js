import { Card, CardHeader, CardBody, CardFooter } from "react-bootstrap";
import Image from "next/image";
import logoImg from "../public/gift.png";

export default function Event() {
    return (
        <Card 
        className="mt-5"
        bg="primary"
        text="white"
        >
            <Image
                className="card-img-top"
                src={logoImg}
                alt="Ver en Google Maps"
            />
            <CardHeader>
                Regalos y Obsequios:
            </CardHeader>
            <CardBody>
                Los obsequios de preferencia deben ser en efectivo pero no son obligatorios.  Puedes utilizar el sobre adjunto a esta invitacion o cualquier otro sobre.
            </CardBody>
            <CardFooter>
 Recuerda que lo más importante es celebrar juntos este momento especial.
                Si tienes alguna duda sobre qué traer, no dudes en contactarnos.
                ¡Esperamos verte y compartir juntos este día tan especial!
            </CardFooter>
        </Card>
    );
}