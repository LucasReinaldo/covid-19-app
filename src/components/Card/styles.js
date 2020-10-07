import styled from "styled-components/native";

export const Container = styled.View`
  /* flex: 1; */
  border-radius: 8px;
  padding: 6px 16px;
  background-color: #2b3240;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  background-color: #333b4c;
  height: 54px;
  width: 54px;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const Tile = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const Cases = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
`;
