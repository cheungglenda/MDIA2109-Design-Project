import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function QuizMain() {

  const [buttText, setButText] = useState([...text.buttons])
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
  <div className={styles.header}>
<h1 className={styles.head}>Let's Test Your Knowledge!</h1>
</div>
<img className={styles.img} src="/logos/logo.png"></img>
<div className={styles.btn}>


{buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quizquest1">
              <HPWTextButton
                key={bindex}
                buttonText={binfo.start} />
                </Link>
          )
        })}
        {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quiztutorial">
              <MPWTextButton
                key={bindex}
                buttonText={binfo.tutorial} />
                </Link>
          )
        })}

</div>
</main>
<footer>
      <Nav />
      </footer>
</>
)
}