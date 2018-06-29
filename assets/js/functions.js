

var frutas = ['Uva','Naranja'];

function agregar_fruta(){
    var x = fruta_nueva.value;
    
    if(x!=""){
        frutas.push(x);
        arealista.textContent = "";
        arealista.appendChild(makeUL(frutas));
        fruta_nueva.value = "";
    }

    fruta_nueva.focus();
}

function makeUL(array) {

    var list = document.createElement('ul');
    list.className = "list-group";

    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.className = "list-group-item";
        item.appendChild(document.createTextNode(array[i]));
        list.appendChild(item);
    }

    predefinido.textContent = array;

    return list;
}


arealista.appendChild(makeUL(frutas));

