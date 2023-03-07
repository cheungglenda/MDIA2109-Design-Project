import styles from './hptext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HPWTextButton() {

    //still need to add the background colour and text sizing when Anika inputs the root colours/sizes

    return (
        <div className={styles.buttonContainer}>
            <p>High Priority</p>
        </div>
    )
}

