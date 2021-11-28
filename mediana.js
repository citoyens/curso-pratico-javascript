lista = [1, 1, 2, 2, 4, 4, 4, 4, 3, 1, 1, 2];

const listaContar = {};

lista.map(
    function(elemento) {
        if(listaContar[elemento]){
            listaContar[elemento] += 1;
        }else{
            listaContar[elemento] = 1;
        }
    }
);
let arra = Object.entries(listaContar).sort(
    function(acumulado, nuevo){
        return acumulado[1] - nuevo[1]
    }
)

const moda = arra[arra.length - 1]


