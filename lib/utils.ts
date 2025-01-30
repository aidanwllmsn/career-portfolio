import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const dockVariants = ({ className }: { className?: string }) => {
  return cn("flex flex-row gap-4 p-2 bg-gray-800 rounded-lg", className);
};