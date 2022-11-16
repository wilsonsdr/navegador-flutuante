# Descrição do projeto

Esté projeto tem como finalidade a criação de uma navegador flutuante, que ficará fixado sobre as outras janelas

<br>

# Ferramentas necessárias

- [NodeJS e NPM](https://kinsta.com/pt/blog/como-instalar-o-node-js/)

- [Lite-Server](https://github.com/johnpapa/lite-server), ao instalar, aconselho instalar globalmente 👍

- Electron

<br>

# Passo a passo

Baixado e instalado tudo corretamente, vamos ao que interessa 😃

Com seu projeto inicializado, digite o seguinte comando no terminal

`npm init -y`

<br>

Em seguida, vamos instalar o pacote de dependência electron

`npm install -g electron`

<br>

Faremos duas alterações no package.json 

<img src="https://user-images.githubusercontent.com/81364355/199597372-f4ebcb02-a0ac-481b-a21b-9245516f685f.png" alt="">

<img src="https://user-images.githubusercontent.com/81364355/199597379-6bf7782b-c4a4-48a5-b5bc-1431b8703ef9.png" alt="">

<br>

Criaremos um arquivo main.js, pegaremos o código do script no site [electronjs.org](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#final-starter-code) e colemos no arquivo criado, em seguida, faremos algumas alterações no código

![Screenshot from 2022-11-02 18-12-36](https://user-images.githubusercontent.com/81364355/199603605-92d83874-fcb6-40ab-88bb-e1e778e54420.png)

![Screenshot from 2022-11-02 18-12-54](https://user-images.githubusercontent.com/81364355/199603620-83cb2a2d-7c96-4340-9ecb-7aaa7b9b05eb.png)

<br>

Para finalizar, e validar se está tudo funcionando corretamente, criaremos um arquivo html, e digite o seguinte comando no terminal

`lite-server`

Irá abrir o lite-server na porta 3000, em seguida, abra um novo terminal, no VSCode pode ser aberto com a tecla de atalho (Ctrl+Shift+5) e digite o seguinte comando

`npm start`

<br>

Se você fez tudo certinho até aqui, irá abrir a nossa janela flutuante 😍

<img src="https://user-images.githubusercontent.com/81364355/199555319-a9f4ddd5-7fb2-4863-9bfa-262fa8d0cbb0.png" alt="">
