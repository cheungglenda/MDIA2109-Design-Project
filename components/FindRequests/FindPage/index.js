import styles from './FindPage.module.css'
import { messages } from '@/data/messages'
import { useState } from 'react'


export default function FindPage({

    userName,
    needs,
    location,
    timeFrame,
    additionalComments
}) {

const [data, setData] = useState([...messages.users])

return (
    <>
    
    <div className={styles.container}>
        <div className={styles.heading}>
            <h1>{userName}'s Requests</h1>
        </div>

        {data && data.map((info, index) => {
            if(info.userName == "Taylor S.")
            return (
                key={index}
                
            )
        })}
    </div>


    </>
)
}