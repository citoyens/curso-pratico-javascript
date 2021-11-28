function calcularDescuentos(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (porcentajePrecioDescuento * precio) / 100;
    return precioDescuento;
}

function calcularDescuento(){
    const precio = document.getElementById('InputPrice').value;
    const descuento = document.getElementById('InputDiscount').value;

    const calculo = calcularDescuentos(precio, descuento);

    const resultado = document.getElementById('resultado');

    resultado.innerHTML = `El precio con descuento es: ${calculo}`;
}