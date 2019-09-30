import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

export default function Header() {
    return(
        <View style={estilos.header}>
            <Text> Título </Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    header : {
        flex : 1,
        flexDirection: 'row',
        margin : 10,
        alignItems: 'center',
        padding : 5,
    },
    headerText : {
        marginHorizontal : 17
    },
    iconView : {
        backgroundColor: 'orange',
        borderRadius : 18,
        padding : 4,
    }
})