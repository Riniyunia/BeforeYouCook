class PieMeal {
    static searchPieMeal() {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Pie`)
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

export default PieMeal;