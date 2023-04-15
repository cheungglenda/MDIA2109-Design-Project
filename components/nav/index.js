import styles from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
//still need to add the background colour when Anika inputs the root colours

    return (
        <div className={styles.navContainer}>
            <Link href="/home">
                <Image src="/navIcons/Home.png" alt="home" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/search">
                <Image src="/navIcons/Search.png" alt="search" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/requests">
                <Image src="/navIcons/Add.png" alt="add" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/messages">
                <Image src="/navIcons/Messages.png" alt="messages" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/profile">
                <Image src="/navIcons/Profile.png" alt="profile" width={60} height={60} className={styles.navIcon} />
            </Link>


        </div>
    )
}
