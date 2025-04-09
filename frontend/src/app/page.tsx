'use client';

import { useAuth0 } from "@auth0/auth0-react";

export default function HomePage() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <main className="min-h-screen flex items-center justify-center">
      {!isAuthenticated ? (
        <button className="bg-blue-500 px-6 py-2 rounded text-white" onClick={() => loginWithRedirect()}>
          Login with Auth0
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <p className="mb-4">Hello, {user?.email}</p>
          <button className="bg-red-500 px-6 py-2 rounded text-white" onClick={() => logout()}>
            Logout
          </button>
        </div>
      )}
    </main>
  );
}
