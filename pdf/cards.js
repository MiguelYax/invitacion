const { jsPDF } = require("jspdf");
const { initFont, setFont, center, left, moveY, setY } = require('./font');
const { addQrCode, addDiv, addBackground } = require("./img");
const { guests, virtual } = require('./guest');

const doc = new jsPDF({
    orientation: "portrait",
    format: "letter",
});

const page = (doc, guestName) => {
    setFont("Cameliya", "regular", 50);
    center("Fiesta de Inauguración", moveY(40));
    setFont("Belanosima", "regular", 32);
    center("Miguel de Jesús Yax Tzunún", moveY(30));
    center("Tiene el honor de invitarlo:", moveY(10));
    center(`${guestName} y familia. `, moveY(10));
    center("A compartir un almuerzo por la", moveY(10));
    center("inauguración de su hogar.", moveY(10));
    addDiv(doc, 'top', moveY(10));
    setFont("Belanosima", "regular", 36);
    center("6a. Avenida, Zona 2,", moveY(25));
    center("Barrio San Sebastián,", moveY(10));
    center("San Cristóbal Totonicapán.", moveY(10));
    addDiv(doc, 'bottom', moveY(10));
    left("Sábado", moveY(35));
    left("5 de Julio 2025", moveY(20));
    left("11:00 A.M.", moveY(20));
    addQrCode(doc);
}

initFont(doc);

for (let i = 0; i < guests.length; i++) {
    setY(0);
    page(doc, guests[i], );
    if (i !== guests.length - 1) {
        doc.addPage();
    }
}

doc.save(`pdf/invitados.pdf`)

for (let i = 0; i < virtual.length; i++) {
    const docv = new jsPDF({
        orientation: "portrait",
        format: "letter",
    });
    initFont(docv);
    const name = virtual[i]
    addBackground(docv);
    setY(0);
    page(docv, name);
    docv.save(`pdf/${name.replace(' ', '_')}.pdf`);
}

