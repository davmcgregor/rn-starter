import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title='Go to the Components Demo'
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('ListScreen')}>
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
