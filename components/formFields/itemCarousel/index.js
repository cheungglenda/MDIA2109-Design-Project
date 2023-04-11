import React, { useEffect, useState } from 'react'
import styles from './itemCarousel.module.css'

export default function Carousel (props) {
    
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className={styles.carouselcontainer}>
                    <label for="items">What do you need?</label>
            {
                currentIndex > 0 &&
                <button onClick={prev} className={styles.leftarrow}>
                    &lt;
                </button>
            }
            <div className={styles.carouselwrapper}>

                <div
                    className={styles.carouselcontentwrapper}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`${styles.carouselcontent} ${styles.show3}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>


            </div>
            {
                currentIndex < (length - 1) &&
                <button onClick={next} className={styles.rightarrow}>
                    &gt;
                </button>
            }
        </div>
    )
}
