    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function(acumulador = 0, valorActual){
                return acumulador + valorActual;
            }
        );

        const media = sumaLista / lista.length;
        return media;
    }
