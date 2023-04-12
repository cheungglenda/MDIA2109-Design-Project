import Image from 'next/image'
import styles from '@/styles/Tips.module.css'
import Link from 'next/link'
import HeaderNav from '@/components/HeaderNav'
import SearchBar from '@/components/formFields/SearchBar'
import TipsCard from '@/components/TipsCard'
import { tips } from '@/data/tips/tips'
import { useState } from 'react'
import { text } from '@/data/text/text'

export default function Tips() {

  const [data, setData] = useState([...tips.card])
  const [data2, setData2] = useState([...text.headers])

  return (
    <>
      <header>
      {data2 && data2.map((info, index) => {
          return (
              <HeaderNav
                key={index}
                headers={info.tips} />
          )
        })}
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