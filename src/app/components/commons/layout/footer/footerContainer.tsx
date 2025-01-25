import FooterUI from './footerPresenter';

export default function Footer() {
  const CURRENT_DATE = new Date();
  const CURRENT_YEAR = CURRENT_DATE.getFullYear();
  return <FooterUI CURRENT_YEAR={CURRENT_YEAR} />;
}
