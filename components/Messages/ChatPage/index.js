import ChatBubble from '../ChatBubble'
import styles from './ChatPage.module.css'
import { messages } from '@/data/messages'
import { useState } from 'react'

export default function ChatPage({

    userName,
    needs,

}) {

    const [data, setData] = useState([...messages.users])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <p>Chatting with <b>{userName}</b></p>
                    <p>"{needs}"</p>
                </div>

                {data && data.map((info, index) => {
                    return (
                        <ChatBubble
                            key={index}
                            profileImg={info.profileImg}
                            message={info.message}
                            userMsg={info.userMsg}/>
                    )
                })}

            </div>

        </>
    )
}