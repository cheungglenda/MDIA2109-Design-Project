import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Settings.module.css'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import DarkMode from '@/components/DarkMode'
import { text } from '@/data/text/text'
import { useEffect, useState } from 'react'
import TextToggle from '@/components/TextSize'

export default function Settings() {
  const [data, setData] = useState([...text.headers])

  var copyright = process.env.NEXT_PUBLIC_COPYRIGHT

  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      {data && data.map((info, index) => {
          return (
            <HeaderNav
              key={index}
              headers={info.settings} />
          )
        })}
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h2 className={styles.header}>General</h2>
          <div className={styles.row}>
            <p>Dark Mode</p>
            <DarkMode />
          </div>
          <div className={styles.row}>
            <p>Text Size</p>
            <TextToggle />
          </div>
          <p>Language</p>
        </div>
        <hr className={styles.line} />
        <div className={styles.content}>
          <h2 className={styles.header}>About</h2>
          <p>About Traffic Buddy</p>
          <p>Website FAQ</p>
        </div>
        <hr className={styles.line} />
        <div className={styles.content}>
          <h2 className={styles.header}>Account</h2>
          <p><Link href="/profile">Profile</Link></p>
          <p><Link href="/quizresultsall">Quiz Results Summary</Link></p>
        </div>
        <hr className={styles.line} />
        <div className={styles.content}>
          <h2 className={styles.header}>Privacy</h2>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Report a Bug</p>
        </div>
        <div>
          {copyright}
        </div>
      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}
