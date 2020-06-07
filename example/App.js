/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Icon} from '5';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="add" size={40} color="orange" />
      <Text style={{fontWeight: '600', fontSize: 40}}>Add</Text>
    </SafeAreaView>
  );
}
