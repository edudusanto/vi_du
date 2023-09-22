//nota do primeiro trimestre//
let nota1 = parseFloat(ducument.querySelector(".trim1").textContent);
console.log(nota1Trim);
//nota do segundo trimestre//
let nota2 = parseFloat(ducument.querySelector(".trim2").textContent);
console.log(nota2Trim);
//nota do terceiro trimestre//
let nota3 = parseFloat(ducument.querySelector(".trim3").textContent);
console.log(nota3Trim);

//cálculo//
let resultado = nota1 + nota2 + nota3;
console.log(resultado);
//cria a variável e armazena o conteudo do resultado final//
let resultadoFinal = document.querySelector(".resultado-final");

if(resultado >= 180){
    //se for maior que 180 aparece como aprovado
    resultadoFinal.textContent = "Sim, parabéns!!!";
} else{
    //se não, aparece como reprovado e mostra o quanto de nota precisa
    let notaNecessaria = 180-(mota1Trim+nota2Trim);
    resultadoFinal.textContent = "Não! Melhore!";
}

 