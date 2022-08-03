import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AppColor } from './src/config';
import Navigation from './src/navigation';




const App = () => {

  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: AppColor.BACKGROUND
  }
});

export default App;
