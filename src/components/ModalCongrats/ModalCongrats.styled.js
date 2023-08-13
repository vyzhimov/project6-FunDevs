import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';
import Button from 'components/Button/Button';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 92px;
  background-color: rgba(81, 81, 81, 0.6);

  @media screen and (min-width: 768px) {
    padding-top: 148px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 112px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 20px;
  text-align: center;
  align-items: center;
  width: 280px;
  margin-right: auto;
  margin-left: auto;
  padding: 68px 16px 60px 16px;

  @media screen and (min-width: 768px) {
    width: 608px;
    border-radius: 40px;
    padding: 60px 0;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.36;
    margin-bottom: 52px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.38;
    margin-bottom: 60px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  align-self: end;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #54adff;
  }
`;

export const StyledRxCross2 = styled(RxCross2)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  stroke: #54adff;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  border-radius: 50%;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    stroke: #fdf7f2;
  }
`;

export const ModalButton = styled(Button)`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: #fef9f9;
  background-color: #54adff;
  padding: 8px 0;
  gap: 12px;

  @media screen and (min-width: 768px) {
    width: 248px;
  }

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;
