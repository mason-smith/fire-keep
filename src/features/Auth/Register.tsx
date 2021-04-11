import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// @elastic/eui dependencies
import { EuiButton, EuiFieldText, EuiFieldPassword } from '@elastic/eui';

// Local Dependencies
import {
  createUserProfileDocument,
  firebaseAuth,
  signInWithGoogle,
} from 'src/config/firebase.config';
import { FirebaseUser, UseAuthStateReturn } from 'src/config/firebaseTypes';
import { AuthError } from './types';

const Register = () => {
  const history = useHistory();
  const [user, firebaseIsLoading]: UseAuthStateReturn = useAuthState(
    firebaseAuth,
  );

  // Local State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { user } = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserProfileDocument(user as FirebaseUser);
      setLoading(false);
      history.push('/');
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <main className="flex mx-auto h-screen justify-center items-center overflow-hidden lg:max-w-xl">
      <div className="w-full px-6 py-8 md:px-8">
        <h1 className="text-2xl font-semibold text-center mb-2">Welcome.</h1>
        <EuiButton
          onClick={signInWithGoogle}
          iconType="logoGoogleG"
          fullWidth
          className="mt-2"
        >
          Sign in with Google
        </EuiButton>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or sign up with email
          </span>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <EuiFieldText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              type="email"
              id="loggingEmailAddress"
              aria-label="Email Address"
              fullWidth
              icon="user"
              className="text-white"
            />
          </div>
          <div className="mt-4">
            <EuiFieldPassword
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="dual"
              id="loggingPassword"
              aria-label="Password"
              fullWidth
            />
          </div>
          <div className="mt-8">
            <EuiButton
              disabled={isLoading || firebaseIsLoading}
              fullWidth
              type="submit"
            >
              Sign up
            </EuiButton>
            {error ? (
              <>
                <p className="text-red-500">{error?.message}</p>
              </>
            ) : null}
          </div>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <Link
            to="/login"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            Have an account? Sign in here.
          </Link>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </main>
  );
};

export default Register;
