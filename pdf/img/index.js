const { readFileSync, read } = require("fs");

const qrCode = readFileSync("./pdf/img/qr.png").toString('base64');

const addQrCode = (doc) => {
    const imgData = `data:image/png;base64,${qrCode}`;
    const imgWidth = 75;
    const imgHeight = 75;
    const x = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
    const y = doc.internal.pageSize.getHeight() - imgHeight - 10;

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


module.exports = {
    addQrCode,
    addDiv
};
