import { Link } from 'react-router-dom';
import cuid from 'cuid';

// Local Dependencies
import { routes } from 'src/router/routes';
import { firebaseAuth } from 'src/config/firebase.config';

const Navigation = () => {
  return (
    <>
      {routes
        .filter((route) => route.navBar)
        .map((route) => {
          return (
            <Link key={cuid()} to={route.path}>
              {route.title}
            </Link>
          );
        })}
      <button
        key={cuid()}
        color="primary"
        onClick={() => firebaseAuth.signOut()}
      >
        Log Out
      </button>
    </>
  );
};

export default Navigation;
