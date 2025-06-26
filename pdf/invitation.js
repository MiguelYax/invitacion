const { jsPDF } = require("jspdf");
const { initFont, setFont, center, moveY, setY } = require('./font');
const { addQrCode, addDiv } = require("./img");

const doc = new jsPDF({
    orientation: "portrait",
    format: "letter",
});

const guests = [
    "Juan Pérez",
    "María López",
    "Carlos García",
    "Ana Martínez",
    "Luis Fernández",
    "Sofía Rodríguez",
    "Pedro Sánchez",
    "Laura Gómez",
    "Javier Díaz",
    "Isabel Torres"
];

const page = (guestName) => {
    setFont("Cameliya", "normal", 44);
    center("Fiesta de Inauguración", moveY(50));
    setFont("Belanosima", "normal", 24);
    center("Miguel de Jesús Yax Tzunún", moveY(30));
    center("Tiene el honor de invitarlo invitarlo:", moveY(10));
    center(`${guestName} y familia. `, moveY(10));
    center("Al almuerzo de inauguración de su casa.", moveY(10));
    addDiv(doc, 'top', moveY(20));
    center("Sábado 25 de Julio de 2025 - 12:00 PM", moveY(20));
    center("Barrio San Sebastian, 6a. Avenida, Zona 2.", moveY(10));
    center("San Cristóbal Totonicapán.", moveY(10));
    addDiv(doc, 'bottom', moveY(10));
    addQrCode(doc);
}

initFont(doc);
for (const guest of guests) {
    setY(0);
    page(guest);
    if (guest !== guests[guests.length - 1]) {
        doc.addPage();
    }
}


doc.save("pdf/a4.pdf");
