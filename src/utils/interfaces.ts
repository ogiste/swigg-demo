import {IconType} from "react-icons";

export interface CustomLink {
  href?: string;
  icon?: IconType;

  handleClick?(input?: any): void;

  title: string;
}