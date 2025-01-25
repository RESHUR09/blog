import styled from '@emotion/styled';
export const Container = styled.nav``;
export const Menu = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 10px;
`;
export const Item = styled.li`
  color: #555;
  font-size: 0.9375rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  list-style: none;
  transition: all 350ms ease-in-out;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 10%;
    bottom: -4px;
    width: 80%;
    height: 1.2px;
    background: #666;
    transform: scaleX(0);
    transition: 0.4s;
  }
  &.active,
  :hover {
    color: #ff6863;
    ::after {
      transform: scaleX(1);
    }
  }
`;
