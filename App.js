/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';

function App() {
  const [appName, setAppName] = useState('My First App');
  const [random, setRandom] = useState([36, 999]);

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandom([...random, randomNum]);
  };

  const onDeleteRandomNum = position => {
    setRandom(random.filter((num, index) => position !== index));
  };
  return (
    // 화면을 렌더링 하기위해서는 View 태그가 필요하다. View는 화면을 채우는 컨테이너
    <View style={styles.mainView}>
      <Header name={appName} />
      <View>
        <Text style={styles.mainText} onPress={() => alert('Hello World')}>
          Hello World
        </Text>
      </View>
      <Generator add={onAddRandomNum} />
      <ScrollView
        style={{width: '100%'}}
        // onMomentumScrollBegin={() => alert('begin')}
        // onMomentumScrollEnd={() => alert('end')}
        // onScorll={() => alert('scroll')}
        // onContentSizeChange={(width, height) => alert(height)}
      >
        <NumList num={random} deleteFunction={onDeleteRandomNum} />
      </ScrollView>
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
    // justifyContent: 'center',
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
