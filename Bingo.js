var re = [];

// LEGAL ME ABRIU A CABEÇA.
/*let arr = [1, 2, 3, 4, 5];

let tempe = arr[0]; // armazena o valor do primeiro elemento em uma variável temporária
arr[0] = arr[4];  // troca o valor do primeiro elemento pelo valor do último elemento
arr[4] = tempe;    // troca o valor do último elemento pelo valor armazenado na variável temporária

console.log(arr); // [5, 2, 3, 4, 1]
*/

let tabelaOne = document.querySelector("#tabela1")

let tabelaTwo = document.querySelector("#tabela2")

let tabelaThree = document.querySelector("#tabela3")

let tabelaFour = document.querySelector("#tabela4")

let tabelaFive = document.querySelector("#tabela5")

let tabelaSex = document.querySelector("#tabela6")

let tabelaServen = document.querySelector("#tabela7")

let tabelaEight = document.querySelector("#tabela8")

let tabelaNine = document.querySelector("#tabela9")

let tabelaTen = document.querySelector("#tabela10")
    
     // Fazer um (for) para colocar toda a tabela no HTML. 
     //for (let i = 0, i < 10, i++){}
    
    for (var i = 1; i < 11; i++) {
      tabelaOne.innerHTML += 
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 11; i < 21; i++) {
      tabelaTwo.innerHTML +=
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 21; i < 31; i++) {
      tabelaThree.innerHTML += 
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 31; i < 41; i++) {
      tabelaFour.innerHTML +=
      `<td id="n${i}">?</td>`
    }
    for (var i = 41; i < 51; i++) {
      tabelaFive.innerHTML += 
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 51; i < 61; i++) {
      tabelaSex.innerHTML +=
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 61; i < 71; i++) {
      tabelaServen.innerHTML +=
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 71; i < 81; i++) {
      tabelaEight.innerHTML +=
      `<td id="n${i}">?</td>`
    }
    
    for (var i = 81; i < 91; i++) {
      tabelaNine.innerHTML +=
      `<td id="n${i}">?</td>`
    }
    
    var t2 = document.querySelector(".tela")
    // COMEÇO function
function sortearN() {
  // SORTEANDO O NUMERO
  let nS = parseInt(Math.random() * 91);
  
  // PEGANDO O INDEX
    let nE = nS - 1
    
    // FERIFCANDO SER JA FOI OU E (0)
  if (nS == re[nE] || nS == 0) {
    sortearN()
    
  } else {
    // A MAGICA E AQUI
    // COLOCA O NUMERO SORTEADO NA VAR (re)
    re[nE] = nS
  
// DIZ NA TELA O NUMERO SORTEADO
    let La = document.getElementById("Aqui");
    t2.innerHTML = "|É o número foi|"

    La.innerHTML = `${nS}!!`;
    
    
    // MESMA COISA DO (SWITCH)
  /*  let n1 = document.querySelector("#n1")
    
    let n2 = document.querySelector("#n2")
    
    let n3 = document.querySelector("#n3")
    
    let n4 = document.querySelector("#n4")
    */
    
    //PEGANDO O (ID) DO NUMERO SORTEADO PARA PODER MOSTRA NA TABELA
    let nN = document.querySelector(`#n${nS}`)
    
    nN.innerHTML = `|${nS}|`
    
    // DEPOIS DE FAVRIAS TENTATIVAS O (SWITCH) E INUTIOL (para essa opetação)
    
   /* switch (nS){
      case 1:
      nN.innerHTML = nS
      break
      
     case 2:
      nN.innerHTML = 2
      break
      
     case 3:
      nN.innerHTML = 3
      break
      
     case 4:
      nN.innerHTML = 4
      break
      
     case 5:
      nN.innerHTML = 5
      break 
      
    }*/
    
    //Fim else
  }
  //console.log(N.indexOf(3))
  //Fim function
}