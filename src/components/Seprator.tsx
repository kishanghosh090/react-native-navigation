import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Seprator = () => {
  return <View style={styles.seprator}></View>;
};

export default Seprator;

const styles = StyleSheet.create({
  seprator: {
    width: '100%',
    height: 0.8,
    backgroundColor: 'grey',
  },
});
