import pricesSummer from "../../data/pricesSummer";
import pricesWinter from "../../data/pricesWinter";
import pricesGeneral from "../../data/pricesGeneral";
import { PricingList } from "../app/[locale]/components/types";

/* ================================================   
    3 Varianten season
    - "summer"  + apartmentType
    - "winter"  + apartmentType
    - "general"
   ================================================ */
export default function getPrices({ type, season }:PricingList) { 

    let pricingList: any[];

    
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