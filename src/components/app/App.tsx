import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SearchAppBar from '../app-bar/app-bar';
import Dictionary from '../dictionary/dictionary';
import { Grid } from '@mui/material';
function App() {
  return (
    <Grid>
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
    </Grid>
  );
}

export default App;
