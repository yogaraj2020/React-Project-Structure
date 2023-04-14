import * as msal from 'msal';

// MSAL Configuration
const msalConfig = {
  auth: {
    clientId: 'your-client-id',
    authority: 'https://login.microsoftonline.com/your-tenant-id',
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const loginRequest = {
  scopes: ['openid', 'profile', 'user.read'],
};

// Create MSAL instance
const msalInstance = new msal.PublicClientApplication(msalConfig);

// Function to handle MSAL redirect callback
export const handleRedirectCallback = () => {
  return msalInstance.handleRedirectPromise();
};

// Function to start MSAL login flow
export const login = async () => {
  try {
    await msalInstance.loginRedirect(loginRequest);
  } catch (error) {
    console.error(error);
  }
};

// Function to get the user's access token
export const getAccessToken = async () => {
  try {
    const accounts = await msalInstance.getAllAccounts();
    if (accounts.length === 0) {
      throw new Error('No accounts found');
    }
    const silentRequest = {
      scopes: ['openid', 'profile', 'user.read'],
      account: accounts[0],
    };
    const authResult = await msalInstance.acquireTokenSilent(silentRequest);
    return authResult.accessToken;
  } catch (error) {
    if (error instanceof msal.InteractionRequiredAuthError) {
      const interactiveRequest = {
        scopes: ['openid', 'profile', 'user.read'],
      };
      const authResult = await msalInstance.acquireTokenRedirect(interactiveRequest);
      return authResult.accessToken;
    } else {
      console.error(error);
    }
  }
};

// Function to check if user is authenticated
export const isAuthenticated = () => {
  const accounts = msalInstance.getAllAccounts();
  return accounts.length > 0;
};

// Function to check if user is authorized based on roles
export const isAuthorized = (roles) => {
  const account = msalInstance.getAccount();
  if (!account) {
    return false;
  }
  const accountRoles = account.idTokenClaims.roles || [];
  return roles.some((role) => accountRoles.includes(role));
};
