export interface CustomLink {
  href?: string;
  handleClick?(input?: any): void;
  title: string;
}