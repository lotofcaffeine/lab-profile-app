import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RecipeCreate from "./recipes/RecipeCreate";
import RecipeList from "./recipes/RecipeList";
import RecipeEdit from "./recipes/RecipeEdit";
import RecipeShow from "./recipes/RecipeShow";
import RecipeDelete from "./recipes/RecipeDelete";
import Header from "./Header";

const MainPage = () => <h1>MainPage</h1>;
const SignUp = () => <h1>SingUp</h1>;
const Login = () => <h1>Login</h1>;
const Profile = () => <h1>Profile</h1>;

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Header></Header>
        <Switch>
          {/* <Route exact path="/" render={() => <MainPage />} /> */}
          <Route exact path="/" render={() => <RecipeList />} />
          <Route exact path="/sigup" render={() => <SignUp />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/recipes" render={() => <RecipeList />} />
          <Route exact path="/recipes/new" render={() => <RecipeCreate />} />
          <Route exact path="/recipes/edit" render={() => <RecipeEdit />} />
          <Route exact path="/recipes/delete" render={() => <RecipeDelete />} />
          <Route exact path="/recipes/show" render={() => <RecipeShow />} />
        </Switch>
      </div>
    );
  }
}
export default App;
