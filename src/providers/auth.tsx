import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { LoginInput, LoginOutput } from '../dto/login/LoginDTO';
import { LoginService } from '../service/LoginService';
import { AuthContextType, AuthType } from '../types/Auth';

export const STORAGE_TOKEN = 'auth';

export const AuthContext = React.createContext<AuthContextType>({
  auth: { email: '', userCategory: '', token: '', name: '', id: 0 }, setAuth: () => { }, logout: () => { }, login: (input: LoginInput) => { }
});

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuthState] = React.useState<AuthType>({ email: '', userCategory: '', token: '', name: '', id: 0 });
  const history = useHistory();


  useEffect(() => {
    const authStorage = localStorage.getItem(STORAGE_TOKEN);
    if (!!authStorage) {
      const auth = JSON.parse(authStorage);
      console.log('is valid TOKEN')
      if (!!auth.token) {
        new LoginService().isTokenValid(auth.token)
          .then(isValid => {
            if (isValid) {
              console.log('VALID')
              setAuthState(auth);
              history.push('/');
            } else {
              localStorage.removeItem(STORAGE_TOKEN);
              history.push('/login');
            }
          })
          .catch(error => console.error(error));
      }
      return;
    }
    setAuthState({ email: '', userCategory: '', token: '', name: '', id: 0 });
  }, [history]);

  function setAuth(auth: LoginOutput) {
    setAuthState(auth);
    localStorage.setItem(STORAGE_TOKEN, JSON.stringify(auth));
  };

  function logout() {
    new LoginService().logout();
    history.replace('/login');
  }

  function login(input: LoginInput) {
    new LoginService().login(input)
      .then((data) => {
        history.replace('/');
        setAuth(data);
      })
      .catch((error) => alert(error));
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);