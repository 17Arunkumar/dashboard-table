import "./App.scss";
import {Routes,Route} from "react-router-dom";
import { Dashboard } from "./screen/ind1";



function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
    </>
  );
}

export default App;