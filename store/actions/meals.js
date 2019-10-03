// identificadores únicos que guardamos em constantes
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"


// action não passa de uma função que devolve um objeto
// reducer não passa de uma função
export const toggleFavorite = (id) => {
    // Retorna um objeto que descreve essa ação
    return {
        type : TOGGLE_FAVORITE, 
        mealId : id 
    }
}