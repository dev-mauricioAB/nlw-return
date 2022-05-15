<h1 align="center">
   <img src="https://user-images.githubusercontent.com/71537090/167278902-b564cc78-d48d-44e6-b4ff-120e00406ddb.png" alt="Logo Next Level Week Return" />
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=node&message=16.15.2&color=339933&logo=node.js" />
  <img src="https://img.shields.io/static/v1?label=react&message=18.0.1&color=61DAFB&logo=react" />
  <img src="https://img.shields.io/static/v1?label=react%20native&message=45.0.0&color=0088CC&logo=reactos" />
  <img src="https://img.shields.io/badge/last%20commit-october-important" />
  <img src="https://img.shields.io/badge/license-MIT-success"/>
</p>

![image](https://user-images.githubusercontent.com/71537090/167278997-56d6c6a9-e477-4910-b512-23feb2fff54f.png)

## 🏄 Sobre o Projeto

Este projeto foi feito juntamente com a equipe da [Rocketseat](https://rocketseat.com.br) no evento Next Level Week Heat, que esta na sua 8ª edição. Nela desenvolvemos um widget para ser instalado e utilizado em diferentes aplicações, com o objetivo de coletar feedbacks dos usuários e envia-los por email ao administrador da aplicação.

No back end utilizamos NodeJS, sempre focando nas melhores praticas quanto a TDD e DDD. Podemos também explorar as funcionálidades do Prisma para lidar com o banco de dados, e gerar migrations para mantes sempre atualizadas as informações das tabelas de forma versionada e organizada.

No frontend utilizamos Vite para criar a aplicação, e o framework ReactJS foi o escolhido como base. Para mim o Vite foi a maior descoberta deste NLW, pois não conhecia essa ferramenta. Achei incrível! Além disso, utilizamos o TailwindCSS para estilização, outra ferramenta que nunca havia utilizado e que achei muito prática e com funcionalidades excelentes.

A parte mobile foi feita com ReactNative, o que nos permitiu aproveitar muitos conhecimentos, visto que é um framework que utiliza dos conceitos do ReactJS como sua base, tornando a curva de aprendizado mais curta.

E a cereja do bolo: deploy automatizado do frontend e do backente, utilizando Vercel e Railway, respectivamente. Foi incrível!

As aulas da trilha impulse foram ministradas por [Diego Fernandes](https://github.com/diego3g) e [Rodrigo](https://github.com/rodrigorgtic). 🚀

### 🔎 Demonstração

<img alt="Application demo GIF" src=".github/demo.gif">

### 📙 Rodando o Backend

```bash
# Clone este repositório
$ git clone https://github.com/dev-mauricioAB/nlw-return

# Navegue para a pasta
$ cd backend

# Execute as migrations
$ yarn prisma migrate dev

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev
```

### 📗 Rodando o Frontend (web)

```bash
# Navegue para a pasta
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev
```

### 📘 Rodando o Mobile

```bash
# Navegue para a pasta
$ cd mobile

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start
```

### :hammer_and_wrench: Tecnologias
<div style="display: flex">
  <a href="https://reactnative.dev/"><img alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> React Native</a><br/>

  <a href="https://reactjs.org/"><img alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"> React</a><br/>
  
  <a href="https://www.typescriptlang.org/"><img alt="Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"> Typescript</a><br/>
  
  <a href="https://reactjs.org/"><img alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML</a><br/>
  
  <a href="https://sass-lang.com/"><img alt="Tailwind" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg"> TailwindCSS</a><br/>
  
  <a href="https://nodejs.org/"><img alt="Node" height="30" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"> Node</a><br/>

  <a href="https://prisma.io/"><img alt="Prisma" height="30" width="35" src="./.github/prisma-icon.png"> Prisma</a><br/>
  
  <a href="https://jest.io/"><img alt="Jest" height="30" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg"> Jest</a><br/>

  <a href="https://phosphoricons.com/"><img alt="Phosphor Icons" height="30" width="35" src="./.github/phosphoricon.jpg"> Phosphor Icons</a><br/>

  <a href="https://vitejs.dev/"><img alt="Vite" height="30" width="35" src="./.github/vite.png"> Vite JS</a><br/>
</div>

### 📕 Bibliotecas

Esse projeto foi utilizou das seguintes lib:

- Prisma
- TS
- Axios
- Express
- react-icons
- yup
- styled-components

### 📙 Arquitetura do Projeto

Para uma melhorar estrutura de projetos utilizamos das seguintes fundamentos:

- DDD
- SOLID

###  📘 Padrão de Código

Para padronizar a escrita do código, utilizamos as seguinte ferramentas:

- Eslint
- Prettier
- EditorConfig


### 📝 Licença

Esse projeto está sob a licença MIT.
