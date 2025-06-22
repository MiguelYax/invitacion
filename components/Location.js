import { Card, CardHeader, CardBody } from "react-bootstrap";
import driveImage from '../public/drive.png';
import walkImage from '../public/walk.png';
import locationImage from '../public/location.png';
import Image from 'next/image'

const ubicacionDeCasa = "https://www.google.com/maps/place/14%C2%B054'48.2%22N+91%C2%B026'27.2%22W/@14.9130377,-91.4465571,2181m/data=!3m1!1e3!4m4!3m3!8m2!3d14.9133889!4d-91.4408889?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
const rutaCaminando = "https://www.google.com/maps/dir/Cuatro+Caminos/San+Crist%C3%B3bal+Totonicap%C3%A1n/@14.9132514,-91.4447894,2220m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0x858ea4750fc88f53:0x21261cd8f78c39b3!2m2!1d-91.4417598!2d14.9087473!1m5!1m1!1s0x858ea40ae2cc795f:0x95ff47b3aa893a76!2m2!1d-91.4410199!2d14.9132843!3e2!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
const rutaEnCarro = "https://www.google.com/maps/dir/Cuatro+Caminos/San+Crist%C3%B3bal+Totonicap%C3%A1n/@14.9120772,-91.4480529,1110m/data=!3m1!1e3!4m24!4m23!1m15!1m1!1s0x858ea4750fc88f53:0x21261cd8f78c39b3!2m2!1d-91.4417598!2d14.9087473!3m4!1m2!1d-91.4388653!2d14.9146061!3s0x858ea40b82ec4e65:0xef666bd688e8eed4!3m4!1m2!1d-91.4400654!2d14.9149339!3s0x858ea40bbc1348bb:0xd0a11af9bacf494e!1m5!1m1!1s0x858ea40ae2cc795f:0x95ff47b3aa893a76!2m2!1d-91.4410199!2d14.9132843!3e0!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"

export default function Event() {
    return (
        <Card className="mt-5">
            <CardHeader>
                Como llegar a la casa:
            </CardHeader>
            <CardBody>
                <ol>
                    <li>
                        La casa se encuentra en la 6a. Avenida, Zona 2, Barrio San Sebastian, San Cristobal Totonicapan, Totonicapan, Guatemala.
                        <div className="text-center">
                            <a
                            href={ubicacionDeCasa} 
                            target="_blank"
                            rel="noopener noreferrer"> 
                                <Image
                                    src={locationImage}
                                    width={200}
                                    height={200}
                                    alt="Ver en Google Maps"
                                />
                            </a>
                        </div>
                    </li>
                    <li>
                        La casa se encuentra a 100 metros del puente marimba, en el Barrio San Sebastian. Ruta de cuatro caminos hacia el centro de la ciudad.
                        <div className="text-center">
                            <a href={rutaCaminando} 
                            target="_blank" rel="noopener noreferrer"> 
                            <Image
                                    src={walkImage}
                                    width={200}
                                    height={200}
                                    alt="Ver en Google Maps"
                                />
                            </a>
                        </div>
                    </li>
                    <li>
                        Si vienes desde el centro de la ciudad, toma la 6a. avenida Pasando la casa de Don Adrian, Cotinua hacia el callego del puente marimba.
                    </li>
                    <li>
                        Si vienes en carro desde cuatro caminos, toma la ruta hacia San Francisco El Alto, luego dobla a la Izquierda hacia San Sebastian.
                        <div className="text-center">
                            <a href={rutaEnCarro} 
                            className="text-center"
                            target="_blank" 
                            rel="noopener noreferrer">
                                <Image
                                    src={driveImage}
                                    width={200}
                                    height={200}
                                    alt="Ver en Google Maps"
                                />
                            </a>
                        </div>
                    </li>
                </ol>
            </CardBody>
        </Card>
    );
}

