import "./App.css";
import Title from "./Title.jsx";
import CurlyBrace from "./CurlyBrace.jsx";

function Description() {
  return <h3>I a new DESCRIPTION!</h3>;
}

function App() {
  return (
    <div>
      <Title></Title>
      <Description></Description>
      <CurlyBrace></CurlyBrace>
    </div>
  );
}

export default App;
