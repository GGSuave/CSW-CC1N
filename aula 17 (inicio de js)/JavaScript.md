# Necessidade

 O JavaScript teve seu início em 1995, criado para adicionar interatividade Web. O nome do JavaScript vem do Java, mesmo que não seja nem um pouco parecido, a fim de surfar no hype da outra linguagem.
# Como funciona?

 O JavaScript funciona na cópia da página do cliente, fazendo comunicações do dispositivo utilizado para o servidor web. O JavaScript também tira a necessidade de ficar atualizando a página, deixando-o dinâmico.

# Requisitos básicos do JavaScript

 Para mergulhar no JavaScript, tudo que você precisa é um editor de texto simples e um navegador.
 Para definir um bloco JavaScript em sua página web, basta usar o elemento <script></script>.

```
<!DOCTYPE html>

<html lang="pt-br">

<head>
</head>

<body>

  <script type="text/JavaScript"></script>

</body>

</html>
```

## Por quê não na head?

O navegador lê o arquivo do html de cima para baixo. Se o script for colocado na head, ele pode ser executado antes da página ser carregada. Isso pode ser ruim durante a execução de páginas grandes 

## Curiosidade

Assim como o CSS, o JavaScript pode ser feito em um arquivo separado. Para utilizar no HTML, basta importar utilizando a linha a baixo:

```
<script type="text/JavaScript" src="script.js"></script>
```
# Como utilizar?

## Comentários

 Apenas uma ressalta. Tem dois jeitos de comentar seu código.
 * Usando o //, que comenta apenas uma linha.
 * Usando o `/* */` que comenta um bloco (mais de uma linha) de uma vez.

## Document Object Model (DOM)

 O *Document Object Model*, que pode ser abreviado para **DOM**, é uma forma de representar, de uma forma hierárquica e estruturada, a página *web*. Para que seja mais fácil para os programadores e usuários utilizarem a página.
 Através do DOM podemos acessar e manipular facilmente as tags, ID's, classes, atributos ou elementos apenas utilizando comandos ou métodos fornecidos pelo objeto Document.
### Exemplo (teoria)

Uma página *web*, do tipo formulário, é construída com a estrutura do DOM. E essa estrutura permite que os formulários processem dados inseridos pelo usuário quando esse clica em um botão 
### Métodos (prática)

#### *Document*
 O Document é um objeto, exclusivo do uso no navegador, que faz referencia a página web, possuindo seus próprios métodos.
##### *write()*
 Dentro do document existe um método chamado *write*(). Esse método tem a função, que recebe um parâmetro do tipo *String*, de escrever alguma coisa dentro do HTML. Esse método também pode escrever tag's HTML.

```
<!DOCTYPE html>

<html lang="pt-br">
   <head>
      <meta charset="UTF-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0"
      />
      <title>Aula 17</title>
      <style>
         * {
            margin: 0;
         }

         .hello-world {
            display: flex;
            width: 100%;
            margin: 20px 0;
            justify-content: center;
            border-bottom: 1px solid black;
         }

         .js h1 {
            margin-bottom: 6px;
         }
      </style>
   </head>
   <body>
      <div class="hello-world">
         <script type="text/JavaScript">
            document.write("<h1>Olá, Mundo (Hello World)</h1>")
         </script>
      </div>
      <div class="js">
         <script type="text/JavaScript">
            document.write("<h1>Esse é meu Primeiro código de JavaScript</h1>")
         </script>
         <script type="text/JavaScript">
            document.write("<h1>Esse é meu Segundo código de JavaScript</h1>")
         </script>
      </div>
   </body>
</html>
```




##### *getElementById()*

 O método *getElementById()*, que é um método de saída, tem a função de buscar um id especifico em qualquer tag no HTML, esse id precisa ser passado em formato de string. Após esse id ser encontrado, é possível manipular,  utilizando outros métodos, esse elemento de várias maneiras.

 No exemplo, é utilizado o innerHTML, que tem como função trocar o valor (resumidamente)
```
<!DOCTYPE html>

<html lang="pt-br">
   <head>
      <meta charset="UTF-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0"
      />
      <title>Aula 17</title>
   </head>
   <body>
      <h1 id="hello">Sem nada</h1>
      <script type="text/JavaScript">
         document.getElementById("hello").innerHTML =
            "Esse é o meu Primeiro código utilizando getEkementById()";
      </script>
   </body>
</html>
```
#### *Window*
 O *Window* é um objeto, exclusivo do uso no navegador, que faz referencia a janela do navegador, possuindo seus próprios métodos.

##### *Alert*
 O Alert é uma caixa de aviso, sendo um método de saída,
 que aparece na tela do navegador. Esse método recebe uma string como parâmetro.
 ATENÇÃO: O *alert* **para** a execução do código, e só volta a sua execução quando o usuário **CLICAR** em 'Ok'. Ou seja, se o código JS estiver no head e tiver um *alert* solto, a página **SÓ SERA CARREGADA** quando o *alert* for fechado.
 
```
<!DOCTYPE html>

<html lang="pt-br">
   <head>
      <meta charset="UTF-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0"
      />
      <title>Aula 17</title>
   </head>
   <body>
      <script type="text/JavaScript">
         window.alert('Olá, mundo')
      </script>
   </body>
</html>
```

##### *Prompt*
Assim como o *alert*, o *prompt* é uma caixa de alerta que, tendo como principal diferença, pode receber uma string como entrada. Assim como o *alert*, o *prompt* para o carregamento da página. 

```
<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0"
      />
      <title>Aula 17</title>
   </head>
   <body>
      <h1 id="mostrar-resposta"></h1>
      <script>
         document.getElementById("mostrar-resposta").innerHTML =
            window.prompt("Escreva um valor");
      </script>
   </body>
</html>
```

 Diferente do *alert*, o *prompt*  **retorna** um valor que pode ser associado a uma variável (mais sobre isso futuramente).
##### *Confirm*
 Assim como o *prompt*, o confirm é uma caixa de aviso que retorna um valor. Diferente do *prompt*, que retorna um valor string, o *confirm* **retorna** um valor ***Booleano*** (verdadeiro ou falso / true ou false). A caixa de aviso do *confirm* possui dois botões: 
 * Se o 'Ok' for pressionado, o valor *true* (verdadeiro) é retornado
 * Se o 'Cancelar' for pressionado, o valor *false* (falso) é retornado. Esse valor também pode ser retornado se a janela for fechada.

```
<!DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="UTF-8" />
      <meta
         name="viewport"
         content="width=device-width, initial-scale=1.0"
      />
      <title>Aula 17</title>
   </head>
   <body>
      <h1 id="mostrar-resposta"></h1>
      <script>
         document.getElementById("mostrar-resposta").innerHTML =
            window.confirm("Você gostou do site?");
      </script>
   </body>
</html>
```