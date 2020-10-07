import React from "react";
import { ScrollView, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import background from "../../../assets/images/world-map.png";

import data from "../../../data";

import Card from "../../components/Card";
import Chart from "../../components/Chart";

import {
  Container,
  Background,
  HeaderContainer,
  HeaderText,
  Box,
  OptionContainer,
  OptionTextContainer,
  OptionText,
  TabContainer,
  Wrapper,
  Tab,
  TabText,
} from "./styles";

// TODO: Dropdown refresh

const Home = () => {

  

  return (
    <Container>
      <Background source={background}>
        <HeaderContainer>
          <HeaderText>covid-19 status</HeaderText>
          <Box>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <OptionContainer>
                <OptionTextContainer isActive={true}>
                  <OptionText>GLOBAL</OptionText>
                  <Ionicons
                    name="md-close"
                    size={20}
                    color="red"
                    style={{ marginLeft: 8 }}
                  />
                </OptionTextContainer>
              </OptionContainer>
              <OptionContainer>
                <OptionTextContainer>
                  <OptionText>IRELAND</OptionText>
                </OptionTextContainer>
              </OptionContainer>
            </ScrollView>
            <View style={{ marginLeft: "auto", marginRight: 4 }}>
              <Ionicons name="ios-search" size={32} color="white" />
            </View>
          </Box>
        </HeaderContainer>
      </Background>

      <TabContainer>
        <Wrapper>
          <Tab>
            <TabText>Last Week</TabText>
          </Tab>
          <Tab>
            <TabText>Last 2 Weeks</TabText>
          </Tab>
          <Tab isSelected={true}>
            <TabText isSelected={true}>Last Month</TabText>
          </Tab>
          <Tab>
            <TabText>All</TabText>
          </Tab>
        </Wrapper>
      </TabContainer>

      <View style={{ marginTop: 24, marginHorizontal: 12 }}>
        <Card icon="md-pulse" title="CASES" bg="red" number="4604" />
        <Card icon="md-medical" title="RECOVERED" bg="#FFF" number="137" />
        <Card
          icon="ios-heart-dislike"
          title="DEATH CASES"
          bg="#FFF"
          number="25"
        />
      </View>

      <Chart data={data} />
    </Container>
  );
};

export default Home;
