# ProjetoCrudFirebase

Para rodar o seu programa, vá no terminal e digite "npx webpack --watch" (tenha todas as dependências instaladas).

Depois crie outro terminal powershell e digite nele, "npx serve dist", para criar o servidor da página web, ao recarregar essa página seus metodos do crud serão executados.


Deixe os dois terminais node rodando ao mesmo tempo, seu funcionamento é constante parecido com o nodemon.


Na sua database do Firestore, você tem que criar uma índice para as Querys funcionarem nos metodos de read, usando o nome da coleção e os campos dela.
