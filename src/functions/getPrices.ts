import pricesSummer from "../../data/pricesSummer.ts";
import pricesWinter from "../../data/pricesWinter.ts";
import pricesGeneral from "../../data/pricesGeneral.ts";

/* ================================================   
    3 Varianten season
    - "summer"  + apartmentType
    - "winter"  + apartmentType
    - "general"
   ================================================ */
export default function getPrices(type,season) { 

    let pricingList = [];

    
    if (season === 'summer') 
    { 
        pricingList = pricesSummer.filter(function (el) {
		return el.type === type;
	    });
    } 
    
    else if (season === 'winter') 
    {
        pricingList = pricesWinter.filter(function (el) {
            return el.type === type;
            });
        
    }    
    else if (season === 'general')
    {
        pricingList = pricesGeneral
    }

    return pricingList;



} 