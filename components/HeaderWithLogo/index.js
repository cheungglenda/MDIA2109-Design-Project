import styles from './HeaderWithLogo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HamburgerPopup from '../HamburgerPopup'


export default function HeaderWithLogo() {

    return (
        <div className={styles.headerContainer}>

                <div className={styles.hamburger}>
               <HamburgerPopup />
               </div>
        </div>
    )
}
