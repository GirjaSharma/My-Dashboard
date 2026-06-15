import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from '../config/auth0';

export function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      {children}
    </Auth0Provider>
  );
}
