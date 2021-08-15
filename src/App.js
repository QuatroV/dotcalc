import { useState } from "react";

import GamePage from "./pages/GamePage";
import StartPage from "./pages/StartPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "./store/themeSlice";

const App = () => {
  const [target, setTarget] = useState(0);

  const currentThemeName = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  useState(() => {
    if (window.localStorage.getItem("theme")) {
      dispatch(updateTheme(window.localStorage.getItem("theme")));
    }
  }, []);

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
