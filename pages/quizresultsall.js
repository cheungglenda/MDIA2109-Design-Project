import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/Nav'
import HeaderNav from '@/components/HeaderNav'

export default function QuizResultsAll() {
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
  <p>5 Useful Emergency Items for Your Car</p>
  <h1>60%</h1>
  <p>Try Again</p>
</div>
<div>
  <p>What Foods Should be Kept in the Car</p>
  <h1>100%</h1>
  <p>Try Again</p>
</div>
<div>
  <p>5 Useful Emergency Items for Your Car</p>
  <h1>60%</h1>
  <p>Try Again</p>
</div>
<div className={styles.btn}>
<MPWTextButton/>
</div>
</main>
<footer>
      <Nav />
      </footer>
</>
)
}