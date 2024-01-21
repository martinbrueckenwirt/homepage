/* https://next-intl-docs.vercel.app/docs/routing/navigation */
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['de','en', 'it'] as const;
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});