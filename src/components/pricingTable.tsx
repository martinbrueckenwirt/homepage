import getPrices from '../functions/getPrices'

const PricingTable = (props)  => {
    
let prices =[];

prices = getPrices(props.type, props.season); 

return (
<>
  
   {prices.map((price, index) => (
        <div 
           key={index}
           >
            <div >
                {price.date}            
            </div>
            <div >
                {price.price}            
            </div>
         </div>))
     }

     </>
)}

export default PricingTable;