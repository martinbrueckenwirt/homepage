import getPrices from '../../../functions/getPrices'
import  {Prices, PricingList}  from './types'
import { heroFont, h1Font,h2Font, h3Font,textFont, footerFont } from '@/src/functions/fonts';
import styles from './pricingTable.module.css'
import pricesGeneral from '../../../../data/pricesGeneral'

const PricingTable = (props:PricingList)  => {

/*in: Type, Season*/  
/* offen: generalPrices */  
/*let prices:Prices[] = [];*/


    const prices = getPrices(props); 
    let season: string = '';
    
    if (props.season === 'winter') {
        season =pricesGeneral.winterSeason;
    }
    else season =pricesGeneral.summerSeason;


return (
<>
    <div className={`${h3Font.className} ${styles.container}`}> 
            
      <div className={styles.season}> {season}</div>
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