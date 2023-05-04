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
        <div>
          <h2>General</h2>
          <div className={styles.row}>
            <h4>Dark Mode</h4>
            <DarkMode />
          </div>
          <div className={styles.row}>
            <h4>Text Size</h4>
            <TextToggle />
          </div>
          <h4>Language</h4>
        </div>
        <hr className={styles.line} />
        <div>
          <h2>About</h2>
          <h4>About Traffic Buddy</h4>
          <h4>Website FAQ</h4>
        </div>
        <hr className={styles.line} />
        <div>
          <h2>Account</h2>
          <h4><Link href="/profile">Profile</Link></h4>
          <h4><Link href="/quizresultsall">Quiz Results Summary</Link></h4>
        </div>
        <hr className={styles.line} />
        <div>
          <h2>Privacy</h2>
          <h4>Terms and Conditions</h4>
          <h4>Privacy Policy</h4>
          <h4>Report a Bug</h4>
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
