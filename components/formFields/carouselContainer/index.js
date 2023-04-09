import Carousel from "../itemCarousel"
import styles from './carouselContainer.module.css'
import { useState } from "react"
import { carousel } from '@/data/carousel/carousel.js'
import RequestItem from "@/components/requestItem"

const Test = () => {


    const [data, setData] = useState([...carousel.image])

    return (
        <div className={styles.carouselContainer}>
            <Carousel
                className={styles.test}
                show={3}>
                    {data && data.map((info,index) => {
                        return(
                            <div className={styles.requestItemContainer}>
                                <RequestItem
                                key={index}
                                src={info.imageURLLight}/>
                            </div>
                        )
                    })}
            </Carousel>
        </div>
    )
}

export default Test
