import React from 'react'
import MealComponent from './MealComp'

const MealContainer = () => {
  return (
    <div className='start flex-wrap gap-2 pb-4'>
      <MealComponent mealInfo={'mealInfo'} />
      <MealComponent mealInfo={'mealInfo'} />
    </div>
  )
}

export default MealContainer