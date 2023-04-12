import styles from './HeaderNav.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function HeaderNav({
    headers,
}) {

    return (
        <div className={styles.headerContainer}>
            <Link href="/"><Image src="/navIcons/BackButton.svg" alt="placeholder" width={20} height={20} className={styles.backIcon} /></Link>
            <h2 className={styles.title}>{headers}</h2>
            <Link href="/"><Image src="/navIcons/Hamburger.svg" alt="placeholder" width={20} height={20} className={styles.backIcon} /></Link>
        </div>
    )
}
