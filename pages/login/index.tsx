import Head from "next/head";
import { Button } from "@material-ui/core";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div>Login Page</div>
      <Button variant="contained" color="primary">
        sign in with google
      </Button>
    </>
  );
}
