import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface TableRows {
  id: number | string;
  [x: string]: any;
  name: string;
  date: string;
  amount: string;
  status: string;
  action?: React.JSX.Element;
}
