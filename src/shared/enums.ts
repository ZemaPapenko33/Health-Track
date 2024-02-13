export enum PageRoutes {
  LOGIN_ROUTE = '/login',
  REGISTER_ROUTE = '/register',
  HOME_ROUTE = '/',
  PENDING_ROUTE = '/pending'
}

export enum Errors {
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  INVALID_EMAIL = 'auth/invalid-email',
  MISSING_PASSWORD = 'auth/missing-password',
  INVALID_LOGIN_CREDENTIAL = 'auth/invalid-login-credentials',
  WEAK_PASSWORD = 'auth/weak-password'
}
