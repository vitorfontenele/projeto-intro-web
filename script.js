// CURSOS
// titulo --> string
// autor --> string
// preco --> number
// horas --> number
// possuiSelo --> boolean
// topicos --> array (object)

const objeto1 = {
  titulo: "Aprenda inglês do zero",
  autor: "Maria das Neves",
  preco: 150,
  horas: 50,
  possuiSelo: true,
  topicos: ["Inglês"],
};

const objeto2 = {
  titulo: "React com 3 projetos para o seu portfólio",
  autor: "Gabriela da Silva",
  preco: 200,
  horas: 15,
  possuiSelo: false,
  topicos: ["Javascript", "HTML", "CSS", "React"],
};

const objeto3 = {
  titulo: "Como ganhar dinheiro com Marketing Digital",
  autor: "Ana Ferreira",
  preco: 50,
  horas: 10,
  possuiSelo: true,
  topicos: ["Marketing Digital", "Redes Sociais"],
};

//Relatorio, antes
const printPrevReport = () => {
  console.log("ANTES");

  console.log("---OBJETO 1---");
  console.log("titulo:", objeto1["titulo"]);
  console.log("autor:", objeto1["autor"]);
  console.log("preco:", objeto1["preco"]);
  console.log("horas:", objeto1["horas"]);
  console.log("possuiSelo:", objeto1["possuiSelo"]);
  console.log("topicos:", objeto1["topicos"]);

  console.log("---OBJETO 2---");
  console.log("titulo:", objeto2["titulo"]);
  console.log("autor:", objeto2["autor"]);
  console.log("preco:", objeto2["preco"]);
  console.log("horas:", objeto2["horas"]);
  console.log("possuiSelo:", objeto2["possuiSelo"]);
  console.log("topicos:", objeto2["topicos"]);

  console.log("---OBJETO 3---");
  console.log("titulo:", objeto3["titulo"]);
  console.log("autor:", objeto3["autor"]);
  console.log("preco:", objeto3["preco"]);
  console.log("horas:", objeto3["horas"]);
  console.log("possuiSelo:", objeto3["possuiSelo"]);
  console.log("topicos:", objeto3["topicos"]);
};
//printPrevReport();

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
  console.log("DEPOIS");

  console.log("---OBJETO 1---");
  console.log("titulo:", objeto1["titulo"]);
  console.log("autor:", objeto1["autor"]);
  console.log("preco:", objeto1["preco"]);
  console.log("horas:", objeto1["horas"]);
  console.log("possuiSelo:", objeto1["possuiSelo"]);
  console.log("topicos:", arrValueToStr(objeto1, "topicos"));

  console.log("---OBJETO 2---");
  console.log("titulo:", objeto2["titulo"]);
  console.log("autor:", objeto2["autor"]);
  console.log("preco:", objeto2["preco"]);
  console.log("horas:", objeto2["horas"]);
  console.log("possuiSelo:", objeto2["possuiSelo"]);
  console.log("topicos:", arrValueToStr(objeto2, "topicos"));

  console.log("---OBJETO 3---");
  console.log("titulo:", objeto3["titulo"]);
  console.log("autor:", objeto3["autor"]);
  console.log("preco:", objeto3["preco"]);
  console.log("horas:", objeto3["horas"]);
  console.log("possuiSelo:", objeto3["possuiSelo"]);
  console.log("topicos:", arrValueToStr(objeto3, "topicos"));
};
//printPostReport();

//Usando laco para imprimir o relatorio
function printItem(obj, label) {
  console.log(label);
  for (let i in obj) {
    console.log(i + ":", obj[i]);
  }
}

const printItems = () => {
  printItem(objeto1, "---OBJETO 1---");
  printItem(objeto2, "---OBJETO 2---");
  printItem(objeto3, "---OBJETO 3---");
};
//printItems();

//Relatorio com todos os valores do objeto convertidos para string
function valuesToStr(obj) {
  let text = "";
  for (let i in obj) {
    text += `${i}: ${obj[i]}\n`;
  }
  return text;
}

const printObjsToStr = () => {
  console.log(valuesToStr(objeto1));
  console.log(valuesToStr(objeto2));
  console.log(valuesToStr(objeto3));
};
//printObjsToStr();

function hasKey(array, key) {
  let filteredObj;
  let filteredArr = [];
  for (let obj of array) {
    filteredObj = {};
    if (obj.hasOwnProperty(key)) {
      filteredObj[key] = obj[key];
      filteredArr.push(filteredObj);
    } else {
      alert("Nenhum item foi encontrado!");
    }
  }
  return filteredArr;
}

//console.log(hasKey([objeto1, objeto2, objeto3], "horas"));

/*
-SEMANA 1-------
const mediaPrecos = (preco1 + preco2 + preco3) / 3;
console.log(mediaPrecos);

const possuiSelos = possuiSelo1 && possuiSelo2 && possuiSelo3;
console.log(possuiSelos);

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
*/

/* 
-SEMANA 2-------
let objetosTeste = [objeto1, objeto2, objeto3];
let objetos = [];
for (let objeto in objetosTeste) {
  if (objeto.possuiSelo) {
    objetos.push(objeto);
  } else {
    alert(`O curso ${objeto.titulo} não foi adicionado!`);
  }
}
*/
