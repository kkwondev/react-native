/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function NumList({num, deleteFunction}) {
  return num.map((item, i) => (
    <TouchableOpacity
      style={styles.numList}
      key={i}
      onPress={() => deleteFunction(i)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
}

// react-native StyleSheet create메서드 생성후 Style 지정하기.
const styles = StyleSheet.create({
  numList: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
