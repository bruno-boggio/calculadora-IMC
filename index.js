// capturar evento de submit do formulário

const form = document.querySelector("#form");

form.addEventListener('submit', function(e){  // evento que eu desejo acompanhar
 e.preventDefault(); // previne o formulario de ser enviado
 //console.log('evento previnido') // vai la pro console do site esse console.log
 //setResultado('rx')
 const inputPeso = e.target.querySelector('#peso');
 const inputAltura = e.target.querySelector('#altura');
 
 const peso = Number(inputPeso.value);
 const altura = Number(inputAltura.value);

 if (!peso){
   setResultado('peso invalido', false);
   return;
 }

 if (!altura){
  setResultado('Altura invalida', false);
  return;
}

const imc = getImc(peso, altura); // imc recebe função getIMC
const nivelImc = getNivelImc(imc);

const msg = `seu IMC é ${imc} (${nivelImc}).`;
setResultado(msg, true);
}) 



// continua o código

function getImc(peso, altura){ // função getIMC tem como argumento peso e altura
     const imc = peso / altura **2; // conta pra pegar o imc
     return imc.toFixed(2); // retorna o imc da pessoa com 2 casas decimais
}

function getNivelImc (imc){
  const nivel = ['Abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1',
'obesidade grau 2', 'obesidade grau 3'];

if (imc >= 39.9) {
   return nivel[5]
} else if (imc >= 34.9){
  return nivel[4]
} else if (imc >= 29.9){
  return nivel[3]
} else if (imc >= 24.9){
  return nivel[2]
} else if (imc >= 18.5){
  return nivel[1]
} else if (imc < 18.5) {
  return nivel[0]
}

}

function setResultado (msg, isValid) { // div que vai retornar o resultado
 const resultado = document.querySelector('#resultado') // pegando a div resultado
 //resultado.innerHTML = `<p>${msg}</p>`; // mensagem que vai aparecer pro usuario no calcular
 resultado.innerHTML = ''; // colocou o resultado em branco, pq um valor vai aparecer aqui
 const p = document.createElement('p'); // aqui ele criou o resultado com um paragrafo
 p.classList.add('paragrafo-resultado'); // criou uma classe pro 'P'
 p.innerHTML = msg; // teste oq vai aparecer no paragrafo
 resultado.appendChild(p); // o filho da div que é o paragrafo

 if (isValid) {
   p.classList.add('paragrafo-resultado')
  } //else {
   // p.classList.add('bad')
   //}
}
