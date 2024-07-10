function generateQRCode() {
    const qrInput = document.getElementById('qr-input').value;
    const qrCanvas = document.getElementById('qr-canvas');

    if (!qrInput) {
        alert("Por favor, insira um texto ou URL.");
        return;
    }

    QRCode.toCanvas(qrCanvas, qrInput, function (error) {
        if (error) {
            console.error(error);
            alert("Ocorreu um erro ao gerar o QR Code.");
        } else {
            console.log("QR Code gerado com sucesso!");
        }
    });
}
