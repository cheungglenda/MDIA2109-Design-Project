import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Messages.module.css'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function Messages() {

  const [data, setData] = useState([...text.headers])

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
                headers={info.messages} />
          )
        })}
      </header>
      <main className={styles.main}>
MESSAGES
      </main>
      
      <footer>
      <Nav />
      </footer>
    </>
  )
}
