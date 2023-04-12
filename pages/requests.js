import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Requests.module.css'
import Location from '@/components/formFields/location'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import HeaderNav from '@/components/HeaderNav'
import CharCount from '@/components/formFields/characterCount/characterCount'
import Nav from '@/components/nav'
import CarouselContainer from '@/components/formFields/carouselContainer'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function Requests() {

  const [data, setData] = useState([...text.headers])
  const [buttText, setButText] = useState([...text.buttons])

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
                headers={info.newRequest} />
          )
        })}

      </header>
      
      <main className={styles.main}>

        <Location />
        <CarouselContainer />

        <div>
          <label for="when">When do you need it?</label>
          <select name="when" id="when" className={styles.whenField}>
            <option value="ASAP">ASAP</option>
            <option value="10-30mins">10-30mins</option>
            <option value="30-60mins">30-60mins</option>
            <option value="60+mins">60+mins</option>
          </select>
        </div>
        <CharCount />
        <div className={styles.button}>

          {buttText && buttText.map((binfo, bindex) => {
          return (
              <HPWTextButton
                key={bindex}
                buttonText={binfo.postRequest} />
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
