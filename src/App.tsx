import "./App.sass";
import Layout from "./components/layout/layout";
import { BrowserRouter as Router } from "react-router-dom";

function App():JSX.Element{
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
