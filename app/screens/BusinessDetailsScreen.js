import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Platform,
  Linking,
} from "react-native";
import Swiper from "react-native-swiper";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { Icon, Button } from "react-native-elements";
import FollowNotice from "../components/FollowNotice";
import routes from "../navigation/routes";
import AppCountDown from "../components/AppCountDown";
import { color } from "react-native-reanimated";

openGps = () => {
  var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
  var url = scheme + "-42.880720,147.398216 ?q=-42.878868, 147.393866";
  openExternalApp(url);
};

openExternalApp = (url) => {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert("ERROR", "Unable to open: " + url, [{ text: "OK" }]);
    }
  });
};

function BusinessDetailsScreen({ navigation }) {
  return (
    <>
      <Screen>
        <FollowNotice />
        <View style={styles.upper_container}>
          <Swiper
            color
            activeDotColor="#303030"
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={true}
          >
            <View style={styles.slide1}>
              <Image
                style={styles.image}
                source={require("../assets/lobster_1.jpeg")}
              ></Image>
            </View>
            <View style={styles.slide2}>
              <Image
                style={styles.image}
                source={require("../assets/lobster_2.jpg")}
              ></Image>
              {/* <Text style={styles.text}>Beautiful</Text> */}
            </View>
          </Swiper>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.midContainer}>
          <View style={styles.product_detail}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{}}>
                <AppText style={styles.product_title}>
                  Tasmanian Lobster
                </AppText>
              </View>
              <View style={{}}>
                <AppCountDown countDownVal={43200}></AppCountDown>
              </View>
            </View>

            <AppText style={styles.product_text}>
              Our food truck has been set up and ready to serve everyone in the
              community.{"\n\n"}Lobster $80 per kilo
            </AppText>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.button_container}>
              <Button
                buttonStyle={styles.button}
                title="Address"
                onPress={() => {
                  {
                    openGps();
                    // Platform.OS === "android"
                    //   ? Linking.openURL("geo:-42.925608,147.336261")
                    //   : Linking.openURL("maps:100,101");
                  }
                }}
              />
              <Button
                buttonStyle={styles.button}
                title="Chat"
                onPress={() => {
                  console.log("button pressed");
                }}
              />
              <Button
                buttonStyle={styles.button}
                title="Purchase"
                onPress={() => {
                  navigation.navigate(routes.Payments);
                }}
              />
            </View>
            <View style={styles.other_products_container}>
              <ScrollView>
                <View style={styles.other_products}>
                  <View style={styles.product_item}>
                    <Image
                      style={styles.image}
                      source={require("../assets/oyster.jpg")}
                    ></Image>
                    <AppText style={styles.other_product_text}>Oyster</AppText>
                  </View>
                  <View style={styles.product_item}>
                    <Image
                      style={styles.image}
                      source={require("../assets/scallop.jpg")}
                    ></Image>
                    <AppText style={styles.other_product_text}>Scallop</AppText>
                  </View>
                  <View style={styles.product_item}>
                    <Image
                      style={styles.image}
                      source={require("../assets/king_prawn.png")}
                    ></Image>
                    <AppText style={styles.other_product_text}>
                      King Prawns
                    </AppText>
                  </View>
                  <View style={styles.product_item}>
                    <Image
                      style={styles.image}
                      source={require("../assets/salmon_fillet.jpg")}
                    ></Image>
                    <AppText style={styles.other_product_text}>
                      Salmon Fillet
                    </AppText>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  button_container: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? 8 : 16,
  },
  button: {
    overflow: "hidden",
    height: Platform.OS === "android" ? 35 : 40,
    width: 100,
    margin: 8,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    borderRadius: 16,
    backgroundColor: colors.secondary,
  },
  other_products_container: {
    flex: 6,
  },
  other_products: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: colors.light,
  },
  product_item: {
    margin: 8,
    flexGrow: 1,
    backgroundColor: "white",
    width: 165,
    height: 165,
    borderRadius: 16,
    justifyContent: "center",
    overflow: "hidden",
  },
  other_product_text: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
    //zIndex for Android
    elevation: Platform.OS === "android" ? 1 : 0,
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    backgroundColor: colors.medium,
    textAlign: "center",
    bottom: 0,
  },
  divider: {
    marginVertical: 8,
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
  product_detail: {
    flex: 1,
  },
  product_title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  product_text: {
    marginTop: 8,
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  lowerContainer: {
    marginTop: 16,
    flex: 3,
  },
  midContainer: {
    flex: 2,
  },
  upper_container: {
    flex: 1,
    backgroundColor: "#303030",
  },
  wrapper: {},
  slide1: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BusinessDetailsScreen;
