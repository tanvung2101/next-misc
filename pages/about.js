import  Footer  from "@/components/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Codevolution</title>
        <meta name='description' content="Free tutorials on web development"/>
      </Head>
      <div className="content">About</div>
    </>
  );
}

export default About;

About.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
);
