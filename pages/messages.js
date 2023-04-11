import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Messages.module.css'
import Nav from '@/components/Nav'
import HeaderNav from '@/components/HeaderNav'

export default function Messages() {
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
MESSAGES
      </main>
      <footer>
      <Nav />
      </footer>
    </>
  )
}
