import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './themes/theme';
import Header from './components/Header';
import Page1 from './features/Feature1/Page1';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Page1} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
