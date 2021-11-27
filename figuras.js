//Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
} 
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
console.log("El área del cuadrado es: " + areaCuadrado  + " cm2");
console.groupEnd();

//Código del triángulo

console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo( baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}
console.groupEnd();

//Código del círculo

console.group("Círculo");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

//Pi
const pi = Math.PI;
console.log("El valor de Pi es: " + pi);

//Circunferencia

function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return diametro * pi;
}

//Área

function areaCirculo(radioCirculo) {
    return radioCirculo * radioCirculo * pi;
}

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    console.log(value);
    
    const perimetro = perimetroCuadrado(value);

    alert("El perímetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    console.log(value);
    
    const area = areaCuadrado(value);

    alert("El área del cuadrado es: " + area + " cm2");
}