import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'

export default function QuizResults() {
return(
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
<div>
    <h1>Your Final Score:</h1>
    <h3>3 out 5 Questions Correct</h3>
</div>
<div className={styles.btn}>
<HPWTextButton/>
<MPWTextButton/>
<MPWTextButton/>
</div>
</main>
<footer>
      <Nav />
      </footer>
</>
)
}