import  appDescript  from '../../data/appDescript';
import { AppDescript } from '../components/types';

export default function getPersonsForType(type: string): string {
    const apartment:AppDescript = appDescript.find(apartment => apartment.type === type);
    return apartment.persons;
}