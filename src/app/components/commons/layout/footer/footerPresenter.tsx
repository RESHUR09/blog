'use client';
import * as Styles from './footerStyles';
import { IFooterUIProps } from './footerTypes';

export default function FooterUI(props: IFooterUIProps) {
  return (
    <Styles.Container>
      <Styles.Copyright>
        Copyright {props.CURRENT_YEAR} ERESHUR • All rights reserved.
      </Styles.Copyright>
    </Styles.Container>
  );
}
