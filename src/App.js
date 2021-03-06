
import './App.css';
import HomePage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import PlayerContainer from './components/PlayerContainer';
import GameContainer from './components/GameContainer';
import NavBar from './components/Navbar';
import ConsoleContainer from './components/ConsoleContainer';
import ConsoleDetails from './components/ConsoleDetails';
import GameplayContainer from './components/GameplayContainer';

function App() {
  return (
    <Router>
      <div className="app-container"></div>
      <NavBar />
      <Switch>
        <Route exact path="/">
              <HomePage />
        </Route>
        <Route exact path="/players">
              <PlayerContainer />
        </Route>
        <Route exact path="/games">
              <GameContainer />
        </Route>
        <Route exact path="/gameplays">
              <GameplayContainer />
        </Route>
        <Route exact path="/consoles">
              <ConsoleContainer />
        </Route>
        <Route path="/consoles/:id">
              <ConsoleDetails />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
