import "./App.css";
import "../src/bootstrap.min.css";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/registartion/registration";

function App() {
  return (
    <Router>
      <Switch>
      <main>
        <Route exact path="/" component={Login}></Route>
        <Route path="/register" component={SignUp}></Route>
      </main>
      </Switch>
    </Router>
  );
}

export default App;
