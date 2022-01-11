
import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

//these imports are important for translation !

import { useState } from 'react';
import './assets/i18n/i18n';
import { useTranslation } from 'react-i18next';


const App: () => Node = () => {

  const { t, i18n } = useTranslation();

  const [currentLanguage, setLanguage] = useState('en');

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  return (
 
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
          {t('title')}{' '}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
          {t('message')}
        </Text>
        <Pressable
          onPress={() => changeLanguage('en')}
          style={{
            backgroundColor:
              currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>Select English</Text>
        </Pressable>
        <Pressable
          onPress={() => changeLanguage('ar')}
          style={{
            backgroundColor:
              currentLanguage === 'ar' ? '#33A850' : '#d3d3d3',
            padding: 20,
          }}>
          <Text>للغة العربية</Text>
        </Pressable>
      </View>
 
  );
};

const styles = StyleSheet.create({

});

export default App;
