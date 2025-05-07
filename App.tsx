import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <View style={styles.hello}>
      <Text style={styles.helloText}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: '#333',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  helloText: {
    textAlign: 'center',
    fontSize: 40,
    color: '#DDD',
  },
});

export default App;
