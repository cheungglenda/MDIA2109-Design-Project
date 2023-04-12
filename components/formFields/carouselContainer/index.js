import Carousel from "../itemCarousel"
import styles from './carouselContainer.module.css'
import { useState, useEffect } from "react"
import { carousel } from '@/data/carousel/carousel.js'
import RequestItem from "@/components/requestItem"
import Image from "next/image"


const CarouselContainer = () => {


    const [data, setData] = useState([...carousel.image])
    const [color, setColor] = useState(true)
    const [img, setImg] = useState("/itemIcons/Clothes-Light.svg")

    const onClick = () => {
        setColor(!color)
    }




    return (
        <div className={styles.carouselContainer}>
            <Carousel
                className={styles.test}
                show={3}>
            <Image src={`${img}`} onClick={() => onClick()} alt="placeholder" width={60} height={60} className={styles.navIcon}/>
            {color ? "yes" : "no"}
            <Image src={"/placeholder.jpg"} alt="placeholder" width={60} height={60} className={styles.navIcon}/>
            <Image src={"/placeholder.jpg"} alt="placeholder" width={60} height={60} className={styles.navIcon}/>
            <Image src={"/placeholder.jpg"} alt="placeholder" width={60} height={60} className={styles.navIcon}/>
            </Carousel>
        </div>
    )
}

export default CarouselContainer
