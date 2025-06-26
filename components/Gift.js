import { Card, CardHeader, CardBody, CardFooter } from "react-bootstrap";
import Image from "next/image";
import logoImg from "../public/gift.png";
import Help from "./Help";
import { fontHeaderClass } from './Font';

export default function Gift() {
    return (
        <Card className="mt-5">
            <Image
                className="card-img-top"
                src={logoImg}
            />
            <CardHeader className={fontHeaderClass}>
                Regalos y Obsequios:
            </CardHeader>
            <CardBody>
                <p className={fontHeaderClass}>
                    Recuerda que lo más importante es celebrar juntos este momento especial!
                </p>
                <hr />
                Si tienes el deseo de obsequiarme algo, te agradecería que consideraras lo siguiente:
                <ul>
                    <li>Sobre con dinero:</li>
                    <ul>
                        <li> Puedes utilizar el sobre adjunto a la invitacion. </li>
                        <li> Puedes reutilizar algun sobre que tengas.</li>
                        <li> El dia del evento habran sobres disponibles.</li>

                    </ul>
                </ul>
            </CardBody>
            <CardFooter>
                <Help />
            </CardFooter>
        </Card>
    );
}