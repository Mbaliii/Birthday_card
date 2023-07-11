
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
      <View style={styles.main}>
        <Text >You are the princess and the fairytale of my life.
          From the second I held you in my arms and looked into your eyes,
          I knew you'd be my special little girl. I knew you'd bring me love and hope and joy,
          and I was right.
          You've been an angel. Happy Birthday! Love.</Text>
      </View>
      {/* <Button title="Open Me"></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan'
  },
  main: {
    margin: 16,
    padding: 10,
  }
});
