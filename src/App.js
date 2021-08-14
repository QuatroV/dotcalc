import { useState } from "react";

import GamePage from "./pages/GamePage";
import StartPage from "./pages/StartPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [target, setTarget] = useState(0);
  return (
    <div className="App">
      <Switch>
        <Route path="/game">
          <GamePage />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
