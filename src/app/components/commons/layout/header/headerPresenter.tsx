'use client';
import Link from 'next/link';
import Logo from '../../logo/logoContainer';
import Navigation from '../navigation/navContainer';
import * as Styles from './headerStyles';

export default function HeaderUI() {
  return (
    <Styles.Container>
      <Link href={'/'} title="클릭시 메인페이지로 이동합니다.">
        <Logo />
      </Link>
      <Navigation />
    </Styles.Container>
  );
}
