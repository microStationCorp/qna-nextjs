import Head from "next/head";
import { useContext, useEffect } from "react";
import { AuthContext, ContextI } from "../../context/authContext";
import { Button } from "@material-ui/core";
import Router from "next/router";

export default function LoginPage() {
  const { auth, toggleAuth } = useContext(AuthContext) as ContextI;
  useEffect(() => {
    if (auth) {
      Router.replace("/");
      return;
    }
  }, []);
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div>Login Page</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          toggleAuth(auth);
          Router.push("/");
        }}
      >
        Login
      </Button>
    </>
  );
}
