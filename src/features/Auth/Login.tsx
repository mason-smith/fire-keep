import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

// Local Dependencies
import GoogleAuthButton from 'src/components/GoogleAuthButton';
import TextField from 'src/components/TextField';
import Button from 'src/components/Button';
import { firebaseAuth, signInWithGoogle } from 'src/config/firebase.config';
import { UseAuthStateReturn } from 'src/config/firebaseTypes';
import { AuthError } from './types';

const LoginPage = () => {
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
    setError(null);
    setLoading(true);
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      setLoading(false);
      history.push('/');
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  return (
    <main className="flex mx-auto h-screen justify-center items-center overflow-hidden lg:max-w-3xl">
      <div className="w-full px-6 py-8 md:px-8">
        <h1 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          Welcome.
        </h1>
        <GoogleAuthButton onClick={() => signInWithGoogle()} fullWidth>
          Sign in with Google
        </GoogleAuthButton>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with email
          </span>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id="loggingEmailAddress"
              label="Email Address"
              type="email"
            />
          </div>
          <div className="mt-4">
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="loggingPassword"
              label="Password"
              type="password"
            />
          </div>
          <div className="mt-8">
            <Button
              disabled={isLoading || firebaseIsLoading}
              fullWidth
              type="submit"
            >
              Login
            </Button>
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
            to="/register"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            Don&apos;t have an account? Sign up here.
          </Link>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
