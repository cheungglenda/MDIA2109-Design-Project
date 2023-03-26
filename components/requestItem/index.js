import styles from './requestItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function RequestItem({

    src = "/placeholder.jpg", 

}) {



    //still need to add the background colour when Anika inputs the root colours

    return (
     
        <div className={styles.requestContainer}>

                <Image src={src} alt="placeholder" width={45} height={45} className={styles.navIcon} />

        </div>
    )
}

