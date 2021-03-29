import "./App.css";
import AddStudent from "./components/AddStudent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Students from "./components/Students";

function App() {
  return (
    <div>
      <Header />
      <h1>Student Exeat</h1>
      <div className="App">
        <h1>Student Exeat Form</h1>
        <AddStudent />
        <Students />
      </div>
      <Footer />
    </div>
  );
}

export default App;
