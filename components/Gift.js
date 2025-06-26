import { Card, CardHeader, CardBody, CardFooter } from "react-bootstrap";
import Image from "next/image";
import logoImg from "../public/gift.png";

export default function Event() {
    return (
        <Card
            className="mt-5"
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
                <p>
                    Recuerda que lo más importante es celebrar juntos este momento especial.
                </p>
                <hr />
                Si tienes el deseo de obsequiarme algo, te agradecería que consideraras lo siguiente:
                <ul>
                    <li> Dinero en sobre:</li>
                    <ul> 
                    <li> Puedes utilizar el sobre adjunto a la invitacion. </li>
                        <li> Puedes reutilizar algun sobre que tengas.</li>
                        <li> El dia del evento habran sobres disponibles.</li>

                    </ul>
                    <li>Transferencias: </li>
                    <ul>
                        <li>Banco Industrial: 1710033752. </li>
                    </ul>
                </ul>
            </CardBody>
            <CardFooter>
                Si tienes alguna duda sobre qué traer, no dudes en contactarnos.
                ¡Esperamos verte y compartir juntos este día tan especial!
            </CardFooter>
        </Card>
    );
}