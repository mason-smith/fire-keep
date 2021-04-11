import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import cuid from 'cuid';

// Local Dependencies
import { Navigation } from 'src/components/Navigation';
import { Route as RouteType } from './types';

// Lazy Load Routes
const DashboardPage = lazy(() => import('../features/Dashboard'));
const TasksPage = lazy(() => import('../features/Tasks'));

export const routes: RouteType[] = [
  {
    component: <DashboardPage />,
    path: '/',
    label: 'Home',
    accessLevel: ['Employee'],
    private: true,
    navBar: true,
    title: 'Home',
    tooltipTitle: 'Home',
    ariaLabel: 'view my dashboard',
  },
  {
    component: <TasksPage />,
    path: '/tasks',
    label: 'Tasks',
    accessLevel: ['Employee'],
    private: true,
    navBar: true,
    title: 'Tasks',
    tooltipTitle: 'Tasks',
    ariaLabel: 'view my tasks',
  },
  {
    component: <TasksPage />,
    path: '/tasks/:taskId',
    label: 'Task',
    accessLevel: ['Employee'],
    private: true,
    navBar: false,
    title: 'Task',
    tooltipTitle: 'Task',
    ariaLabel: 'view my task',
  },
];

const PrivateApp = () => {
  return (
    <Router>
      <Navigation />
      <div className="mb-10" />
      <Switch>
        <Suspense fallback={null}>
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

export default PrivateApp;
