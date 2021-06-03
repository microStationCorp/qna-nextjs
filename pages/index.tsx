import Head from "next/head";
import nookies from "nookies";
import { verifyIdToken } from "../firebase/firebaseAdmin";

interface propsI {
  name?: string;
  email?: string;
  picture?: string;
  uid?: string;
  isAuth: boolean;
}

export default function Home({ name, email, picture, isAuth, uid }: propsI) {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {isAuth ? (
        <>
          <div>
            {name}'s Page{`user id ${uid}`}
          </div>
          <div>email : {email}</div>
          <div>picture : {picture}</div>
        </>
      ) : (
        <div>home page</div>
      )}
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
        isAuth: true,
      },
    };
  } catch (err) {
    return { props: { isAuth: false } };
  }
}
