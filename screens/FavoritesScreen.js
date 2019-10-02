import React from 'react';
import { View, FlatList } from 'react-native'
// Assim como CategoryMeals, tiramos o MEALS da dummy-data e iremos utilizar o redux
// import { MEALS } from '../data/dummy-data'
import { useSelector } from 'react-redux'
import CatItem from '../components/CatItem'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

export default FavoritesScreen = props => {

    const {navigate} = props.navigation

    const availableMeals = useSelector(state => state.meals.favoriteMeals)

    return (
    <View style={{flex : 1, justifyContent : 'center', alignItems: 'center', margin : 15}}>
        <FlatList 
            data={availableMeals}
            renderItem={({item}) => <CatItem navigate={navigate} data={item} />}
            keyExtractor={item => item.id}
        />
    </View>
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
    headerTitle : 'Your Favorites',
    headerLeft : <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }        
}