let cropper;
const uploadImage = document.getElementById('upload-image');
const image = document.getElementById('image');
const canvas = document.getElementById('canvas');

uploadImage.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            if (cropper) {
                cropper.destroy();
            }
            cropper = new Cropper(image, {
                aspectRatio: NaN,
                viewMode: 1,
            });
        };
        reader.readAsDataURL(file);
    }
});

function cropImage() {
    const croppedCanvas = cropper.getCroppedCanvas();
    canvas.style.display = 'block';
    canvas.width = croppedCanvas.width;
    canvas.height = croppedCanvas.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(croppedCanvas, 0, 0);
}

function resizeImage() {
    const width = prompt("Enter new width:");
    const height = prompt("Enter new height:");
    if (width && height) {
        const resizedCanvas = document.createElement('canvas');
        resizedCanvas.width = width;
        resizedCanvas.height = height;
        const ctx = resizedCanvas.getContext('2d');
        ctx.drawImage(canvas, 0, 0, width, height);
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(resizedCanvas, 0, 0);
    }
}

function adjustBrightness() {
    const brightness = prompt("Enter brightness value (-100 to 100):");
    if (brightness !== null) {
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i] += 2.55 * brightness;
            data[i + 1] += 2.55 * brightness;
            data[i + 2] += 2.55 * brightness;
        }
        ctx.putImageData(imageData, 0, 0);
    }
}

function adjustContrast() {
    const contrast = prompt("Enter contrast value (-100 to 100):");
    if (contrast !== null) {
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        for (let i = 0; i < data.length; i += 4) {
            data[i] = factor * (data[i] - 128) + 128;
            data[i + 1] = factor * (data[i + 1] - 128) + 128;
            data[i + 2] = factor * (data[i + 2] - 128) + 128;
        }
        ctx.putImageData(imageData, 0, 0);
    }
}
