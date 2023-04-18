import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizResults.module.css'
import Link from 'next/link'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'


export default function QuizResultsAll() {

  const [data, setData] = useState([...text.headers])
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
      <Image className={styles.img} src="/logos/logo.png" height={109} width={131}/>
        <div className={styles.resultContainer}>
          <h3>5 Useful Emergency Items for Your Car</h3>
          <div className={styles.text}>
          <h1>60%</h1>
          <p><Link href="/quizmain">Try Again</Link></p>
          </div>
        </div>
        <div className={styles.resultContainer}>
          <h3>What Foods Should be Kept in the Car</h3>
          <div className={styles.text}>
          <h1>100%</h1>
          <p><Link href="/quizmain">Try Again</Link></p>
          </div>
        </div>
        <div className={styles.resultContainer}>
          <h3>5 Useful Emergency Items for Your Car</h3>
          <div className={styles.text}>
          <h1>60%</h1>
          <p><Link href="/quizmain">Try Again</Link></p>
          </div>
        </div>
        <div className={styles.btn}>
        {buttText && buttText.map((binfo, bindex) => {
              return (
                <Link href="/tips"><MPWTextButton
                  key={bindex}
                  buttonText={binfo.moreQuiz} /></Link>
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