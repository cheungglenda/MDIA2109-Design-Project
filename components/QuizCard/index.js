import styles from './QuizCard.module.css'
import Image from 'next/image'
import HPWTextButton from '../buttons/withText/highpriorityWtext'

export default function QuizCard({

    question,
    questionNum

}) {
    return (
        <>
            <div className={styles.container}>
                <Image src="/logos/logo.png" height={109} width={131} />
                <p><b>Q{questionNum}: </b>{question}</p>
            </div>
        </>
    )
}