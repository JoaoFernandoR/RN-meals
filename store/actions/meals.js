// identificadores únicos que guardamos em constantes
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"


export const toggleFavorite = (id) => {
    // Retorna um objeto que descreve essa ação
    return {
        type : TOGGLE_FAVORITE, 
        mealId : id 
    }
}