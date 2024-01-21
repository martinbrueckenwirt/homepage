import pricesSummer from "../../data/pricesSummer";
import pricesWinter from "../../data/pricesWinter";
import pricesGeneral from "../../data/pricesGeneral";
import { PricingList } from "../app/[locale]/components/types";
import { Prices } from "../app/[locale]/components/types";


/* ================================================   
    3 Varianten season
    - "summer"  + apartmentType
    - "winter"  + apartmentType
    - "general" : braucht eigene Funktion
   ================================================ */
export default function getPrices({ type, season }:PricingList):Prices[] { 

    let prices: Prices[] = [];
        
    if (season === 'summer') 
    { 
        prices = pricesSummer.filter(function (el) {
            return el.type === type;
        }) as Prices[];
    } 
    
    else if (season === 'winter') 
    {
        prices = pricesWinter.filter(function (el) {
            return el.type === type;
            }) as Prices[];
      }    
   return prices;
} 