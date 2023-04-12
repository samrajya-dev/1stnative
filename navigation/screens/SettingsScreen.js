import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text 
        onPress={() => navigation.navigation('Home')}
        style={{ fontSize: 26, fontWeight: 'bold'}}>Settings Screen </Text>
    </View>
  );
}