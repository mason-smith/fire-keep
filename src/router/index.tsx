import { Suspense, lazy } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// @elastic/eui dependencies
import { EuiProgress } from '@elastic/eui';

// Local Dependencies
import { firebaseAuth } from 'src/config/firebase.config';
import { UseAuthStateReturn } from 'src/config/firebaseTypes';

const PrivateApp = lazy(() => import('./PrivateApp'));
const PublicApp = lazy(() => import('./PublicApp'));

export const AppRouter = () => {
  const [user]: UseAuthStateReturn = useAuthState(firebaseAuth);
  return (
    <Suspense fallback={<EuiProgress size="xs" color="accent" />}>
      {user ? <PrivateApp /> : <PublicApp />}
    </Suspense>
  );
};
