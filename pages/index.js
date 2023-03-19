import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import RequestItem from '@/components/requestItem'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import LPWTextButton from '@/components/buttons/withText/lowpriorityWtext'
import HpNTextButton from '@/components/buttons/noText/highpriorityNotext'
import MpNTextButton from '@/components/buttons/noText/medpriorityNotext'
import LpNTextButton from '@/components/buttons/noText/lowpriorityNotext'



export default function Home() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}> 
        LANDING PAGE
      <Link href="/home">Home Page</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/subform">Submission Form</Link>
      <Link href="/tips">Tips</Link>
      <Link href="/requests">Requests</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/search">Search</Link>
      <Link href="/editpost">Edit Post</Link>
      <Link href="/editprofile">Edit Profile</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/msghistory">Message History</Link>
      </main>
    </>
  )
}
