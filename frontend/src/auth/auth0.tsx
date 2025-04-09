"use client";
// src/auth/auth0.tsx
import { Auth0Provider } from "@auth0/auth0-react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: process.env.NEXT_PUBLIC_AUTH0_CALLBACK,
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
