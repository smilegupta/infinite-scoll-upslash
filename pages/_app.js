import Head from "next/head";
import Navbar from "../src/Components/NavBar"
import { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Infite Scroll</title>
        <meta name="description" content="Infite Scroll" />
        <meta name="author" content="Smile Gupta" />
        <link
          rel="icon"
          href="https://img.icons8.com/nolan/64/google-images.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css"
          integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
          
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
