import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Requests.module.css'
import Location from '@/components/formFields/location'
import ItemCarousel from '@/components/formFields/itemCarousel'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'

export default function Requests() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Location />
        <label for="items">What do you need?</label>
        <ItemCarousel />
          <label for="when">When do you need it?</label>
          <select name="when" id="when" className={styles.whenField}>
            <option value="ASAP">ASAP</option>
            <option value="10-30mins">10-30mins</option>
            <option value="30-60mins">30-60mins</option>
            <option value="60+mins">60+mins</option>
          </select>
          <label for="details">Provide more details:</label>
          <textarea id="details" name="details" rows="4" className={styles.detailsField}>
          </textarea>
          <HPWTextButton/>
      </main>
    </>
  )
}
