import styles from './requestItem.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function RequestItem({

    src,

}) {



    return (

        <div 
        className={styles.requestContainer}>

            <Image src={src} alt="placeholder" width={60} height={60} className={styles.navIcon} />

        </div>
    )
}

