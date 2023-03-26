import Head from 'next/head'
import Image from 'next/image'
import HeaderWithLogo from '../components/HeaderWithLogo'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeaderWithLogo />
        <div className={styles.welcomeMsg}>
          <h2 className={styles.welcome}>👋 Welcome,</h2>
          <h1 className={styles.name}>Jane FakeName Doe!</h1>
        </div>
        <div className={styles.achievementButtons}>
          <button className={styles.buttons}>
            <h1 className={styles.fulfillmentNum}>30</h1>
            <p className={styles.achievementDesc}>Requests Fulfilled</p>
          </button>
          <button className={styles.buttons}>
            <h1 className={styles.fulfillmentNum}>2</h1>
            <p className={styles.achievementDesc}>Requests in Progress</p>
          </button>
          <button className={styles.buttons}>
            <h1 className={styles.fulfillmentNum}>2</h1>
            <p className={styles.achievementDesc}>Items Requested</p>
          </button>
        </div>
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
