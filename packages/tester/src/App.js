import { MyComponent } from "mylib";

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <MyComponent p1="asdf" p2={5} optional="hello"/>
    </div>
  );
}

export default App;
