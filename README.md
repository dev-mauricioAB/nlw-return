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

## 🔎 Demonstração

<img alt="Application demo GIF" src=".github/demo.gif">

## 🎲 Executando o projeto
### 🦕 Backend

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

### 💇🏼‍♀️ Frontend (web)

```bash
# Navegue para a pasta
$ cd web

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev
```

### ☎️ Mobile

```bash
# Navegue para a pasta
$ cd mobile

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start
```
<br>
## 🛠️ Tecnologias utilizadas

<h3 align="center">🖥️ Front-End</h3>

<table>
  <tbody>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="HTML5 logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" width="50" />
        <br>
        <span>HTML</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="CSS3 logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" width="50" />
        <br>
        <span>CSS</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="JavaScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" width="50" />
        <br>
        <span>JavaScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="React logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" title="React" width="50" />
        <br>
        <span>React</span>
      </td>
    </tr>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Vite logo" src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" title="Vite" width="50" />
        <br>
        <span>Vite</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Tailwind CSS logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/480px-Tailwind_CSS_Logo.svg.png" title="Tailwind CSS" width="50" />
        <br>
        <span>Tailwind CSS</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="TypeScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" width="50" />
        <br>
        <span>TypeScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Axios logo" src="https://avatars.githubusercontent.com/u/32372333?v=4&s=400" title="Axios" width="50" />
        <br>
        <span>Axios</span>
      </td>
    </tr>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Autoprefixer logo" height="45" src="https://www.pngkey.com/png/full/952-9528805_autoprefixer-vector-css-autoprefixer.png" title="Autoprefixer" width="60" />
        <br>
        <span>Autoprefixer</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="PostCSS logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/790px-PostCSS_Logo.svg.png" title="PostCSS" width="50" />
        <br>
        <span>PostCSS</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Phosphor logo" src="https://raw.githubusercontent.com/phosphor-icons/phosphor-react/HEAD/meta/phosphor-mark-tight-yellow.png" title="Phosphor" width="50" />
        <br>
        <span>Phosphor</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Headless UI logo" src="https://seeklogo.com/images/H/headless-ui-logo-034B045C5C-seeklogo.com.png" title="Headless UI" width="50" />
        <br>
        <span>Headless UI</span>
      </td>
    </tr>
  </tbody>
</table>

<h3>🗄️ Back-End</h3>

<table>
  <tbody>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Node.js logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" title="Node.js" width="50" />
        <br>
        <span>Node.js</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Express.js logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" title="Express.js" width="50" />
        <br>
        <span>Express.js</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="MongoDB logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" title="MongoDB" width="50" />
        <br>
        <span>MongoDB</span>
      </td>
    </tr>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Jest logo" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" title="Jest" width="50" />
        <br>
        <span>Jest</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="TypeScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" width="50" />
        <br>
        <span>TypeScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Prisma logo" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png" title="Prisma" width="50" />
        <br>
        <span>Prisma</span>
      </td>
    </tr>
    <tr>
      <td></td>
      <td align="center" height="110" width="140">
        <img alt="Nodemailer logo" height="45" src="https://blog.nodemailer.com/wp-content/uploads/2017/01/cropped-nm_logo_1000x680.png" title="Nodemailer" width="70" />
        <br>
        <span>Nodemailer</span>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

<h3>📱 Mobile</h3>

<table>
  <tbody>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="JavaScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" title="JavaScript" width="50" />
        <br>
        <span>JavaScript</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="React Native logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" title="React Native" width="50" />
        <br>
        <span>React Native</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="TypeScript logo" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TypeScript" width="50" />
        <br>
        <span>TypeScript</span>
      </td>
    </tr>
    <tr>
      <td align="center" height="110" width="140">
        <img alt="Phosphor logo" src="https://raw.githubusercontent.com/phosphor-icons/phosphor-react/HEAD/meta/phosphor-mark-tight-yellow.png" title="Phosphor" width="50" />
        <br>
        <span>Phosphor</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Expo logo" src="https://logos-download.com/wp-content/uploads/2021/01/Expo_Logo-420x372.png" title="Expo" width="50" />
        <br>
        <span>Expo</span>
      </td>
      <td align="center" height="110" width="140">
        <img alt="Axios logo" src="https://avatars.githubusercontent.com/u/32372333?v=4&s=400" title="Axios" width="50" />
        <br>
        <span>Axios</span>
      </td>
    </tr>
  </tbody>
</table>
<br>
### 📝 Licença
Esse projeto está sob a licença MIT.
