/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {Icon} from '@michaelbnd/react-native-ionicons';

import names from './names.json';

function PickerItem({tag, selection, setSelection}) {
  return (
    <TouchableOpacity
      style={{padding: 6}}
      onPress={() => {
        setSelection(tag);
      }}>
      <Text
        style={{
          color: '#007aff',
          fontWeight: '600',
          fontSize: 16,
          textDecorationLine: selection === tag ? 'underline' : undefined,
        }}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
}

const App = () => {
  const {width} = useWindowDimensions();
  const iconSize = (width - 6 * 32) / 5;
  const [color, setColor] = useState('');
  const [iconStyle, setIconStyle] = useState('Outline');

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          paddingHorizontal: 32,
          paddingTop: 20,
          paddingBottom: 20,
          fontWeight: '600',
          fontSize: 30,
        }}>
        react-native-ionicons
      </Text>
      <View
        style={{
          marginHorizontal: 32,
          flexDirection: 'row',
          alignItems: 'center',
          paddingBottom: 8,
        }}>
        <Text style={{fontSize: 16, color: '#007aff', fontWeight: '600'}}>
          #
        </Text>
        <TextInput
          style={{fontSize: 16, color: '#007aff', fontWeight: '600'}}
          autoCapitalize={'none'}
          value={color}
          onChangeText={text => {
            setColor(text.replace(/[^0-9a-f]/g, ''));
          }}
          placeholder="00c7be"
          maxLength={6}
        />
        <View style={{flex: 1}} />
        <PickerItem
          tag="Outline"
          selection={iconStyle}
          setSelection={setIconStyle}
        />
        <PickerItem
          tag="Filled"
          selection={iconStyle}
          setSelection={setIconStyle}
        />
        <PickerItem
          tag="Sharp"
          selection={iconStyle}
          setSelection={setIconStyle}
        />
      </View>
      <FlatList
        contentContainerStyle={{paddingHorizontal: 16}}
        numColumns={5}
        data={names}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={{padding: 16}}>
            <Icon
              name={item}
              size={iconSize}
              color={color.length !== 6 ? '#000' : '#' + color}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
