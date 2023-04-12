import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import HeaderNav from '@/components/HeaderNav'

export default function QuizQuestThree() {
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
        <h3>What are some tips for staying calm during a crisis like being stuck in traffic for four hours?</h3>
        <div className={styles.btn}>
          <HPWTextButton />
          <HPWTextButton />
          <HPWTextButton />
          <HPWTextButton />
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}