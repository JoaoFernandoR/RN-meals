import React from 'react';
import { FlatList } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import ListItem from '../components/ListItem'

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

