import styles from './HamburgerPopup.module.css'
import React, { useState } from 'react'
import Image from 'next/image'
import Popup from '@/hooks/hampopup'
import Link from 'next/link'


export default function HamburgerPopup() {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.button}>
            <h2 className={styles.open} onClick={() => setButtonPopup(!buttonPopup)}>
                <Image src="/navIcons/Hamburger.svg" alt="placeholder" width={30} height={20} className={styles.icon} />
            </h2></div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {buttonPopup && (
                <ul className={styles.links}>
                    <Link href="/settings">⚙️ Settings</Link>
                    <Link href="/quizresultsall">📝 Quiz Results</Link>
                    <Link href="/quizresultsall">✖️ Log Out</Link>
                </ul>)}
            </Popup>
        </div>
)
}