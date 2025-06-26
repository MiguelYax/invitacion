const { readFileSync, read } = require("fs");

const qrCode = readFileSync("./pdf/img/qr.png").toString('base64');

const addQrCode = (doc) => {
    const imgData = `data:image/png;base64,${qrCode}`;
    const imgWidth = 90;
    const imgHeight = 90;
    const x = doc.internal.pageSize.getWidth() - (imgWidth + 20);
    const y = doc.internal.pageSize.getHeight() - imgHeight - 5;

    doc.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
}

const addDiv = (doc, name, y) => {
    const img = readFileSync(`./pdf/img/${name}.png`).toString('base64');
    const imgData = `data:image/png;base64,${img}`;
    const imgWidth = doc.internal.pageSize.getWidth() - 40;
    const imgHeight = 10;
    const x = 20;

    doc.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
}

const addBackground = (doc) => {
    const img = readFileSync(`./pdf/img/bg.jpg`).toString('base64');
    const imgData = `data:image/jpeg;base64,${img}`;


    doc.addImage(imgData, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
}


module.exports = {
    addQrCode,
    addDiv,
    addBackground,
};
