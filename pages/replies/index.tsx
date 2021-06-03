import Head from "next/head";
import { verifyIdToken } from "../../firebase/firebaseAdmin";
import nookies from "nookies";

export default function Replies() {
  return (
    <>
      <Head>
        <title>Replies</title>
      </Head>
      <div>new Replies</div>
    </>
  );
}
export async function getServerSideProps(context: any) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    return {
      props: {},
    };
  } catch (err) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return { props: {} };
  }
}
