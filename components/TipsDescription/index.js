import styles from './TipsDescription.module.css'
import Image from 'next/image'
import { text } from '@/data/text/text'
import { useState } from 'react'
import HPWTextButton from '../buttons/withText/highpriorityWtext'
import Link from 'next/link'



export default function TipsDescription({
    height = 210,
    width = 500,

    image,
    title,
    description,
    subheader,
    accordion1,
    accordion2,
    accordion3,
    accordion4,
    accordion5,

    accordion1Desc,
    accordion2Desc,
    accordion3Desc,
    accordion4Desc,
    accordion5Desc,


}) {


    const [buttText, setButText] = useState([...text.buttons])
    const [isShowing1, setIsShowing1] = useState(false)
    const [isShowing2, setIsShowing2] = useState(false)
    const [isShowing3, setIsShowing3] = useState(false)
    const [isShowing4, setIsShowing4] = useState(false)
    const [isShowing5, setIsShowing5] = useState(false)


    const toggle1 = () => {
        setIsShowing1(!isShowing1);
    }
    const toggle2 = () => {
        setIsShowing2(!isShowing2);
    }
    const toggle3 = () => {
        setIsShowing3(!isShowing3);
    }
    const toggle4 = () => {
        setIsShowing4(!isShowing4);
    }
    const toggle5 = () => {
        setIsShowing5(!isShowing5);
    }


    return (
        <>

            <div className={styles.tipsContainer}>
                <h1>{title}</h1>
                <Image src={image} width={width} height={height} className={styles.tipsImg} />

                <div className={styles.buttonContainer}>
                    {buttText && buttText.map((binfo, bindex) => {
                        return (
                            <Link href="/quizmain"><HPWTextButton
                                key={bindex}
                                buttonText={binfo.testKnowledge} /></Link>
                        )
                    })}
                </div>

                <p>{description}</p>
                <h2>{subheader}</h2>
                <div className={styles.accordionContainer}>

                    <div className={styles.toggleContainer}>
                        <div className={styles.buttonFlex}>
                            <button className={styles.button}
                                onClick={toggle1}
                                type="button"
                            >
                                <h4>{accordion1}</h4>
                            </button>
                            <p>{isShowing1 ? "-" : "+"}</p>
                        </div>
                        <div style={{ display: isShowing1 ? "block" : "none", padding: "5px" }}
                        >
                            <p>{accordion1Desc}</p>
                        </div>
                    </div>

                    <div className={styles.toggleContainer}>
                        <div className={styles.buttonFlex}>
                            <button className={styles.button}
                                onClick={toggle2}
                                type="button"
                            >
                                <h4>{accordion2}</h4>
                            </button>
                            <p>{isShowing2 ? "-" : "+"}</p>
                        </div>
                        <div style={{ display: isShowing2 ? "block" : "none", padding: "5px" }}
                        >
                            {accordion2Desc}
                        </div>
                    </div>

                    <div className={styles.toggleContainer}>
                        <div className={styles.buttonFlex}>
                            <button className={styles.button}
                                onClick={toggle3}
                                type="button"
                            >
                                <h4>{accordion3}</h4>
                            </button>
                            <p>{isShowing3 ? "-" : "+"}</p>
                        </div>
                        <div style={{ display: isShowing3 ? "block" : "none", padding: "5px" }}
                        >
                            {accordion3Desc}
                        </div>
                    </div>

                    <div className={styles.toggleContainer}>
                        <div className={styles.buttonFlex}>
                            <button className={styles.button}
                                onClick={toggle4}
                                type="button"
                            >
                                <h4>{accordion4}</h4>
                            </button>
                            <p>{isShowing4 ? "-" : "+"}</p>
                        </div>
                        <div style={{ display: isShowing4 ? "block" : "none", padding: "5px" }}
                        >
                            {accordion4Desc}
                        </div>
                    </div>

                    <div className={styles.toggleContainer}>
                        <div className={styles.buttonFlex}>
                            <button className={styles.button}
                                onClick={toggle5}
                                type="button">
                                <h4>{accordion5}</h4>
                            </button>
                            <p>{isShowing5 ? "-" : "+"}</p>
                        </div>
                        <div style={{ display: isShowing5 ? "block" : "none", padding: "5px" }}
                        >
                            {accordion5Desc}
                        </div>
                    </div>

                </div>

            </div >


        </>
    )
}
