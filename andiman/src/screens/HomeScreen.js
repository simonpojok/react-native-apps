import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (<View>
    <Text style={styles.text}>Hi There 1</Text>
    <Text style={styles.text}>Hi There 2</Text>
    <Text style={styles.text}>Hi There 3</Text>
    <Text style={styles.text}>Hi There 4</Text>
  </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
