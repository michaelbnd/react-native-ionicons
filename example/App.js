/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import names from './names.json';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          marginLeft: 32,
          paddingVertical: 32,
          fontWeight: '600',
          fontSize: 24,
        }}>
        react-native-ionicons
      </Text>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 32}}
        data={names}
        keyExtractor={item => item}
        renderItem={({item, index}) => <Text>{item}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
