import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles/globals.css";
import "../styles/layout.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    {
      Component.getLayout(<Component {...pageProps} />);
    }
  }
  return (
    <>
      <Head>
        <title>Codevolution</title>
        <meta name="description" content="Awesome Youtube channel" />
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
