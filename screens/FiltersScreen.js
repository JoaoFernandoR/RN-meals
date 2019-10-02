import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

export default function FiltersScreen() {
  return (
    <View>
        <Text>
            Hello from filter
        </Text>
    </View>
  );
}


FiltersScreen.navigationOptions = (navData) => {
  return {
  headerLeft : <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>    
  }
}