import { useState } from "react";
import "./App.css";
import Perfil from "./perfil";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const perfis = [
    {
      nome: "Caio Campos",
      idade: 19,
      email: "caio@email.com",
      foto: "https://lh3.googleusercontent.com/a-/ALV-UjW2Wc--P--FjFWFEj2pe6dY68eQ_ClcAww5LtLTkEkm7Z8Ays4=s180-p-k-rw-no"
    },
    {
      nome: "Bruno Almeida",
      idade: 22,
      email: "bruno@email.com",
      foto: "https://pps.whatsapp.net/v/t61.24694-24/609957563_2145432672531482_237912774836757096_n.jpg?ccb=11-4&oh=01_Q5Aa3wGfUwF-wPAWf8jo9_DRJtIIw8AnUdsBpqm3Uznko0DT6A&oe=69ACA8F9&_nc_sid=5e03e0&_nc_cat=107"
    },
    {
      nome: "Mateus Lima",
      idade: 18,
      email: "mateus@email.com",
      foto: "https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/604372669_897811829334900_6100544533998648301_n.jpg?ccb=11-4&oh=01_Q5Aa3wFJ6V8c4z7V4WjYI7AQ6tfDvEXAyZbg6PbHnHwXQ0nV3w&oe=69ACCB71&_nc_sid=5e03e0&_nc_cat=105"
    },
    {
      nome: "Raian",
      idade: 20,
      email: "raian@email.com",
      foto: "https://i.pinimg.com/236x/55/6e/2e/556e2edc7518c0e5cb4d59aef6729b24.jpg"
    },
    {
      nome: "Erick",
      idade: 19,
      email: "erick@email.com",
      foto: "https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/534416808_702040916082532_9175333238690427890_n.jpg?ccb=11-4&oh=01_Q5Aa3wGE7ReMdSiPt6jadBhH9oERUapS8N-mZ8QJa4XplNc5yw&oe=69ACC9F1&_nc_sid=5e03e0&_nc_cat=105"
    },
    {
      nome: "Giullia Fernandes",
      idade: 25,
      email: "Giu@email.com",
      foto: "https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/625852569_1633664477806675_7737374201810980881_n.jpg?ccb=11-4&oh=01_Q5Aa3wHVwkuaIjZZ2lPF4pm641Mt2ZDciPbYNNycrq6mEaw50A&oe=69ACDDD8&_nc_sid=5e03e0&_nc_cat=100"
    },
    {
      nome: "Izandra",
      idade: 24,
      email: "iiizandra@email.com",
      foto: "https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/473412368_512181568579231_4744720067528544475_n.jpg?ccb=11-4&oh=01_Q5Aa3wERQpPJj46odetxTptYwjDujKTM7aHaQIGD6jcvktKvCQ&oe=69ACBC4A&_nc_sid=5e03e0&_nc_cat=111"
    },
    {
      nome: "Letícia Lima",
      idade: 19,
      email: "leticc@email.com",
      foto: "https://i.pinimg.com/236x/55/6e/2e/556e2edc7518c0e5cb4d59aef6729b24.jpg"
    },
  ];


  return (
    <div className={darkMode ? "container dark" : "container"}>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle">
        Alternar Modo
      </button>

      <h1>Lista De Perfis</h1>

      <div className="cards">
        {perfis.map((perfil, index) => (
          <Perfil
          Key={index}
          nome={perfil.nome}
          idade={perfil.idade}
          email={perfil.email}
          foto={perfil.foto}
          />
        ))}
      </div>
    </div>
  );
}

export default App;