import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'

export default function Quiz () {
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
<h1 className={styles.header}>Let's Test Your Knowledge!</h1>
<img></img>
<div className={styles.btn}>
<HPWTextButton/>
<MPWTextButton/>
</div>
</main>
<footer>
      <Nav />
      </footer>
</>
)
}