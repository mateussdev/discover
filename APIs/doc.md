# CREATING A SERVER WITH EXPRESS

```js
const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');
```
## middleware

```js
app.use(express.json());
```

## API no Back-End
### GET

```js
app.route('/').get( (req, res) => res.send("Hello, World") )
app.route('/about').get( (req, res) => res.send("Sobre o projeto") )
```
### POST

```js
app.route('/').post( (req, res) => console.log(req.body) )
app.route('/').post( (req, res) => res.send(req.body) )
```

### PUT

```js
let author = "Mateus"

app.route('/').get( (req, res) => res.send(author) )

app.route('/').put( (req, res) => {
  author = req.body.author
  res.send(author)
} )
```

### DELETE

```js
app.route('/:identificador').delete( (req, res) => {
  res.send(req.params.identificador)
} ) 
```


## Parâmetros nas Requisições

```js
 app.route('/').get( (req, res) => res.send(req.query.name) )

 app.route('/').post( (req, res) => res.send(req.body) )

 app.route('/:parametro').get( (req, res) => res.send(req.params.parametro) )
```

### BODY Params

o BODY pode ser recebido pelo POST, PUT e PATCH

```js
app.route('/').post( (req, res) => {
  const {name, age} = req.body
  res.send(`Meu nome é ${name} e eu tenhos ${age} anos.`)
} )
```

### ROUTE PARAMS
```js
app.route('/').get( (req, res) => res.send( "Hello, World!" ) )
app.route('/:variavel').get( (req, res) => res.send( req.params.variavel ) )
app.route('/identidade/:nome').get( (req, res) => res.send( req.params.nome ) )
```

### QUERY PARAMS

```js
app.route('/').get( (req, res) => res.send( req.query ) )

app.route('/about/user').get( (req, res) => res.send( req.query.nome ) )
```

## API GitHub

```js
app.route('/').get( (req, res) => {
  axios.get('https://api.github.com/users/mateussdev')
  .then(result => res.send(result.data)) // pega todas as informações públicas de um perfil no github
  // .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
  .catch(error => console.log(error))
} );
```