import styles from './HeaderNav.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function HeaderNav() {

    return (
        <div className={styles.headerContainer}>
            <Link href="/"><Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.backIcon} /></Link>
            <h2 className={styles.title}>Title of Page</h2>
        </div>
    )
}
