// Redux é apenas uma combinação de actions e reducers
// Reducer é apenas uma função

import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/meals'

// inicializar um estado quando o aplicativo é aberto 
const initialState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favoriteMeals : [], 

}

// assim automaticamente carregamos nosso estado inicial state = initialState
// action será um objeto com a propriedade "type" que identifica a ação que ocorreu
const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0 ) {
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(existingIndex)
                return { ...state, favoriteMeals : updatedFavMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favoriteMeals : state.favoriteMeals.concat(meal)}
            }
        default : 
            return state
    }
}

export default mealsReducer