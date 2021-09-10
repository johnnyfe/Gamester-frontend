
import './App.css';
import HomePage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PlayerContainer from './components/PlayerContainer';

function App() {
  return (
    <Router>
      <div className="app-container"></div>
      <Switch>
        <Route exact path="/">
              <HomePage />
        </Route>
        <Route exact path="/players">
              <PlayerContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
