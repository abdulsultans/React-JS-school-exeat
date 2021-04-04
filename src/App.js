import "./App.css";
import AddStudent from "./components/AddStudent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Students from "./components/Students";
import { useState } from "react";

function App() {
	const [toggle, setToggle] = useState(false);
	
	function showform() {
    setToggle(!toggle);
  }
  
  return (
    <div>
      <Header showform={showform} toggle={toggle} />
      <div className="App">
        <div>
		{toggle && <AddStudent />}
         <h1>Exeat Records Book</h1>
         <Students />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
  
