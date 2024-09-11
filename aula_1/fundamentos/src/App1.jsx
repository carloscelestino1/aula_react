import { useState } from "react";
import FirstComponent from "./components/FirstComponent";  //importação do componente
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1> Fundamentos do react: </h1>
    <FirstComponent />  {/*o uso do componente é através de tag!*/}
    </>
  );
}

export default App;
