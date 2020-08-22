import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import stripe from "tipsi-stripe";
import Button from "../components/Button";
import { demoCardFormParameters } from "../demodata/demodata";
import colors from "../config/colors";
import LottieView from "lottie-react-native";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

export default class CardFormScreen extends PureComponent {
  static title = "Card Form";

  state = {
    loading: false,
    paymentMethod: null,
  };

  handleCardPayPress = async () => {
    try {
      this.setState({ loading: true, paymentMethod: null });

      const paymentMethod = await stripe.paymentRequestWithCardForm(
        demoCardFormParameters
      );

      this.setState({ loading: false, paymentMethod });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, paymentMethod } = this.state;

    return (
      <>
        <Screen>
          {!paymentMethod && (
            <View style={styles.container}>
              {/* <Text style={styles.header}>Card Form Example</Text>
        <Text style={styles.instruction}>
          Click button to show Card Form dialog.
        </Text> */}
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../assets/credit_card.png")}
                ></Image>
              </View>
              <View style={styles.priceContainer}>
                <AppText>
                  Item price: $80 {"\n\n"}
                  Qty: 1 {"\n\n"}
                  Total price: $80
                </AppText>
              </View>
              <Button
                text="Pay"
                style={styles.button}
                loading={loading}
                onPress={this.handleCardPayPress}
              />
            </View>
          )}
          {paymentMethod && (
            <LottieView
              autoPlay
              loop={false}
              onAnimationFinish={() => {
                console.log("onAnimationFinish");
                this.props.navigation.navigate(routes.BusinessDetails);
              }}
              source={require("../assets/animations/finished_payment.json")}
            />
          )}
        </Screen>
      </>
    );
  }
}

const styles = StyleSheet.create({
  priceContainer: {
    marginVertical: 8,
  },
  imageContainer: {
    width: 380,
    height: 200,
    backgroundColor: colors.white,
    marginLeft: 6,
    marginRight: 8,
  },
  image: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
  button: {
    width: "80%",
    overflow: "hidden",
    height: 35,
    margin: 8,
    borderRadius: 16,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instruction: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  paymentMethod: {
    height: 20,
  },
});
