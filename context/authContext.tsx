import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseMain";
import nookies from "nookies";
import firebase from "firebase/app";

export const AuthContext = createContext<firebase.User | any>(null);

export function AuthContextProvider(props: React.PropsWithChildren<{}>) {
  const [user, setUser] = useState<firebase.User | any>(null);

  useEffect(() => {
    return auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
}
