import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a human-readable format
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

/**
 * Converts a date string into an ISO-formatted date string
 * @param dateString - The date string to convert
 * @returns ISO-formatted date string
 */
export function toISODate(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString();
} 