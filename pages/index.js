import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Landing.module.css'
import Link from 'next/link'
import HeaderNav from '@/components/HeaderNav'




export default function Landing() {
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
      THIS IS THE LANDING PAGE
      <Link href="/home">Home Page</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/subform">Submission Form</Link>
      <Link href="/tips">Tips</Link>
      <Link href="/requests">Requests</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/search">Search</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/msghistory">Message History</Link>
      <Link href="/requestsfulfilled">Requests Fulfilled</Link>
      </main>
      <footer>
      </footer>
    </>
  )
}
