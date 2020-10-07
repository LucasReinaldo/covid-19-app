import React from "react";
import { Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { Container, Title, GraphContainer } from "./styles";

const Chart = ({ data }) => {
  const dataArray = data.reduce(
    (_, obj) => Object.values(obj).map((y) => y),
    []
  );

  return (
    <Container>
      <Title style={{color: '#fff'}}>cases view</Title>
      <GraphContainer>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: dataArray,
            },
          ],
        }}
        width={Dimensions.get("window").width - 32}
        height={280}
        
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#fffe",
          backgroundGradientFrom: "#fffe",
          backgroundGradientTo: "#fffe",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "3",
            stroke: "red",
          },
        }}
        bezier
        style={{ borderRadius: 8 }}
      />
      </GraphContainer>
    </Container>
  );
};

export default Chart;
