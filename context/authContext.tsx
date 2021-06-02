import React, { createContext, useState } from "react";

export interface ContextI {
  auth: boolean;
  toggleAuth: (currentAuth: boolean) => void;
}

export const AuthContext = createContext<ContextI | null>(null);

export function AuthContextProvider(props: React.PropsWithChildren<{}>) {
  const [auth, setAuth] = useState(false);

  const toggleAuth = (currentAuth: boolean) => {
    setAuth(!currentAuth);
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
