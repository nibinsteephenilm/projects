const tools = document.querySelectorAll(".tools");
const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let image = null;
let isBWFilterApplied = false; // State variable to track the filter state
let selectedTool = null; // Variable to keep track of the selected tool

// Variables for cropping
let isCropping = false;
let startX, startY, endX, endY;

const openImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";

    fileInput.addEventListener("change", (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile && selectedFile.type.startsWith("image/")) {
            image = new Image();
            image.src = URL.createObjectURL(selectedFile);

            image.onload = () => {
                const maxCanvasWidth = canvas.parentElement.clientWidth;
                const maxCanvasHeight = canvas.parentElement.clientHeight;

                let canvasWidth = maxCanvasWidth;
                let canvasHeight = maxCanvasWidth / (image.width / image.height);

                if (canvasHeight > maxCanvasHeight) {
                    canvasHeight = maxCanvasHeight;
                    canvasWidth = maxCanvasHeight * (image.width / image.height);
                }

                canvas.width = canvasWidth;
                canvas.height = canvasHeight;

                drawImage();
            };
        }
    });

    fileInput.click();
};

const drawImage = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (image) {
        const imageAspectRatio = image.width / image.height;
        const canvasAspectRatio = canvas.width / canvas.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (imageAspectRatio > canvasAspectRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imageAspectRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imageAspectRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

        // Apply the black and white filter if it was previously applied
        if (isBWFilterApplied) {
            applyBWFilter();
        }
    }
};

const filter = () => {
    if (image) {
        if (isBWFilterApplied) {
            isBWFilterApplied = false;
            drawImage(); // Revert to the normal image
        } else {
            isBWFilterApplied = true;
            applyBWFilter(); // Apply the black and white filter
        }
    }
};

const applyBWFilter = () => {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image in black and white
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Get the image data
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Loop through each pixel and convert it to black and white
    for (let i = 0; i < data.length; i += 4) {
        const grayscale = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        data[i] = grayscale;
        data[i + 1] = grayscale;
        data[i + 2] = grayscale;
    }

    // Put the modified image data back on the canvas
    context.putImageData(imageData, 0, 0);
};

// Function to handle the background color tool
const handleBackgroundColor = () => {
    const colorPicker = document.getElementById("colorPicker");
    colorPicker.click();

    // Event listener for color picker change
    colorPicker.addEventListener("input", (event) => {
        const selectedColor = event.target.value;
        document.querySelector(".bottom").style.backgroundColor = selectedColor;
    });
};

const saveImage = () => {
    // Create a temporary canvas to merge the canvas with the background color
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");

    // Set the size of the temporary canvas to match the canvas and include .bottom's height
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height + parseInt(getComputedStyle(document.querySelector(".bottom")).height);

    tempCanvas.width = canvasWidth;
    tempCanvas.height = canvasHeight;

    // Get the background color from the .bottom element
    const bottomBgColor = document.querySelector(".bottom").style.backgroundColor;

    // Fill the temporary canvas with the background color
    tempContext.fillStyle = bottomBgColor;
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Draw the image from the main canvas on top of the background color
    tempContext.drawImage(canvas, 0, parseInt(getComputedStyle(document.querySelector(".bottom")).height));

    // Convert the merged image to a data URL
    const mergedImage = tempCanvas.toDataURL("image/png");

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = mergedImage;
    link.download = "edited_image.png"; // You can change the filename as needed
    link.click();
};


tools.forEach(tool => {
    tool.addEventListener("click", () => {
        const toolid = tool.id;
        if (toolid === "open") {
            openImage();
            deselectTools();
        } else if (toolid === "filter") {
            filter();
            deselectTools();
        } else if (toolid === "background") {
            handleBackgroundColor();
            deselectTools();
        } else if (toolid === "select") {
            selectImageTool();
        } else if (toolid === "save") {
            saveImage()
        }
    });
});
