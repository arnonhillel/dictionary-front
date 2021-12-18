import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SearchAppBar from '../app-bar/app-bar';
import Dictionary from '../dictionary/dictionary';
function App() {
  return (
    <div>
      <SearchAppBar ></SearchAppBar>
      <BrowserRouter>
        <Switch>

          <Route
            path={`/dictionary`}
            component={Dictionary}
          />
          <Redirect from="/" to={`/dictionary`} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
