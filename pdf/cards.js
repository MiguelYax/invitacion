const { jsPDF } = require("jspdf");
const { initFont, setFont, center, left, moveY, setY } = require('./font');
const { addQrCode, addDiv } = require("./img");

const doc = new jsPDF({
    orientation: "portrait",
    format: "letter",
});

const guests = [
    "Josefina Yax"]

const page = (guestName, fontTitle, fontBody) => {
    setFont(fontTitle, "regular", 50);
    center("Fiesta de Inauguración", moveY(40));
    setFont(fontBody, "regular", 32);
    center("Miguel de Jesús Yax Tzunún", moveY(30));
    center("Tiene el honor de invitarlo:", moveY(10));
    center(`${guestName} y familia. `, moveY(10));
    center("A compartir un almuerzo por la", moveY(10));
    center("inauguración de su hogar.", moveY(10));
    addDiv(doc, 'top', moveY(10));
    setFont(fontBody, "regular", 36);
    center("6a. Avenida, Zona 2,", moveY(25));
    center("Barrio San Sebastian,", moveY(10));
    center("San Cristóbal Totonicapán.", moveY(10));
    addDiv(doc, 'bottom', moveY(10));
    left("Sábado", moveY(30));
    left("5 Julio 2025", moveY(20));
    left("11:00 A.M.", moveY(20));
    addQrCode(doc);
}

initFont(doc);

for (const guest of guests) {
    setY(0);
    page(guest, "Cameliya", "Belanosima");
    
    doc.addPage();
}

doc.save("pdf/invitaciones.pdf");
