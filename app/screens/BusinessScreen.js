import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import { Card, ListItem, Button, Icon } from "react-native-elements";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function BusinessScreen({ navigation }) {
  return (
    <>
      <Screen>
        <ScrollView>
          <TouchableWithoutFeedback onPress={() => console.log("Pressed 0")}>
            <Card
              containerStyle={{
                borderRadius: 16,
              }}
              title="Sparkling Winery"
              titleStyle={{
                marginLeft: 8,
                textAlign: "left",
              }}
              image={require("../assets/sparkling_winery.png")}
            ></Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(routes.BusinessDetails)}
          >
            <Card
              containerStyle={{ borderRadius: 16 }}
              title="Taylors Seafood"
              titleStyle={{
                marginLeft: 8,
                textAlign: "left",
              }}
              image={require("../assets/taylors_seafood.png")}
            >
              {/* <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text> */}
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => console.log("Pressed 2")}>
            <Card
              containerStyle={{ borderRadius: 16 }}
              title="Fantastic Design"
              titleStyle={{
                marginLeft: 8,
                textAlign: "left",
              }}
              image={require("../assets/fantastic_design.png")}
            ></Card>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default BusinessScreen;
