#  Projeto React - Lista de Perfis

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

---

##  Demonstração

###  Interface do Projeto

![Demo 1](https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif)

###  Modo Escuro

![Demo 2](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)

---

##  Sobre o projeto

Este projeto foi desenvolvido com **React + Vite** e tem como objetivo exibir uma lista de perfis com informações como nome, idade, email e foto.

Além disso, possui **modo escuro (dark mode)** que pode ser alternado pelo usuário.

---

##  Funcionalidades

✅ Listagem de perfis
✅ Exibição de foto, nome, idade e email
✅ Botão para alternar modo escuro
✅ Interface simples e responsiva

---

##  Explicação do código

###  useState

```jsx id="a1"
const [darkMode, setDarkMode] = useState(true);
```

* Controla o estado do modo escuro
* `darkMode` → valor atual
* `setDarkMode` → altera o valor

---

###  Lista de perfis

```jsx id="a2"
const perfis = [ ... ];
```

* Array de objetos com dados dos usuários

---

###  Estrutura principal

```jsx id="a3"
<div className={darkMode ? "container dark" : "container"}>
```

* Alterna classes CSS dinamicamente

---

###  Botão

```jsx id="a4"
<button onClick={() => setDarkMode(!darkMode)}>
```

* Alterna entre modo claro e escuro

---

###  Renderização

```jsx id="a5"
{perfis.map((perfil, index) => (
  <Perfil
    key={index}
    nome={perfil.nome}
    idade={perfil.idade}
    email={perfil.email}
    foto={perfil.foto}
  />
))}
```

* Percorre a lista e renderiza os componentes

---

##  Estrutura

```id="a6"
src/
 ├── App.jsx
 ├── App.css
 ├── main.jsx
 ├── perfil.jsx
 └── assets/
```

---

##  Como rodar

```bash id="a7"
npm install
npm run dev
```

http://localhost:5173/

---

##  Autor

BrunoAlmeida

---

##  Status

 Em desenvolvimento
