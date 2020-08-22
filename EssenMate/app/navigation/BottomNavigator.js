import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import routes from "./routes";
import AdminButton from "./AdminButton";
import BusinessScreen from "../screens/BusinessScreen";
import AdminScreen from "../screens/AdminScreen";
import EventScreen from "../screens/EventScreen";
import AppNavigator from "./AppNavigator";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.Business}
      component={AppNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon
            name="business-center"
            type="material"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name={routes.Admin}
      component={AdminScreen}
      options={{
        tabBarVisible: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name="edit" type="entypo" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
