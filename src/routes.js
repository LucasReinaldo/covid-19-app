import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Details from "./screens/Details";

const App = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerRight: () => (
              <Image
                source={require("../assets/images/covid.png")}
                style={{
                  margin: 8,
                  width: 72,
                  height: 72,
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            ),
          }}
        />
        <App.Screen name="Details" component={Details} />
      </App.Navigator>
    </NavigationContainer>
  );
}
