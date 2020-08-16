class TartMeal {
    static searchTartMeal() {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Tart`)
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

export default TartMeal;