import "./App.css";

function SimpleCard({ title, content }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <SimpleCard title="Hello Card!" content="This is my second card!" />
    </div>
  );
}
export default App;
