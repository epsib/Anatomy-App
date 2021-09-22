import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Bone from './screens/Bone';
import Brain from './screens/Brain';
import Heart from './screens/Heart';
import Lungs from './screens/Lungs';
import Stomach from './screens/Stomach';

// or any pure javascript modules available in npm
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <View>
      <AppContainer />
      
    </View>
  );
}

var switchScreens = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Bone: Bone,
  Brain: Brain,
  Heart: Heart,
  Lungs: Lungs,
  Stomach: Stomach,
});

const AppContainer = createAppContainer(switchScreens);
