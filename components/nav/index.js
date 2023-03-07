import styles from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
//still need to add the background colour when Anika inputs the root colours

    return (
        <div className={styles.navContainer}>
            <Link href="/home">
                <Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/search">
                <Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/editpost">
                <Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/messages">
                <Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/profile">
                <Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.navIcon} />
            </Link>


        </div>
    )
}
