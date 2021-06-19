/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

function Header({name}) {
  return (
    // TouchableOpacity는 모바일 터치를 위한 태그? 투명해지는거 TouchableWithoutFeedback 투명해지지 않은것
    // onLongPress는 오래 눌러야 함수가 실행 되는것.
    // onPressIn은 즉각 반응!
    // onPressOut은 터치를 뗏을때 반응!
    <TouchableOpacity
      style={styles.header}
      //   onPress={() => alert('Hello world')}
      //   onLongPress={() => alert('Hello world')}
      //   onPressIn={() => alert('Hello world')}
      onPressOut={() => alert('Hello world')}>
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

// react-native StyleSheet create메서드 생성후 Style 지정하기.
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
