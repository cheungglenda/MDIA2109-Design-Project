import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Tips.module.css'
import Link from 'next/link'
import HeaderNav from '@/components/HeaderNav'
import SearchBar from '@/components/searchBar'
import TipsCard from '@/components/tipsCard'
import { tips } from '@/data/tips/tips'
import { useState } from 'react'

export default function Tips() {

  const [data, setData] = useState([...tips.card])

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

        <SearchBar />

        {data && data.map((info, index) => {
          return (
            <TipsCard
              key={index}
              src={info.image}
              header={info.title}
            />

          )
        })}

      </main>

      <footer>
      </footer>
    </>
  )
}
