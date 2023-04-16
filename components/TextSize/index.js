import { useState } from 'react'
import styles from './TextSize.module.css'

export default function TextToggle() {
    const [textSizeChange, setTextSizeChange] = useState('text-small')
    const [openOverlay, setOpenOverlay] = useState(false)

    const handleClick = (size) => {
        setTextSizeChange(size)
        setOpenOverlay(false)
    }

    const handleToggle = () => {
        setOpenOverlay(!openOverlay)
    }
    return (
        <div className={styles.relative}>
            <button 
            onClick={handleToggle}
            className={styles.first}
            >
                Text Size
            </button>
            {openOverlay && (
                <div className={styles.second}>
                    <button
                    onClick={() => handleClick('text-small')}
                    className={styles.third}
                    >
                        Small
                    </button>
                    <button 
                    onClick={() => handleClick('text-medium')}
                    className={styles.fourth}
                    >
                        Medium
                    </button>
                    <button 
                    onClick={() => handleClick('text-large')}
                    className={styles.fifth}
                    >
                        Large
                    </button>
                    </div>
            )}
        
        </div>
    )

}