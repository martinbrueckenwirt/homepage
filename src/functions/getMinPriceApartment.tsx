import pricesSummer from "@/data/pricesSummer";
import pricesWinter from "@/data/pricesWinter";
import { MinPrice } from "../app/[locale]/components/types";

function getMinPriceWinter(pricesWinter: { type: string, date: string, price: number }[], type: string): number {
    const filteredPrices = pricesWinter.filter(item => item.type === type);
    const minPriceWinter = Math.min(...filteredPrices.map(item => item.price));
    return minPriceWinter;
}

function getMinPriceSummer(pricesSummer: { type: string, date: string, price: number }[], type: string): number {
    const filteredPrices = pricesSummer.filter(item => item.type === type);
    const minPriceSummer = Math.min(...filteredPrices.map(item => item.price));
    return minPriceSummer;
}

function getMinPriceApartment(apartmentType: string): MinPrice {
    let minPriceWinter:number = 0;
    let minPriceSummer:number = 0;
    minPriceSummer = getMinPriceSummer(pricesSummer, apartmentType);
    minPriceWinter = getMinPriceWinter(pricesWinter, apartmentType);
     
    return { minPriceSummer, minPriceWinter };
};

export default getMinPriceApartment;


