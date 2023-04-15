import Head from 'next/head'
import Image from 'next/image'
import HeaderWithLogo from '../components/HeaderWithLogo'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import { useSearchParams } from 'next/navigation'

export default function Home() {

  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName')

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
          <h1 className={styles.name}>{firstName}!</h1>
        </div>
        <div className={styles.achievementButtons}>
          <Link href="/profile"><button className={styles.buttons}>
            <div className={styles.inside}>
              <div className={styles.emoji}><span>✔️</span></div>
            <div className={styles.fulfillmentNum}><h1>30</h1></div>
            <div className={styles.achievementDesc}><p>Requests Fulfilled</p></div>
            </div>
          </button></Link>
          <Link href="/messages"><button className={styles.buttons}>
          <div className={styles.inside}>
              <div className={styles.emoji}><span>⏳</span></div>
            <div className={styles.fulfillmentNum}><h1>2</h1></div>
            <div className={styles.achievementDesc}><p>Requests In Progress</p></div>
            </div>
          </button></Link>
          <Link href="/requests"><button className={styles.buttons}>
          <div className={styles.inside}>
              <div className={styles.emoji}><span>📝</span></div>
            <div className={styles.fulfillmentNum}><h1>2</h1></div>
            <div className={styles.achievementDesc}><p>Items Requested</p></div>
            </div>
          </button></Link>
        </div>
        <div className={styles.title}>
          <h2>Get Started</h2>
        </div>
        <div class={styles.quickLinks}>
        <Link href="/search"><button>
        <div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>🤝</span></div>
            <div className={styles.quickTitle}><h2>Help Someone Nearby</h2>
        </div></div>
          </button></Link>
          <Link href="/requests">
            <button>
            <div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>🙋‍♀️</span></div>
            <div className={styles.quickTitle}><h2>Request<br />An <br />Item</h2>
        </div></div></button></Link>
        <Link href="/quizmain"><button> <div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>🧠</span></div>
            <div className={styles.quickTitle}><h2>Test<br />Your <br />Knowledge</h2>
        </div></div></button></Link>
        <Link href="/tips"><button><div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>💡</span></div>
            <div className={styles.quickTitle}><h2>Popular<br />Tips</h2>
        </div></div></button></Link>
        </div>
      </main>
      <footer>
      <Nav />
      </footer>
    </>
  )
}
