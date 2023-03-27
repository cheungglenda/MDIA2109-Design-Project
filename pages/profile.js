import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Profile.module.css'
import Link from 'next/link'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'



export default function Profile() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

<div className={styles.profilePic}>
  <p>Profile Picture</p>
</div>
<h2>NAME</h2>
<div>
<MPWTextButton/>
<MPWTextButton/>
</div>
<div>
  <p># of deliveries</p>
</div>
<div className={styles.profileMap}>

</div>
<nav>
  
</nav>
      </main>
    </>
  )
}
