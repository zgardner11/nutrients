// Nutrition API

var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze',
  params: {imageUrl: 'https://spoonacular.com/recipeImages/635350-240x150.jpg'},
  headers: {
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': 'd1b007a62emsh5c5c756e877edafp125af9jsncd06ab8a202e'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});