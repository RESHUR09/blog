import { usePathname } from 'next/navigation';
import NavigationUI from './navPresenter';
import { INavPathProps } from './navTypes';

export default function Navigation() {
  const NAVIGATION_ITEMS = [
    { title: 'home', page: '/' },
    { title: 'daily', page: '/daily' },
    { title: 'post', page: '/post' },
    { title: 'contact', page: '/contact' },
  ];
  const pathName = usePathname();
  const isActive: INavPathProps['isActive'] = (path) => {
    if (path === '/') {
      return pathName === '/';
    }
    return path === pathName;
  };
  return (
    <NavigationUI NAVIGATION_ITEMS={NAVIGATION_ITEMS} isActive={isActive} />
  );
}
