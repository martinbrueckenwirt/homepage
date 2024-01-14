import getPrices from '../../../functions/getPrices'
import  {Prices, PricingList}  from './types'
import { heroFont, h1Font,h2Font, h3Font,textFont, footerFont } from '@/src/functions/fonts';
import styles from './pricingTable.module.css'

const PricingTable = (props:PricingList)  => {

/*in: Type, Season*/  
/* offen: generalPrices */  
/*let prices:Prices[] = [];*/


const prices = getPrices(props); 
console.log('pricingTable ',prices);

return (
<>
 <div className={`${h3Font.className} ${styles.container}`}> 
    {prices.map((price, index) => (

    <div className={styles.cell}  key={index}  >
        <div className={styles.date}>
            {price.date}            
        </div>
        <div className={styles.price}>
            {price.price}            
        </div>
    </div>
))}
</div>

     </>
)}

export default PricingTable;