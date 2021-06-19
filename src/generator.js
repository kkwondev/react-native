/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Generator({add}) {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => add()} />
    </View>
  );
}

// react-native StyleSheet create메서드 생성후 Style 지정하기.
const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#d197cf',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
