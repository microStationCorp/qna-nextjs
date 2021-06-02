import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebaseMain";
import Router from "next/router";
import nookies from "nookies";
import { verifyIdToken } from "../../firebase/firebaseAdmin";

export default function LoginPage() {
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
          auth.signInWithPopup(provider);
          Router.replace("/");
        }}
      >
        sign in with google
      </Button>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    console.log("token", token);
    if (token) {
      context.res.writeHead(302, { location: "/" });
      context.res.end();
    }
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}
