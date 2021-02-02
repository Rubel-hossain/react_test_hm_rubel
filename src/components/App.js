import Home from "../pages/home";
import Login from "../pages/login";
import Registration from "../pages/registration";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/global.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
             <Login/>
          </Route>
          <Route path="/registration">
             <Registration/>
          </Route>
          <Route path="/" exact={true}>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
