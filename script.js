let inputTexto = document.querySelector('input#inputTexto');
let outputTexto = document.querySelector('input#outputTexto');
let mensagem = document.getElementById("resposta");

var button1 = document.querySelector('.layout__botao__crip');
button1.onclick = textoCrip;
var button2 = document.querySelector('.layout__botao__descrip');
button2.onclick = textoDescrip;

document.getElementById('none').innerHTML = '';
inputTexto.focus();

function textoCrip() {
    if (inputTexto.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        inputTexto.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.apresentacao__imagem').style.display = 'none';
    }

    let texto = inputTexto.value;
    let textoCriptografado = texto.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');

    outputTexto.value = textoCriptografado;
}

function textoDescrip() {

    let texto = inputTexto.value;
    let textoDescriptografado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');

    outputTexto.value = textoDescriptografado;
}


function copy() {
    let copiarTexto = document.querySelector('#input');
    copiarTexto.select();
    document.execCommand("copy");
    alert("Texto copiado");
}