const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const inputText = textArea.value;
  
  // Check for capital letters or special characters
  if (/[A-Z]/.test(inputText) || /[^A-Za-z\s]/.test(inputText)) {
    alert("Por favor ingrese solamente letras minusculas y sin acentos.");
    textArea.value = ""; // Clear the textArea element
    return; // Stop further execution of the function
  }
  
  const textoEncriptado = encriptar(inputText);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}


function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function Copiar() {
  const textToCopy = mensaje.value.trim();

  if (textToCopy !== "") {
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.style.backgroundImage = "url('Modelo\ Figma/muñeco.png')"; // Replace "path-to-your-image.jpg" with the actual path to your background image
  }
}
  btnCopiar.addEventListener("click", Copiar);
  

function encriptar(stringEncriptado) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return stringDesencriptado;
}