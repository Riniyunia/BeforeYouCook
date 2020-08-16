class PuddingMeal {
    static searchPuddingMeal() {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Pudding`)
        .then(response => {
            return response.json();
        }) 
        .then(responseJson => {
            if(responseJson.meals) {
                return Promise.resolve(responseJson.meals);
            } 
        }) 
   }
}

export default PuddingMeal;