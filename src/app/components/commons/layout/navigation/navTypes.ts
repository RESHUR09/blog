export interface INavUIProps {
  NAVIGATION_ITEMS: Array<{
    title: string;
    page: string;
  }>;
  isActive: (path: string) => boolean;
}

export interface INavPathProps {
  isActive: (path: string) => boolean;
}
