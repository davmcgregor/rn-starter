import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

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
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Go to Color Screen'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Go to Square Screen'
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Go to Text Screen'
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
