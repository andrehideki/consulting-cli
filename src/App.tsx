import PrivateRoute from './components/Route';
import LoginPage from './pages/LoginPage';
import ActivitiesPage from './pages/ActivitiesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './providers/auth';
import { GlobalStyle } from './components/Style/GlobalStyle';
import RegisterActivityPage from './pages/RegisterAcitivityPage';

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