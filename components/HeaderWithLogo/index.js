import styles from './HeaderWithLogo.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function HeaderNav() {

    return (
        <div className={styles.headerContainer}>
            <Link href="/">
                <Image 
                    src="/logos/logo.png" 
                    alt="logo" 
                    width={80} 
                    height={80} 
                    className={styles.logo} />
                </Link>

        </div>
    )
}
