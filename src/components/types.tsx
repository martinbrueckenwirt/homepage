import { type } from "os";

export type AppartmentModuleProps = {
    appType: string;
}

export type AppDescript = {
        type: string;
        persons: string;
        size: string;
    }[];

export type BurgerMenueProps ={
    visibility: boolean;  
    menueSlide:string;
}

export type GetBurgerImageProps = {
    burgerMenueVisible: boolean;
}

export interface IAppartementTeaserImage  {
    imageName:string, 
    description : string,
    alt: string,
    copyright: string,
    height: number,
    width: number,
    priority: boolean
}


export type ImageType ={
    small: string,
	full: string,
	teaser: boolean,
	description: string,
	descriptionEn: string,
	descriptionIt: string,
	alt: string,
	copyright: string,
    height: number,
	width: number,
    priority: boolean,
    sortnumber:number,
}

export type MinPrice = {
   
    minPriceSummer: number,
    minPriceWinter: number,
}

export type NavigationProps = {
    windowScrollPosition: number;
    transparency: boolean;
}

export type Prices = {
    type: string,
    date: string,
    price:number
}

export type PricingList = {
    type: string,
    season: string,
}

