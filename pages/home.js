import Head from 'next/head'
import Image from 'next/image'
import HeaderWithLogo from '../components/HeaderWithLogo'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home({passName}) {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <HeaderWithLogo />
      </header>
      <main className={styles.main}>

        <div className={styles.welcomeMsg}>
          <h2 className={styles.welcome}>👋 Welcome,</h2>
          <h1 className={styles.name}>{passName}!</h1>
        </div>
        <div className={styles.achievementButtons}>
          <Link href="/profile"><button className={styles.buttons}>
            <h1 className={styles.fulfillmentNum}>30</h1>
            <p className={styles.achievementDesc}>Requests Fulfilled</p>
          </button></Link>
          <button className={styles.buttons}>
            <h1 className={styles.fulfillmentNum}>2</h1>
            <p className={styles.achievementDesc}>Requests in Progress</p>
          </button>
          <button className={styles.buttons}>
            <h1 className={styles.fulfillmentNum}>2</h1>
            <p className={styles.achievementDesc}>Items Requested</p>
          </button>
        </div>
        <h1>Get Started</h1>
        <div class={styles.quickLinks}>
        <button><Link href="/search">Help Someone Nearby</Link></button>
        <button><Link href="/requests">Request an Item</Link></button>
        <button><Link href="/quiz">Test Your Knowledge</Link></button>
        <button><Link href="/tips">Popular Tips</Link></button>
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}
