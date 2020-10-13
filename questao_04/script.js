
function defineMes(){
    var diasNoMes = [31,28,31,30,31,30,31,31,30,31,30,31];
    mes = document.getElementById("idMes");
    var numeroMes = mes.options[mes.selectedIndex].value;

    for (let i = 1; i < 36; i++) {
        let element = document.getElementById(i);
        element.innerHTML = "";
        element.className = "";

        document.getElementById("title").innerHTML = "<h1>" + mes.options[mes.selectedIndex].text + " 2020</h1>";

        if(i <= diasNoMes[numeroMes]){
            element.innerHTML = i;
        }else if(i == diasNoMes[numeroMes] + 1){
            element.className = "note-left"
            element.innerHTML = "anotações";
        }else{
            element.className = "note";
        }
        
    }
}