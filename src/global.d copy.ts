import * as React from "react";



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
  children?: React.ReactNode;
  column?: number;
  row?: number;
  onClick?:()=>void;
}


