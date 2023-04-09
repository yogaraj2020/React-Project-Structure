import { PublicClientApplication } from '@azure/msal-browser';

export const authConfig = {
  clientId: '<your_client_id>',
  redirectUri: '<your_redirect_uri>',
  authority: 'https://login.microsoftonline.com/<your_tenant_id>',
  scopes: [
    '<your_scope_1>',
    '<your_scope_2>',
    // ...
  ],
};

export const msalInstance = new PublicClientApplication({
  auth: {
    clientId: authConfig.clientId,
    redirectUri: authConfig.redirectUri,
    authority: authConfig.authority,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
});
