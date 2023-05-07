import { useState } from 'react'
import Home from '@/pages/home'
import styles from './ForgotPWInputs.module.css'
import Nav from '../nav'
import Image from 'next/image'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import { text } from '@/data/text/text'

export default function LoginInputs() {

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
            <div className={styles.box}>
                <h2 style={{ display: isActiveOne ? 'block' : 'none' }}>Forgot My Password</h2>
                <p style={{ display: isActiveOne ? 'block' : 'none' }}>Input your username below and we'll send a secure password reset link to the associated email.</p>
            </div>
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
                <div className={styles.resetButton} style={{ display: isActiveOne ? 'block' : 'none' }}>
                    {buttText && buttText.map((binfo, bindex) => {
                        return (

                            <Link href="/home"><HPWTextButton
                                key={bindex}
                                buttonText={binfo.resetPW} /></Link>
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