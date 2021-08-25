import React from 'react';
import PrivateRoute from './components/Route/PrivateRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './providers/auth';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/" exact component={ActivitiesPage} />
          <PrivateRoute path="/atividades" exact component={ActivitiesPage} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;