const { readFileSync } = require("fs");

let doc;

const addFont = (fontName, style) => {
    const rawFont = readFileSync(`./pdf/font/${fontName}-${style}.ttf`).toString('base64');
    doc.addFileToVFS(`${fontName}-${style}.ttf`, rawFont);
    doc.addFont(`${fontName}-${style}.ttf`, fontName, style.toLowerCase());
}

const initFont = (document) => {
    doc = document;
    addFont("Cameliya", "Regular");
    addFont("Belanosima", "Bold");
    addFont("Belanosima", "Regular");
    addFont("Lobster", "Regular");
    addFont("Parisienne", "Regular");
    addFont("Outfit", "Regular");

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

const left = (text, y) => {
    const x = 30; // Fixed left margin
    doc.text(text, x, y);
}

let posY = 0;
const moveY = (y) => posY += y;
const setY = (y) => posY = y;

module.exports = {
    initFont,
    setFont,
    moveY,
    setY,
    center,
    left
}