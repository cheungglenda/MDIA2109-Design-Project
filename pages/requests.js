import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Requests.module.css'
import Location from '@/components/formFields/location'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import HeaderNav from '@/components/HeaderNav'
import CharCount from '@/components/formFields/characterCount/characterCount'
import Nav from '@/components/nav'
import Test from '@/components/formFields/carouselContainer'

export default function Requests() {
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

        <Location />
        <Test/>

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
          <HPWTextButton />
        </div>

      </main>

      <footer>
        <Nav />
      </footer>
    </>
  )
}
