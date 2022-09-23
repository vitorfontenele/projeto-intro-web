/*
=======SEMANA 1=========
*/

//----1.1----

// CURSOS
// titulo --> string
// autor --> string
// preco --> number
// horas --> number
// possuiSelo --> boolean
// topicos --> array (object)

//----1.2----

const titulo1 = "Aprenda inglês do zero";
const autor1 = "Maria das Neves";
const preco1 = 150;
const horas1 = 50;
const possuiSelo1 = true;
const topicos1 = ["Inglês"];

const titulo2 = "React com 3 projetos para o seu portfólio";
const autor2 = "Gabriela da Silva";
const preco2 = 200;
const horas2 = 15;
const possuiSelo2 = false;
const topicos2 = ["Javascript", "HTML", "CSS", "React"];

const titulo3 = "Como ganhar dinheiro com Marketing Digital";
const autor3 = "Ana Ferreira";
const preco3 = 50;
const horas3 = 10;
const possuiSelo3 = true;
const topicos3 = ["Marketing Digital", "Redes Sociais"];

//----1.3----

const mediaPrecos = (preco1 + preco2 + preco3) / 3;
console.log("Média de preços", mediaPrecos);

//----1.4----

const possuiSelos = possuiSelo1 && possuiSelo2 && possuiSelo3;
console.log("Todos possuem selos?", possuiSelos);

//----1.5----

// Já havia feito essa etapa!

//----1.6----

const printAll = () => {
  console.log("titulo: ", titulo1.toUpperCase());
  console.log("autor: ", autor1.toUpperCase());
  console.log("preco: ", preco1);
  console.log("horas: ", horas1);
  console.log("possuiSelo: ", possuiSelo1);
  console.log("topicos: ", topicos1);

  console.log("=================");

  console.log("titulo: ", titulo2.toUpperCase());
  console.log("autor: ", autor2.toUpperCase());
  console.log("preco: ", preco2);
  console.log("horas: ", horas2);
  console.log("possuiSelo: ", possuiSelo2);
  console.log("topicos: ", topicos2);

  console.log("=================");

  console.log("titulo: ", titulo3.toUpperCase());
  console.log("autor: ", autor3.toUpperCase());
  console.log("preco: ", preco3);
  console.log("horas: ", horas3);
  console.log("possuiSelo: ", possuiSelo3);
  console.log("topicos: ", topicos3);
};

//printAll();

/*
=======SEMANA 2=========
*/

//----2.1----

const objeto1 = {
  titulo: titulo1,
  autor: autor1,
  preco: preco1,
  horas: horas1,
  possuiSelo: possuiSelo1,
  topicos: topicos1,
};

const objeto2 = {
  titulo: titulo2,
  autor: autor2,
  preco: preco2,
  horas: horas2,
  possuiSelo: possuiSelo2,
  topicos: topicos2,
};

const objeto3 = {
  titulo: titulo3,
  autor: autor3,
  preco: preco3,
  horas: horas3,
  possuiSelo: possuiSelo3,
  topicos: topicos3,
};

//----2.2----

let objetos = [];

//----2.3---- + ----2.4---- + ----2.5----

let objetosTeste = [objeto1, objeto2, objeto3];

for (let objeto of objetosTeste) {
  if (objeto.possuiSelo) {
    objetos.push(objeto);
  } else {
    alert(`O curso ${objeto.titulo} não foi adicionado!`);
  }
}

/*
=======SEMANA 3=========
*/

//----3.1----

//Relatorio, antes
const printPrevReport = () => {
  console.log("------ANTES-------");

  console.log("---OBJETO 1---");
  console.log("titulo:", objetos[0]["titulo"]);
  console.log("autor:", objetos[0]["autor"]);
  console.log("preco:", objetos[0]["preco"]);
  console.log("horas:", objetos[0]["horas"]);
  console.log("possuiSelo:", objetos[0]["possuiSelo"]);
  console.log("topicos:", objetos[0]["topicos"]);

  console.log("---OBJETO 2---");
  console.log("titulo:", objetos[1]["titulo"]);
  console.log("autor:", objetos[1]["autor"]);
  console.log("preco:", objetos[1]["preco"]);
  console.log("horas:", objetos[1]["horas"]);
  console.log("possuiSelo:", objetos[1]["possuiSelo"]);
  console.log("topicos:", objetos[1]["topicos"]);
};

// printPrevReport();

//Funcao que transforma o array do objeto em string
function arrValueToStr(obj, key) {
  let arrValue = obj[key];
  let strValue = "";
  for (let element of arrValue) {
    strValue += `${element},`;
  }
  return strValue.slice(0, -1);
}

//Relatorio, depois
const printPostReport = () => {
  console.log("--------DEPOIS---------");

  console.log("---OBJETO 1---");
  console.log("titulo:", objetos[0]["titulo"]);
  console.log("autor:", objetos[0]["autor"]);
  console.log("preco:", objetos[0]["preco"]);
  console.log("horas:", objetos[0]["horas"]);
  console.log("possuiSelo:", objetos[0]["possuiSelo"]);
  console.log("topicos:", arrValueToStr(objetos[0], "topicos"));

  console.log("---OBJETO 2---");
  console.log("titulo:", objetos[1]["titulo"]);
  console.log("autor:", objetos[1]["autor"]);
  console.log("preco:", objetos[1]["preco"]);
  console.log("horas:", objetos[1]["horas"]);
  console.log("possuiSelo:", objetos[1]["possuiSelo"]);
  console.log("topicos:", arrValueToStr(objetos[1], "topicos"));
};

//printPostReport();

//----3.2----

//Usando laco para imprimir o relatorio
function printWithLoops(arr) {
  for (let obj of arr) {
    for (let key in obj) {
      console.log(key + ":", obj[key]);
    }
    console.log("------");
  }
}

const printItems = () => {
  printWithLoops(objetos);
};

//printItems();

//----3.3----

//Relatorio com todos os valores do objeto convertidos para string
function valuesToStr(obj) {
  let text = "";
  for (let key in obj) {
    text = text + `${key}: ${obj[key]}\n`;
  }
  return text;
}

const printObjsToStr = () => {
  console.log(valuesToStr(objetos[0]));
  console.log(valuesToStr(objetos[1]));
};

//printObjsToStr();

//----3.4----

//Verificando se algum dos objetos tem uma determinda string
function objHasString(array, string) {
  for (let obj of array) {
    for (let key in obj) {
      if (obj[key] === string) {
        return obj;
      }
    }
  }
  alert("Nenhum item foi encontrado!");
}

//console.log(objHasString(objetos, "Ana Ferreira"));
