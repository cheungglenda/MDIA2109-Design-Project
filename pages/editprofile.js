import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Profile.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highprioityWtext'



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

<div>
<h4>Name:</h4>
<form className={styles.name}> 
    <input></input>
</form>
<h4>Phone Number:</h4>
<form className={styles.phnum}> 
    <input></input>
</form>
<h4>Email:</h4>
<form className={styles.email}> 
    <input></input>
</form>
<h4>Area:</h4>
</div>
<div>
<HPWTextButton/>
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