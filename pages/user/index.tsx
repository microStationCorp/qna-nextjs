import Head from "next/head";
import { Button } from "@material-ui/core";

export default function UserPage() {
  return (
    <>
      <Head>
        <title>User Page</title>
      </Head>
      <div>User's Page</div>
      <div>sign out</div>
      <Button variant="contained">sign out</Button>
    </>
  );
}
