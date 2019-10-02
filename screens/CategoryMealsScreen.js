import React from 'react';
import { View, FlatList, ScrollView } from 'react-native'
// Podemos tirar o import de MEALS aqui, para usar o do redux
import { CATEGORIES } from '../data/dummy-data'
// Aqui utilizamos o useSelector que pega uma fatia do nosso estado
import { useSelector } from 'react-redux'
import CatItem from '../components/CatItem'

export default CategoryMeals = props => {
    
    const {navigate, getParam } = props.navigation

    const ID = getParam('id')
    const color = getParam('color')

    // useSelector aceita uma função, função que será executada pelo 'react-redux' para gente
    // meals é o identificador que usamos em combineReducers()
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    // trocamos MEALS.filter por availableMeals.filter
    const meals = availableMeals.filter(item => item.categoryIds.includes(ID))
    
    return (
    <ScrollView>
        <View style={{flex : 1, justifyContent : 'center', alignItems: 'center', margin : 15}}>
            <FlatList 
                data={meals}
                renderItem={({item}) => <CatItem navigate={navigate} data={item} color={color}/>}
                keyExtractor={item => item.id}
            />
        </View>
    </ScrollView>
    )
    
    
}

CategoryMeals.navigationOptions = (navigationData) => {

    const MyID = navigationData.navigation.getParam('id')
    const selectedCategory = CATEGORIES.find(cat => cat.id === MyID) 

    return {
        headerTitle : selectedCategory.title
    }

}
