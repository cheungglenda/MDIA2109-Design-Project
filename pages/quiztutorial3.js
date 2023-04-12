import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizTutorial.module.css'
import Link from 'next/link'
import HeaderNav from '@/components/HeaderNav'

export default function QuizTutorialThree() {
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
        <img></img>
        <div className={styles.text}>
          <p>After you choose your selection, you will know if it the right answer right away!</p>
          </div>
          <div>
          <h3>This was correct!</h3>
          <img></img>
          <h3>This was incorrect!</h3>
          <img></img>
          <h3>The correct answer was:</h3>
          </div>
          <div>
            <p>Now you're ready to play the quiz!</p>
          </div>
        <div className={styles.btn}>
        
        </div>

      </main>
      <footer>
      </footer>
    </>
  )
}