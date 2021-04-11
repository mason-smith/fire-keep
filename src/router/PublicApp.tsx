import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import cuid from 'cuid';

// @elastic/eui dependencies
import { EuiProgress } from '@elastic/eui';

// Local Dependencies
import { Route as RouteType } from './types';

// Lazy Load Routes
// Auth
const LoginPage = lazy(() => import('../features/Auth/Login'));
const RegisterPage = lazy(() => import('../features/Auth/Register'));

export const routes: RouteType[] = [
  {
    component: <LoginPage />,
    path: '/',
    label: 'Login',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
  {
    component: <LoginPage />,
    path: '/login',
    label: 'Login',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
  {
    component: <RegisterPage />,
    path: '/register',
    label: 'Register',
    accessLevel: ['Employee'],
    private: false,
    navBar: false,
  },
];

const PublicApp = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<EuiProgress size="xs" color="accent" />}>
          {routes.map((route) => (
            <Route key={cuid()} exact path={route.path}>
              {route.component}
            </Route>
          ))}
        </Suspense>
      </Switch>
    </Router>
  );
};

export default PublicApp;
