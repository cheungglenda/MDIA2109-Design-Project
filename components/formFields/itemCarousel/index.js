import RequestItem from "@/components/requestItem";
import Image from "next/image";
import { useState } from "react";
import styles from "./itemCarousel.module.css"
import { carousel } from '@/data/carousel/carousel.js'

export default function ItemCarousel() {

    const [data, setData] = useState ([...carousel.image])

    const [img, setImg] = useState(0); //start the image at 0

    const icons = "<RequestItem"

    const changeImage = (change) => { //this means, onChange, if someone clicks either of the two arrow buttons below, then run the if statement. 
        if (change == "backward") {
            setImg(img - 1);

            if (img == 0) {
                setImg(5)
            }
            console.log(img);
        } else if (change == "forward") {
            setImg(img + 1);

            if (img == 5) {
                setImg(0)
            }
            console.log(img);
        }
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.body}>
                <Image className={styles.imageL}
                        src={"/layoutIcons/Larrow.png"}
                        alt={"/layoutIcons/Larrow.png"}
                        width={15}
                        height={15}
                        onClick={() => changeImage("backward")}
                    />
                    {data && data.map((info,index) => {
                        return(
                            <div className={styles.requestItemContainer}>
                                <RequestItem
                                key={index}
                                src={info.imageURL}/>
                            </div>
                        )
                    })}


                    <Image className={styles.imageR}
                        src={"/layoutIcons/Rarrow.png"}
                        alt={"/layoutIcons/Rarrow.png"}
                        width={15}
                        height={15}
                        onClick={() => changeImage("forward")}
                    />

                </div>
            </div>

        </>
    )
}