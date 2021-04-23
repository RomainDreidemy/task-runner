import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NavigationHandler from './app/component/NavigationHandler';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationHandler />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
