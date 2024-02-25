import { type } from "os";

export type AppartmentModuleProps = {
    appType: string;
}

export type AppDescript = {
        type: string;
        persons: string;
        size: string;
    };

export type BgImage={
    type: string;
}

export type Booking = {
    apartmentId: string;
}

export type BurgerMenueProps ={
    visibility: boolean;  
    menueSlide:string;
}



export type GalleryImage = {
    small:string;
	full:string;
    teaser:boolean;
	description:string;
	descriptionEn:string;
	descriptionIt:string;
	alt: string;
	altEN:string;
	altIT:string;
	copyright: string;
	sortnumber:number;
};

export type HeroProps = {
    imageUrl: any;
    imageUrlAlt: string;
    calledFrom: string; 
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
    home: string;
    appartment:string;
    cafe:string;
    about: string;
    contact: string;
   }


export type Prices = {
    type: string;
    date: string;
    price:number;
 }

export type PricingList = {
    type: string,
    season: string,
    
}

export type SliderType = {
    image: string;
    description: string;
    descriptionEn: string;
    descriptionIt: string; 
    alt: string; 
    altEN: string;
    altIT: string;
}

