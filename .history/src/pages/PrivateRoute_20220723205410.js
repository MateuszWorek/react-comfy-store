import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
  // console.log(children);
  // console.log(rest);
  const { myUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/' />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
