import Head from "next/head";
import { verifyIdToken } from "../../firebase/firebaseAdmin";
import nookies from "nookies";

export default function Timeline() {
  return (
    <>
      <Head>
        <title>Timeline</title>
      </Head>
      <div>Timeline</div>
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
