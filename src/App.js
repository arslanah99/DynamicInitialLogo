import "./App.css";
import InitialLogo from "./components/InitialLogo";

const App = () => {
  const randomUserObj = [
    { name: "Bob", color: "#b4b4b4" },
    { name: "Kevin", color: "green" },
    { name: "Estaban Huljo Ricardo Monteo Delaruso Mansoris", color: "red" },
  ];

  return (
    <div className="App">
      <InitialLogo userObj={randomUserObj} />
    </div>
  );
};

export default App;
