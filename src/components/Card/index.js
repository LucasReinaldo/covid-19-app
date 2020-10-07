import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  Container,
  Title,
  Tile,
  HeaderContainer,
  Cases,
  IconContainer,
} from "./styles";

const Card = ({ icon, bg, title, number }) => {
  return (
    <Container>
      <HeaderContainer>
        <IconContainer>
          <Ionicons
            name={icon}
            size={32}
            color={bg == "red" ? "#FFF" : "red"}
          />
        </IconContainer>
        <Tile>
          <Title>{title}</Title>
          <Cases>{number}</Cases>
        </Tile>
        <View>
          <TouchableOpacity>
          <Feather name="chevron-right" size={24} color="#FFF" />
        </TouchableOpacity>
        </View>
      </HeaderContainer>
    </Container>
  );
};

export default Card;
