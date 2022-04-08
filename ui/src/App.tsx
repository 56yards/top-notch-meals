import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { RecipeView } from "./components/RecipeView/RecipeView";
import { RecipeCreate } from "./components/RecipeCreate/RecipeCreate";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
      <><Header></Header><Router>
      <Switch>
        <Route path="/new" component={RecipeCreate} />
        <Route path="/recipes/:id" component={RecipeView} />
        <Route exact path="/" component={Home} />
      </Switch>

    </Router></>
  );
};

export default App;
