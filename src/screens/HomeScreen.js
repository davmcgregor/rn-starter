import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to the Components Demo'
      />
      <Button
        onPress={() => navigation.navigate('ListScreen')}
        title='Go to List Demo'
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Screen'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Screen'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 76,
  },
});

export default HomeScreen;
