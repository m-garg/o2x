import Head from "next/head";
import Home from "../components/home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>O2 Tracker</title>
        <meta name="description" content="O2 Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
}
