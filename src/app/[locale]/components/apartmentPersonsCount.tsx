"use client"
import {useState} from 'react';
import {AppartmentModuleProps} from './types';
import  appDescript  from '../../../../data/appDescript';
import { AppDescript } from '../components/types';



export default function  ApartmentPersonsCount(props:AppartmentModuleProps):any {

    const[isLoading, setIsLoading] = useState(false);
    const[isLoadingFinished, setIsLoadingFinished] = useState(false);
    const[persons, setPersons] = useState("");
   
    let dataPersons: string;
    console.log(' apartmentPersonsCount  ' ,props);
    
    async function getPersonsForType(type: string): string {
        const apartment:string = appDescript.find(apartment => apartment.type === type);
        return apartment.persons;
    }

    async function getPersons(type: AppartmentModuleProps): any {
       
        let myType = type.appType;
        setIsLoading(true);
        console.log(' apartmentPersonsCount  ' ,myType);
        try {
            /*dataPersons = await getPersonsForType(myType);*/
           /* setPersons(dataPersons); */

        } catch (error) {
            console.error(error);
        }   
        setIsLoading(false);
        setIsLoadingFinished(true);

        return ("5")
    } 

    if (isLoadingFinished === false) {   
    getPersons(props);
    }

    if (isLoadingFinished === true) {
        return (
           <div>
            {!isLoading ? 
                <p>{persons} </p>
                :
                <p>Loading ApartmentPersonsCount...</p> 
            }
           </div>
        )
    }


      
    }


