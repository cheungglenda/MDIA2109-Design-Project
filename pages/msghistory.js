import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Messages.module.css'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { messages } from '@/data/messages'
import { useState } from 'react'
import SearchBar from '@/components/formFields/SearchBar'
import MessageCard from '@/components/Messages/MessageCard'
import Link from 'next/link'

export default function MessageHistory() {

  const [data, setData] = useState([...text.headers])
  const [data2, setData2] = useState([...messages.users])

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
        <SearchBar />

        {data2 && data2.map((info2, index2) => {
          return (
            <Link href="./messages">
              <MessageCard
                key={index2}
                userName={info2.userName}
                time={info2.time}
                color={info2.color}
                message={info2.message.slice(-1)}
              />
            </Link>
          )
        })}



        <p className={styles.endMsg}>End of Messages</p>

      </main>

      <footer>
        <Nav />
      </footer>
    </>
  )
}
