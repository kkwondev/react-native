/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/header';

function App() {
  const [appName, setAppName] = useState('My First App');
  return (
    // 화면을 렌더링 하기위해서는 View 태그가 필요하다. View는 화면을 채우는 컨테이너
    <View style={styles.mainView}>
      {/* <Header name={appName} /> */}
      <Text style={styles.mainText} onPress={() => alert('Hello World')}>
        Hello World
      </Text>
      {/* <View style={styles.subView}>
        <Text style={styles.mainText}>Hello World</Text>
      </View> */}
      {/* <View style={styles.subView}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.anotherSubView}>
        <Text style={styles.mainText}>Hello World</Text>
      </View> */}
    </View>
  );
}

// react-native StyleSheet create메서드 생성후 Style 지정하기.
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});

export default App;
