import React from 'react';
import { View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import WishBox from './components/WishBox';

let wishes = [
  {
    wish:
      'I like romantic movies......  eh no what i meant was happy birthdaay - Arthob',
    key: 1,
  },
  {
    wish:
      'I am once again wishing Jaguar a happy birthday. It is a well known fact that jaguar lost in jungle but alas happy birthday. You are epic mighty wrinkle brain and help me do the quick maths in ass and countless other instances. -  Nehan',
    key: 2,
  },
  {
    wish: 'I wish jaglul a great and incredibly lit year - Tahlil',
    key: 3,
  },
  {
    wish: 'Happy birthday jaglul - Safoan',
    key: 4,
  },
  {
    wish: 'Happy birthday big E - Rupon',
    key: 5,
  },
  {
    wish: 'Happy birthday jaglul you are the top 10 epic of 2020 - Anas',
    key: 6,
  },
  {
    wish: 'Happy Birthday whore - Anan',
    key: 7,
  },
];

export default function WishesScreen() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <FlatList
        data={wishes}
        renderItem={({ item }) => <WishBox wish={item.wish} />}
      />
    </View>
  );
}
