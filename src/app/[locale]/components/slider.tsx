'use client';
import Image from "next/image"
import { useState, useEffect } from "react";
import  imageList from "../../../../data/imageSliderCafe"
import { SliderType } from "./types";



import styles from './slider.module.css'; // Import your CSS module

const Slider = () => {
const [activeSlide, setActiveSlide] = useState(0);
const slides: SliderType[] = imageList;


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
                sizes="(max-width: 1800px) 100vw"
                className={`${styles.slide} ${index === activeSlide ? styles.active : ''}`}
            />
        </div>
    ))}
</div>

);
};

export default Slider;
