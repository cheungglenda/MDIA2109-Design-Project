import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Messages.module.css'

export default function Messages() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
MESSAGES
      </main>
    </>
  )
}
