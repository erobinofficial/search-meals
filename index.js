const searchFood = () =>{
    const searchBox = document.getElementById('search-field');
    const searchText = searchBox.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    searchBox.value = '';
    fetch(url)
       .then(response => response.json())
       .then(data => displayMeals(data.meals));   
}

const displayMeals = meals => {
  const searchResults = document.getElementById('search-results');
  meals.forEach(meal =>{
    // console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})" class="col shadow rounded-2">
      <div class="card h-80 border-0">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        </div>
      </div>
    </div>
    `;
    searchResults.appendChild(div);
  })
}
const loadMealDetail = mealDetail =>{
  const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
  fetch(url)
   .then(response => response.json())
   .then(data => displayMealDetails(data.meals[0]));
};
const displayMealDetails = meal => {
  console.log(meal);
}










const input = document.getElementById("search-field");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});