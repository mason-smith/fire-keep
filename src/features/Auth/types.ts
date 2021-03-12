export type AuthState = {
  user: {
    id: string;
    createdAt: {
      seconds: number;
      nanoseconds: number;
    };
    displayName: string;
    email: string;
  } | null;
  authToken: string | undefined;
};

export type AuthError = {
  a: null;
  code: string;
  message: string;
  stack: string;
};
