import Head from "next/head";
import { Button } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { AuthContext, ContextI } from "../../context/authContext";
import Router from "next/router";

export default function UserPage() {
  const { auth, toggleAuth } = useContext(AuthContext) as ContextI;
  useEffect(() => {
    if (!auth) {
      Router.replace("/");
      return;
    }
  }, []);
  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <div>User's Page</div>
      <div>sign out</div>
      <Button
        variant="contained"
        onClick={() => {
          toggleAuth(auth);
          Router.push("/");
        }}
      >
        sign out
      </Button>
    </>
  );
}
