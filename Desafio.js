let sortear = document.getElementById("sortear")    
let sorteadosida = document.getElementById("turnodeida1")
let sorteadosvolta = document.getElementById("turnodeida2")
let turnodevolta = document.getElementById("turnodevolta")
let turnodevolta2 = document.getElementById("turnodevolta2")
let tabela = document.getElementById("tabela")
let times = document.getElementById("times").value





let timescerto = times.split("\n")
timescerto.pop()
timescerto.pop()
timescerto.shift()


let testando = timescerto.map( (timess) =>{


return timess.split(";")[0];


})

let testando2 = timescerto.map( (timess) =>{


return timess.split(";")[0];


})




function misturando(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

var timesgols = ["0", "1", "2", "3", "4", "5","6","7","8","9"]


var cidades = ["são paulo", "rio de janeiro", "minas gerais", "rio grande do sul"]




let cidadesduplicadas = []
let resultado1rodada = []
let vitoria = 3
let empate = 1

let vascopts = 0
let palpts = 0
let interpts = 0
let flapts = 0
let cruzeiropts = 0
let santospts = 0





sortear.addEventListener("click", () =>{
    
  
    misturando(testando)
    misturando(cidades)

 // TURNO IDA RODADA 1



 for(i = 0; i<3;i++){
    
    misturando(timesgols)
    misturando(cidades)
var jogo1Rodada1 = `${testando[i]} vs${testando[i+3]} - ${cidades[i]} - rodada 1 ${timesgols[0]}x${timesgols[1]}`

cidadesduplicadas.push(cidades[i])

if(timesgols[0] > timesgols[1]){
 testando[i].includes("Vasco") ? vascopts += 3 : ""
 testando[i].includes("Flamengo") ? flapts += 3 : ""
 testando[i].includes("Palmeiras") ? palpts += 3 : ""
 testando[i].includes("Internacional") ? interpts += 3 : ""
 testando[i].includes("Cruzeiro") ? cruzeiropts += 3 : ""
 testando[i].includes("Santos") ? santospts += 3 : ""



}if(timesgols[1] > timesgols[0]){
    testando[i+3].includes("Vasco") ? vascopts += 3 : ""
    testando[i+3].includes("Flamengo") ? flapts += 3 : ""
    testando[i+3].includes("Palmeiras") ? palpts += 3 : ""
    testando[i+3].includes("Internacional") ? interpts += 3 : ""
    testando[i+3].includes("Cruzeiro") ? cruzeiropts += 3 : ""
    testando[i+3].includes("Santos") ? santospts += 3 : ""
 

}


if(cidadesduplicadas[0] == cidadesduplicadas[1]){
    
    let primeiroelemento = document.getElementById("turnodeida1").firstElementChild.textContent += "(RODADA DUPLA)"
    sorteadosida.innerHTML += `<p>${jogo1Rodada1}(RODADA DUPLA)<p>`
        cidadesduplicadas[0] = ""

      
}
 
else
    sorteadosida.innerHTML += `<p>${jogo1Rodada1}</p>`
    
 }if(cidadesduplicadas[2] == cidadesduplicadas[1] & cidadesduplicadas[2] != cidadesduplicadas[0]){

 ultimoelemento = document.getElementById("turnodeida1").lastElementChild.textContent += "(RODADA DUPLA)"
 let primeiroelemento = document.getElementById("turnodeida1").children[1].textContent += "(RODADA DUPLA)"



}if(cidadesduplicadas[0] == cidadesduplicadas[2]){

ultimoelemento = document.getElementById("turnodeida1").lastElementChild.textContent += "(RODADA DUPLA)"
 primeiroelemento = document.getElementById("turnodeida1").firstElementChild.textContent += "(RODADA DUPLA)"
}

   
    misturando(cidades)
    cidadesduplicadas = []




 // TURNO VOLTA RODADA 1   




    for(i = 0; i<3;i++){
    
        misturando(timesgols)
    misturando(cidades)

    var jogo2rodada1volta = `${testando[i+3]} vs${testando[i]} - ${cidades[i]} - rodada 2 ${timesgols[0]}x${timesgols[1]}`
cidadesduplicadas.push(cidades[i])

if(timesgols[0] > timesgols[1]){


 testando[i+3].includes("Vasco") ? vascopts += 3 : ""
    testando[i+3].includes("Flamengo") ? flapts += 3 : ""
    testando[i+3].includes("Palmeiras") ? palpts += 3 : ""
    testando[i+3].includes("Internacional") ? interpts += 3 : ""
    testando[i+3].includes("Cruzeiro") ? cruzeiropts += 3 : ""
    testando[i+3].includes("Santos") ? santospts += 3 : ""



}if(timesgols[1] > timesgols[0]){
    testando[i].includes("Vasco") ? vascopts += 3 : ""
 testando[i].includes("Flamengo") ? flapts += 3 : ""
 testando[i].includes("Palmeiras") ? palpts += 3 : ""
 testando[i].includes("Internacional") ? interpts += 3 : ""
 testando[i].includes("Cruzeiro") ? cruzeiropts += 3 : ""
 testando[i].includes("Santos") ? santospts += 3 : ""
    


}


if(cidadesduplicadas[0] == cidadesduplicadas[1]){
    
    let primeiroelemento2v = document.getElementById("turnodevolta").firstElementChild.textContent += "(RODADA DUPLA)"
    turnodevolta.innerHTML += `<p>${jogo2rodada1volta}(RODADA DUPLA)<p>`
        cidadesduplicadas[0] = ""

      
}
 
else
    turnodevolta.innerHTML += `<p>${jogo2rodada1volta}</p>`
    
 }if(cidadesduplicadas[2] == cidadesduplicadas[1] & cidadesduplicadas[2] != cidadesduplicadas[0]){

 ultimoelemento2v = document.getElementById("turnodevolta").lastElementChild.textContent += "(RODADA DUPLA)"
 let primeiroelemento2v = document.getElementById("turnodevolta").children[1].textContent += "(RODADA DUPLA)"


}if(cidadesduplicadas[0] == cidadesduplicadas[2]){

ultimoelemento2v = document.getElementById("turnodevolta").lastElementChild.textContent += "(RODADA DUPLA)"
 p2v = document.getElementById("turnodevolta").firstElementChild.textContent += "(RODADA DUPLA)"
 
}

    
    misturando(cidades)
    cidadesduplicadas = []

        


 // TURNO IDA RODADA 2    



 for(x = 0; x<3;x++){

    misturando(timesgols)
    misturando(cidades)
var jogo1Rodada2 = `${testando[x]} vs${testando[x+3]} - ${cidades[x]} - rodada 2 ${timesgols[0]}x${timesgols[1]}`
cidadesduplicadas.push(cidades[x])

if(timesgols[0] > timesgols[1]){
 testando[x].includes("Vasco") ? vascopts += 3 : ""
 testando[x].includes("Flamengo") ? flapts += 3 : ""
 testando[x].includes("Palmeiras") ? palpts += 3 : ""
 testando[x].includes("Internacional") ? interpts += 3 : ""
 testando[x].includes("Cruzeiro") ? cruzeiropts += 3 : ""
 testando[x].includes("Santos") ? santospts += 3 : ""



}if(timesgols[1] > timesgols[0]){
    testando[x+3].includes("Vasco") ? vascopts += 3 : ""
    testando[x+3].includes("Flamengo") ? flapts += 3 : ""
    testando[x+3].includes("Palmeiras") ? palpts += 3 : ""
    testando[x+3].includes("Internacional") ? interpts += 3 : ""
    testando[x+3].includes("Cruzeiro") ? cruzeiropts += 3 : ""
    testando[x+3].includes("Santos") ? santospts += 3 : ""
    


}


if(cidadesduplicadas[0] == cidadesduplicadas[1]){
    
    let primeiroelemento2 = document.getElementById("turnodeida2").firstElementChild.textContent += "(RODADA DUPLA)"
    sorteadosvolta.innerHTML += `<p>${jogo1Rodada2}(RODADA DUPLA)<p>`
        cidadesduplicadas[0] = ""

      
}
 
else
    sorteadosvolta.innerHTML += `<p>${jogo1Rodada2}</p>`
    
 }if(cidadesduplicadas[2] == cidadesduplicadas[1] & cidadesduplicadas[2] != cidadesduplicadas[0]){

 ultimoelemento2 = document.getElementById("turnodeida2").lastElementChild.textContent += "(RODADA DUPLA)"
 let primeiroelemento2 = document.getElementById("turnodeida2").children[1].textContent += "(RODADA DUPLA)"


}if(cidadesduplicadas[0] == cidadesduplicadas[2]){

ultimoelemento2 = document.getElementById("turnodeida2").lastElementChild.textContent += "(RODADA DUPLA)"
 primeiroelemento2 = document.getElementById("turnodeida2").firstElementChild.textContent += "(RODADA DUPLA)"
 
}

    
    misturando(cidades)
    cidadesduplicadas = []




 // TURNO VOLTA RODADA 2    

 

for(x = 0; x<3;x++){

    misturando(timesgols)
    misturando(cidades)

    var jogo2Rodada2volta = `${testando[x+3]} vs${testando[x]} - ${cidades[x]} - rodada 2 ${timesgols[0]}x${timesgols[1]}`
cidadesduplicadas.push(cidades[x])

if(timesgols[0] > timesgols[1]){


 testando[x+3].includes("Vasco") ? vascopts += 3 : ""
    testando[x+3].includes("Flamengo") ? flapts += 3 : ""
    testando[x+3].includes("Palmeiras") ? palpts += 3 : ""
    testando[x+3].includes("Internacional") ? interpts += 3 : ""
    testando[x+3].includes("Cruzeiro") ? cruzeiropts += 3 : ""
    testando[x+3].includes("Santos") ? santospts += 3 : ""



}if(timesgols[1] > timesgols[0]){
    testando[x].includes("Vasco") ? vascopts += 3 : ""
 testando[x].includes("Flamengo") ? flapts += 3 : ""
 testando[x].includes("Palmeiras") ? palpts += 3 : ""
 testando[x].includes("Internacional") ? interpts += 3 : ""
 testando[x].includes("Cruzeiro") ? cruzeiropts += 3 : ""
 testando[x].includes("Santos") ? santospts += 3 : ""
    


}


if(cidadesduplicadas[0] == cidadesduplicadas[1]){
    
    let primeiroelemento2volta = document.getElementById("turnodevolta2").firstElementChild.textContent += "(RODADA DUPLA)"
    turnodevolta2.innerHTML += `<p>${jogo2Rodada2volta}(RODADA DUPLA)<p>`
        cidadesduplicadas[0] = ""

      
}
 
else
    turnodevolta2.innerHTML += `<p>${jogo2Rodada2volta}</p>`
    
 }if(cidadesduplicadas[2] == cidadesduplicadas[1] & cidadesduplicadas[2] != cidadesduplicadas[0]){

 ultimoelemento2v2 = document.getElementById("turnodevolta2").lastElementChild.textContent += "(RODADA DUPLA)"
 let primeiroelemento2v2 = document.getElementById("turnodevolta2").children[1].textContent += "(RODADA DUPLA)"


}if(cidadesduplicadas[0] == cidadesduplicadas[2]){

ultimoelemento2v2 = document.getElementById("turnodevolta2").lastElementChild.textContent += "(RODADA DUPLA)"
 primeiroelemento2volta = document.getElementById("turnodevolta2").firstElementChild.textContent += "(RODADA DUPLA)"
 
}

    
    misturando(cidades)
    cidadesduplicadas = [x]

    
definirvencedor()

})



function definirvencedor(){

let arraypts = [vascopts, flapts, palpts, interpts, cruzeiropts, santospts]
arraypts.sort(  (a, b) => {
        return a - b;
    });

let maior = arraypts[5]

maior == vascopts ? tabela.innerHTML = "<h1>vasco ganhou</h1>" : ""
maior == flapts ?  tabela.innerHTML = "<h1>flamengo ganhou</h1>" : ""
maior == palpts ?  tabela.innerHTML = "<h1>palmeiras ganhou</h1>" : ""
maior == interpts ?  tabela.innerHTML = "<h1>internacional ganhou</h1>" : ""
maior == cruzeiropts ?  tabela.innerHTML = "<h1>cruzeiro ganhou</h1>" : ""
maior == santospts ?  tabela.innerHTML = "<h1>santos ganhou</h1>" : ""

}
