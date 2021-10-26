import "./App.css";
import "../src/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/registartion/registration";
import Dashboard from "./Dashboard/Dashboard";
import { isAutheticated } from "./api/auth";

function App() {

  const data = isAutheticated();
 
  return (
    <Router>
      <Switch>
        <main>
          <Route exact path="/" component={Login}></Route>
          <Route path="/register" component={SignUp}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          {/* {data ? <Redirect to="/dashboard" /> : <Redirect to="/" />} */}
        </main>
      </Switch>
    </Router>
  );
}

export default App;
