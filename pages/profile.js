import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Profile.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import FulfilledChart from '../components/FulfilledChart'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'



export default function Profile() {
  return (
    <>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Traffic Buddy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <HeaderNav />
                <div className={styles.profilePic}>
                  <Image 
                  src="/headshots/profile.jpeg"
                  alt="profile pic"
                  width={250}
                  height={250}
                  />
                  <h1 className={styles.name}>Jane Doe</h1>
                </div>
                <div className={styles.postButton}>
                <button><Link href="/home">View Posts</Link></button>
                </div>
                <h2 className={styles.title}>Way to lend a helping hand in 2023 so far, Jane 👏</h2>
                <div className={styles.chartContainer}>
                    <FulfilledChart />
                </div>
                <Nav />
            </main>
    </>
  )
}
