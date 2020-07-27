/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Icon} from '@michaelbnd/react-native-ionicons';
import names from './names.json';

//TODO Layout
export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {names.map((item, index) => (
        <Icon name={item} key={index} size={40} color="orange" />
      ))}
      <Text style={{fontWeight: '600', fontSize: 40}}>Add</Text>
    </SafeAreaView>
  );
}
