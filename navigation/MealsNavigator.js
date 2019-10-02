import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from 'react-navigation-drawer'
// screens
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
// Componentes
import Colors from '../constants/Colors'


const MealsNavigator = createStackNavigator({
    Categories : {
        screen : CategoriesScreen,
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

const FilterNavigator = createStackNavigator({
    Filter : {
        screen : FiltersScreen
    }
},{
    defaultNavigationOptions : {
        headerStyle : {backgroundColor : Colors.primary},
        headerTintColor : Colors.secondary,
        headerTitle : 'Filter Meals'
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

const MainNavigator = createDrawerNavigator({
    Meals : {
        screen : MealTabs,
        navigationOptions : {
            drawerIcon : ({tintColor}) => <MaterialIcons name='restaurant' size={20} color={tintColor}/>
        }
    },
    Filter : {
        screen : FilterNavigator,
        navigationOptions : {
            drawerIcon : ({tintColor}) => <MaterialIcons name='filter-list' size={20} color={tintColor}/>
        }
    }
},{
    drawerWidth : 150,
    drawerType : 'slide',
    contentOptions : {
        activeTintColor : Colors.secondary
    }
})

export default createAppContainer(MainNavigator)