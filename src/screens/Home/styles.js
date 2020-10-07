import styled, { css } from "styled-components/native";
import { height, width } from "../../global.styles";

export const Container = styled.View`
  flex: 1;
  background-color: #1c2732;
`;

export const Background = styled.ImageBackground`
  width: ${width}px;
  height: ${height / 4}px;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  margin-top: ${height / 8}px;
`;

export const HeaderText = styled.Text`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
  margin-bottom: 14px;
`;

export const Box = styled.View`
  flex-direction: row;
  margin: 28px 12px;
`;

export const OptionContainer = styled.View`
  margin: 0 4px;
  flex-direction: row;
  flex: 1;
`;

export const OptionTextContainer = styled.View`
  border-radius: 8px;
  padding: 6px;
  background-color: "rgba(255, 255, 255, 0.291821)";
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isActive &&
    css`
      background-color: "rgba(255, 255, 255, 0.6)";
    `}
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const TabContainer = styled.View`
  align-items: center;
  background-color: #fffe;
  border-radius: 6px;
  border: 1px solid #fff;
  justify-content: space-between;
  margin: 22px 16px 0;
`;

export const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: -14px;
  padding: 6px;
`;

export const Tab = styled.View`
  align-items: center;
  background-color: transparent;
  border-color: transparent;
  border-radius: 6px;
  flex-grow: 1;
  justify-content: center;
  padding: 12px;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #fff;
      border: 1px solid #fff;
    `}
`;

export const TabText = styled.Text`
  font-size: 14px;
  font-weight: 600;

  ${(props) =>
    props.isSelected &&
    css`
      font-size: 15px;
    `}
`;
