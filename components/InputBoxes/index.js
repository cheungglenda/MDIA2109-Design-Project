import { useState } from 'react'
import Home from '@/pages/home'
import styles from './InputBoxes.module.css'
import Nav from '../nav'
import Image from 'next/image'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import { text } from '@/data/text/text'
import { useRouter } from 'next/router'


export default function InputBoxes() {

    const [buttText, setButText] = useState([...text.buttons])

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })
    const router = useRouter()

    const CheckLogin = () => {
        console.log(formData.firstName)

        if (formData.firstName !== null) {
            router.push({
                pathname: './home',
                query: {
                    firstName: formData.firstName
                }
            })
        }
    }

    return (
        <div className={styles.main}>
            <Image
                src="/logos/wordmarked_logo.png"
                alt=""
                width={200}
                height={200}
                className={styles.logoPic} />
            <h2>Sign Up</h2>

            <div>
                <h4>First Name:</h4>
                <input
                    onChange={(e => setFormData({ ...formData, firstName: e.target.value }))}
                    placeholder="Enter First Name"
                    type="text"
                    className={styles.input}
                />
            </div>

            <div>
                <h4>Last Name:</h4>
                <input
                    onChange={(e => setFormData({ ...formData, lastName: e.target.value }))}
                    type="text"
                    placeholder="Enter Last Name"
                    className={styles.input} />
            </div>
            <div>
                <h4>Email:</h4>
                <input
                    onChange={(e => setFormData({ ...formData, email: e.target.value }))}
                    type="email"
                    placeholder="Enter Email"
                    className={styles.input} />
            </div>
            <div>
                <h4>Password:</h4>
                <input
                    type="password"
                    placeholder="Enter Password"
                    className={styles.input}
                    onChange={(e => setFormData({ ...formData, password: e.target.value }))} />
            </div>
            <div>
                <h4>Confirm Password:</h4>
                <input type="password" placeholder="Confirm Password" className={styles.input} />
            </div>
            <div className={styles.joinButton}>
                {buttText && buttText.map((binfo, bindex) => {
                    return (

                        <a onClick={() => CheckLogin()}><HPWTextButton
                            key={bindex}
                            buttonText={binfo.join} /></a>
                    )
                })}
            </div>
        </div>
    )
}