'use client';
import Link from 'next/link';
import * as Styles from './navStyles';
import { INavUIProps } from './navTypes';

export default function NavigationUI(props: INavUIProps) {
  return (
    <Styles.Container>
      <Styles.Menu>
        {props.NAVIGATION_ITEMS.map((el) => (
          <Link href={el.page} key={el.title}>
            <Styles.Item className={props.isActive(el.page) ? 'active' : ''}>
              {el.title}
            </Styles.Item>
          </Link>
        ))}
      </Styles.Menu>
    </Styles.Container>
  );
}
