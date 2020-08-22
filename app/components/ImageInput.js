import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import colors from '../config/colors';
import ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';

function ImageInput({imageUri, onChangeImage}) {
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure?', [
        {
          text: 'Yes',
          onPress: () => onChangeImage('null'),
        },
        {text: 'No'},
      ]);
  };

  const selectImage = async () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(
      {
        noData: true,
        mediaType: 'photo',
        quality: 0.5,
      },
      response => {
        // console.log('Response = ', response);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          // const source = response.uri;
          // console.log('response', JSON.stringify(response));
          // const source = {uri: response.uri};
          // console.log(source);
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          if (response.uri) {
            onChangeImage(response.uri);
          }

          // this.setState({
          //   avatarSource: response.uri,
          // });
        }
      },
    );
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            name="camera"
            type="material-community"
            color={colors.medium}
            size={40}
          />
        )}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
