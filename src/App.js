import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app-container"></div>
      <Switch>
        <Route exact path="/">
              <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
