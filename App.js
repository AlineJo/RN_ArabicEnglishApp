
import React from 'react';
import type { Node } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

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


  const [isEnabled, setIsEnabled] = useState(false);

  const getIsEnableAndChangeLanguage = previousState => {
    currentState = !previousState;
    if (currentState) {
      changeLanguage('ar');
    } else {
      changeLanguage('en');
    }
    return currentState;
  };
  const toggleSwitch = () => { setIsEnabled(getIsEnableAndChangeLanguage); }


  return (

    <View
      style={styles.root}>

      <View style={styles.hContainer}>


        <Text style={styles.textEn}>EN</Text>

        <Switch
          style={styles.switch}
          trackColor={styles.trackColor}
          thumbColor={isEnabled ? "#FFF" : "#bb2124"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

        <Text style={styles.textAr}>ع</Text>

      </View>


      <View style={styles.textArea}>

        <Text>  {t('title')}</Text>
        <Text>  {t('message')}</Text>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#e3e3e3',
    paddingTop: 56
  },

  hContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  switch: {
    marginStart: 4,
  },
  textArea: {
    padding: 16,
  },

  textAr: {
    marginTop: 2
  },

  textEn: {
    marginTop: 2
  },

  trackColor: {
    false: "#81b0ff",
    true: "#22bb33"
  }
});

export default App;
