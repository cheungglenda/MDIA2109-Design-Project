import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizTutorial3.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { useState } from 'react'
import { text } from '@/data/text/text'

export default function QuizTutorialThree() {
  const [buttText, setButText] = useState([...text.quiz])
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
            <div className={styles.content}>
          <h3>This was correct!</h3>
          <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
          return (
    
              <HPWTextButton
                key={bindex}
                buttonText={binfo.apple} />
           
          )
        })}
        </div>
        </div>

        <div className={styles.content}>
          <img src="/quizImages/rightAnswer.svg" height={120} width={120}></img>
          <h3>This was incorrect!</h3>
          <img src="/quizImages/wrongAnswer.svg" height={120} width={120}></img>
          <h3>The correct answer was:</h3>
          <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
          return (

              <HPWTextButton
                key={bindex}
                buttonText={binfo.apple} />
             
          )
        })}
        </div>
        </div>
          </div>
          <div>
            <p>Now you're ready to play the quiz!</p>
            <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quizmain">
              <HPWTextButton
                key={bindex}
                buttonText={binfo.finish} />
                </Link>
          )
        })}
        </div>
          </div>
      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}