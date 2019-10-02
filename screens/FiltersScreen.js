import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

export default FiltersScreen = props => {

  const {navigation} = props

  const [isGlutenFree, setIsGlutenFree] = useState(false) 
  const [isLactoseFree, setIsLactoseFree] = useState(false) 
  const [isVegan, setIsVegan] = useState(false) 
  const [isVegetarian, setIsVegetarian] = useState(false) 

  saveInformation = useCallback(() => {

    appliedFilters = {
    glutenFree : isGlutenFree,
    lactoseFree : isLactoseFree,
    vegan : isVegan,
    vegetarian : isVegetarian
    }

    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    // Se já existisse parâmetros, os parâmetros novos iriam fundir com os antigos. Não iria sobreescrever
    navigation.setParams({save : saveInformation})
  }, [saveInformation])


  return (
    <View style={estilos.firstView}>
      <Text style={estilos.title}> Available Filters / Restrictions</Text>
      <View style={{alignItems : 'center'}}>
        <View style={estilos.switchView}>
          <Text style={estilos.txt}> Gluten-free</Text>
          <Switch value={isGlutenFree} onValueChange={(newValue) => setIsGlutenFree(newValue)}/>
        </View>
        <View style={estilos.switchView}>
          <Text style={estilos.txt}> Lactose-free</Text>
          <Switch value={isLactoseFree} onValueChange={(newValue) => setIsLactoseFree(newValue)}/>
        </View>
        <View style={estilos.switchView}>
          <Text style={estilos.txt}> Vegan </Text>
          <Switch value={isVegan} onValueChange={(newValue) => setIsVegan(newValue)}/>
        </View>
        <View style={estilos.switchView}>
          <Text style={estilos.txt}> Vegetarian </Text>
          <Switch value={isVegetarian} onValueChange={(newValue) => setIsVegetarian(newValue)}/>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  firstView : {
    flex : 1,
    margin : 10
  },
  title : {
    fontSize : 20, 
    textAlign : 'center', 
    marginVertical : 18, 
    fontFamily : 'chilanka-regular'
  },
  switchView : {
    width : '80%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 5,
  },
  txt : {
    fontFamily : 'roboto-medium',
    marginVertical : 12
  }
})


FiltersScreen.navigationOptions = (navData) => {
  return {
  headerLeft : <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
    </HeaderButtons>,    
  headerRight :  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')}/>
    </HeaderButtons>
  }
}

