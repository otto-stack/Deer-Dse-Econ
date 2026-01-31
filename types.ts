
export enum ViewType {
  MAIN = 'MAIN',
  ARSENAL = 'ARSENAL',
  PROCESS = 'PROCESS',
}

export interface NavLinkProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}
