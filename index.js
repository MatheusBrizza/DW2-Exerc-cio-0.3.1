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

const apenasNome = (filme) => {
  const objeto = {
    nome: filme.nome,
    lancamento: filme.lancamento,
  };
  return objeto;
};

const idFilmes = (filme, index) => {
  
}

const filmesNomeLancamento = filmes.map(apenasNome);

console.log(filmesNomeLancamento);
