import * as React from "react";
import { Category_Land } from "types/land";

declare module 'react-wheel-of-prizes'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
declare global {
  interface Window {
    ethereum: any;
  }
}



export interface PropsType {
  status?:Category_Land
  children?: React.ReactNode;
  column?: number;
  row?: number;
  landItem?: any
  onClick?:()=>void;
}


