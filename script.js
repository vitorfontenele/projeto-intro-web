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
const preco1 = 45;
const lancamento1 = 2010;
const possuiSelo1 = true;
const plataformas1 = ["Windows", "macOS", "Linux"];

const titulo2 = "Civilization VI";
const autor2 = "Firaxis Games";
const preco2 = 19.35;
const lancamento2 = 2016;
const possuiSelo2 = true;
const plataformas2 = ["Nintendo Switch", "PlayStation 4", "Android", "Xbox One", "Windows", "iOS", "Linux", "macOS"];

const titulo3 = "Europa Universalis IV";
const autor3 = "Paradox Interactive";
const preco3 = 94.99;
const lancamento3 = 2013;
const possuiSelo3 = true;
const plataformas3 = ["macOS", "Linux", "Windows"];

const titulo4 = "Hearts of Iron IV";
const autor4 = "Paradox Interactive";
const preco4 = 23.74;
const lancamento4 = 2016;
const possuiSelo4 = true;
const plataformas4 = ["macOS", "Linux", "Windows"];

const titulo5 = "Total War: Warhammer II";
const autor5 = "Creative Assembly";
const preco5 = 252;
const lancamento5 = 2017;
const possuiSelo5 = true;
const plataformas5 = ["macOS", "Linux", "Windows"];

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
const printPrevReport = () => {
  console.log("------ANTES-------");

  console.log("---OBJETO 1---");
  console.log("titulo:", objetos[0]["titulo"]);
  console.log("autor:", objetos[0]["autor"]);
  console.log("preco:", objetos[0]["preco"]);
  console.log("lancamento:", objetos[0]["lancamento"]);
  console.log("possuiSelo:", objetos[0]["possuiSelo"]);
  console.log("plataformas:", objetos[0]["plataformas"]);

  console.log("---OBJETO 2---");
  console.log("titulo:", objetos[1]["titulo"]);
  console.log("autor:", objetos[1]["autor"]);
  console.log("preco:", objetos[1]["preco"]);
  console.log("lancamento:", objetos[1]["lancamento"]);
  console.log("possuiSelo:", objetos[1]["possuiSelo"]);
  console.log("plataformas:", objetos[1]["plataformas"]);

  console.log("---OBJETO 3---");
  console.log("titulo:", objetos[2]["titulo"]);
  console.log("autor:", objetos[2]["autor"]);
  console.log("preco:", objetos[2]["preco"]);
  console.log("lancamento:", objetos[2]["lancamento"]);
  console.log("possuiSelo:", objetos[2]["possuiSelo"]);
  console.log("plataformas:", objetos[2]["plataformas"]);

  console.log("---OBJETO 4---");
  console.log("titulo:", objetos[3]["titulo"]);
  console.log("autor:", objetos[3]["autor"]);
  console.log("preco:", objetos[3]["preco"]);
  console.log("lancamento:", objetos[3]["lancamento"]);
  console.log("possuiSelo:", objetos[3]["possuiSelo"]);
  console.log("plataformas:", objetos[3]["plataformas"]);

  console.log("---OBJETO 5---");
  console.log("titulo:", objetos[4]["titulo"]);
  console.log("autor:", objetos[4]["autor"]);
  console.log("preco:", objetos[4]["preco"]);
  console.log("lancamento:", objetos[4]["lancamento"]);
  console.log("possuiSelo:", objetos[4]["possuiSelo"]);
  console.log("plataformas:", objetos[4]["plataformas"]);
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
  console.log("lancamento:", objetos[0]["lancamento"]);
  console.log("possuiSelo:", objetos[0]["possuiSelo"]);
  console.log("plataformas:", arrValueToStr(objetos[0], "plataformas"));

  console.log("---OBJETO 2---");
  console.log("titulo:", objetos[1]["titulo"]);
  console.log("autor:", objetos[1]["autor"]);
  console.log("preco:", objetos[1]["preco"]);
  console.log("lancamento:", objetos[1]["lancamento"]);
  console.log("possuiSelo:", objetos[1]["possuiSelo"]);
  console.log("plataformas:", arrValueToStr(objetos[1], "plataformas"));

  console.log("---OBJETO 3---");
  console.log("titulo:", objetos[2]["titulo"]);
  console.log("autor:", objetos[2]["autor"]);
  console.log("preco:", objetos[2]["preco"]);
  console.log("lancamento:", objetos[2]["lancamento"]);
  console.log("possuiSelo:", objetos[2]["possuiSelo"]);
  console.log("plataformas:", arrValueToStr(objetos[2], "plataformas"));

  console.log("---OBJETO 4---");
  console.log("titulo:", objetos[3]["titulo"]);
  console.log("autor:", objetos[3]["autor"]);
  console.log("preco:", objetos[3]["preco"]);
  console.log("lancamento:", objetos[3]["lancamento"]);
  console.log("possuiSelo:", objetos[3]["possuiSelo"]);
  console.log("plataformas:", arrValueToStr(objetos[3], "plataformas"));

  console.log("---OBJETO 5---");
  console.log("titulo:", objetos[4]["titulo"]);
  console.log("autor:", objetos[4]["autor"]);
  console.log("preco:", objetos[4]["preco"]);
  console.log("lancamento:", objetos[4]["lancamento"]);
  console.log("possuiSelo:", objetos[4]["possuiSelo"]);
  console.log("plataformas:", arrValueToStr(objetos[4], "plataformas"));
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
  console.log(valuesToStr(objetos[2]));
  console.log(valuesToStr(objetos[3]));
  console.log(valuesToStr(objetos[4]));
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
