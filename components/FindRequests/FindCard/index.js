import styles from './FindCard.module.css'

export default function FindCard({
    userName,
    time,
    needs,
    location
}) {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.displayInfo}>
            <h4>{userName}</h4>
            <div className={styles.timeInfo}>
                <h4>{time}</h4>
            </div>
            </div>
            <div className={styles.requestsPreview}>
                <p>Needs: {needs}</p>
                <p>Location: {location}</p>
            </div>
        </div>
        
        </>
    )
}