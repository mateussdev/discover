# TypeScript

## Verificação tipo estático

```ts
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 3));
```

## Compilação

```ts
function showTicket(user: string, ticket: number) {
  console.log(`Olá, ${user}. Seu número de bilhete é ${ticket}.`);
}

showTicket("Mateus Silva", 888);
```

```ts
function showTicket(user: string | null, ticket: number) {
  console.log(
    `Olá, ${user ?? "Usuário Padrão"}. Seu número de bilhete é ${ticket}.`
  );
}

showTicket(null, 888);
```

## Tipagem Explícita

Na tipagem explícita nós especificamos o qual será o tipo de cada variável.

user: string, ticket: number;

```ts
function showTicket(user: string, ticket: number) {
  console.log(`Olá ${user}. Seu número de bilhete é ${ticket}`);
}

showTicket("Mateus", 321);
```

## Any

Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem que ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização.

Exemplo:

```ts
let info: any;

info = [1, 2, 3];
info = "Mateus";
info = true;
info = 10.5;

// Com o tipo any a variável aceitará qualquer valor.
```

## Inferência de tipos

O TypeScript reconhece automaticamente o tipo da variável ao passar algum valor para ela.

```ts
let user = "Mateus";

user = 10;

// o tipo 'number' não pode ser atribuído ao tipo 'string'
```

## Tipos Primitivos

Esses são os tipos primitivos que podemos utilizar no TypeScript:

```ts
let loading: boolean;
loading = true;

let email: string;
email = "mateus@email.com";

let price: number;
price = 20.5;
price = 10;
```

## Matrizes

Existem duas maneiras de tipar arrays no TypeScript, confira os exemplos:

```ts
let numbers: number[];
numbers = [1, 2, 3, 4, 5, 6];

let users: Array<string>;
users = ["Mateus", "João", "José", "Maria"];
```

## Funções

Uma função pode ter ou não um retorno, quando ela não tem um retorno ela é do tipo void

Dessa maneira, tipamos dessa forma no TypeScript:

```ts
function showMessages(message: string): void {
  console.log(message);
}
```

Já quando a função tem um retorno, a tipagem é inferida automaticamente na função.

```ts
function showMessages(message: string) {
  return message;
}

console.log(showMessages("Jesus saves."));
```

## Union

O Operador Union, representado pelo pipe | nos permite adicionar mais de um tipo na variável. Vamos ao exemplo:

```ts
function printUserId(id: number | string) {
  console.log(`O ID do usuário é: ${id}`);
}

printUserId(101);
printUserId("101");

// Dessa forma, podemos passar tanto number quanto string
```

## Generics

O generic no TypeScript nos permite reutilizar uma determinada implementação de código, de forma tipada. Para representar um generic, nós declaramos ele dessa forma <T> (podendo ser utilizado qualquer outra letra, existem as convenções que podemos seguir:

```text
<S> → Representando State <T> → Representando Type <K> → Representando Key <V> → Representando Value <E> → Representando Element
```

Exemplo de um trecho de código utilizando generics:

```ts
function useState<T>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState();
newState.get();
newState.set("João");
newState.set(123);
```

Outra forma:

```ts
function useState<T extends number | string = number>() {
  // aqui é declarado que tipo generics pode ser number ou string, mas se não for definido por padrão será number.

  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState<string>(); // aqui foi definido como string

newState.set("Mateus");
newState.set(33); // então esta linha dará erro
```

## Type

Para não ficar sempre repetindo os tipos para todas as variáveis podemos criar Types para cada uma delas.

Veja o exemplo a seguir:

```ts
let IdType: number | string | undefined;

let userId = IdType;
let adminId = IdType;

userId = "10";
adminId = undefined;
userId = 101;
```

## Type Assertions

Asserção de tipo normalmente é utilizado quando o TypeScript não sabe qual é a tipagem em um determinado objeto.

Para contornarmos isso, podemos criar um type informando quais são as propriedades desse objeto.

```ts
type UserResponse = {
  id: number;
  name: string;
  avatar: string;
};

let userResponse = {} as UserResponse;
```

## Objetos

Nessa aula vamos aprendemos como criar tipagens utilizando objetos no TypeScript.

```ts
type Point = {
  x: number;
  y: number;
};

function printCoord(points: Point) {
  console.log(`O eixo x é: ${points.x}`);
  console.log(`O eixo y é: ${points.y}`);
}

printCoord({ x: 110, y: 60 });
```

Resultado do log:

```log
[LOG]: "O eixo x é: 101"
------------------------
[LOG]: "O eixo y é: 50"
```

## Opcional

Para informamos que uma propriedade é opcional inserimos o sinal de ?

Veja o exemplo:

```ts
type User = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean;
};

let newUser: User = {
  name: "Mateus",
  email: "mateus@email.com",
  age: 20
};
```

## Intersecção de tipos

A intersecção de tipos como o próprio nome já diz, podemos unir dois tipos e usar as suas propriedades dentro de um objeto.

Segue o exemplo abaixo:

```ts
type User = {
  id: number;
  name: string;
};

type Char = {
  nickname: string;
  level: number;
};

type PlayerInfo = User & Char;

let info: PlayerInfo = {
  id: 1,
  name: "Mateus Silva",
  nickname: "mateussdev",
  level: 4
};
```

## Interface

Outra maneira de criar tipagens no TypeScript é utilizando a interface .

Segue o exemplo:

```ts
interface User {
  id: number;
  name: string;
}

let newUser: User = {
  id: 1,
  name: "Mateus"
};

// também assim

function registerNewUser(newUser: User) {
  newUser.id;
  newUser.name;
}
```

## Type e Interface

O objetivo de ambos serve para definir tipagens no TypeScript. O type é mais recomendado por ser mais simples, fácil de lidar com tipos primitivos, por ser mais flexível. Já as interfaces são utilizadas normalmente em criação de libs, para aqueles que gostam da programação orientada a objetos.

O exemplo abaixo mostra a diferença na sintaxe e união entre type e inteface:

```ts
type TUser = {
  id: number;
  name: string;
};

type TPayment = {
  method: string;
};

// Fazendo união com Type
type TAccount = TUser & TPayment;

interface IUser {
  id: number;
  name: string;
}

interface IPayment {
  method: string;
}

// Fazendo união com Interface
interface IAccount extends IUser, IPayment {}
```

## tsconfig

É um arquivo de configuração do TypeScript, ele pode ser escrito tanto em formato de JavaScript quanto no formato JSON.

Exemplo de um arquivo tsconfig.json :

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
```
