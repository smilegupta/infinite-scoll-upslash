import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from "../src/Home"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Infite Scroll Example</title>
        <meta name="description" content="Infite Scroll POC" />
        <meta name="author" content="Smile Gupta" />
        <link rel="icon" href="https://img.icons8.com/nolan/64/google-images.png" />
      </Head>
      <HomePage />
      </div>
  )
}
