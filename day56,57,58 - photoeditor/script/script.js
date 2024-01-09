const tools = document.querySelectorAll(".tools");
const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let image = null;
let selectedTool = null;
let startX, startY, endX, endY;
let isBWFilterApplied = false;
let isTextBoxDrawing = false;
let textBoxStartX, textBoxStartY, textBoxEndX, textBoxEndY;
let currentText = "";
let textColor = "#000"; // Default text color
let isTextToolSelected = false;
let textInput = null;

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

const applyBWFilter = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the image in black and white
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  // Get the image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  // Loop through each pixel and convert it to black and white
  for (let i = 0; i < data.length; i += 4) {
    const grayscale =
      data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    data[i] = grayscale;
    data[i + 1] = grayscale;
    data[i + 2] = grayscale;
  }

  // Put the modified image data back on the canvas
  context.putImageData(imageData, 0, 0);
};

const toggleFilter = () => {
  isBWFilterApplied = !isBWFilterApplied;
  drawImage();
};

const handleCrop = () => {
    // Deactivate text tool when switching to crop tool
    isTextToolSelected = false;
  
    // Hide or detach the text input if it exists
    if (isTextBoxDrawing && textInput) {
      document.body.removeChild(textInput);
      textInput = null;
      isTextBoxDrawing = false;
    }
  
    canvas.addEventListener("mousedown", handleCropStart);
    canvas.addEventListener("mouseup", handleCropEnd);
    canvas.addEventListener("mousemove", handleCropMove);
  };
  

const handleCropStart = (event) => {
  startX = event.clientX;
  startY = event.clientY;
};

const handleCropMove = (event) => {
  endX = event.clientX;
  endY = event.clientY;

  canvasRect = canvas.getBoundingClientRect();
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawImage();
  context.strokeRect(
    startX - canvasRect.left,
    startY - canvasRect.top,
    endX - startX,
    endY - startY
  );
};

const handleCropEnd = () => {
  const canvasRect = canvas.getBoundingClientRect();
  const cropBoxData = {
    left: Math.min(startX, endX) - canvasRect.left,
    top: Math.min(startY, endY) - canvasRect.top,
    width: Math.abs(endX - startX),
    height: Math.abs(endY - startY),
  };

  const croppedImageData = context.getImageData(
    cropBoxData.left,
    cropBoxData.top,
    cropBoxData.width,
    cropBoxData.height
  );

  canvas.width = cropBoxData.width;
  canvas.height = cropBoxData.height;

  context.putImageData(croppedImageData, 0, 0);

  const croppedImage = new Image();
  croppedImage.src = canvas.toDataURL();
  croppedImage.onload = () => {
    image = croppedImage;
  };

  canvas.removeEventListener("mousedown", handleCropStart);
  canvas.removeEventListener("mouseup", handleCropEnd);
  canvas.removeEventListener("mousemove", handleCropMove);
};

const handleBackgroundColor = () => {
  const colorPicker = document.getElementById("colorPicker");
  colorPicker.click();

  colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;
    document.querySelector(".bottom").style.backgroundColor = selectedColor;
  });
};

const resetBottom = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  document.querySelector(".bottom").style.backgroundColor = "";
};

const saveImage = () => {
  const tempCanvas = document.createElement("canvas");
  const tempContext = tempCanvas.getContext("2d");

  const canvasWidth = canvas.width;
  const canvasHeight =
    canvas.height +
    parseInt(getComputedStyle(document.querySelector(".bottom")).height);

  tempCanvas.width = canvasWidth;
  tempCanvas.height = canvasHeight;

  const bottomBgColor = document.querySelector(".bottom").style.backgroundColor;

  tempContext.fillStyle = bottomBgColor;
  tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  tempContext.drawImage(
    canvas,
    0,
    parseInt(getComputedStyle(document.querySelector(".bottom")).height)
  );

  const mergedImage = tempCanvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = mergedImage;
  link.download = "edited_image.png";
  link.click();
};

const handleTextTool = () => {
  isTextToolSelected = true;
  canvas.addEventListener("click", handleTextToolClick);
};

const saveTextBox = () => {
  if (textInput) {
    const text = textInput.value;
    const rect = canvas.getBoundingClientRect();
    let x = parseInt(textInput.style.left) - rect.left;
    let y = parseInt(textInput.style.top) - rect.top;

    context.font = "16px Arial";
    const textWidth = context.measureText(text).width;
    const textHeight = 16; // This should match the font size

    // Adjust the x and y coordinates
    // x = x - textWidth / 2;
    y = y + textHeight;

    context.fillStyle = textColor;
    context.fillText(text, x, y);

    // Remove the existing text box
    textInput.remove();
    textInput = null;

    // Reset the flag to indicate that no text box is being drawn
    isTextBoxDrawing = false;
  }
};

const handleTextToolClick = (event) => {
    // Check if the text tool is selected
    if (isTextToolSelected) {
      // Check if a text box is already present
      if (!isTextBoxDrawing) {
        // If no text box is present, create a new one
        textInput = document.createElement("input");
        textInput.type = "text";
        textInput.style.position = "absolute";
        textInput.style.left = `${event.clientX}px`;
        textInput.style.top = `${event.clientY}px`;
  
        // Create a color picker
        const colorPicker = document.createElement("input");
        colorPicker.type = "color";
        colorPicker.style.marginLeft = "10px";
        colorPicker.addEventListener("input", (colorEvent) => {
          textColor = colorEvent.target.value;
          // Set the selected color for the text
          context.fillStyle = textColor;
        });
  
        // Set the initial color for the text
        textColor = colorPicker.value;
        context.fillStyle = textColor;
  
        textInput.addEventListener("keydown", handleTextInput);
  
        document.body.appendChild(textInput);
        document.body.appendChild(colorPicker);
        textInput.focus();
  
        // Set the flag to indicate that a text box is being drawn
        isTextBoxDrawing = true;
      } else {
        // If a text box is already present, save it
        saveTextBox();
      }
    }
  };
  


const handleTextInput = (event) => {
  if (event.key === "Enter") {
    const text = event.target.value;
    const rect = canvas.getBoundingClientRect();
    let x = parseInt(event.target.style.left) - rect.left;
    let y = parseInt(event.target.style.top) - rect.top;

    context.font = "16px Arial";
    const textWidth = context.measureText(text).width;
    const textHeight = 16; // This should match the font size

    // Adjust the x and y coordinates
    x = x - textWidth / 2;
    y = y + textHeight / 2;

    context.fillStyle = textColor;
    context.fillText(text, x, y);

    event.target.remove();
    textInput = null;
  }
};


const actions = {
  newPage: resetBottom,
  open: openImage,
  filter: toggleFilter,
  background: handleBackgroundColor,
  crop: handleCrop,
  save: saveImage,
  text: handleTextTool,
};

tools.forEach((tool) => {
  tool.addEventListener("click", () => {
    const toolid = tool.id;
    if (toolid in actions) {
      actions[toolid]();
    }
    selectedTool = toolid;
  });
});
