// Search box
const searchFood = () => {
  const searchBox = document.getElementById('search-field');
  const searchText = searchBox.value;
  if (searchText == '') {
    alert("filled out form");
  }
  else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    searchBox.value = '';
    fetch(url)
      .then(response => response.json())
      .then(data => {
      //   if (data.meals == null || data.meals == undefined || data.meals == '') {
      //     alert("No result found");
      //     displayMeals([]);
      //   }
      //   else {
      //     displayMeals(data.meals);
      //   }
      displayMeals(data.meals);
      });
  }
}
// Display meals
const displayMeals = meals => {
  console.log(meals);
  const searchResults = document.getElementById('search-results');
  searchResults.textContent = '';
  // console.log(meals.length);
  if(meals?.length == 0){
    searchResults.textContent = 'No meals found';
    return false;
  }
  
  else{
    meals.forEach(meal => {
      // console.log(meal);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-80 border-0 shadow rounded-2">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
          </div>
        </div>
      `;
      searchResults.appendChild(div);
    })
  }
}
const loadMealDetail = mealDetail => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetails(data.meals[0]));
};
const displayMealDetails = meal => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
          <div class="row g-0 border-0 shadow rounded-2">
            <div class="col-md-4">
              <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
            </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions}</p>
                    <a href="${meal.strYoutube}" class="btn btn-primary">Video Tutorial</a>
                  </div>
                </div>
           </div>
  `;
  mealDetails.appendChild(div);
}









// "Enter" Click reaction
const input = document.getElementById("search-field");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});