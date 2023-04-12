import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import HeaderNav from '@/components/HeaderNav'

export default function QuizQuestTwo() {
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
        <h3>Why is it important to keep emergency supplies in your car?</h3>
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