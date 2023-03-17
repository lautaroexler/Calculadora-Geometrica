const formSelect = document.getElementById("forms");
const formulaSelect = document.getElementById("formula");
const dataInput = document.getElementById("data-input");
const calcularBtn = document.getElementById("calculate");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
let resultado = 0;


forms.addEventListener("change", function () {
  updateDataInputPlaceholder();
});

formula.addEventListener("change", function () {
  updateDataInputPlaceholder();
});

function updateDataInputPlaceholder() {
  const selectedForm = forms.value;
  const selectedFormula = formula.value;
  let placeholder = "";

  if (selectedForm === "circle") {
    if (selectedFormula === "perimeter") {
      placeholder = "Ingrese el radio del círculo";
    } else if (selectedFormula === "area") {
      placeholder = "Ingrese el radio del círculo";
    }
  } else if (selectedForm === "square") {
    if (selectedFormula === "perimeter") {
      placeholder = "Ingrese la longitud del lado del cuadrado";
    } else if (selectedFormula === "area") {
      placeholder = "Ingrese la longitud del lado del cuadrado";
    }
  } else if (selectedForm === "rectangle") {
    if (selectedFormula === "perimeter") {
      placeholder =
        "Ingrese la longitud y ancho del rectángulo (separados por una coma)";
    } else if (selectedFormula === "area") {
      placeholder =
        "Ingrese la longitud y ancho del rectángulo (separados por una coma)";
    }
  } else if (selectedForm === "triangle") {
    if (selectedFormula === "perimeter") {
      placeholder =
        "Ingrese las longitudes de los lados del triángulo (separados por comas)";
    } else if (selectedFormula === "area") {
      placeholder =
        "Ingrese la base y altura del triángulo (separados por una coma)";
    }
  }

  dataInput.querySelector("input").placeholder = placeholder;
}

// Perímetro y área del círculo
function calcularPerimetroCirculo(radio) {
  const perimetro = 2 * Math.PI * radio;
  return perimetro;
}

function calcularAreaCirculo(radio) {
  const area = Math.PI * Math.pow(radio, 2);
  return area;
}

// Perímetro y área del cuadrado
function calcularPerimetroCuadrado(lado) {
  const perimetro = lado * 4;
  return perimetro;
}

function calcularAreaCuadrado(lado) {
  const area = Math.pow(lado, 2);
  return area;
}

// Perímetro y área del rectángulo
function calcularPerimetroRectangulo(base, altura) {
  const perimetro = 2 * (base + altura);
  return perimetro;
}

function calcularAreaRectangulo(base, altura) {
  const area = base * altura;
  return area;
}

// Perímetro y área del triángulo
function calcularPerimetroTriangulo(ladoA, ladoB, ladoC) {
  const perimetro = ladoA + ladoB + ladoC;
  return perimetro;
}

function calcularAreaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area;
}


calcularBtn.addEventListener("click", function () {
  const selectedForm = forms.value;
  const selectedFormula = formula.value;
  const dataInputValue = dataInput.querySelector("input").value;

  

  if (selectedForm === "circle") {
    if (selectedFormula === "perimeter") {
      resultado = calcularPerimetroCirculo(parseFloat(dataInputValue));
    } else if (selectedFormula === "area") {
      resultado = calcularAreaCirculo(parseFloat(dataInputValue));
    }
  } else if (selectedForm === "square") {
    if (selectedFormula === "perimeter") {
      resultado = calcularPerimetroCuadrado(parseFloat(dataInputValue));
    } else if (selectedFormula === "area") {
      resultado = calcularAreaCuadrado(parseFloat(dataInputValue));
    }
  } else if (selectedForm === "rectangle") {
    const [base, altura] = dataInputValue.split(",");
    if (selectedFormula === "perimeter") {
      resultado = calcularPerimetroRectangulo(
        parseFloat(base),
        parseFloat(altura)
      );
    } else if (selectedFormula === "area") {
      resultado = calcularAreaRectangulo(parseFloat(base), parseFloat(altura));
    }
  } else if (selectedForm === "triangle") {
    if (selectedFormula === "perimeter") {
      const [ladoA, ladoB, ladoC] = dataInputValue.split(",");
      resultado = calcularPerimetroTriangulo(
        parseFloat(ladoA),
        parseFloat(ladoB),
        parseFloat(ladoC)
      );
      const typeTriang = clasificarTriangulo(ladoA, ladoB, ladoC);
      resultElement.textContent = `El triangulo es: ${typeTriang}`;
    } else if (selectedFormula === "area") {
      const [base, altura] = dataInputValue.split(",");
      resultado = calcularAreaTriangulo(parseFloat(base), parseFloat(altura));
    }
  }
 
});

calcularBtn.addEventListener("click", function () {
  // Lógica para calcular el resultado

  resultElement.textContent += `\n El resultado es: ${resultado}`;
  
  resultContainer.style.display = "block"; // Mostrar el contenedor de resultados
  console.log("clicked");
});

function clasificarTriangulo(a, b, c) {
  if (a == b && b == c) {
    return "equilatero";
  } else if (a == b || b == c || a == c) {
    return "isoceles";
  } else {
    return "escaleno";
  }
}
