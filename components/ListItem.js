import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native'


export default ListItem = props => {

    const {navigation, data} = props

    return (
    <TouchableOpacity onPress={() => 
        navigation.navigate('CategoryMeals', {id : data.id, color : data.color})} style={[estilos.gridItem, {backgroundColor : data.color}]} >
        <View style={estilos.textView}>
            <Text style={estilos.txt}>
                {data.title}
            </Text>
        </View>
    </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    gridItem : {
        flex : 1,
        margin : 15,
        height : 150,
        borderRadius : 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    textView : {
        flex : 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding : 10
    },
    txt : {
        fontFamily : 'roboto-bold',
        fontSize : 16
    }
})