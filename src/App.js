import CounterFunctional from "./components/CounterFunctional";
import CounterClass from "./components/CounterClass";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <h2>Counter with Functional Component</h2>
          <CounterFunctional />
        </div>
        <div className="col-6">
          <h2>Counter with Class Component</h2>
          <CounterClass />
        </div>
      </div>
    </div>
  );
}

export default App;
