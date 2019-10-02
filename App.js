import React, {useState} from 'react';
import MealsNavigator from './navigation/MealsNavigator'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import { useScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import mealsReducer from './store/reducers/meals'
import { Provider } from 'react-redux'

// chamar essa função para melhorar a performance do nosso aplicativo
useScreens()

// Aqui não precisariamos usar o combineReducers porque usaremos apenas um, mas sempre será utilizado
// temos um reducer principal, um root reducer.
const rootReducer = combineReducers({
  meals : mealsReducer
})

const store = createStore(rootReducer)

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
    // Necessário para utilizar o store, as propriedades do redux em toda nossa aplicação.
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
