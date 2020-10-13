var tabela = document.getElementById("numeros");
var sorteio = [];

function sortear() {
    let lista = [];
    let sorteado = false;
    while(lista.length < 6){
        let numero = Math.round(Math.random()*60);
        let contain = false;
        for (let i = 0; i < lista.length; i++) {
            if(numero == lista[i]){
                this.contain = true;
            }
        }
        if(!this.contain){
            lista.push(numero);
        }else{
            this.contain = false;
        }
    }
    for (let i = 0; i < sorteio.length; i++) {
        if (sorteio[i] == lista) {
            this.sorteado = true;
        }
    }
    if(!sorteado){
        print(lista);
        sorteado = false;
        sorteio.push(lista)
    }else{
        sortear();
        console.log(sorteio);
    }
}

function print(element) {
    // console.log(content);
    tabela.innerHTML = "";
    for (let i = 0; i < element.length; i++) {
        tabela.innerHTML += "<span>"+ element[i] + "</span>";
    }
}