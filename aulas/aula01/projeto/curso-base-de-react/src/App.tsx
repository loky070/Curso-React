import { useState } from "react"

function App() {
  /*
  useState é uma ferramenta do React que permite um componente guardar informações e atualizar na tela quando mudar

  count: guarda o valor atual do contador.

  setCount: função utilizada para alterar esse valor.

  useState(0): define o valor inicial (nesse exemplo como 0)

  dica: pense "count" como a variável e "setCount" como a função que permite atualizar essa variável
  */
  const [count, setCount] = useState(0) 
  return (
    <>
      <h1>Hello World</h1>


      {/*  
      onClick: um evento que identifica quando o usuário clica no botão (de javascript mesmo).

      >>() => setCount(count + 1) 
        uma função que será executada quando o botão for clicado.
      
      Ela pega o valor atual de count e adiciona 1.

      As chaves {} permitem inserir valores e expressões JavaScript dentro do JSX
      
      
      */}
      <button onClick={() => setCount(count + 1)}>
        Count {count}</button>
    </>
  )
}

/* Permite que outros arquivos do projeto importem e utilizem esse componente App. */
export default App
 
/*
Tipos de exportação:

1. export default — Exportação padrão
  É utilizado quando você quer definir uma exportação principal daquele arquivo.

  No arquivo que importamos:
  >>import App from './App'

  Outra característica: você pode dar outro nome ao importar:

  >>import MeuComponente from './App'

  Você também pode declarar a exportação diretamente na função:

  >>export default function App() {
  return <h1>Hello World</h1>
}

2. export — Exportação nomeada
  É utilizado quando você quer exportar algo pelo seu próprio nome. Ex: arquivo calculadora.js

  >>export function somar(a, b) {
  return a + b
}

  >>export function subtrair(a, b) {
  return a - b
}

  Agora podemos importar essas funções em outro arquivo:

  >>import { somar, subtrair } from './calculadora'

  E podemos mudar o nome utilizando "as":

  >>import { somar as adicionar } from './calculadora'
*/

/* 

RESUMO DAS EXPORTAÇÕES:

>>export default function App(){} - Função principal no arquivo

-IMPORTAÇÃO:

>>import App from './App'

================================
export nomeado:

>>export function App() {}

>>export function Saudacao() {}

>>export function Contador() {}

-IMPORTAÇÃO:

>>import { App, Saudacao, Contador } from './App'

ou

import * as Componentes from './App'

<Componentes.App />
<Componentes.Saudacao />
<Componentes.Contador />

===============================

Podemos usar as duas:

>>export default function App() {}

>>export function Saudacao() {}

>>export function Contador() {}

-IMPORTAÇÃO:

import App, { Saudacao, Contador } from './App'

*/