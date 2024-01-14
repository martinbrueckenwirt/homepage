import appDescript from '../../data/appDescript';
import { AppDescript } from '../app/[locale]/components/types';

export default function getPersonsForType(type: string): string {
    const apartment: AppDescript | undefined = appDescript.find((apartment: unknown) => (apartment as AppDescript).type === type) as AppDescript | undefined;
    return apartment?.persons || '';
}