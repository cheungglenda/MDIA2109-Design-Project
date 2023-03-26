import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import styles from '@/styles/requestsFulfilled.module.css'

import Link from 'next/link'
import FulfilledChart from '../components/FulfilledChart'


export default function RequestsFulfilled() {
    return (
        <>
            <Head>
                <title>Requests Fulfilled</title>
                <meta name="description" content="Traffic Buddy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <HeaderNav />
                <h1 className={styles.title}>Way to lend a helping hand in 2023 so far, Jane!</h1>
                <div className={styles.chartContainer}>
                    <FulfilledChart />
                </div>
                <Nav />
            </main>
        </>
    )
}
