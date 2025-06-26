import Image from 'next/image'
import { Button } from 'react-bootstrap'
const text = "Ver en Google Maps";

export default function Map({ url, src }) {
    return (
        <>
            <div className="text-center">
                <a href={url}
                    className="text-center"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
                        src={src}
                        width={225}
                        height={250}
                        alt={text}
                    />
                </a>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}>
                    {text}
                </Button>
            </div>
        </>
    )
}

