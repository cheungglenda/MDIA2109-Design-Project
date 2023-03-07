import styles from './lptext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LPWTextButton() {

    //still need to add the background colour and text sizing when Anika inputs the root colours/sizes

    return (
        <div className={styles.buttonContainer}>
            <p>Low Priority</p>
        </div>
    )
}

