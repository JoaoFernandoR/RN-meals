import React from 'react';
import { View, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import CatItem from '../components/CatItem'

export default CategoryMeals = (props) => {
    
    const {navigate, getParam } = props.navigation

    const ID = getParam('id')
    const color = getParam('color')

    const meals = MEALS.filter(item => item.categoryIds.includes(ID))
    
    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems: 'center', margin : 15}}>
            <FlatList 
                data={meals}
                renderItem={({item}) => <CatItem navigate={navigate} data={item} color={color}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
    
    
}

CategoryMeals.navigationOptions = (navigationData) => {

    const MyID = navigationData.navigation.getParam('id')
    const selectedCategory = CATEGORIES.find(cat => cat.id === MyID) 

    return {
        headerTitle : selectedCategory.title
    }

}
