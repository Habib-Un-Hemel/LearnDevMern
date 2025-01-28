import "./App.css";
function Title() {
  return <h1>I a new component named Title!</h1>;
}

function Description() {
  return <h3>I a new DESCRIPTION!</h3>;
}

function App() {
  return (
    <div>
      <Title></Title>
      <Description></Description>
      <Title></Title>
      <Description></Description>
    </div>
  );
}

export default App;
