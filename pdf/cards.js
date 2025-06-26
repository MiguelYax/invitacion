const { jsPDF } = require("jspdf");
const { initFont, setFont, center, moveY, setY } = require('./font');
const { addQrCode, addDiv } = require("./img");

const doc = new jsPDF({
    orientation: "portrait",
    format: "letter",
});

const guests = [
    "Josefina Yax",
];

const page = (guestName, fontTitle, fontBody) => {
    setFont(fontTitle, "regular", 50);
    center("Fiesta de Inauguración", moveY(40));
    setFont(fontBody, "regular", 28);
    center("Miguel de Jesús Yax Tzunún", moveY(30));
    center("Tiene el honor de invitarlo:", moveY(10));
    center(`${guestName} y familia. `, moveY(10));
    center("Al almuerzo de inauguración de su casa.", moveY(10));
    addDiv(doc, 'top', moveY(20));
    setFont(fontBody, "regular", 24);
    center("Sábado 25 de Julio de 2025 - 12:00 PM", moveY(25));
    center("6a. Avenida, Zona 2, Barrio San Sebastian,", moveY(10));
    center("San Cristóbal Totonicapán.", moveY(10));
    addDiv(doc, 'bottom', moveY(10));
    addQrCode(doc);
}

initFont(doc);
page("Josefina Yax", "Belanosima", "Outfit");
doc.addPage();
setY(0);
page("Josefina Yax", "Cameliya", "Belanosima");
doc.addPage();
setY(0);
page("Josefina Yax", "Lobster", "Belanosima");
doc.addPage();
setY(0);
page("Josefina Yax", "Parisienne", "Lobster");


doc.save("pdf/invitaciones.pdf");
