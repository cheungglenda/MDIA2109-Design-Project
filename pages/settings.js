import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Settings.module.css'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'


export default function Settings() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <HeaderNav />
      </header>
      <main className={styles.main}>
<h2>General</h2>
<h4>Dark Mode</h4>
<h4>Text Size</h4>
<h4>Language</h4>
<hr></hr>
<h2>About</h2>
<h4>About Traffic Buddy</h4>
<h4>Website FAQ</h4>
<hr></hr>
<h2>Account</h2>
<h4>Quiz Results Summary</h4>
<hr></hr>
<h2>Privacy</h2>
<h4>Terms and Conditions</h4>
<h4>Privacy Policy</h4>
<h4>Report a Bug</h4>
      </main>
      <footer>
      <Nav />
      </footer>
    </>
  )
}
