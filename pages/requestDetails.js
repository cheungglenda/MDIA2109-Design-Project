import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Search.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'


export default function requestDetails() {

    const [data, setData] = useState([...text.headers])

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
                            headers={info.requestDetails} />
                    )
                })}
            </header>
            <main className={styles.main}>
                SEARCH PAGE
                <Link href="/requests">Requests</Link>
                <Link href="/about">About</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/messages">Messages</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/tips">Tips</Link>
            </main>
            <footer>
                <Nav />
            </footer>
        </>
    )
}
