import React from 'react';
import { Text, View, Button, Dimensions, StyleSheet, Image } from 'react-native'
import { HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const {width} = Dimensions.get('window')

export default CategoriesScreen = (props) => {


    const {navigation} = props
    const data = navigation.getParam('data')
    const { id, 
    categoryIds, 
    title ,
    affordability ,
    complexity ,
    imageUrl ,
    duration ,
    ingredients ,
    steps ,
    isGlutenFree ,
    isVegan ,
    isVegetarian ,
    isLactoseFree} = data


    return (
        <View style={estilos.firstView}>
            <Text style={{fontSize : 20, textAlign : 'center', marginVertical : 10, fontFamily : 'chilanka-regular'}}> {title.toUpperCase()}</Text>
            <View style={estilos.imgContainer}>
                <Image source ={{uri : imageUrl}} style={estilos.img}/>
            </View>
            <View style={estilos.textView}>
                <Text>
                    Recipe Duration : {duration} minutes
                </Text>
            </View>
            <View style={estilos.textView}>
                {(isVegan) ? <Text>Vegan Recipe</Text> : <Text>Not a Vegan Recipe</Text> }
            </View>
            <Button title='Go to Start Screen' onPress={() => navigation.popToTop()}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    firstView : {
        flex : 1,
        margin : 10,
        alignItems : 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    imgContainer : {
        width : width * 0.9,
        height : 200,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        overflow : 'hidden',
        marginBottom: 15,
    },
    img : {
        width : '100%',
        height : '100%',
    },
    textView : {
        borderColor : '#c1c1c1', 
        borderBottomWidth : 1, 
        width : width * 0.9,
        padding : 6,
        marginBottom : 6
    }
})

CategoriesScreen.navigationOptions = (navigationData) => {

    const data = navigationData.navigation.getParam('data')
    const MyTitle = data.title

    return {
        headerTitle : MyTitle,
        headerRight : <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => console.log('mark as favorite')}/>
        </HeaderButtons>
    }

}