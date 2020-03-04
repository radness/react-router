import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Home, About, Posts } from "pages";
import Menu from "components/Menu";
import Profile from "../pages/Profile";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        {/* exact : 주어진 경로와 정확히 맞아야만 설정한 컴포넌트를 보여줍니다. */}
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/profile/:username" component={Profile} />
        <div>
          <ul>
            <li>
              <Link to="/profile/radness">radness profile</Link>
            </li>
            <li>
              <Link to="/profile/inhye">inhye profile</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
