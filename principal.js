<button id="botao">clique-me</button>


    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler());


<input class="frase"><button class="botao">Copiar</button><span class="copia"></span>
  
  
  <input class="frase"><button class="botao">Copiar</button><span class="copia"></span>

    var inputFrase = document.querySelector('.frase');
    var botao = document.querySelector('.botao');
    var copia = document.querySelector('.copia');

    function botaoHandler() {


    }

    botao.addEventListener('click', botaoHandler);
 

                
                
                var form = document.querySelector('.adicionar-tarefa');

var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event){
 event.preventDeFault();
  console.log("Oi eu sou o botão e fui clicado");})

    
                 console.log("Oi Mundo")
                 console.log (document)
                 console.log (document.querySelector("titulo"))
       titulo.addEventListener("click", mostraMensagem)
       function mostraMensagem(){
           console.log("Ola fui clicado!")
       }
                var form = document.querySelector("#form-adicionar")
                 console.log(form.nome)
                 console.log(form.produto)
                console.log(form.Ml)
                
                var clienteTr = document.createElement("tr")
                
                
                var nomeTd = document.createElement("td")
                var produtoTd = document.createElement ("td")
                var kgTd = document.createElement("td")
                var valorTd = document.createElement("td")
                var totalTd = document.createElement("td")
                
                
                nomeTd.textContent = nome 
                produtoTd.textContent = produto
                kgTd.textContent = Ml
                valorTd.textContent = valor
                totalTd.textContent = total
                
                pacienteTr.appendChild(nomeTd)
                pacienteTr.appendChild(produtoTd)
                pacienteTr.appendChild(kgTd)
                pacienteTr.appendChild(valorTd)
                pacienteTr.appendChild(totalTd)
                
                
                var tabela = document.querySelector("#tabela-clientes")
                
                tabela.appendChild(pacienteTr)
                
<head>
       
            
                
                var form = document.querySelector('.adicionar-tarefa');
var botao = document.querySelector('#botao-adicionar');
botao.addEventListener("click", function()){
    console.log(form.tarefa.value); 
    
                 console.log("Oi Mundo")
                 console.log (document)
                 console.log (document.querySelector("titulo"))
       titulo.addEventListener("click", mostraMensagem)
       function mostraMensagem(){
           console.log("Ola fui clicado!")
       }
                var form = document.querySelector("#form-adicionar")
                 console.log(form.nome)
                 console.log(form.produto)
                console.log(form.kg)
                
                var clienteTr = document.createElement("tr")
                
                
                var nomeTd = document.createElement("td")
                var produtoTd = document.createElement ("td")
                var kgTd = document.createElement("td")
                var valorTd = document.createElement("td")
                var totalTd = document.createElement("td")
                
                                
                var tabela = document.querySelector("#tabela-clientes")
                
                tabela.appendChild(pacienteTr)

                     
                        
                    
                nomeTd.textContent = nome 
                produtoTd.textContent = produto
                kgTd.textContent = Ml
                valorTd.textContent = valor
                totalTd.textContent = total
                
                pacienteTr.appendChild(nomeTd)
                pacienteTr.appendChild(produtoTd)
                pacienteTr.appendChild(kgTd)
                pacienteTr.appendChild(valorTd)
                pacienteTr.appendChild(totalTd)
                
                
 
              
                    
                        </head>
