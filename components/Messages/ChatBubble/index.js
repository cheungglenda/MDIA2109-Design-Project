import Image from 'next/image'
import styles from './ChatBubble.module.css'

export default function ChatBubble({

    profileImg,
    message,
    userMsg

}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headshot}>
                    <Image src={profileImg} height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.message}>
                    {message}
                </div>

            </div>
            <div className={styles.userContainer}>
                <div className={styles.headshot}>
                    <Image src="/headshots/profile.jpeg" height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.userMessage}>
                    {userMsg}
                </div>

            </div>

        </>
    )
}