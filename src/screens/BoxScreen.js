import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOnestyle} />
      <View style={styles.viewTwoparent}>
        <View style={styles.viewTwostyle} />
      </View>
      <View style={styles.viewThreestyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOnestyle: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
  viewTwoparent: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewTwostyle: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
  },
  viewThreestyle: {
    backgroundColor: 'purple',
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
