//Cursos
/*
const titulo; //string
const autor; //string
const preco; //number
const horas; //number
const possuiSelo; //boolean
const topicos; //array (object)
*/

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

const mediaPrecos = (preco1 + preco2 + preco3)/3;
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