import React from 'react'
import ResMenuShimmer from './ResMenuShimmer';
const RestaurantMenuShimmer = () => {
  return (
    <div className="m-5 mx-auto max-w-4xl px-8">
    {/* creating random array */}
    {Array(10)
      .fill("")
      .map((e,index) => (
        <ResMenuShimmer key={index}/>
      ))}
  </div>
  )
}

export default RestaurantMenuShimmer;