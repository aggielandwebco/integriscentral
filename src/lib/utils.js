import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 


export const isIframe = window.self !== window.top;
<<<<<<< HEAD
=======

>>>>>>> 12b236b45efa8c52049dcb45a6ff3cbcad037dda

