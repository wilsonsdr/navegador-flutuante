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

![Screenshot from 2022-11-02 12-20-07](https://user-images.githubusercontent.com/81364355/199529100-044a4e0c-40ef-4e7c-ac58-502856b12db4.png)

<br>

Em seguida, vamos instalar o pacote de dependência electron

![Screenshot from 2022-11-02 12-28-54](https://user-images.githubusercontent.com/81364355/199531279-dd98cf8c-816c-4555-bcf5-b73b5653c3bf.png)

<br>

Faremos duas alterações no package.json

![Screenshot from 2022-11-02 13-05-59](https://user-images.githubusercontent.com/81364355/199540932-1061b200-63c2-4263-97a0-6ddeed2f4c7f.png)

![Screenshot from 2022-11-02 13-06-12](https://user-images.githubusercontent.com/81364355/199540941-fab10c65-19b6-46b9-abaa-c2df2a45ced9.png)

<br>

Criaremos um arquivo main.js, pegaremos o código do script no site [electronjs.org](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#final-starter-code) e colemos no arquivo criado, em seguida, faremos algumas alterações no código

![Screenshot from 2022-11-02 14-00-46](https://user-images.githubusercontent.com/81364355/199553950-ec895c0b-39d2-43d7-adb0-6fb0a24b5c59.png)

![Screenshot from 2022-11-02 14-00-55](https://user-images.githubusercontent.com/81364355/199553966-60d475b7-908b-4523-bf3b-b1de0f31e4cf.png)

<br>

Para finalizar, e validar se está tudo funcionando corretamente, criaremos um arquivo html, e digite o seguinte comando no terminal

![Screenshot from 2022-11-02 13-41-29](https://user-images.githubusercontent.com/81364355/199549615-badc3d08-7b78-409b-b20c-f403669ec7c0.png)

Irá abrir o lite-server na porta 3000, em seguida, abra um novo terminal, no VSCode pode ser aberto com a tecla de atalho (Ctrl+Shift+5) e digite o seguinte comando

![Screenshot from 2022-11-02 13-54-57](https://user-images.githubusercontent.com/81364355/199552538-d7f6ba8f-ce1d-4704-b861-0efd8c39d276.png)

<br>

Se você fez tudo certinho até aqui, irá abrir a nossa janela flutuante 😍

![Screenshot from 2022-11-02 14-07-45](https://user-images.githubusercontent.com/81364355/199555319-a9f4ddd5-7fb2-4863-9bfa-262fa8d0cbb0.png)


