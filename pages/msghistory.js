import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



export default function MessageHistory() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        MESSAGE HISTORY
        <Link href="/requests">Requests</Link>
      <Link href="/about">About</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/tips">Tips</Link>
      </main>
    </>
  )
}