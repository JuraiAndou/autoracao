var loja;
var listaCarrinho;
var itemList = [];
var carrinho = [];
$(document).ready(function(){
    loja = $("#loja");
    listaCarrinho = $("#carrinho");
    itemList = [
        new Item("tMochi", 4.95, "mochi.jpg", "Tama-ya Mochi"),
        new Item("ozMochi", 4.95, "mochi02.jpg", "Ricecake Oh! Ze Mochi")
    ];
    for (let i in itemList) {
        itemList[i].displayMarket();
        itemList[i].displayCarrinho();
    }
    
    $(".btn-comprar").click(function(obj){
        // console.log(obj.currentTarget.id);
        addCarrinho(obj.currentTarget.id, $(this).parent().find("input").val());
    });
});

function addCarrinho(item, val){
    let contain = false;
    carrinho.forEach(element => {
        if(element.name == item){
            contain = true;
        }
    });

    if(!contain){
        itemList.forEach(element => {
            if(element.name == item){
                carrinho.push(element);
                carrinho.forEach(el => {
                    if(el == element){
                        el.addQuant(val);
                    }
                });
            }
        });
    }else{
        carrinho.forEach(element => {
            if (element.name == item) {
                element.addQuant(val);
                contain = false;
            }
        });
    }
}

function limpaCarrinho() {
    localStorage.clear();
    $("#carrinho").html("");
}

let Item = class Item{
    constructor(name, price, picture, title){
        this.name = name;
        this.price = price;
        this.picture = picture;
        this.title = title;
        this.quant = 0;
    }

    displayMarket(){
        loja.append(
            "<div class=\"produto-container\">"+
                "<img src=\""+this.picture+"\" alt=\""+this.title+"\" class=\"imagem-produto\">" +
                "<div class=\"produto-text\">"+
                    "<h2 class=\"title\">"+this.title+"</h2>"+
                    "<label class=\"lbPreco\">"+this.price+" x <input class=\"iptPreco\" type=\"number\" value=\"1\" min=\"1\"></label>"+
                    "<button class=\"btn-comprar\" id=\""+this.name+"\">Comprar</button>"+
                "</div>"+
            "</div>"
        );
    }

    displayCarrinho(){
        if(localStorage.getItem(this.name) != undefined && localStorage.getItem(this.name) > 0){
            listaCarrinho.append(
                "<p>"+localStorage.getItem(this.name)+" x "+this.title+" R$: "+this.price   +"</p>"
            );
        }
    }

    addQuant(val){
        if(localStorage.getItem(this.name) != undefined){
            this.quant = parseInt(localStorage.getItem(this.name));
        }
        this.quant += parseInt(val);
        console.log((this.name)+"", this.quant);
        localStorage.setItem((this.name)+"", this.quant);
    }
};
