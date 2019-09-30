import React from 'react';
import { Text, View, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import CatItem from '../components/CatItem'

export default FavoritesScreen = props => {

const {navigate} = props.navigation
const meals = MEALS.filter((item) => item.id === 'm2' )

    return (
    <View style={{flex : 1, justifyContent : 'center', alignItems: 'center', margin : 15}}>
        <FlatList 
            data={meals}
            renderItem={({item}) => <CatItem navigate={navigate} data={item} />}
            keyExtractor={item => item.id}
        />
    </View>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle : 'Your Favorites'
}