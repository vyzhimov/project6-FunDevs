import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const TitleMain = styled.h2`
  text-align: center;
  font-size: ${theme.fontSizes[7]};
  margin-bottom: 36px;
  margin-top: 160px;
  font-family: Manrope-Bold;

  @media screen and (max-width: 747px) {
    font-size: 24px;
    margin-bottom: 24px;
    margin-top: 100px;
  }
`;

export const List = styled.ul`
  margin-top: 24px;
  margin-bottom: 60px;

  @media screen and (min-width: 748px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Item = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  background-color: #ffffff;
  width: 280px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 290px;
    margin: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 300px;
    margin: 16px;
  }
`;

export const Title = styled.a`
  font-size: ${theme.fontSizes[3]};
  font-weight: 700;
  color: ${theme.colors.blue};
  text-decoration: none;
`;

export const ImgThumb = styled.div`
  margin-right: 12px;
  margin-top: 18px;

  @media screen and (max-width: 747px) {
    width: 100px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    width: 140px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
  }
`;

export const Img = styled.img`
  @media screen and (max-width: 747px) {
    width: 100px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    width: 140px;
    padding: 5px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    padding: 5px;
  }
`;

export const Contacts = styled.div`
  font-size: ${theme.fontSizes[0]};
  font-weight: 500;
  color: ${theme.colors.black};
  margin-top: 12px;

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: ${theme.fontSizes[1]};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${theme.fontSizes[2]};
  }
`;

export const WrapperCard = styled.div`
  display: flex;
`;

export const WrapperInfo = styled.div`
  text-align: left;
  padding: 0px;
`;

export const ContactTitle = styled.div`
  margin: 0px;
  font-size: ${theme.fontSizes[0]};
  font-family: Manrope-Bold;

  @media screen and (min-width: 767px) {
    font-size: ${theme.fontSizes[2]};
  }
`;

export const ContactsLink = styled.a`
  text-decoration: none;
  font-size: ${theme.fontSizes[0]};
  font-weight: 500;
  color: ${theme.colors.black};
  transition: color 150ms ease-in;

  &:hover,
  &:focus {
    color: ${theme.colors.blue};
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: ${theme.fontSizes[1]};
  }

  @media screen and (min-width: 1280px) {
    font-size: ${theme.fontSizes[2]};
  }
`;
