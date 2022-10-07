/*
=======SEMANA 1=========
*/

//----1.1----

// Jogos de Estratégia
// titulo --> string
// autor --> string
// preco --> number
// lancamento --> number
// possuiSelo --> boolean
// plataformas --> array (object)

//----1.2----

const titulo1 = "Civilization V";
const autor1 = "Firaxis Games";
const preco1 = 23.89;
const lancamento1 = 2010;
const possuiSelo1 = true;
const plataformas1 = ["Windows", "macOS", "Linux"];

const titulo2 = "Civilization VI";
const autor2 = "Firaxis Games";
const preco2 = 59.99;
const lancamento2 = 2016;
const possuiSelo2 = true;
const plataformas2 = ["Nintendo Switch", "PlayStation 4", "Android", "Xbox One", "Windows", "iOS", "Linux", "macOS"];

const titulo3 = "Europa Universalis IV";
const autor3 = "Paradox Interactive";
const preco3 = 39.99;
const lancamento3 = 2013;
const possuiSelo3 = true;
const plataformas3 = ["Windows", "macOS", "Linux"];

const titulo4 = "Hearts of Iron IV";
const autor4 = "Paradox Interactive";
const preco4 = 23.74;
const lancamento4 = 2016;
const possuiSelo4 = true;
const plataformas4 = ["Windows", "macOS", "Linux"];

const titulo5 = "Total War: Warhammer II";
const autor5 = "Creative Assembly";
const preco5 = 53.99;
const lancamento5 = 2017;
const possuiSelo5 = true;
const plataformas5 = ["Windows", "macOS", "Linux"];

//----1.3----

const mediaPrecos = (preco1 + preco2 + preco3 + preco4 + preco5) / 5;
console.log("Média de preços", mediaPrecos);

//----1.4----

const possuiSelos = possuiSelo1 && possuiSelo2 && possuiSelo3 && possuiSelo4 && possuiSelo5;
console.log("Todos possuem selos?", possuiSelos);

//----1.5----

// Já havia feito essa etapa!

//----1.6----

const printAll = () => {
  console.log("titulo: ", titulo1.toUpperCase());
  console.log("autor: ", autor1.toUpperCase());
  console.log("preco: ", preco1);
  console.log("lancamento: ", lancamento1);
  console.log("possuiSelo: ", possuiSelo1);
  console.log("plataformas: ", plataformas1);

  console.log("=================");

  console.log("titulo: ", titulo2.toUpperCase());
  console.log("autor: ", autor2.toUpperCase());
  console.log("preco: ", preco2);
  console.log("lancamento: ", lancamento2);
  console.log("possuiSelo: ", possuiSelo2);
  console.log("plataformas: ", plataformas2);

  console.log("=================");

  console.log("titulo: ", titulo3.toUpperCase());
  console.log("autor: ", autor3.toUpperCase());
  console.log("preco: ", preco3);
  console.log("lancamento: ", lancamento3);
  console.log("possuiSelo: ", possuiSelo3);
  console.log("plataformas: ", plataformas3);

  console.log("=================");

  console.log("titulo: ", titulo4.toUpperCase());
  console.log("autor: ", autor4.toUpperCase());
  console.log("preco: ", preco4);
  console.log("lancamento: ", lancamento4);
  console.log("possuiSelo: ", possuiSelo4);
  console.log("plataformas: ", plataformas4);

  console.log("=================");

  console.log("titulo: ", titulo5.toUpperCase());
  console.log("autor: ", autor5.toUpperCase());
  console.log("preco: ", preco5);
  console.log("lancamento: ", lancamento5);
  console.log("possuiSelo: ", possuiSelo5);
  console.log("plataformas: ", plataformas5);
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
  lancamento: lancamento1,
  possuiSelo: possuiSelo1,
  plataformas: plataformas1,
};

const objeto2 = {
  titulo: titulo2,
  autor: autor2,
  preco: preco2,
  lancamento: lancamento2,
  possuiSelo: possuiSelo2,
  plataformas: plataformas2,
};

const objeto3 = {
  titulo: titulo3,
  autor: autor3,
  preco: preco3,
  lancamento: lancamento3,
  possuiSelo: possuiSelo3,
  plataformas: plataformas3,
};

const objeto4 = {
  titulo: titulo4,
  autor: autor4,
  preco: preco4,
  lancamento: lancamento4,
  possuiSelo: possuiSelo4,
  plataformas: plataformas4,
};

const objeto5 = {
  titulo: titulo5,
  autor: autor5,
  preco: preco5,
  lancamento: lancamento5,
  possuiSelo: possuiSelo5,
  plataformas: plataformas5,
};

//----2.2----

let objetos = [];

//----2.3---- + ----2.4---- + ----2.5----

let objetosTeste = [objeto1, objeto2, objeto3, objeto4, objeto5];

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
const printPrevReport = (obj) => {
  console.log(obj["titulo"].toUpperCase());
  console.log("autor:", obj["autor"]);
  console.log("preco:", obj["preco"]);
  console.log("lancamento:", obj["lancamento"]);
  console.log("possuiSelo:", obj["possuiSelo"]);
  console.log("plataformas:", obj["plataformas"]);
};

// printPrevReport(objetos[0]);
// printPrevReport(objetos[1]);
// printPrevReport(objetos[2]);
// printPrevReport(objetos[3]);
// printPrevReport(objetos[4]);

//Funcao que transforma o array do objeto em string
function arrValueToStr(obj, key) {
  let arrValue = obj[key];
  let strValue = "";
  for (let element of arrValue) {
    strValue += `${element}, `;
  }
  return strValue.slice(0, -2);
}

//Relatorio, depois
const printPostReport = (obj) => {
  console.log(obj["titulo"].toUpperCase());
  console.log("autor:", obj["autor"]);
  console.log("preco:", obj["preco"]);
  console.log("lancamento:", obj["lancamento"]);
  console.log("possuiSelo:", obj["possuiSelo"]);
  console.log("plataformas:", arrValueToStr(obj, "plataformas"));
};

// printPostReport(objetos[0]);
// printPostReport(objetos[1]);
// printPostReport(objetos[2]);
// printPostReport(objetos[3]);
// printPostReport(objetos[4]);

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
  for (let objeto of objetos){
    console.log(valuesToStr(objeto));
  }
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

// console.log(objHasString(objetos, "Total War: Warhammer II"));

/*
=======HAMBURGUER MENU=========
*/

function toggleMenu(){
  let menu = document.getElementById("navbar-list");
  menu.classList.toggle("visible");
}