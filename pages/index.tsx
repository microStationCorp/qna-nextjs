import Head from "next/head";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>{`user id : ${user ? user.uid : "no user signed in"}`}</div>
    </>
  );
}
