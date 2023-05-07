
import Head from 'next/head'
import styles from '@/styles/ErrorPage.module.css'

export default function ErrorPage() {
return (
<>
<Head>
    <title>Traffic Buddy</title>
    <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
</Head>
<div className={styles.content}>
    <h1 className={styles.header}>404</h1>
    <h2 className={styles.subheader}>Page Not Found</h2>
    <p>Hold tight while we construct this page!</p>
</div>

</>

)

}