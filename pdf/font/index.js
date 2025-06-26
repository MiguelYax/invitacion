const { readFileSync } = require("fs");

const Cameliya = readFileSync("./pdf/font/Cameliya.ttf").toString('base64');
const BelanosimaBold = readFileSync("./pdf/font/Belanosima-Bold.ttf").toString('base64');
const BelanosimaRegular = readFileSync("./pdf/font/Belanosima-Regular.ttf").toString('base64');

let doc;

const initFont = (document) => {
    doc = document;
    doc.addFileToVFS("Cameliya.ttf", Cameliya);
    doc.addFont("Cameliya.ttf", "Cameliya", "normal");

    doc.addFileToVFS("Belanosima-Bold.ttf", BelanosimaBold);
    doc.addFont("Belanosima-Bold.ttf", "Belanosima", "bold");

    doc.addFileToVFS("Belanosima-Regular.ttf", BelanosimaRegular);
    doc.addFont("Belanosima-Regular.ttf", "Belanosima", "normal");
}

const setFont = (fontName, style, size) => {
    doc.setFont(fontName, style);
    doc.setFontSize(size);
}

const center = (text, y) => {
    const textWidth = doc.getTextWidth(text);
    const pageWidth = doc.internal.pageSize.getWidth();
    const x = (pageWidth - textWidth) / 2;
    doc.text(text, x, y);
}

let posY = 0;
const moveY = (y) => posY += y;
const setY = (y) => posY = 0;

module.exports = {
    initFont,
    setFont,
    moveY,
    setY,
    center
}