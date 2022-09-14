//Cursos
/*
titulo //string
autor //string
preco //number
horas //number
possuiSelo //boolean
topicos //array (object)
*/

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

let objetosTeste = [objeto1, objeto2, objeto3];
let objetos = [];
for (let objeto in objetosTeste) {
  if (objeto.possuiSelo) {
    objetos.push(objeto);
  } else {
    alert(`O curso ${objeto.titulo} não foi adicionado!`);
  }
}

/*
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
