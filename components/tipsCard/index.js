import styles from './tips.module.css'
import Image from 'next/image'


export default function TipsCard({
    src,
    header,
    height=210,
    width=500

}) {
    return (
        <>
            <div className={styles.tipsContainer}>

                <Image src={src} width={width} height={height} className={styles.tipsImg} />
                <div className={styles.tipsHeader}>
                    <p>{header}</p>
                </div>
            </div>

        </>
    )
}