import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import ErrorMessage from "../components/forms/ErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";
import AppFormPicker from "../components/forms/AppFormPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: defaultStyles.colors.furnitureIcon,
    icon: "floor-lamp",
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: defaultStyles.colors.carIcon,
    icon: "car",
  },
  {
    label: "Cameras",
    value: 3,
    backgroundColor: defaultStyles.colors.cameraIcon,
    icon: "camera",
  },
  {
    label: "Games",
    value: 4,
    backgroundColor: defaultStyles.colors.gameIcon,
    icon: "cards",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: defaultStyles.colors.clothingIcon,
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: defaultStyles.colors.sportIcon,
    icon: "basketball",
  },
  {
    label: "Movies & Music123",
    value: 7,
    backgroundColor: defaultStyles.colors.movieAndMusicIcon,
    icon: "headphones",
  },
  { label: "Cameras", value: 8, backgroundColor: "green", icon: "lock" },
  { label: "Cameras", value: 9, backgroundColor: "green", icon: "lock" },
];

const handleSubmit = async () => {
  console.log("Submitted");
};

function AdminScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />
        <AppFormField
          name="product"
          maxLength={255}
          placeholder="Product Name"
        />
        <AppFormField
          name="description"
          numberOfLines={3}
          //multiline only works on Android
          multiline
          maxLength={255}
          placeholder="Product Description"
        />
        <AppFormField
          name="price"
          keyboardType="numeric"
          maxLength={8}
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Count down"
          width="50%"
        />

        <SubmitButton title="Upload" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default AdminScreen;
