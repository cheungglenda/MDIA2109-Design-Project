import styles from './TipsDescription.module.css'
import Image from 'next/image'
import { text } from '@/data/text/text'
import { useState } from 'react'
import HPWTextButton from '../buttons/withText/highpriorityWtext'



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

            <main className={styles.tipsContainer}>
                <h1>{title}</h1>
                <Image src={image} width={width} height={height} className={styles.tipsImg} />

                {buttText && buttText.map((binfo, bindex) => {
                    return (
                        <HPWTextButton
                            key={bindex}
                            buttonText={binfo.testKnowledge} />
                    )
                })}

                <p>{description}</p>
                <h2>{subheader}</h2>
                <div className={styles.accordionContainer}>
                    <button className={styles.button}
                        onClick={toggle1}
                        type="button"
                    >
                        <p>{accordion1}</p>
                    </button>
                    <div style={{ display: isShowing1 ? "block" : "none", padding: "5px" }}
                    >
                        {accordion1Desc}
                    </div>

                    <button className={styles.button}
                        onClick={toggle2}
                        type="button"
                    >
                        <p>{accordion2}</p>
                    </button>
                    <div style={{ display: isShowing2 ? "block" : "none", padding: "5px" }}
                    >
                        {accordion2Desc}
                    </div>

                    <button className={styles.button}
                        onClick={toggle3}
                        type="button"
                    >
                        <p>{accordion3}</p>
                    </button>
                    <div style={{ display: isShowing3 ? "block" : "none", padding: "5px" }}
                    >
                        {accordion3Desc}
                    </div>

                    <button className={styles.button}
                        onClick={toggle4}
                        type="button"
                    >
                        <p>{accordion4}</p>
                    </button>
                    <div style={{ display: isShowing4 ? "block" : "none", padding: "5px" }}
                    >
                        {accordion4Desc}
                    </div>

                    <button className={styles.button}
                        onClick={toggle5}
                        type="button"
                    >
                        <p>{accordion5}</p>
                    </button>
                    <div style={{ display: isShowing5 ? "block" : "none", padding: "5px" }}
                    >
                        {accordion5Desc}
                    </div>

                </div>

            </main>


        </>
    )
}
