import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
// Componentes
import Colors from '../constants/Colors'


const MealsNavigator = createStackNavigator({
    Categories : {
        screen : CategoriesScreen,
        navigationOptions : {
            headerTitle : 'Meals Categories',
            headerTitleStyle : {
                color : Colors.secondary,
            }
        }
    },
    CategoryMeals : {
        screen: CategoryMealsScreen
    },
    MealDetail : {
        screen : MealDetailScreen
    }
}, {
    defaultNavigationOptions : {
        headerStyle : {backgroundColor : Colors.primary},
        headerTintColor : Colors.secondary
    }
})

const FavoritesNavigator = createStackNavigator( {
    Favorites : {
        screen: FavoritesScreen
    },
    MealDetail : {
        screen : MealDetailScreen
    },
},{
    defaultNavigationOptions : {
        headerStyle : {backgroundColor : Colors.primary},
        headerTintColor : Colors.secondary,
    }
})

// const MealTabs = createBottomTabNavigator({
    // Meals : {
    //     screen : MealsNavigator,
    //     navigationOptions : {
    //         tabBarIcon: (tabInfo) => {
    //             return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
    //         }
    //     }
    // },
    // Favorites : {
    //     screen : FavoritesScreen,
    //     navigationOptions : {
    //         tabBarIcon: (tabInfo) => {
    //             return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    //         }
    //     }
    // }
// },{
//     tabBarOptions : {
//         activeTintColor : Colors.secondary,
//         activeBackgroundColor : Colors.primary,
//     }
// })

const MealTabs = createMaterialBottomTabNavigator({
    Meals : {
        screen : MealsNavigator,
        navigationOptions : {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            // Só funciona com o shifting effect.
            tabBarColor : Colors.primary
        }
    },
    Favorites : {
        screen : FavoritesNavigator,
        navigationOptions : {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor : Colors.secondary
        }
    }
},{
    shifting : true,
})

export default createAppContainer(MealTabs)