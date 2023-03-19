import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {

    return (
        <div className={styles.headerContainer}>
            <Link onclick="history.back()">
                <Image src="/placeholder.jpg" alt="placeholder" width={60} height={60} className={styles.backIcon} />
            </Link>
            <h2>Title of Page</h2>
        </div>
    )
}
