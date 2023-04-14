import { useState } from 'react'
import Home from '@/pages/home'
import styles from './LoginInputs.module.css'
import Nav from '../nav'
import Image from 'next/image'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import { text } from '@/data/text/text'



export default function LoginInputs() {

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    const [buttText, setButText] = useState([...text.buttons])

    const passName = (event) => {
        if (event.key === "Enter") {
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.logoPic}>
            <Image
                src="/logos/wordmarked_logo.png"
                alt=""
                width={200}
                height={200}
                style={{ display: isActiveOne ? 'block' : 'none' }} />
            </div>
            <div className={styles.box}><h2 style={{ display: isActiveOne ? 'block' : 'none' }}>Login</h2></div>
        <div className={styles.fields}>
            <div className={styles.box} style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>Username:</h4>
                <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Enter Username"
                    onKeyDown={passName}
                    type="text"
                    className={styles.input}
                />
            </div>
            <div className={styles.box} style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>Password:</h4>
                <input type="password" placeholder="Enter Password" className={styles.input} />
            </div>
            <div className={styles.forgotPW} style={{ display: isActiveOne ? 'block' : 'none' }}>
                <p>I forgot my password</p>
            </div>
            <div className={styles.loginButton} style={{ display: isActiveOne ? 'block' : 'none' }}>
                {buttText && buttText.map((binfo, bindex) => {
                    return (

                        <Link href="/home"><HPWTextButton
                            key={bindex}
                            buttonText={binfo.logIn} /></Link>
                    )
                })}
            </div>
            <div style={{ display: isActiveTwo ? 'block' : 'none' }}>
                <Home passName={name} />
            </div>
        </div>
        </div>
    )
}