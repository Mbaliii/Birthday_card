
import {StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ margin: 10, padding: 10 }}>YIPEEEE</Text>
      </View>
      <View style={styles.main}>
        <Text style={{}}>HAPPY BIRTHDAY</Text>
      </View>
      <Button title="Open Me"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
  }
});


