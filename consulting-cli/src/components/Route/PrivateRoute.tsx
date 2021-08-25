import React from 'react';
import { isLogged } from '../../utils/login';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props: any) {
  return isLogged()
    ? <Route { ...props } />
    : <Redirect to="/login" />
}