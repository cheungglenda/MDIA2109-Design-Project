import styles from './searchBar.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function SearchBar() {

    //still need to add the background colour when Anika inputs the root colours

    const [inputValue, setInputValue] = useState("");

    const changeValue = (changeVal) => {
        if (changeVal == "blank") {
            setInputValue("");
        } else if (changeVal == "currentLocation")
            setInputValue("3700 Willingdon Avenue, Burnaby B.C., Canada")
    }



    return (
        <>
            <form className={styles.searchForm}>
                <div className={styles.searchContainer}>
                    <Image src="/formImages/magGlass.svg" height={20} width={20} className={styles.magImg} onClick={() => changeValue("currentLocation")} />
                    <input type="text" id="search" name="search" placeholder='Search...' className={styles.searchInput}>
                    </input>
                    <Image src="/formImages/filterIcon.svg" height={25} width={25} className={styles.filterImg} onClick={() => changeValue("currentLocation")} />
                </div>




            </form>
        </>

    )
}