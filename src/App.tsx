import React from 'react';
import PrivateRoute from './components/Route/PrivateRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './providers/auth';
import { GlobalStyle } from './components/Style/GlobalStyle';
import RegisterActivityPage from './pages/RegisterAcitivityPage/RegisterAcitivityPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" exact component={ActivitiesPage} />
          <PrivateRoute path="/activities" exact component={ActivitiesPage} />
          <PrivateRoute path="/activities/register" exact component={RegisterActivityPage} />
        </Switch>

        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;