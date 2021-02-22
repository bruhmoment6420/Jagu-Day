import React, { useState } from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';
import email from 'react-native-email';

const handleEmail = (userWish) => {
  const to = ['tjaglul26@gmail.com'];
  email(to, {
    subject: 'Happy Birthday Jaglul (Sent From Jagu Day App (JDA))',
    body: userWish,
  }).catch(console.error);
};

const throwToast = () => {
  ToastAndroid.show('Wish Service Started', ToastAndroid.SHORT);
};

export default function WishHandler() {
  const [wish, setWish] = useState('');

  return (
    <View style={styles.textContainer}>
      <TextInput
        label="Send Wish To The Jagu"
        mode="outlined"
        onChangeText={(wish) => setWish(wish)}
        onSubmitEditing={() => {
          handleEmail(wish);
          throwToast();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 20,
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});
