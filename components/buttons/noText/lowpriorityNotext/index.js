import styles from './lpnotext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LpNTextButton() {

    //still need to add the background colour and text sizing when Anika inputs the root colours/sizes

    return (
        <div className={styles.buttonContainer}>
            <Image src="/placeholder.jpg" alt="placeholder" width={30} height={30} className={styles.navIcon} />
        </div>
    )
}
