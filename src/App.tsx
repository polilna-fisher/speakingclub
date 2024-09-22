import "./App.sass";
import Layout from "./components/layout/layout";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/loginForm/loginForm";

function App():JSX.Element{
  return (
    <div className="App">
      <Router>
        {/*<Layout />*/}
          <LoginForm/>
      </Router>
    </div>
  );
}

export default App;
