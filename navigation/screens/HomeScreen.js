import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text 
        onPress={() => alert('This is home screen')}
        style={{ fontSize: 26, fontWeight: 'bold'}}>Home Screen </Text>
    </View>
  );
}