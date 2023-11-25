export type AppartmentModuleProps = {
    type: string;
}

export type AppartementTeaserImage = {
    image:string, 
    description : string,
    alt: string,
    copyright: string,
    height: number,
    width: number,
    priority: boolean
}

export type GetBurgerImageProps = {
    burgerMenueVisible: boolean;
}

export type BurgerMenueProps ={
    visibility: boolean;  
    menueSlide:string;
};

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

export type NavigationProps = {
    windowScrollPosition: number;
    transparency: boolean;
}

