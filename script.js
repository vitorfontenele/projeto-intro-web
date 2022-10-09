/*
=======SEMANA 1=========
*/

//----1.1----

// Grand Strategy Games
// title --> string
// developer --> string
// price --> number
// release --> number
// hasSeal --> boolean
// platforms --> array (object)
// properties --> object

//----1.2----

const title1 = "Civilization VI";
const developer1 = "Firaxis Games";
const price1 = 59.99;
const release1 = 2016;
const hasSeal1 = true;
const platforms1 = [
  "Nintendo Switch",
  "PlayStation 4",
  "Android",
  "Xbox One",
  "Windows",
  "iOS",
  "Linux",
  "macOS",
];
const properties1 = { image: "./assets/image-1.png", color: "#FFF2DB" };

const title2 = "Civilization V";
const developer2 = "Firaxis Games";
const price2 = 23.89;
const release2 = 2010;
const hasSeal2 = true;
const platforms2 = ["Windows", "macOS", "Linux"];
const properties2 = { image: "./assets/image-2.png", color: "#E3E1E8" };

const title3 = "Europa Universalis IV";
const developer3 = "Paradox Interactive";
const price3 = 39.99;
const release3 = 2013;
const hasSeal3 = true;
const platforms3 = ["Windows", "macOS", "Linux"];
const properties3 = { image: "./assets/image-3.png", color: "#BDCFE0" };

const title4 = "Hearts of Iron IV";
const developer4 = "Paradox Interactive";
const price4 = 23.74;
const release4 = 2016;
const hasSeal4 = true;
const platforms4 = ["Windows", "macOS", "Linux"];
const properties4 = { image: "./assets/image-4.png", color: "#E2DBC5" };

const title5 = "Total War: Warhammer II";
const developer5 = "Creative Assembly";
const price5 = 53.99;
const release5 = 2017;
const hasSeal5 = true;
const platforms5 = ["Windows", "macOS", "Linux"];
const properties5 = { image: "./assets/image-5.png", color: "#CCEEFA" };

//----1.3----

const averagePrice = (price1 + price2 + price3 + price4 + price5) / 5;
console.log("Average price", averagePrice);

//----1.4----

const hasSeals = hasSeal1 && hasSeal2 && hasSeal3 && hasSeal4 && hasSeal5;
console.log("All true?", hasSeals);

//----1.5----

// Já havia feito essa etapa!

//----1.6----

const printAll = () => {
  console.log("title: ", title1.toUpperCase());
  console.log("developer: ", developer1.toUpperCase());
  console.log("price: ", price1);
  console.log("release: ", release1);
  console.log("hasSeal: ", hasSeal1);
  console.log("platforms: ", platforms1);
  console.log("properties: ", properties1);

  console.log("=================");

  console.log("title: ", title2.toUpperCase());
  console.log("developer: ", developer2.toUpperCase());
  console.log("price: ", price2);
  console.log("release: ", release2);
  console.log("hasSeal: ", hasSeal2);
  console.log("platforms: ", platforms2);
  console.log("properties: ", properties2);

  console.log("=================");

  console.log("title: ", title3.toUpperCase());
  console.log("developer: ", developer3.toUpperCase());
  console.log("price: ", price3);
  console.log("release: ", release3);
  console.log("hasSeal: ", hasSeal3);
  console.log("platforms: ", platforms3);
  console.log("properties: ", properties3);

  console.log("=================");

  console.log("title: ", title4.toUpperCase());
  console.log("developer: ", developer4.toUpperCase());
  console.log("price: ", price4);
  console.log("release: ", release4);
  console.log("hasSeal: ", hasSeal4);
  console.log("platforms: ", platforms4);
  console.log("properties: ", properties4);

  console.log("=================");

  console.log("title: ", title5.toUpperCase());
  console.log("developer: ", developer5.toUpperCase());
  console.log("price: ", price5);
  console.log("release: ", release5);
  console.log("hasSeal: ", hasSeal5);
  console.log("platforms: ", platforms5);
  console.log("properties: ", properties5);
};

// printAll();

/*
=======SEMANA 2=========
*/

//----2.1----

const object1 = {
  title: title1,
  developer: developer1,
  price: price1,
  release: release1,
  hasSeal: hasSeal1,
  platforms: platforms1,
  properties: properties1,
};

const object2 = {
  title: title2,
  developer: developer2,
  price: price2,
  release: release2,
  hasSeal: hasSeal2,
  platforms: platforms2,
  properties: properties2,
};

const object3 = {
  title: title3,
  developer: developer3,
  price: price3,
  release: release3,
  hasSeal: hasSeal3,
  platforms: platforms3,
  properties: properties3,
};

const object4 = {
  title: title4,
  developer: developer4,
  price: price4,
  release: release4,
  hasSeal: hasSeal4,
  platforms: platforms4,
  properties: properties4,
};

const object5 = {
  title: title5,
  developer: developer5,
  price: price5,
  release: release5,
  hasSeal: hasSeal5,
  platforms: platforms5,
  properties: properties5,
};

//----2.2----

let objects = [];

//----2.3---- + ----2.4---- + ----2.5----

let objectsTest = [object1, object2, object3, object4, object5];

for (let object of objectsTest) {
  if (object.hasSeal) {
    objects.push(object);
  } else {
    alert(`O curso ${object.title} não foi adicionado!`);
  }
}

/*
=======SEMANA 3=========
*/

//----3.1----

//Relatorio, antes
const printPrevReport = (obj) => {
  console.log(obj["title"].toUpperCase());
  console.log("developer:", obj["developer"]);
  console.log("price:", obj["price"]);
  console.log("release:", obj["release"]);
  console.log("hasSeal:", obj["hasSeal"]);
  console.log("platforms:", obj["platforms"]);
  console.log("properties:", obj["properties"]);
};

// printPrevReport(objects[0]);
// printPrevReport(objects[1]);
// printPrevReport(objects[2]);
// printPrevReport(objects[3]);
// printPrevReport(objects[4]);

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
  console.log(obj["title"].toUpperCase());
  console.log("developer:", obj["developer"]);
  console.log("price:", obj["price"]);
  console.log("release:", obj["release"]);
  console.log("hasSeal:", obj["hasSeal"]);
  console.log("platforms:", arrValueToStr(obj, "platforms"));
  console.log("properties:", obj["properties"]);
};

// printPostReport(objects[0]);
// printPostReport(objects[1]);
// printPostReport(objects[2]);
// printPostReport(objects[3]);
// printPostReport(objects[4]);

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
  printWithLoops(objects);
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
  for (let object of objects) {
    console.log(valuesToStr(object));
  }
};

//printObjsToStr();

//----3.4----

//Verificando se algum dos objetos tem uma determinda string
function objHasString(array, string) {
  for (let obj of array) {
    if (obj["title"] === string) {
      return obj;
    }
  }
  //alert("Nenhum item foi encontrado!");
}

// console.log(objHasString(objects, "Total War: Warhammer II"));

/*
=======HAMBURGUER MENU=========
*/

function toggleMenu() {
  let menu = document.getElementById("navbar-list");
  menu.classList.toggle("visible");
}

/*
=====DOM=====
*/

function mainSearch() {
  let inputField = document.getElementById("search-input");
  let inputName = inputField.value;
  let object = objHasString(objects, inputName);

  if (!Boolean(object)) {
    alert("Não foi encontrado um jogo com esse nome!");
    inputField.value = "";
    return;
  }

  let cardsDiv = document.getElementById("cards-div");
  while (cardsDiv.firstChild) {
    cardsDiv.removeChild(cardsDiv.lastChild);
  }

  let resultCard = document.createElement("section");
  let imageDiv = document.createElement("div");
  let contentDiv = document.createElement("div");
  resultCard.classList.add("card");
  imageDiv.classList.add("card-image");
  contentDiv.classList.add("card-content");
  resultCard.appendChild(imageDiv);
  resultCard.appendChild(contentDiv);

  let cardHeader = document.createElement("h3");
  let cardList = document.createElement("ul");
  cardHeader.classList.add("card-title");
  cardList.classList.add("card-list");
  contentDiv.appendChild(cardHeader);
  contentDiv.appendChild(cardList);

  cardHeader.textContent = object["title"];
  for (let key in object) {
    if (key == "hasSeal" || key == "properties") {
      continue;
    }
    let cardListItem = document.createElement("li");
    let cardListItemHeadline = key[0].toUpperCase() + key.slice(1);
    let value = Array.isArray(object[key]) ? arrValueToStr(object, key) : object[key];
    cardListItem.innerHTML = `<strong>${cardListItemHeadline}:</strong> ${value}`;
    cardList.appendChild(cardListItem);
  }
  let imageDivBgFilePath = object["properties"]["image"];
  imageDiv.style.backgroundImage = `url(${imageDivBgFilePath})`;
  resultCard.style.backgroundColor = object["properties"]["color"];
  cardsDiv.appendChild(resultCard);
}
