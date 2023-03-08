import { useState } from "react"

function App() {


  const[usernameInput, setUsernameInput] = useState("");
  const[ageInput, setAgeInput] = useState("");
  const[favFoodInput, setFavFoodInput] = useState("");

  const [userList, setUserList] = useState([]);

  function addUser(){

    const newUser = {
      name: usernameInput,
      age: ageInput,
      favFood: favFoodInput,
  };

  setUserList([...userList, newUser]);
  setUsernameInput("");
  setAgeInput("");
  setFavFoodInput("");

    }

  return (
    <div>
      <h1>Lista de Usuários</h1>

      <h2>{usernameInput}</h2>
      <h4>{ageInput}</h4>
      <h3>{favFoodInput}</h3>

      <form >

        <input 
        placeholder="Insira seu nome"
        value={usernameInput}
        onChange={(event) => setUsernameInput(event.target.value)}
        />
        <br />
      <input 
        placeholder="Insira sua idade"
        value={ageInput}
        onChange={(event) => setAgeInput(event.target.value)}
        />
        <br />
       <input 
        placeholder="Insira sua comida favorita"
        value={favFoodInput}
        onChange={(event) => setFavFoodInput(event.target.value)}
        />
        <br />
        <input type="button" onClick={addUser} value="Clique para criar"/>
      </form>

      <ul>
        {userList.map((item, index) =>(
          <li key={index}>
            Meu nome é {item.name} | 
            Tenho {item.age} anos | 
            Minha comida favorita é {item.favFood}
          </li>
        ))}
      </ul>
    </div>
  )

}
export default App
