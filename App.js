/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    // 화면을 렌더링 하기위해서는 View 태그가 필요하다. View는 화면을 채우는 컨테이너
    <View style={styles.mainView}>
      <Text>Hello World</Text>
    </View>
  );
}

// react-native StyleSheet create메서드 생성후 Style 지정하기.
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
