import { useState } from 'react'
import Home from '@/pages/home'
import styles from './InputBoxes.module.css'
import Nav from '../nav'
import Image from 'next/image'


export default function InputBoxes() {

    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    const passName = (event) => {
        if (event.key === "Enter") {
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        }
    }

    return (
        <div className={styles.main}>
            <Image
                src="/logos/wordmarked_logo.png"
                alt=""
                width={200}
                height={200}
                className={styles.logoPic} 
                style={{ display: isActiveOne ? 'block' : 'none' }} />
            <h2 style={{ display: isActiveOne ? 'block' : 'none' }}>Sign Up</h2>
            <div style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>First Name:</h4>
                <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Enter First Name"
                    onKeyDown={passName}
                    type="text"
                    className={styles.input}
                />
            </div>
            <div style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>Last Name:</h4>
                <input type="text" placeholder="Enter Last Name" className={styles.input} />
            </div>
            <div style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>Email:</h4>
                <input type="email" placeholder="Enter Email" className={styles.input} />
            </div>
            <div style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>Password:</h4>
                <input type="password" placeholder="Enter Password" className={styles.input} />
            </div>
            <div style={{ display: isActiveOne ? 'block' : 'none' }}>
                <h4>Confirm Password:</h4>
                <input type="password" placeholder="Confirm Password" className={styles.input} />
            </div>
            
            <div style={{ display: isActiveTwo ? 'block' : 'none' }}>
                <Home
                    passName={name}
                />
            </div>
            <div style={{ display: isActiveOne ? 'block' : 'none' }}>
                <Nav /></div>
        </div>
    )
}