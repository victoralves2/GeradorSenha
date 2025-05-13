
function verificarCheckBox(){
    let LetrasMinusculas = false;
    let LetrasMaiusculas = false;
    let incluiNumeros = false;
    let incluiSimbolos = false;
    const checkbox1 = document.getElementById('opcao1');
    const checkbox2 = document.getElementById('opcao2');
    const checkbox3 = document.getElementById('opcao3');
    const checkbox4 = document.getElementById('opcao4');
    const tamanho = document.getElementById('tamanho');
    const resultado = document.getElementById('resultado');
    const valor = tamanho.value;
    
    if(checkbox1.checked)
        incluiNumeros = true;
    if(checkbox2.checked)
        LetrasMaiusculas = true;
    if(checkbox3.checked)
        LetrasMinusculas = true;
    if(checkbox4.checked)
        incluiSimbolos = true;

    let senha = gerar(valor,LetrasMaiusculas, LetrasMinusculas, incluiNumeros, incluiSimbolos, resultado);
    resultado.textContent = senha;
}

function gerar(tamanho, LetrasMaiusculas, LetrasMinusculas, incluiNumeros, incluiSimbolos, resultado){
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_-+=`~';
    let charPermitidos = "";
    let senha = "";
    charPermitidos += LetrasMinusculas ? minusculas : "";
    charPermitidos += LetrasMaiusculas ? maiusculas : "";
    charPermitidos += incluiNumeros ? numeros : "";
    charPermitidos += incluiSimbolos ? simbolos : "";
    resultado.style.color = 'red';
    
    if(tamanho<=0){
        return 'Tamanho da senha deve ser pelo menos 1!';
    }else if(charPermitidos.length==0){
        return 'Pelo menos uma checkBox deve ser marcada!';
    }else{
        for(let i = 0; i < tamanho; i++){
            const indiceRandom = Math.floor(Math.random() * charPermitidos.length);
            senha += charPermitidos[indiceRandom];
        }
    }
    resultado.style.color = 'black';
    return senha;
}
