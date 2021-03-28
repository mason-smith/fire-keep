import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import cuid from 'cuid';

// Local Dependencies
import { Navigation } from 'src/components/Navigation';
import { firebaseAuth } from 'src/config/firebase.config';
import { UseAuthStateReturn } from 'src/config/firebaseTypes';
import { PrivateRoute } from './PrivateRoute';
import { routes } from './routes';

export const AppRouter = () => {
  const [user]: UseAuthStateReturn = useAuthState(firebaseAuth);
  return (
    <Router>
      {user ? (
        <>
          <Navigation />
          <div className="mb-10" />
        </>
      ) : null}

      <Switch>
        <Suspense fallback={null}>
          {routes.map((route) => {
            return route.private ? (
              <PrivateRoute key={cuid()} exact path={route.path}>
                {route.component}
              </PrivateRoute>
            ) : (
              <Route key={cuid()} exact path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Suspense>
      </Switch>
    </Router>
  );
};
