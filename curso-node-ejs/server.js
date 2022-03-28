// importando o express
const express = require('express');
// criando uma nova instancia do express
const app = express();

// setando a view engine para ejs
app.set("view engine", "ejs");

// criando uma rota que irá disparar uma função para renderizar o app(site)
app.get("/", function (req, res){
  const items = [
    {
      title: 'D',
      message: 'esenvolver aplicações/serviços de forma fácil'
    },
    {
      title: 'E',
      message: 'JS usa JavaScript para renderizar HTML'
    },
    {
      title: 'M',
      message: 'uito fácil de usar'
    },
    {
      title: 'A',
      message: 'morzinho'
    },
    {
      title: 'I',
      message: 'nstall ejs'
    },
    {
      title: 'S',
      message: 'intax simples'
    }
  ];

  const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"
  res.render('pages/index',{
    qualitys: items,
    subtitle: subtitle
  });
})

// criando outra rota que irá disparar uma função que para renderizar outra parte do app(site)
app.get("/sobre", function (req, res){
  res.render('pages/about');
})

// definindo qual porta o app ficará ouvindo(rodando)
app.listen(8080);
// console.log apenas para me informar via terminal se o app está rodando 
console.log('Servidor funcionando');