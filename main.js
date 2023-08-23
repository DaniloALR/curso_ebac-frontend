const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
const form = document.getElementById('form');

const mensagem = document.getElementById('mensagem')

form.addEventListener('submit',function(e){
    e.preventDefault();
    let valorA = e.target[0].valueAsNumber
    let valorB = e.target[1].valueAsNumber
    

    if(valorB > valorA){
        mensagem.innerHTML = "Muito bem"
        mensagem.style.backgroundColor =  "rgb(53, 185, 53)"
        mensagem.style.display = "block"
        
    } else {
        mensagem.innerHTML = "Valor invalido"
        mensagem.style.backgroundColor =  "red"
        mensagem.style.display = "block"
    }
})

