// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Home is where your WiFi connects automatily
          </Text>
        </View>
        </View>
    </SafeAreaView>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'center',       // Centers content horizontally
    backgroundColor: '#f5f5f5', // Optional background color
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',              // Text color
  },
});

export default HomeScreen;