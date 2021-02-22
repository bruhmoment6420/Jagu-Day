import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card, Paragraph } from 'react-native-paper';

export default function SpamBox(props) {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Cover source={{ uri: props.image }} style={styles.cardImage} />
        <Card.Content style={styles.cardContent}>
          <Paragraph>{props.content}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
  cardStyle: {
    padding: 5,
  },
  cardImage: {
    height: 300,
  },
  cardContent: {
    marginTop: 20,
  },
});
