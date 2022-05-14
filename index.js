// run `node index.js` in the terminal

const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

//Enunciado 1
const apenasNome = (filme) => {
  const objeto = {
    nome: filme.nome,
    lancamento: filme.lancamento,
  };
  return objeto;
};

const filmes1 = filmes.map(apenasNome);

console.log(filmes1);

//Enunciado 2
const idFilmes = (filme, index) => {
  const objeto2 = {
    id: index + 1,
    nome: filme.nome,
    lancamento: filme.lancamento,
  };
  return objeto2;
};
const filmes2 = filmes.map(idFilmes);

console.log(filmes2);
