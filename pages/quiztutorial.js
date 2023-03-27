import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizTutorial.module.css'
import Link from 'next/link'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'

export default function Quiz () {
return(
<>
<Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<main className={styles.main}>
<img></img>
<h1 className={styles.header}>Welcome to Traffic Buddy's Quiz!</h1>
<div className={styles.text}>
<p>This quiz is designed to test your knowledge on a variety of supplies to keep in your can and tips!</p>
<h4>We'll be taking you through a quick tutorial on how to play and what to expect!</h4>
</div>
<div className={styles.btn}>
<MPWTextButton/>
<MPWTextButton/>
</div>

</main>
</>
)
}