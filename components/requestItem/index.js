import styles from './requestItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function RequestItem() {

    //still need to add the background colour when Anika inputs the root colours

    return (
     
        <div className={styles.requestContainer}>

                <Image src="/placeholder.jpg" alt="placeholder" width={30} height={30} className={styles.navIcon} />

        </div>
    )
}

