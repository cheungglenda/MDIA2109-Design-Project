import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Profile.module.css'
import Link from 'next/link'



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
<h3>PROFILE PAGE</h3>
<div className={styles.profilePic}>
  <p>Profile Picture</p>
</div>
<h2>NAME</h2>
<button>Edit Profile</button>
<button>Edit Post</button>
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
