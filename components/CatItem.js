import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, ImageBackground, Dimensions} from 'react-native'

const {width } = Dimensions.get('window')

export default ListItem = props => {

    const {navigate, color} = props
    const {id, title, imageUrl, affordability, complexity, duration} = props.data

    return (
    <View style={estilos.gridItem}>
        <TouchableOpacity onPress={() => navigate('MealDetail', {data : props.data})} style={{height : 240}} >
        <ImageBackground source={{uri : imageUrl}} style={estilos.image}>
                    <View style={{flex : 1, justifyContent : 'flex-end' }}>
                        <View style={{backgroundColor : 'rgba(0,0,0,0.5)'}}>
                            <Text style={estilos.titulo}> {title} </Text>
                        </View>
                        <View style={estilos.textView}>
                            <Text style={[estilos.txt, {color : color}]}>
                            {duration} min
                            </Text>
                            <Text style={[estilos.txt, {color : color}]}>
                            {complexity.toUpperCase()}
                            </Text>
                            <Text style={[estilos.txt, {color : color}]}>
                            {affordability.toUpperCase()}
                            </Text>
                        </View>
                    </View>
        </ImageBackground> 
        </TouchableOpacity>
    </View>
    )
}


const estilos = StyleSheet.create({
    gridItem : {
        overflow : 'hidden',
        backgroundColor : 'white',
        width : width * 0.8,
        borderRadius : 10,
        marginBottom : 20,
    },
    textView : {
        paddingHorizontal : 5,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height : 30,
        backgroundColor : 'white'
    },
    txt : {
        fontFamily : 'chilanka-regular',
    },
    image : {
        height : '100%',
        width : '100%',
    },
    titulo : {
        color : '#FFF',
        fontSize : 16,
        textAlign : 'center',

    }
})