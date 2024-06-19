// src/MealCategories.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MealCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meal categories
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
        setCategories(response.data.meals);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch meals for selected category
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(response => {
          setMeals(response.data.meals);
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Categories</h1>
      <ul className="flex flex-wrap mb-6">
        {categories.map(category => (
          <li
            key={category.strCategory}
            onClick={() => setSelectedCategory(category.strCategory)}
            className="cursor-pointer bg-blue-500 text-white rounded-full px-4 py-2 m-2 hover:bg-blue-700 transition-colors duration-200"
          >
            {category.strCategory}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-4">{selectedCategory ? `${selectedCategory} Meals` : 'Select a category'}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meals.map(meal => (
          <li key={meal.idMeal} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 sm:h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{meal.strMeal}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealCategories;
