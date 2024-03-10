import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { BgImage } from './types';
import backGroundA from '../../../../public/bg_groessteDatei_interlacing.png';
/*import backGroundA from '../../../../public/Telefon.png';*/

import styles from './backgroundImage.module.css';

export default function BackgroundImage(props:BgImage) {

    if (props.type === "A") {
        return (
            <>
            <div className={styles.container}>
                <Image
                    src={backGroundA}
                    alt="Hintergrundbild"
                    /*style={{objectFit: "cover"}  }*/
                    style={{
                        // objectFit: 'cover',
                        opacity: 0.2,
                    /*    layout='fill', */
                      }}

                    /*layout="fill"*/
                   /* objectFit="cover"*/
                    priority={true}
                    sizes="100vw"
                    /*width={100}
                    height ={100}*/
                />
                </div>
            </>
        )
    }

}