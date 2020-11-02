import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => console.log('Button pressed')}
        title='Go to the Components Demo'
      />
      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 76,
  },
});

export default HomeScreen;
