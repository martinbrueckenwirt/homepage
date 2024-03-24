'use client';
import Image from "next/image"
import { useState, useEffect } from "react";
import  imageList from "../../../../data/imageSliderCafe"
import { SliderType, ImageList } from "./types";





import styles from './slider.module.css'; // Import your CSS module

const Slider = (Props:SliderType[]) => {
const [activeSlide, setActiveSlide] = useState(0);
const slides: SliderType[] = Props.slides;
// const slides: SliderType[] =imageList;
const sizes: string = "(max-width: 399px) 70vw, (max-width: 779px) 70vw, (max-width: 1079px) 70vw, (max-width: 1399px) 60vw, (max-width: 1999px) 50vw, 70vw";


useEffect(() => {
// Set an interval to cycle through slides
const interval = setInterval(() => {
setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
}, 8000);

return () => {
clearInterval(interval); // Clean up the interval
};
}, []);


return (

<div className={styles.slider}>
    {slides.map((slide, index) => (
        <div key={index}>
            <Image
                src={slide.image}
                alt={slide.alt}
                height={800}
                width={630}
                sizes={sizes}
                className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
            />
        </div>
    ))}
</div>

);
};

export default Slider;
