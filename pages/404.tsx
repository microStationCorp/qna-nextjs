import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div>
      <Head>
        <title>Page not Found</title>
      </Head>
      <div>
        <h1>404 page not found</h1>
        <p>
          <span>Go to Home Page</span>
          <Link href="/">
            <a>click here</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
