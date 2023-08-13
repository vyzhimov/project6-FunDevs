import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme/theme';

export const Title = styled.div`
  font-size: 20px;

  @media screen and (max-width: 767px) {
    margin-right: 70px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes[5]};
  }
`;

export const ContainerMain = styled.div`
  width: 100%;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1260px) {
    // margin-right: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 747px) {
    margin-left: 20px;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1400px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const AddButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  background: ${theme.colors.blue};
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: ${theme.fontSizes[2]};
  line-height: 19px;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in, background-color 250ms ease-in;
  width: 130px;
  height: 40px;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const IconWrapper = styled('div')`
  flex-direction: column;
  align-items: center;
  margin-left: 8px;
  color: ${theme.colors.blue};
`;
