/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import {Icon} from '@michaelbnd/react-native-ionicons';

import names from './names.json';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          marginLeft: 32,
          paddingTop: 32,
          paddingBottom: 16,
          fontWeight: '600',
          fontSize: 24,
        }}>
        react-native-ionicons
      </Text>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 16}}
        numColumns={5}
        data={names}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={{padding: 16}}>
            <Icon name={item} size={40} color="#000" />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
