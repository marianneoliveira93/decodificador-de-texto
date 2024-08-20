let inputTexto = document.querySelector('input#inputTexto');
let outputTexto = document.querySelector('input#outputTexto');
let mensagem = document.getElementById("resposta");

var button1 = document.querySelector('.layout__botao__crip'); ;
button1.onclick = textoCrip;
var button2 = document.querySelector('.layout__botao__descrip');
button2.onclick = textoDescrip;

document.getElementById('none').innerHTML = '';   /*limpa o conteúdo html desse elemento*/
inputTexto.focus();

function textoCrip() {
    if (inputTexto.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>'; /*caso não seja inserido msg aparecerá esse texto*/
        inputTexto.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.apresentacao__imagem').style.display = 'none';  /*se tiver msg a imagem sairá e ficará apenas a msg criptografada*/
    }

    let texto = inputTexto.value; /*pega o valor de entrada e armazena a variavel em texto*/
    let textoCriptografado = texto.replace(/e/g, 'enter') /*o texto será alterado mediante os parâmetros gerando o texto criptografado*/
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
    let copiarTexto = document.querySelector('#outputTexto');
    copiarTexto.select();
    navigator.clipboard.writeText("copiarTexto.value");
    alert("Texto copiado");
}


document.getElementyById('linkedin').href = info.linkedin;
