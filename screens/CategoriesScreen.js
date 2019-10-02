import React from 'react';
import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/dummy-data'
import ListItem from '../components/ListItem'
import Colors from '../constants/Colors'

export default CategoriesScreen = (props) => {

    const {navigation} = props

    return (
    <FlatList 
        data={CATEGORIES} 
        renderItem={({item}) => <ListItem navigation={navigation} data={item} />} 
        numColumns={2} 
        keyExtractor={item => item.id}
        />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
    headerTitle : 'Meals Categories',
    headerTitleStyle : {
        color : Colors.secondary,
    },
    headerLeft : <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }    
}

