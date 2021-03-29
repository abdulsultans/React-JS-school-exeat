import "./App.css";
import AddStudent from "./components/AddStudent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="App">
        <h1>Student Exeat Form</h1>
        <hr></hr>
        <AddStudent />
        <Students />
      </div>
      <Footer className="container"/>
    </div>
  );
}

export default App;
