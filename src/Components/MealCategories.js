import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaArrowRight } from 'react-icons/fa';

const MealCategories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Pasta');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Fetch meal categories
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
        // Extract first 5 categories
        const firstFiveCategories = response.data.meals.slice(5, 10);
        setCategories(firstFiveCategories);
        // Initialize selected category to the first one
        if (firstFiveCategories.length > 0) {
          setSelectedCategory(firstFiveCategories[0].strCategory);
        }
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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4 ">
      <h3 className="text-center font-bold mb-4 text-xl font-sans text-[#264e35]">Shop by Category</h3>
      <h1 className="text-center font-bold mb-8 text-4xl font-serif text-[#264e35]">Top Category Of Organic Food</h1>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-5 mb-6">
        {categories.map(category => (
          <div
            key={category.strCategory}
            onClick={() => handleCategoryClick(category.strCategory)}
            className={`cursor-pointer rounded-full inline-block px-6 py-2 text-sm sm:px-14 sm:py-3 transition-colors duration-200 text-center ${
              selectedCategory === category.strCategory
                ? 'bg-[#264e35] text-white font-semibold font-sans'
                : 'bg-[#d5e3da] text-[#3b3416] font-semibold font-sans'
            }`}
            style={{ textTransform: 'uppercase' }}
          >
            {category.strCategory}
          </div>
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto">
        {meals.map(meal => (
          <li key={meal.idMeal} className="flex items-center mb-6 p-4">
            <div className="relative rounded-full overflow-hidden w-20 h-20 sm:20 sm:h-20 bg-gray-200">
              <LazyLoadImage
                src={meal.strMealThumb}
                alt={meal.strMeal}
                effect="blur"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-1 ml-4">
              <div className='flex justify-between mb-2'>
                <h3 className="font-bold font-serif text-2xl text-[#173020]">{meal.strMeal}</h3>
                <h3 className="font-bold text-lg text-[#264e35]">$8.45</h3>
              </div>
              <span className="block w-full border-b border-dashed border-gray-400 my-2"></span>
              <div className='flex justify-between'>
                <h4 className="font-semibold text-xs text-[#7d847f] font-sans">Lorem ipsum dolor sit amet quam in lacus risus.</h4>
                <button className='flex items-center text-[#264e35] font-semibold'>
                  SHOP NOW <FaArrowRight className="ml-2 text-[#264e35]" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealCategories;
