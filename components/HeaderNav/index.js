import styles from './HeaderNav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function HeaderNav({
    headers,
}) {

    const router = useRouter()

    return (
        <div className={styles.headerContainer}>
            <a onClick={() => router.back()} ><Image src="/navIcons/BackButton.svg" alt="placeholder" width={25} height={20} className={styles.backIcon}/></a>
            <h2 className={styles.title}>{headers}</h2>
            <Link href="/"><Image src="/navIcons/Hamburger.svg" alt="placeholder" width={30} height={20} className={styles.backIcon} /></Link>
        </div>
    )
}
