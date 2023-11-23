import axios from "axios";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleClick = () => {
    // axios.get('https://localhost:7216/api/Duhig?name=CLARK')
    //   .then((response) => {
    //     console.log(response);
    //   });

    axios
      .post("https://localhost:8800/Test", {
        username: username,
        password: password,
        Fname: firstname,
        Lname: lastname,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="App">
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>First Name:</label>
      <input
        type="text"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <button onClick={() => handleClick()}>BUTTON</button>
    </div>
  );
};

export default App;
