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
<h4>Display Mode</h4>
      </main>
      <footer>
      <Nav />
      </footer>
    </>
  )
}
