

import styles from "../components/gallery.module.css"
import Image from "next/image"

export default function Page() {
  

  
  return (
    <> 
      
     

     
      <div id="grid" className={styles.gallerygridcontainer}>
   
      
   
          
            <div >
                 <Image 
                    src= {'/P1560079.JPG'}
                    alt={'test volle größe'}
                    priority= {false}
                    quality = {80}
                    width = {1920} 
                    height ={1200} 
                    /*fill */
                />

<Image 
                    src= {'/P2535132-1.webp'}
                    alt={'test mit webp'}
                    priority= {false}
                    quality = {80}
                    width = {1920} 
                    height ={1200} 
                    /*fill */
                />


            </div>
            
        
        
</div>
     


    </>
  )
}

/*
*a* nicht erlaubt!!
export const metadata = {
  title: 'App directory',
} */
