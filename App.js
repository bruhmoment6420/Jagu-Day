import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import SpamScreen from './screens/SpamScreen';
import WishesScreen from './screens/WishesScreen';
import SendWishScreen from './screens/SendWishScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Spams') {
              iconName = focused ? 'md-flame-outline' : 'md-flame';
            } else if (route.name === 'Wishes') {
              iconName = focused ? 'md-happy-outline' : 'md-happy';
            } else if (route.name === 'Send Wish') {
              iconName = focused ? 'mail-outline' : 'md-mail';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#6200ee',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Spams" component={SpamScreen} />
        <Tab.Screen name="Wishes" component={WishesScreen} />
        <Tab.Screen name="Send Wish" component={SendWishScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
