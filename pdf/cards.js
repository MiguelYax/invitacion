const { jsPDF } = require("jspdf");
const { initFont, setFont, center, left, moveY, setY } = require('./font');
const { addQrCode, addDiv } = require("./img");

const doc = new jsPDF({
    orientation: "portrait",
    format: "letter",
});

const guests = [
  "Jose Cua",
  "Gloria Cua",
  "Ana Cua",
  "Pedro Cua",
  "Jesus Tzuban",
  "Isabel Ramirez",
  "Manuela Cua",
  "Pablo Tax",
  "Pedro Cua",
  "Romario Garcia",
  "Agustin Ajpop",
  "Francisco Yax",
  "Juan Yax",
  "Josefina Yax",
  "Amanda Tzunun",
  "Flora Tzunun",
  "Juana Tzunun",
  "Leticia Tzunun",
  "David Tzunun",
  "Giobani Tzunun",
  "Luis Yax",
  "Juan Tzunun",
  "Miguel Tzunun",
  "Jesus Tzunun",
  "Jose Yax",
  "Juana Ajpacaja",
  "Juana Ajpop",
  "Jose Ajpop",
  "Maria Tzunun",
  "Micaela Tzunun",
  "Francisco Tzunun",
  "Jose Yax",
  "Blanca Ramirez",
  "Justa Tohom",
  "Cristina Garcia",
  "Rosa Cua",
  "Julio Huitz",
  "Fansisco Batz",
  "Carlos Batz",
  "Laureano Yax"
];

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
    center("Barrio San Sebastián,", moveY(10));
    center("San Cristóbal Totonicapán.", moveY(10));
    addDiv(doc, 'bottom', moveY(10));
    left("Sábado", moveY(35));
    left("5 Julio 2025", moveY(20));
    left("11:00 A.M.", moveY(20));
    addQrCode(doc);
}

initFont(doc);

const length = guests.length - 1;
for (let i = 0; i < guests.length; i++) {
    
    page(guests[i], 'Cameliya', 'Belanosima');
    if (i !== length) {
        doc.addPage();
        setY(0);
    }
}

doc.save("pdf/invitaciones.pdf");
