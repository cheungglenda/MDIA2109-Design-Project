import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizTutorial.module.css'
import Link from 'next/link'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'

export default function QuizTutorialTwo() {
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
          <p>To take the quiz, a question will appear and there will be multiple choice options.</p>
          <p>Choose one option that you think is the correct answer.</p>
          <h3>Choose the option that has a fruit in it.</h3>
        </div>
        <div className={styles.btn}>
        
        </div>

      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}