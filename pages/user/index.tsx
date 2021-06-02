import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth } from "../../firebase/firebaseMain";
import Router from "next/router";
import nookies from "nookies";
import { verifyIdToken } from "../../firebase/firebaseAdmin";

interface propsI {
  name: string;
  email: string;
  picture: string;
  uid: string;
}

export default function UserPage({ name, email, picture, uid }: propsI) {
  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <div>
        {name}'s Page{`user id ${uid}`}
      </div>
      <div>email : {email}</div>
      <div>picture : {picture}</div>
      <div>sign out</div>
      <Button
        variant="contained"
        onClick={() => {
          auth.signOut();
          Router.replace("/");
        }}
      >
        sign out
      </Button>
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const { name, email, uid, picture } = token;
    return {
      props: {
        name,
        email,
        uid,
        picture,
      },
    };
  } catch (err) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return { props: {} };
  }
}
