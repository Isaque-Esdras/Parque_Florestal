var inpute = document.getElementById('input1')

var idadeNaoPermitida = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5]
var filtragem = idadeNaoPermitida.filter(filtrar) //Utilização do Método de Array, Filter


function filtrar(valor) {
    return valor < 17
}

function verificar() {
    if (inpute.value >=17) {
        window.alert("Entrada autorizada")
    }else if (inpute.value < 17) {
        window.alert(`O filtro não autorizou, pois a idade está entre as idades a seguir: ${filtragem}`)
    }
}