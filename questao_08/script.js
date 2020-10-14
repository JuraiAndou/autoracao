var loja;
var listaCarrinho;
var itemList = [];
var carrinho = [];
var precoTotal;
$(document).ready(function(){
    loja = $("#loja");
    listaCarrinho = $("#carrinho");
    itemList = [
        new Item("tMochi", 4.95, "mochi.jpg", "Tama-ya's Mochi"),
        new Item("ozMochi", 4.95, "mochi02.jpg", "Ricecake Oh! Ze's Mochi"),
        new Item("daifuku", 3.00, "Daifuku.jpg", "Tama-ya's Daifuku"),
        new Item("lvMochi", 5, "LoveyDoveyMochi.jpg", "Tama-ya's Lovey Dovey Mochi")
    ];
    for (let i in itemList) {
        itemList[i].displayMarket();
        itemList[i].displayCarrinho();
    }
    displayPreco();
    if(localStorage.length < 1){
        emptyMsg();
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
    listaCarrinho.html("");
    emptyMsg();
}

function displayPreco() {
    precoTotal = 0;
    for (const i in itemList) {
        let amount = parseInt(localStorage.getItem(itemList[i].name));
        if(amount > 0){
            precoTotal += itemList[i].price * amount;
        }
    }
    if(precoTotal > 0){
        listaCarrinho.append("<p>Preço total R$: "+Math.round((precoTotal + Number.EPSILON) * 100) / 100+"</p>");
        console.log(precoTotal);
    }
}

function emptyMsg() {
    listaCarrinho.append("<h1>carrinho vazio</h1>");
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
                "<p>"+localStorage.getItem(this.name)+" x "+this.title+" R$: "+this.price   +"</p><hr>"
            );
        }
    }

    addQuant(val){
        if(localStorage.getItem(this.name) != undefined){
            this.quant = parseInt(localStorage.getItem(this.name));
        }
        if(localStorage.getItem("precoTotal") != undefined){
            precoTotal = localStorage.getItem("precoTotal");
        }
        this.quant += parseInt(val);
        console.log((this.name)+"", this.quant);
        localStorage.setItem((this.name)+"", this.quant);
        
    }
};
