import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  console.log(children);
  console.log(rest);
  return <h4>Private Route</h4>;
};
export default PrivateRoute;
