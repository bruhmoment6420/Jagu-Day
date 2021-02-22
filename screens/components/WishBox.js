import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function WishBox(props) {
  return <Text style={styles.wishBox}>{props.wish}</Text>;
}

const styles = StyleSheet.create({
  wishBox: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
  },
});
