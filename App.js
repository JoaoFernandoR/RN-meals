import React, {useState} from 'react';
import MealsNavigator from './navigation/MealsNavigator'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import {useScreens} from 'react-native-screens'

// chamar essa função para melhorar a performance do nosso aplicativo
useScreens()

// Teste para mandar para o git

const loadFonts = () => {
  return Font.loadAsync({
    'chilanka-regular' : require('./assets/fonts/Chilanka-Regular.ttf'),
    'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-light' : require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-thin' : require('./assets/fonts/Roboto-Thin.ttf'),
  })
}

export default function App() {
  
  const [fontLoaded, setLoaded] = useState(false)


  if(!fontLoaded) {
      return (
      <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)} onError={(err) => console.log(err)}/>
      )
  }

  return (
    <MealsNavigator />
  );
}

