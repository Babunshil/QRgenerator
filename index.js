const generateButton = document.getElementById("generate-button");
const textInput = document.getElementById("text-input");
const qrcodeContainer = document.getElementById("qrcode-container");

generateButton.addEventListener("click" , ()=> {
  const text = textInput.value;

  qrcodeContainer.innerHTML = "";

  const qrcode = new QRCode(qrcodeContainer , {
    text: text,
    width: 128,
    height: 128,
  });

 
});