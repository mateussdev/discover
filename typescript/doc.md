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
numbers = [1,2,3,4,5,6];

let users: Array<string>;
users = ["Mateus", "João", "José", "Maria"];
```