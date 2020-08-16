class RandomMeal {
    static searchRandomMeal(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
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

export default RandomMeal;