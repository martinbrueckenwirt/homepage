import styles from "../components/cafeSlider.module.css"
import Image from "next/image"
import { useState, useEffect } from "react";
import  imageList   from "../../../../data/imageCafe"
import { CafeSliderType } from "./types";
import { JsxElement } from "typescript";



const CafeSlider = () => {
    const [current, setCurrent] = useState(0); // Initialize state to display the first image
    
    // Change image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((current) => (current + 1) % imageList.length); // Move to the next image, go back to the first image after the last
        }, 5000); // Change every 5 seconds

        return () => {
        clearInterval(interval); // Clean up on unmount
        };
    }, []);

    return (
    <>
        
    <div className={styles.imageSliderItem}>
        <Image
            src={imageList[0].image}
            className= {styles.imageSliderItem}
                    alt="placeholder"
                    width={800}
                    height={630}
        />
            {imageList.map((img: CafeSliderType, index: number) => (
                <Image
                    key={index}
                    src={img.image}
                    alt={`slide-img-${index}`}
                     width={800}
                    height={630}
                    className={current === index ? styles.visible : styles.invisible}
                />
            ))}
    </div>
    </>
    )

}

export default CafeSlider;
