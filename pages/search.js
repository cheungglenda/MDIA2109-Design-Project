import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Search.module.css'
import Link from 'next/link'


export default function Search() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        SEARCH PAGE
      <Link href="/requests">Requests</Link>
      <Link href="/about">About</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/rewards">Rewards</Link>
      </main>
    </>
  )
}
