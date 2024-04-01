import "./App.scss";
import {Routes,Route} from "react-router-dom";
import Integrate from "./Integrate";

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Integrate/>}/>
        </Routes>
    </>
  );
}

export default App;