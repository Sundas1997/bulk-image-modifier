import './App.scss';
import Navbar from'./Components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Compress from "./Pages/Compress/Compress";
import Optimize from "./Pages/Optimize/Optimize";
import Resize from "./Pages/Resize/Resize";
import Rename from "./Pages/Rename/Rename";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/compress">
              <Compress />
            </Route>
            <Route path="/resize">
              <Resize />
            </Route>
            <Route path="/rename">
              <Rename />
            </Route>
            <Route path="/optimize">
              <Optimize />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
