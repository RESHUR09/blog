import styled from "@emotion/styled";
import { Rock_Salt } from "next/font/google";
export const rockSalt = Rock_Salt({
  weight: ["400"],
  subsets: ["latin"],
});
export const Container = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  transform: rotate(-6deg);
  margin-bottom: 35px;
  font-family: ${rockSalt.style.fontFamily};
  cursor: pointer;
`;
export const Logo = styled.p`
  color: #555;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
`;
export const LogoRESHUR = styled.span`
  color: #98bcf9;
  transition: color 350ms ease-in;
  :hover {
    color: #ff6863;
  }
`;
